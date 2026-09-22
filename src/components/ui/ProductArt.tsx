import type { VisualKind } from "@/data/products";
import { cn } from "@/lib/utils";

function Nas2Bay() {
  return (
    <svg viewBox="0 0 120 100" fill="none" className="h-full w-full">
      <rect x="25" y="10" width="70" height="80" rx="8" fill="#1e2228" stroke="#373e47" strokeWidth="2" />
      <rect x="33" y="18" width="24" height="58" rx="4" fill="#121518" />
      <rect x="63" y="18" width="24" height="58" rx="4" fill="#121518" />
      <circle cx="45" cy="26" r="2" fill="#00cc66" />
      <circle cx="75" cy="26" r="2" fill="#00cc66" />
      <circle cx="60" cy="82" r="2" fill="#00cc66" />
    </svg>
  );
}

function Nas4Bay() {
  return (
    <svg viewBox="0 0 140 100" fill="none" className="h-full w-full">
      <rect x="15" y="10" width="110" height="80" rx="8" fill="#1e2228" stroke="#373e47" strokeWidth="2" />
      <rect x="23" y="18" width="20" height="58" rx="3" fill="#121518" />
      <rect x="47" y="18" width="20" height="58" rx="3" fill="#121518" />
      <rect x="71" y="18" width="20" height="58" rx="3" fill="#121518" />
      <rect x="95" y="18" width="20" height="58" rx="3" fill="#121518" />
      <circle cx="70" cy="82" r="2.5" fill="#00cc66" />
    </svg>
  );
}

function NasFlash() {
  return (
    <svg viewBox="0 0 120 60" fill="none" className="h-full w-full">
      <rect x="10" y="10" width="100" height="40" rx="8" fill="#1e293b" stroke="#475569" strokeWidth="2" />
      <circle cx="26" cy="30" r="3.5" fill="#00cc66" />
      <rect x="42" y="20" width="60" height="18" rx="3" fill="#0f172a" />
    </svg>
  );
}

function NasPro() {
  return (
    <svg viewBox="0 0 130 90" fill="none" className="h-full w-full">
      <rect x="10" y="8" width="110" height="74" rx="8" fill="#0f172a" stroke="#334155" strokeWidth="2" />
      <line x1="30" y1="18" x2="30" y2="72" stroke="#334155" strokeWidth="5" />
      <line x1="52" y1="18" x2="52" y2="72" stroke="#334155" strokeWidth="5" />
      <line x1="74" y1="18" x2="74" y2="72" stroke="#334155" strokeWidth="5" />
      <line x1="96" y1="18" x2="96" y2="72" stroke="#334155" strokeWidth="5" />
      <circle cx="108" cy="20" r="3" fill="#00cc66" />
    </svg>
  );
}

function NasEnterprise() {
  return (
    <svg viewBox="0 0 130 90" fill="none" className="h-full w-full">
      <rect x="10" y="8" width="110" height="74" rx="8" fill="#09090b" stroke="#3f3f46" strokeWidth="2" />
      <rect x="22" y="20" width="86" height="10" rx="2" fill="#18181b" />
      <rect x="22" y="36" width="86" height="10" rx="2" fill="#18181b" />
      <rect x="22" y="52" width="86" height="10" rx="2" fill="#18181b" />
      <circle cx="108" cy="20" r="3" fill="#22c55e" />
    </svg>
  );
}

function MagflowBank() {
  return (
    <svg viewBox="0 0 140 190" fill="none" className="h-full w-full">
      <path d="M70 0 C70 -50, 30 -58, 8 -34 C-8 -14, 4 14, 28 -2" fill="none" stroke="#94a3b8" strokeLinecap="round" strokeWidth="6" transform="translate(0,30)" />
      <rect x="0" y="20" width="140" height="170" rx="22" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
      <circle cx="70" cy="100" r="34" fill="none" stroke="#00cc66" strokeWidth="3" strokeDasharray="8 5" />
      <text x="70" y="105" fill="#00cc66" fontSize="15" fontWeight="700" textAnchor="middle" fontFamily="sans-serif">25W</text>
      <circle cx="70" cy="160" r="3.5" fill="#00cc66" />
    </svg>
  );
}

