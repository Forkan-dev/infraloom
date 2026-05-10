import { ReactNode } from 'react';

interface CodeBlockProps {
  filename: string;
  lang?: string;
  children: ReactNode;
}

export function CodeBlock({ filename, lang = 'ts', children }: CodeBlockProps) {
  return (
    <div className="codeblock">
      <div className="codeblock-head">
        <div className="dots">
          <i />
          <i />
          <i />
        </div>
        <span style={{ marginLeft: 8 }} className="mono">
          {filename}
        </span>
        <span style={{ marginLeft: 'auto' }} className="mono">
          {lang}
        </span>
      </div>
      <pre style={{ margin: 0, padding: '16px 18px', overflowX: 'auto' }}>
        {children}
      </pre>
    </div>
  );
}
