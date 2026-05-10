export function PixelStreamingDiagram() {
  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <svg viewBox="0 0 1100 620" width="100%" height="auto" style={{ overflow: 'visible' }}>
        <defs>
          <linearGradient id="psFlow" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#06B6D4" stopOpacity="0" />
            <stop offset="50%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
          </linearGradient>
          <pattern id="psDots" x="0" y="0" width="22" height="22" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.8" fill="rgba(255,255,255,0.06)" />
          </pattern>
        </defs>

        <rect width="1100" height="620" fill="url(#psDots)" />

        <Tier x={20} y={20} w={1060} h={120} label="EDGE / CLIENT" />
        <Tier x={20} y={170} w={1060} h={130} label="CONTROL PLANE" />
        <Tier x={20} y={330} w={1060} h={170} label="STREAM ORCHESTRATION" />
        <Tier x={20} y={530} w={1060} h={70} label="OBSERVABILITY" />

        <PSNode x={60} y={50} w={150} h={60} icon="📱" label="Player Browser" sub="WebRTC client" />
        <PSNode x={240} y={50} w={150} h={60} icon="🎮" label="Game Lobby" sub="React + Vite" />
        <PSNode x={420} y={50} w={150} h={60} icon="🛠" label="Admin Console" sub="Vue 3" />
        <PSNode x={600} y={50} w={170} h={60} icon="⏺" label="Studio Upload" sub="multipart · S3 sigv4" />
        <PSNode x={800} y={50} w={240} h={60} icon="≡" label="CDN · Edge Locations" sub="3 regions · 12ms p50" />

        <PSNode x={60} y={200} w={210} h={70} icon="◆" label="Kong API Gateway" sub="JWT · rate-limit · circuit-break" violet />
        <PSNode x={300} y={200} w={170} h={70} icon="A" label="Auth Service" sub="laravel · sso · rbac" />
        <PSNode x={500} y={200} w={170} h={70} icon="S" label="Session Service" sub="nestjs · redis lease" />
        <PSNode x={700} y={200} w={170} h={70} icon="U" label="Upload Service" sub="laravel · ffmpeg" />
        <PSNode x={900} y={200} w={140} h={70} icon="B" label="Billing" sub="stripe · webhooks" />

        <PSNode x={60} y={370} w={210} h={110} icon="◈" label="Stream Orchestrator" sub="golang · grpc" violet extra={['pool', 'schedule', 'lease', 'evict']} />
        <PSNode x={300} y={355} w={170} h={70} icon="≋" label="RabbitMQ" sub="exchanges · DLQ · 14k msg/s" />
        <PSNode x={500} y={355} w={170} h={70} icon="◉" label="Redis Cluster" sub="sessions · backpressure" />
        <PSNode x={700} y={355} w={170} h={70} icon="∞" label="Fluent Bit" sub="log shipper · 50ms" />
        <PSNode x={900} y={355} w={140} h={70} icon="P" label="Postgres HA" sub="primary + 2 replicas" />

        <PSNode x={300} y={445} w={170} h={50} icon="▣" label="UE Instance Pool A" sub="us-east · 24× g4dn.xlarge" cyan />
        <PSNode x={500} y={445} w={170} h={50} icon="▣" label="UE Instance Pool B" sub="eu-west · 18× g4dn" cyan />
        <PSNode x={700} y={445} w={170} h={50} icon="▣" label="UE Instance Pool C" sub="ap-south · 12× g4dn" cyan />
        <PSNode x={900} y={445} w={140} h={50} icon="K" label="Kubernetes" sub="HPA + custom KEDA" />

        <PSNode x={60} y={550} w={210} h={36} icon="◢" label="Grafana" sub="40 dashboards" tiny />
        <PSNode x={300} y={550} w={170} h={36} icon="◷" label="Prometheus" sub="15s scrape" tiny />
        <PSNode x={500} y={550} w={170} h={36} icon="◑" label="Loki" sub="6.4M lines/day" tiny />
        <PSNode x={700} y={550} w={170} h={36} icon="◓" label="Tempo" sub="OTel traces" tiny />
        <PSNode x={900} y={550} w={140} h={36} icon="◔" label="PagerDuty" sub="SLO burn" tiny />

        {[
          'M 130 110 C 130 160, 165 180, 165 200',
          'M 320 110 C 320 160, 165 180, 165 200',
          'M 500 110 C 500 160, 165 180, 165 200',
          'M 700 110 C 700 160, 600 180, 200 200',
          'M 920 110 C 920 160, 200 180, 200 200',
          'M 270 235 L 300 235',
          'M 270 235 C 470 235, 480 235, 500 235',
          'M 270 235 C 660 235, 680 235, 700 235',
          'M 270 235 C 870 235, 880 235, 900 235',
          'M 165 270 C 165 320, 165 350, 165 370',
          'M 385 270 C 385 320, 250 340, 165 380',
          'M 585 270 C 585 320, 250 340, 165 380',
          'M 785 270 C 785 320, 250 340, 165 380',
          'M 270 415 L 300 390',
          'M 270 415 L 500 390',
          'M 270 415 L 700 390',
          'M 270 425 L 900 390',
          'M 270 470 L 300 470',
          'M 270 470 C 400 470, 460 470, 500 470',
          'M 270 470 C 600 470, 660 470, 700 470',
        ].map((d, i) => (
          <g key={i}>
            <path d={d} stroke="rgba(255,255,255,0.07)" strokeWidth="1" fill="none" />
            <path d={d} stroke="url(#psFlow)" strokeWidth="1.4" fill="none" strokeDasharray="3 8"
              style={{ animation: 'psFlow 4s linear infinite', animationDelay: `${(i % 6) * 0.4}s` }}
            />
          </g>
        ))}

        {[385, 585, 785].map((cx, i) => (
          <circle key={i} cx={cx} cy={470} r="6" fill="#22d3ee" opacity="0.85">
            <animate attributeName="r" values="3;14;3" dur="2.4s" begin={`${i * 0.6}s`} repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.9;0;0.9" dur="2.4s" begin={`${i * 0.6}s`} repeatCount="indefinite" />
          </circle>
        ))}
      </svg>
      <style>{`@keyframes psFlow { from { stroke-dashoffset: 0; } to { stroke-dashoffset: -55; } }`}</style>
    </div>
  );
}

