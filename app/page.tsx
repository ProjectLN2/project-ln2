import Image from "next/image";
import {
  Cpu,
  Download,
  Gamepad2,
  Gauge,
  ShieldCheck,
  Users,
  Wifi,
  Zap,
  CheckCircle2,
  Monitor,
  HardDrive,
  Rocket,
} from "lucide-react";

const discordLink = "https://discord.gg/mvZEfZzyCk";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#02050a] text-white overflow-hidden">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(0,229,255,0.18),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(56,189,248,0.12),transparent_30%),linear-gradient(180deg,#02050a,#050914_55%,#02050a)]" />

      <section className="relative max-w-7xl mx-auto px-6 py-8">
        {/* NAVBAR */}
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-2xl bg-cyan-400/10 border border-cyan-300/25 flex items-center justify-center">
              <Image src="/ln2-logo.png" alt="LN2" width={36} height={36} />
            </div>
            <div>
              <p className="font-black">Project LN2</p>
              <p className="text-xs text-cyan-200/70">Performance unlocked</p>
            </div>
          </div>

          <a
            href={discordLink}
            target="_blank"
            className="rounded-xl bg-cyan-300 text-black px-4 py-2 font-bold hover:bg-cyan-200"
          >
            Discord
          </a>
        </nav>

        {/* HERO */}
        <header className="grid lg:grid-cols-2 gap-14 items-center py-24">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100 mb-6">
              <Rocket size={16} />
              Private prototype
            </div>

            <h1 className="text-6xl md:text-8xl font-black">
              Project <span className="text-cyan-300">LN2</span>
            </h1>

            <p className="mt-6 text-lg text-slate-300">
              A custom Windows 11 LTSC gaming OS focused on performance,
              responsiveness and compatibility.
            </p>

            <div className="mt-8 flex gap-4">
              <button className="bg-cyan-300 text-black px-6 py-3 rounded-xl font-bold flex items-center gap-2">
                <Download size={18} />
                Download soon
              </button>

              <a
                href={discordLink}
                target="_blank"
                className="border border-white/20 px-6 py-3 rounded-xl flex items-center gap-2"
              >
                <Users size={18} />
                Join Discord
              </a>
            </div>
          </div>

          {/* PANEL */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="flex justify-between mb-6">
              <div>
                <p className="text-sm text-slate-400">LN2 Control</p>
                <p className="text-2xl font-bold">Performance Mode</p>
              </div>
              <Monitor className="text-cyan-300" size={32} />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Stat label="RAM" value="1.2–1.8 GB" />
              <Stat label="Processes" value="70–90" />
              <Stat label="Base" value="Windows 11 LTSC" />
              <Stat label="Alpha" value="Q3 2026" />
            </div>
          </div>
        </header>

        {/* FEATURES */}
        <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 py-20">
          <Card icon={<Gauge />} title="Optimized" text="Low RAM and processes." />
          <Card icon={<Gamepad2 />} title="Gaming" text="Built for real gameplay." />
          <Card icon={<ShieldCheck />} title="Stable" text="Compatibility first." />
          <Card icon={<Wifi />} title="Drivers" text="Wi-Fi & essentials working." />
        </section>

        {/* GAMES */}
        <section className="py-20">
          <h2 className="text-4xl font-black mb-6">Tested games</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {["The Finals", "Splitgate 2", "Delta Force", "CS2"].map((g) => (
              <div key={g} className="flex items-center gap-3 bg-white/5 p-4 rounded-xl">
                <CheckCircle2 className="text-cyan-300" />
                {g}
              </div>
            ))}
          </div>
        </section>

        {/* DOWNLOAD */}
        <section className="py-20 text-center">
          <h2 className="text-4xl font-black">Not public yet</h2>
          <p className="text-slate-400 mt-4">
            Join Discord for updates and alpha access.
          </p>

          <a
            href={discordLink}
            target="_blank"
            className="mt-6 inline-block bg-white text-black px-6 py-3 rounded-xl font-bold"
          >
            Join LN2
          </a>
        </section>
      </section>
    </main>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-white/5 p-4 rounded-xl">
      <p className="text-sm text-slate-400">{label}</p>
      <p className="font-bold text-cyan-200">{value}</p>
    </div>
  );
}

function Card({ icon, title, text }: any) {
  return (
    <div className="bg-white/5 p-6 rounded-2xl">
      <div className="text-cyan-300 mb-3">{icon}</div>
      <h3 className="font-bold">{title}</h3>
      <p className="text-slate-400 text-sm mt-2">{text}</p>
    </div>
  );
}
