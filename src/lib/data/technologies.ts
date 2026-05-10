import type { TechCategory } from '@/types';

export const TECH_CATEGORIES: TechCategory[] = [
  {
    title: 'Backend',
    body: 'High-throughput services, idempotent APIs and stream processors.',
    items: [
      { n: 'Golang', g: 'circle', c: '#67e8f9', note: 'Stream services, gRPC, hot-path systems' },
      { n: 'Node.js', g: 'hex', c: '#86efac', note: 'Realtime, edge-friendly APIs' },
      { n: 'NestJS', g: 'dna', c: '#fda4af', note: 'Modular monoliths, contract-first' },
      { n: 'Laravel', g: 'triangle', c: '#f87171', note: 'Enterprise apps, admin tooling' },
      { n: 'PHP', g: 'hex', c: '#a78bfa', note: 'Legacy modernization & strangler fig' },
    ],
  },
  {
    title: 'Frontend',
    body: 'Accessible, instrumented and product-grade interfaces.',
    items: [
      { n: 'React', g: 'ring', c: '#93c5fd', note: 'Design systems & dashboards' },
      { n: 'Next.js', g: 'layers', c: '#cbd5e1', note: 'App Router, edge SSR' },
      { n: 'Vue.js', g: 'diamond', c: '#86efac', note: 'Composition API products' },
      { n: 'TypeScript', g: 'cube', c: '#7dd3fc', note: 'End-to-end type safety' },
    ],
  },
  {
    title: 'Mobile',
    body: 'Cross-platform mobile with offline sync and OTA updates.',
    items: [
      { n: 'Flutter', g: 'bolt', c: '#7dd3fc', note: 'Cross-platform UI engine' },
      { n: 'Kotlin', g: 'cube', c: '#c4b5fd', note: 'Native Android & multi-platform' },
      { n: 'Swift', g: 'diamond', c: '#fb923c', note: 'Native iOS where it matters' },
    ],
  },
  {
    title: 'Infrastructure',
    body: 'Container orchestration, gateways and event backbones.',
    items: [
      { n: 'Kubernetes', g: 'tree', c: '#93c5fd', note: 'Multi-region orchestration' },
      { n: 'Docker', g: 'layers', c: '#7dd3fc', note: 'Reproducible builds' },
      { n: 'Kong', g: 'shield', c: '#a3e635', note: 'API gateway, plugins, mTLS' },
      { n: 'RabbitMQ', g: 'flow', c: '#fb923c', note: 'Topic exchanges, DLQs' },
      { n: 'Redis', g: 'spiral', c: '#fda4af', note: 'Cache, locks, streams' },
      { n: 'Nginx', g: 'shield', c: '#86efac', note: 'Edge proxy & TLS termination' },
    ],
  },
  {
    title: 'Cloud',
    body: 'Multi-region, cost-aware deployments.',
    items: [
      { n: 'AWS', g: 'cube', c: '#fbbf24', note: 'EKS, S3, RDS, IAM' },
      { n: 'GCP', g: 'cube', c: '#7dd3fc', note: 'GKE, BigQuery, Pub/Sub' },
      { n: 'DigitalOcean', g: 'circle', c: '#93c5fd', note: 'Managed K8s for SMB scale' },
    ],
  },
  {
    title: 'Logging & Monitoring',
    body: 'Golden-signal observability, traced end to end.',
    items: [
      { n: 'Fluent Bit', g: 'pulse', c: '#67e8f9', note: 'High-throughput log shipping' },
      { n: 'Grafana', g: 'grid', c: '#fb923c', note: 'Dashboards & alerting' },
      { n: 'Prometheus', g: 'ring', c: '#f87171', note: 'Metrics + recording rules' },
      { n: 'Loki', g: 'layers', c: '#fbbf24', note: 'Log aggregation' },
      { n: 'Tempo', g: 'flow', c: '#c4b5fd', note: 'Distributed tracing' },
    ],
  },
  {
    title: 'Databases',
    body: 'Relational, document and time-series — picked for the job.',
    items: [
      { n: 'PostgreSQL', g: 'cube', c: '#7dd3fc', note: 'OLTP + JSON + pgvector' },
      { n: 'MySQL', g: 'cube', c: '#fbbf24', note: 'Where the team owns it' },
      { n: 'MongoDB', g: 'diamond', c: '#86efac', note: 'Document-shaped domains' },
      { n: 'Redis', g: 'spiral', c: '#fda4af', note: 'Cache + ephemeral stores' },
    ],
  },
  {
    title: 'AI',
    body: 'Production AI, often inside your security perimeter.',
    items: [
      { n: 'Local LLMs', g: 'dna', c: '#c4b5fd', note: 'Llama, Mistral, Qwen on-prem' },
      { n: 'RAG Systems', g: 'flow', c: '#93c5fd', note: 'Retrieval, rerank, eval' },
      { n: 'AI Agents', g: 'tree', c: '#86efac', note: 'Tool-use loops, evals' },
      { n: 'Automation', g: 'bolt', c: '#fbbf24', note: 'Workflow + LLM orchestration' },
    ],
  },
];