interface TierProps { x: number; y: number; w: number; h: number; label: string; }
function Tier({ x, y, w, h, label }: TierProps) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="14" fill="rgba(255,255,255,0.015)" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 4" />
      <text x={x + 16} y={y + 22} fill="rgba(255,255,255,0.45)" fontSize="10" fontFamily="Geist Mono" style={{ letterSpacing: '0.16em' }}>{label}</text>
    </g>
  );
}

interface PSNodeProps {
  x: number; y: number; w: number; h: number;
  icon: string; label: string; sub: string;
  violet?: boolean; cyan?: boolean; tiny?: boolean; extra?: string[];
}
function PSNode({ x, y, w, h, icon, label, sub, violet, cyan, tiny, extra }: PSNodeProps) {
  const stroke = violet ? 'rgba(139,92,246,0.5)' : cyan ? 'rgba(6,182,212,0.5)' : 'rgba(255,255,255,0.14)';
  const fill = violet ? 'rgba(139,92,246,0.08)' : cyan ? 'rgba(6,182,212,0.06)' : 'rgba(20,21,24,0.85)';
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="8" fill={fill} stroke={stroke} strokeWidth="1" />
      <rect x={x + 8} y={y + (h - 22) / 2} width="22" height="22" rx="5" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.1)" />
      <text x={x + 19} y={y + h / 2 + 4} fill={violet ? '#c4b5fd' : cyan ? '#67e8f9' : '#cbd5e1'} fontSize="11" fontFamily="Geist Mono" textAnchor="middle">{icon}</text>
      <text x={x + 36} y={y + (tiny ? h / 2 + 4 : h / 2 - 3)} fill="#fff" fontSize={tiny ? 11 : 12.5} fontFamily="Geist" fontWeight="500">{label}</text>
      {!tiny && <text x={x + 36} y={y + h / 2 + 13} fill="rgba(255,255,255,0.55)" fontSize="10" fontFamily="Geist Mono">{sub}</text>}
      {tiny && <text x={x + w - 8} y={y + h / 2 + 4} fill="rgba(255,255,255,0.45)" fontSize="9" fontFamily="Geist Mono" textAnchor="end">{sub}</text>}
      {extra && extra.map((e, i) => (
        <g key={i}>
          <rect x={x + 8 + i * 48} y={y + h - 26} width="44" height="18" rx="4" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.1)" />
          <text x={x + 30 + i * 48} y={y + h - 13} fill="rgba(255,255,255,0.6)" fontSize="9" fontFamily="Geist Mono" textAnchor="middle">{e}</text>
        </g>
      ))}
    </g>
  );
}
