'use client';

import React, {
  useEffect,
  useRef,
  useState,
  ElementType,
  ReactNode,
  CSSProperties,
} from 'react';

interface RevealProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  stagger?: boolean;
  delay?: number;
  style?: CSSProperties;
}

export function Reveal({
  children,
  as: Tag = 'div',
  className = '',
  stagger = false,
  delay = 0,
  style,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const r = el.getBoundingClientRect();
    if (r.top < window.innerHeight && r.bottom > 0) {
      setSeen(true);
      return;
    }

    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    io.observe(el);

    const t = setTimeout(() => setSeen(true), 1200);
    return () => {
      io.disconnect();
      clearTimeout(t);
    };
  }, []);

  const baseClass = stagger ? 'reveal-stagger' : 'reveal';
  const cls = `${baseClass} ${seen ? 'in' : ''} ${className}`.trim();
  const combinedStyle: CSSProperties = {
    ...style,
    ...(delay ? { transitionDelay: `${delay}ms` } : {}),
  };

  return (
    <Tag ref={ref as React.Ref<HTMLDivElement>} className={cls} style={combinedStyle}>
      {children}
    </Tag>
  );
}
