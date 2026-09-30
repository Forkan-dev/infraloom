import { ServiceIcon } from '@/components/shared/ServiceIcon';
import type { Service } from '@/types';

export function ServiceRow({ icon, title, body, deliverables }: Service) {
  return (
    <article className="card has-glow service-item">
      <span className="service-item-icon">
        <ServiceIcon name={icon} />
      </span>
      <h3 className="service-item-title">{title}</h3>
      <p className="service-item-body">{body}</p>
      <ul className="service-item-list">
        {deliverables.map((d) => (
          <li key={d}>{d}</li>
        ))}
      </ul>
    </article>
  );
}
