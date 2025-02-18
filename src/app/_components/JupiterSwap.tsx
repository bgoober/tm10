'use client';

import { init, syncProps } from '@jup-ag/terminal';
import '@jup-ag/terminal/css';
import { useEffect } from 'react';

interface JupiterSwapProps {
  className?: string;
}

export const JupiterSwap = ({ className = '' }: JupiterSwapProps) => {
  useEffect(() => {
    init({
      displayMode: 'integrated',
      integratedTargetId: 'integrated-terminal',
      endpoint: process.env.NEXT_PUBLIC_HELIUS_RPC,
    });
  }, []);

  return (
    <div id="integrated-terminal" className={`${className}`} />
  );
}; 