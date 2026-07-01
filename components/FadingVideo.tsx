import { useEffect, useRef, useCallback } from 'react';

interface FadingVideoProps {
  src: string;
  className?: string;
  style?: React.CSSProperties;
  overlay?: boolean;
}

const FADE_MS = 500;
const FADE_OUT_LEAD = 0.55;

export default function FadingVideo({ src, className, style, overlay = false }: FadingVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const rAFRef = useRef<number | null>(null);
  const fadingOutRef = useRef(false);

  const fadeTo = useCallback((target: number, duration: number) => {
    const el = videoRef.current;
    if (!el) return;
    if (rAFRef.current !== null) cancelAnimationFrame(rAFRef.current);
    const start = performance.now();
    const startOpacity = parseFloat(el.style.opacity) || 0;
    const diff = target - startOpacity;
    const step: FrameRequestCallback = (now) => {
      if (!videoRef.current) return;
      const t = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - t, 3);
      videoRef.current.style.opacity = String(startOpacity + diff * ease);
      if (t < 1) rAFRef.current = requestAnimationFrame(step);
    };
    rAFRef.current = requestAnimationFrame(step);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onLoaded = () => {
      video.style.opacity = '0';
      video.play().catch(() => {});
      fadeTo(1, FADE_MS);
    };
    const onTime = () => {
      if (!fadingOutRef.current && video.duration - video.currentTime <= FADE_OUT_LEAD && video.duration - video.currentTime > 0) {
        fadingOutRef.current = true;
        fadeTo(0, FADE_MS);
      }
    };
    const onEnded = () => {
      video.style.opacity = '0';
      setTimeout(() => {
        video.currentTime = 0;
        video.play().catch(() => {});
        fadingOutRef.current = false;
        fadeTo(1, FADE_MS);
      }, 100);
    };

    video.addEventListener('loadeddata', onLoaded);
    video.addEventListener('timeupdate', onTime);
    video.addEventListener('ended', onEnded);

    return () => {
      video.removeEventListener('loadeddata', onLoaded);
      video.removeEventListener('timeupdate', onTime);
      video.removeEventListener('ended', onEnded);
      if (rAFRef.current !== null) cancelAnimationFrame(rAFRef.current);
    };
  }, [fadeTo]);

  return (
    <div className="absolute inset-0 overflow-hidden" style={{ zIndex: 0 }}>
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        preload="auto"
        className={className || 'absolute inset-0 w-full h-full object-cover'}
        style={{ opacity: 0, ...style }}
        loop={false}
      >
        <source src={src} type="video/mp4" />
      </video>
      {overlay && <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.6)' }} />}
    </div>
  );
}
