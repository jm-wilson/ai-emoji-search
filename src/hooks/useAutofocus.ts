import { useEffect, useRef } from 'react';

const tailwindBreakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;
type TailwindBreakpoint = keyof typeof tailwindBreakpoints;

export default function useAutofocusRef(minWidth: number | TailwindBreakpoint = 0) {
  const fieldRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (window.innerWidth >= getPxFromWidth(minWidth)) {
      fieldRef.current?.focus();
    }
  }, [minWidth]);

  return fieldRef;
}

const getPxFromWidth = (width: number | TailwindBreakpoint) =>
  typeof width === 'number' ? width : tailwindBreakpoints[width];
