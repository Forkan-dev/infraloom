import type { ProcessStage } from '@/types';

export const PROCESS_STAGES: ProcessStage[] = [
  {
    n: '01',
    title: 'Discovery',
    body: 'Two-week deep dive with stakeholders, system audit and data archaeology. We leave with a written problem statement and an honest constraint list — what you said, what we heard, and what the data shows.',
    outputs: ['Stakeholder map', 'Constraints register', 'Risk inventory', 'Goals & success metrics'],
    tools: ['Notion', 'Miro', 'Whimsical'],
  },
  {
    n: '02',
    title: 'Planning',
    body: 'We translate strategy into milestones. Sprint zero scope, hiring plan, and an architecture decision record (ADR) backlog ranked by reversibility cost.',
    outputs: ['12-week roadmap', 'Sprint zero', 'Hiring plan', 'Budget envelope'],
    tools: ['Linear', 'Productboard', 'GitHub Projects'],
  },
  {
    n: '03',
    title: 'Architecture Design',
    body: 'Whiteboard sessions become C4 diagrams, API contracts and data models. Every choice gets an ADR with at least two alternatives considered.',
    outputs: ['C4 system context', 'Sequence diagrams', 'Data model', 'API contracts'],
    tools: ['Mermaid', 'Excalidraw', 'OpenAPI'],
  },
  {
    n: '04',
    title: 'Development',
    body: 'Trunk-based, paired and reviewed. Shippable increments every two weeks behind feature flags. Tests are first-class citizens, not afterthoughts.',
    outputs: ['Shippable increments', 'Trunk-based PRs', 'Feature-flag rollouts', 'Internal demos'],
    tools: ['GitHub', 'Linear', 'Tuple'],
  },
  {
    n: '05',
    title: 'QA & Testing',
    body: 'Unit, integration, contract and load tests in the same CI pipeline. We pick a coverage target with you and treat it as a budget — not a vanity metric.',
    outputs: ['Test pyramid', 'Contract tests', 'Load test plan', 'Chaos drills'],
    tools: ['Playwright', 'k6', 'Vitest', 'Pact'],
  },
  {
    n: '06',
    title: 'Deployment',
    body: 'Canary, blue/green and progressive rollout with automatic rollback. Production traffic only sees a new version when the SLOs say it can.',
    outputs: ['GitOps repo', 'Canary policy', 'Rollback runbook', 'Release notes'],
    tools: ['ArgoCD', 'Flagger', 'Helm'],
  },
  {
    n: '07',
    title: 'Monitoring',
    body: 'Golden-signal dashboards, SLOs and burn-rate alerts. Logs, metrics and traces correlated by trace ID — engineers debug in minutes, not hours.',
    outputs: ['SLO dashboards', 'Alert routes', 'Runbooks', 'Postmortem template'],
    tools: ['Grafana', 'Prometheus', 'Loki', 'Tempo'],
  },
  {
    n: '08',
    title: 'Scaling & Maintenance',
    body: 'Quarterly capacity reviews, performance audits and right-sizing. We carry the pager during the engagement and hand over a team that can.',
    outputs: ['Capacity plan', 'Cost report', 'Tech debt register', 'Knowledge transfer'],
    tools: ['k6', 'Vegeta', 'AWS Cost Explorer'],
  },
];
