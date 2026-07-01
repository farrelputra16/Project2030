import { useState, useEffect, useCallback } from 'react';

declare global {
  interface Window {
    solana?: {
      isPhantom?: boolean;
      connect: (opts?: { onlyIfTrusted?: boolean }) => Promise<{ publicKey: { toString: () => string } }>;
      disconnect: () => Promise<void>;
      on: (event: string, handler: (...args: unknown[]) => void) => void;
      off: (event: string, handler: (...args: unknown[]) => void) => void;
      isConnected: boolean;
      publicKey: { toString: () => string } | null;
      signAndSendTransaction: (tx: unknown) => Promise<{ signature: string }>;
      signMessage: (message: Uint8Array) => Promise<{ signature: Uint8Array }>;
    };
  }
}

export interface PhantomState {
  isInstalled: boolean;
  isConnected: boolean;
  walletAddress: string | null;
  connecting: boolean;
}

export function usePhantom() {
  const [state, setState] = useState<PhantomState>({
    isInstalled: false,
    isConnected: false,
    walletAddress: null,
    connecting: false,
  });

  useEffect(() => {
    const isInstalled = !!window.solana?.isPhantom;
    setState((prev) => ({ ...prev, isInstalled }));

    if (window.solana?.isConnected && window.solana?.publicKey) {
      setState((prev) => ({
        ...prev,
        isInstalled: true,
        isConnected: true,
        walletAddress: window.solana!.publicKey!.toString(),
      }));
    }

    const handleConnect = () => {
      if (window.solana?.publicKey) {
        setState((prev) => ({
          ...prev,
          isConnected: true,
          walletAddress: window.solana!.publicKey!.toString(),
          connecting: false,
        }));
      }
    };

    const handleDisconnect = () => {
      setState((prev) => ({
        ...prev,
        isConnected: false,
        walletAddress: null,
        connecting: false,
      }));
    };

    window.solana?.on('connect', handleConnect);
    window.solana?.on('disconnect', handleDisconnect);

    return () => {
      window.solana?.off('connect', handleConnect);
      window.solana?.off('disconnect', handleDisconnect);
    };
  }, []);

  const connect = useCallback(async () => {
    if (!window.solana?.isPhantom) {
      window.open('https://phantom.app/', '_blank');
      return;
    }
    setState((prev) => ({ ...prev, connecting: true }));
    try {
      await window.solana.connect();
    } catch {
      setState((prev) => ({ ...prev, connecting: false }));
    }
  }, []);

  const disconnect = useCallback(async () => {
    try {
      await window.solana?.disconnect();
    } catch {
      // ignore
    }
  }, []);

  const buyTokens = useCallback(async (amountSol: number) => {
    if (!window.solana?.isConnected) {
      await connect();
      return;
    }
    const solMint = 'So11111111111111111111111111111111111111112';
    const tokenMint = 'PLACEHOLDER_TOKEN_MINT';
    const quoteResponse = await fetch(
      `https://quote-api.jup.ag/v6/quote?inputMint=${solMint}&outputMint=${tokenMint}&amount=${amountSol * 1e9}&slippageBps=100`
    );
    const quote = await quoteResponse.json();
    const swapResponse = await fetch('https://quote-api.jup.ag/v6/swap', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        quoteResponse: quote,
        userPublicKey: window.solana.publicKey!.toString(),
        wrapAndUnwrapSol: true,
        dynamicComputeUnitLimit: true,
        prioritizationFeeLamports: 'auto',
      }),
    });
    const { swapTransaction } = await swapResponse.json();
    const txBuf = Buffer.from(swapTransaction, 'base64');
    const tx = Uint8Array.from(txBuf);
    const { signature } = await window.solana.signAndSendTransaction(tx);
    return signature;
  }, [connect]);

  return {
    ...state,
    connect,
    disconnect,
    buyTokens,
  };
}
