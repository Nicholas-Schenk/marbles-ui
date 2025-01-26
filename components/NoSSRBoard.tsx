"use client"
import dynamic from 'next/dynamic';

export const BoardNoSSR = dynamic(() => import('./Board'), {
    ssr: false
  })