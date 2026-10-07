/** Stand-in for projects without a screenshot: a navy plate with the project name and loom threads. */
export function CasePlate({ title }: { title: string }) {
  return (
    <div className="case-plate">
      <svg className="case-plate-threads" viewBox="0 0 400 250" preserveAspectRatio="none" aria-hidden="true">
        {Array.from({ length: 9 }, (_, i) => (
          <path key={i} d={`M${60 + i * 40} 0V250`} stroke="currentColor" strokeWidth="1" />
        ))}
        <path d="M0 150H400" stroke="var(--blue)" strokeWidth="3" />
      </svg>
      <span className="case-plate-title">{title}</span>
      <style>{`
        .case-plate {
          position: absolute; inset: 0; background: var(--navy); color: rgba(232, 237, 255, 0.14);
          display: flex; align-items: flex-end; padding: 32px;
        }
        .case-plate-threads { position: absolute; inset: 0; width: 100%; height: 100%; }
        .case-plate-title {
          position: relative; max-width: 10ch;
          font-family: var(--font-display); font-size: clamp(36px, 4.4vw, 68px); font-weight: 500;
          letter-spacing: -0.045em; line-height: 0.95; color: var(--cream);
        }
        a:hover .case-plate-threads { color: rgba(232, 237, 255, 0.24); }
      `}</style>
    </div>
  );
}