function MagflowPad() {
  return (
    <svg viewBox="0 0 100 100" fill="none" className="h-full w-full">
      <rect x="20" y="8" width="60" height="84" rx="10" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="2" />
      <circle cx="50" cy="45" r="18" stroke="#00cc66" strokeWidth="3" strokeDasharray="4 2" />
      <text x="50" y="49" fill="#00cc66" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="sans-serif">25W</text>
      <circle cx="50" cy="78" r="2.5" fill="#00cc66" />
    </svg>
  );
}

function NexodeGan() {
  return (
    <svg viewBox="0 0 180 170" fill="none" className="h-full w-full">
      <rect width="180" height="170" rx="20" fill="#334155" stroke="#475569" strokeWidth="2" />
      <rect x="130" y="12" width="40" height="146" rx="10" fill="#1e293b" />
      <rect x="142" y="28" width="16" height="6" rx="2" fill="#000" stroke="#00cc66" strokeWidth="1.5" />
      <rect x="142" y="52" width="16" height="6" rx="2" fill="#000" stroke="#00cc66" strokeWidth="1.5" />
      <rect x="142" y="76" width="16" height="6" rx="2" fill="#000" stroke="#64748b" />
      <rect x="140" y="126" width="20" height="12" rx="2" fill="#000" stroke="#8b5cf6" />
      <text x="20" y="90" fill="#94a3b8" fontSize="16" fontWeight="700" fontFamily="sans-serif">Celibery</text>
    </svg>
  );
}

function NexodeStrip() {
  return (
    <svg viewBox="0 0 180 60" fill="none" className="h-full w-full">
      <rect width="180" height="60" rx="14" fill="#1e293b" stroke="#334155" strokeWidth="2" />
      <rect x="16" y="18" width="24" height="24" rx="4" fill="#0f172a" />
      <rect x="52" y="18" width="24" height="24" rx="4" fill="#0f172a" />
      <rect x="88" y="22" width="16" height="8" rx="2" fill="#000" stroke="#00cc66" strokeWidth="1.5" />
      <rect x="112" y="22" width="16" height="8" rx="2" fill="#000" stroke="#00cc66" strokeWidth="1.5" />
      <rect x="136" y="22" width="16" height="8" rx="2" fill="#000" stroke="#64748b" />
      <circle cx="164" cy="30" r="3" fill="#00cc66" />
    </svg>
  );
}

function UnoRobot() {
  return (
    <svg viewBox="0 0 200 200" fill="none" className="h-full w-full">
      <rect x="55" y="40" width="90" height="90" rx="18" fill="#1e293b" stroke="#475569" strokeWidth="2" />
      <rect x="65" y="50" width="70" height="55" rx="10" fill="#020617" />
      <path d="M78 78 L85 70 L92 78" stroke="#38bdf8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
      <path d="M108 78 L115 70 L122 78" stroke="#38bdf8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
      <rect x="65" y="130" width="30" height="20" rx="6" fill="#0f172a" />
      <rect x="105" y="130" width="30" height="20" rx="6" fill="#0f172a" />
      <path d="M70 40 L60 25 L80 25 Z" fill="#00cc66" />
    </svg>
  );
}

function UnoCharger() {
  return (
    <svg viewBox="0 0 120 110" fill="none" className="h-full w-full">
      <rect x="20" y="10" width="80" height="80" rx="16" fill="#1e293b" stroke="#475569" strokeWidth="2" />
      <rect x="30" y="20" width="60" height="42" rx="8" fill="#020617" />
      <path d="M44 44 L50 37 L56 44" stroke="#38bdf8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
      <path d="M64 44 L70 37 L76 44" stroke="#38bdf8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
      <circle cx="60" cy="76" r="2.5" fill="#00cc66" />
    </svg>
  );
}

