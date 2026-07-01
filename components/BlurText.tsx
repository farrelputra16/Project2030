import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { motion } from 'framer-motion';

type HtmlTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';

interface BlurTextProps {
  text: string;
  as?: HtmlTag;
  className?: string;
  delay?: number;
  style?: CSSProperties;
  stagger?: number;
}

export default function BlurText({ text, as: Tag = 'p', className, delay = 0, style, stagger = 0.1 }: BlurTextProps) {
  const [triggered, setTriggered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setTriggered(true); obs.disconnect(); }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const words = text.split(' ');

  return (
    <Tag
      ref={ref}
      className={className}
      style={{ display: 'flex', flexWrap: 'wrap', rowGap: '0.1em', ...style } as CSSProperties}
    >
      {words.map((w, i) => (
        <motion.span
          key={i}
          style={{ display: 'inline-block', marginRight: '0.28em' }}
          initial={triggered ? false : { filter: 'blur(12px)', opacity: 0, y: 40 }}
          animate={
            triggered
              ? {
                  filter: ['blur(12px)', 'blur(6px)', 'blur(0px)'],
                  opacity: [0, 0.4, 1],
                  y: [40, -4, 0],
                }
              : {}
          }
          transition={{
            duration: 0.9,
            times: [0, 0.4, 1],
            ease: [0.32, 0.72, 0, 1],
            delay: delay + i * stagger,
          }}
        >
          {w}
        </motion.span>
      ))}
    </Tag>
  );
}