function RevodokDock() {
  return (
    <svg viewBox="0 0 80 100" fill="none" className="h-full w-full">
      <rect x="25" y="10" width="30" height="70" rx="6" fill="#64748b" />
      <rect x="33" y="20" width="14" height="4" fill="#0f172a" />
      <rect x="33" y="30" width="14" height="4" fill="#0f172a" />
      <rect x="31" y="42" width="18" height="6" rx="1" fill="#00cc66" />
      <ellipse cx="40" cy="85" rx="30" ry="6" fill="#475569" />
    </svg>
  );
}

function RevodokHub() {
  return (
    <svg viewBox="0 0 120 60" fill="none" className="h-full w-full">
      <rect x="10" y="10" width="100" height="40" rx="12" fill="#94a3b8" stroke="#64748b" strokeWidth="2" />
      <rect x="22" y="24" width="14" height="6" rx="2" fill="#1e293b" />
      <rect x="44" y="24" width="14" height="6" rx="2" fill="#1e293b" />
      <rect x="66" y="24" width="14" height="6" rx="2" fill="#00cc66" />
      <circle cx="94" cy="27" r="3" fill="#2563eb" />
    </svg>
  );
}

function Cable() {
  return (
    <svg viewBox="0 0 160 60" fill="none" className="h-full w-full">
      <path d="M10 30 C40 5, 60 55, 90 30 S140 5, 150 30" stroke="#00cc66" strokeWidth="5" strokeLinecap="round" fill="none" />
      <rect x="2" y="20" width="16" height="20" rx="4" fill="#1e293b" />
      <rect x="142" y="20" width="16" height="20" rx="4" fill="#1e293b" />
    </svg>
  );
}

function CarCharger() {
  return (
    <svg viewBox="0 0 100 100" fill="none" className="h-full w-full">
      <circle cx="50" cy="50" r="40" fill="#1e293b" stroke="#475569" strokeWidth="2" />
      <circle cx="50" cy="50" r="24" fill="none" stroke="#00cc66" strokeWidth="3" strokeDasharray="4 3" />
      <text x="50" y="55" fill="#00cc66" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="sans-serif">25W</text>
    </svg>
  );
}

function Tracker() {
  return (
    <svg viewBox="0 0 100 100" fill="none" className="h-full w-full">
      <circle cx="50" cy="50" r="38" fill="#1e293b" stroke="#475569" strokeWidth="2" />
      <circle cx="50" cy="50" r="16" fill="#00cc66" opacity="0.15" />
      <circle cx="50" cy="50" r="6" fill="#00cc66" />
    </svg>
  );
}

function Audio() {
  return (
    <svg viewBox="0 0 120 80" fill="none" className="h-full w-full">
      <path d="M30 15 C15 20, 12 45, 25 55" stroke="#94a3b8" strokeWidth="5" strokeLinecap="round" fill="none" />
      <circle cx="30" cy="18" r="9" fill="#1e293b" stroke="#475569" strokeWidth="2" />
      <path d="M90 15 C105 20, 108 45, 95 55" stroke="#94a3b8" strokeWidth="5" strokeLinecap="round" fill="none" />
      <circle cx="90" cy="18" r="9" fill="#1e293b" stroke="#00cc66" strokeWidth="2" />
    </svg>
  );
}

function MobileAccessory() {
  return (
    <svg viewBox="0 0 100 140" fill="none" className="h-full w-full">
      <rect x="10" y="10" width="80" height="120" rx="20" fill="#1e293b" stroke="#475569" strokeWidth="2" />
      <rect x="20" y="20" width="60" height="100" rx="10" fill="#0f172a" />
      <circle cx="50" cy="30" r="2" fill="#00cc66" />
    </svg>
  );
}

function Speaker() {
  return (
    <svg viewBox="0 0 100 170" fill="none" className="h-full w-full">
      <path d="M35 8 C35 -8, 65 -8, 65 8 L65 22 L35 22 Z" fill="none" stroke="#94a3b8" strokeWidth="6" strokeLinecap="round" />
      <rect x="15" y="20" width="70" height="140" rx="32" fill="#1e293b" stroke="#475569" strokeWidth="2" />
      <circle cx="50" cy="90" r="26" fill="#0f172a" stroke="#334155" strokeWidth="2" />
      <circle cx="50" cy="90" r="10" fill="#00cc66" opacity="0.5" />
      <rect x="40" y="35" width="20" height="4" rx="2" fill="#00cc66" />
    </svg>
  );
}

function Headphones() {
  return (
    <svg viewBox="0 0 140 110" fill="none" className="h-full w-full">
      <path d="M20 65 C20 15, 120 15, 120 65" fill="none" stroke="#1e293b" strokeWidth="8" strokeLinecap="round" />
      <rect x="8" y="55" width="26" height="42" rx="13" fill="#1e293b" stroke="#475569" strokeWidth="2" />
      <rect x="106" y="55" width="26" height="42" rx="13" fill="#1e293b" stroke="#00cc66" strokeWidth="2" />
      <circle cx="21" cy="76" r="7" fill="#0f172a" />
      <circle cx="119" cy="76" r="7" fill="#0f172a" />
    </svg>
  );
}

function GanCharger() {
  return (
    <svg viewBox="0 0 100 120" fill="none" className="h-full w-full">
      <rect x="15" y="10" width="70" height="70" rx="14" fill="#1e293b" stroke="#475569" strokeWidth="2" />
      <circle cx="50" cy="30" r="9" fill="none" stroke="#00cc66" strokeWidth="3" strokeDasharray="4 3" />
      <text x="50" y="34" fill="#00cc66" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="sans-serif">65W</text>
      <rect x="34" y="50" width="10" height="4" rx="1" fill="#94a3b8" />
      <rect x="56" y="50" width="10" height="4" rx="1" fill="#94a3b8" />
      <rect x="45" y="80" width="4" height="14" fill="#94a3b8" />
      <rect x="51" y="80" width="4" height="14" fill="#94a3b8" />
    </svg>
  );
}

function Powerbank() {
  return (
    <svg viewBox="0 0 100 170" fill="none" className="h-full w-full">
      <rect x="12" y="10" width="76" height="150" rx="18" fill="#1e293b" stroke="#475569" strokeWidth="2" />
      <rect x="26" y="26" width="48" height="30" rx="8" fill="#0f172a" />
      <text x="50" y="46" fill="#00cc66" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="sans-serif">69%</text>
      <rect x="32" y="66" width="36" height="66" rx="4" fill="#0f172a" />
      <circle cx="50" cy="150" r="3" fill="#00cc66" />
    </svg>
  );
}

const registry: Record<VisualKind, () => React.JSX.Element> = {
  nas2bay: Nas2Bay,
  nas4bay: Nas4Bay,
  nasFlash: NasFlash,
  nasPro: NasPro,
  nasEnterprise: NasEnterprise,
  magflowBank: MagflowBank,
  magflowPad: MagflowPad,
  nexodeGan: NexodeGan,
  nexodeStrip: NexodeStrip,
  unoRobot: UnoRobot,
  unoCharger: UnoCharger,
  revodokDock: RevodokDock,
  revodokHub: RevodokHub,
  cable: Cable,
  carCharger: CarCharger,
  tracker: Tracker,
  audio: Audio,
  mobileAccessory: MobileAccessory,
  speaker: Speaker,
  headphones: Headphones,
  powerbank: Powerbank,
  ganCharger: GanCharger,
};

export function ProductArt({ kind, className }: { kind: VisualKind; className?: string }) {
  const Art = registry[kind];
  return (
    <div className={cn("flex items-center justify-center", className)}>
      <Art />
    </div>
  );
}
