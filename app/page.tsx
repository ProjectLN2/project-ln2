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
  MonitorCog,
  HardDrive,
  Rocket,
} from "lucide-react";

const discordLink = "https://discord.gg/mvZEfZzyCk";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#02050a] text-white overflow-hidden">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(0,229,255,0.18),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(56,189,248,0.12),transparent_30%),linear-gradient(180deg,#02050a,#050914_55%,#02050a)]" />

      <section className="relative max-w-7xl mx-auto px-6 py-8">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-2xl bg-cyan-400/10 border border-cyan-300/25 flex items-center justify-center shadow-lg shadow-cyan-500/20">
              <Image src="/ln2-logo.png" alt="Project LN2 logo" width={36} height={36} />
            </div>
            <div>
              <p className="font-black tracking-tight">Project LN2</p>
              <p className="text-xs text-cyan-200/70">Performance unlocked</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm text-slate-300">
            <a href="#project" className="hover:text-cyan-200">Project</a>
            <a href="#features" className="hover:text-cyan-200">Features</a>
            <a href="#compatibility" className="hover:text-cyan-200">Compatibility</a>
            <a href="#roadmap" className="hover:text-cyan-200">Roadmap</a>
          </div>

          <a
            href={discordLink}
            target="_blank"
            className="rounded-xl bg-cyan-300 text-black px-4 py-2 font-bold hover:bg-cyan-200 transition"
          >
            Discord
          </a>
        </nav>

        <header className="grid lg:grid-cols-2 gap-14 items-center py-24">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100 mb-6">
              <Rocket size={16} />
              Private prototype in active development
            </div>

            <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-none">
              Project <span className="text-cyan-300">LN2</span>
            </h1>

            <p className="mt-7 text-xl text-slate-300 leading-relaxed max-w-2xl">
              LN2OS is a custom Windows 11 LTSC based gaming OS focused on low
              resource usage, high responsiveness, clean visuals and real game
              compatibility.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row gap-4">
              <a
                href="#download"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-300 text-black px-7 py-4 font-black hover:bg-cyan-200 transition shadow-xl shadow-cyan-500/20"
              >
                <Download size={19} />
                Download coming soon
              </a>

              <a
                href={discordLink}
                target="_blank"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-7 py-4 font-bold hover:bg-white/10 transition"
              >
                <Users size={19} />
                Join the community
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-cyan-950/40 backdrop-blur">
            <div className="rounded-[1.5rem] border border-cyan-300/20 bg-black/50 p-6">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="text-sm text-slate-400">LN2 Control Center</p>
                  <h2 className="text-3xl font-black">Performance Mode</h2>
                </div>
                <MonitorCog className="text-cyan-300" size={36} />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Stat label="Target RAM" value="1.2–1.8 GB" />
                <Stat label="Processes" value="70–90" />
                <Stat label="Base" value="Win 11 LTSC" />
                <Stat label="Alpha" value="Q3 2026" />
              </div>

              <div className="mt-6 rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-4 text-sm text-cyan-100">
                Status: private testing phase. Public alpha planned after compatibility validation.
              </div>
            </div>
          </div>
        </header>

        <section id="project" className="py-20 border-t border-white/10">
          <p className="text-cyan-300 font-bold">The project</p>
          <h2 className="mt-3 text-4xl md:text-6xl font-black max-w-4xl">
            A lightweight Windows build made for gamers, not background noise.
          </h2>
          <p className="mt-6 text-lg text-slate-300 max-w-4xl leading-relaxed">
            Project LN2 started after years of testing custom Windows and Linux
            systems. The goal is to create a clean, fast and practical gaming OS:
            less bloat, fewer useless background services, stronger responsiveness,
            and compatibility kept as the first priority.
          </p>
        </section>

        <section id="features" className="py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            <Card icon={<Gauge />} title="Low resource usage" text="Optimized for fewer idle processes and lower memory usage." />
            <Card icon={<Gamepad2 />} title="Gaming first" text="Built around launchers, games, anti-cheats and real usage." />
            <Card icon={<ShieldCheck />} title="Compatibility aware" text="Core services are preserved to avoid breaking games and setup." />
            <Card icon={<Wifi />} title="Driver friendly" text="Wi-Fi, Ethernet, USB, storage and setup essentials are kept." />
          </div>
        </section>

        <section id="compatibility" className="py-20 border-t border-white/10">
          <p className="text-cyan-300 font-bold">Compatibility testing</p>
          <h2 className="mt-3 text-4xl md:text-6xl font-black">Tested with real games.</h2>

          <div className="mt-8 grid md:grid-cols-2 gap-5">
            {["The Finals", "Splitgate 2", "Delta Force", "Counter-Strike 2"].map((game) => (
              <div key={game} className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                <CheckCircle2 className="text-cyan-300" />
                <span className="font-bold">{game}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="roadmap" className="py-20 border-t border-white/10">
          <p className="text-cyan-300 font-bold">Roadmap</p>
          <h2 className="mt-3 text-4xl md:text-6xl font-black">What comes next.</h2>

          <div className="mt-8 grid lg:grid-cols-3 gap-5">
            <Card icon={<Cpu />} title="V2 optimization" text="Process count, RAM usage, services and post-install tweaks." />
            <Card icon={<HardDrive />} title="Installer polish" text="Cleaner unattended setup, local admin account and dark theme." />
            <Card icon={<Zap />} title="Public alpha" text="Alpha release planned after Wi-Fi, drivers and game tests are validated." />
          </div>
        </section>

        <section id="download" className="py-20">
          <div className="rounded-[2rem] border border-cyan-300/20 bg-cyan-300/10 p-10 md:p-14 text-center">
            <h2 className="text-4xl md:text-6xl font-black">LN2OS is not public yet.</h2>
            <p className="mt-5 text-slate-300 text-lg max-w-3xl mx-auto">
              Downloads will be available once the build is stable enough for public testing.
              Join the Discord for announcements, changelogs and alpha access updates.
            </p>
            <a
              href={discordLink}
              target="_blank"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-2xl bg-white text-black px-8 py-4 font-black hover:bg-slate-200 transition"
            >
              <Users size={19} />
              Join Project LN2
            </a>
          </div>
        </section>

        <footer className="border-t border-white/10 py-8 text-sm text-slate-500 flex flex-col md:flex-row justify-between gap-3">
          <span>© 2026 Project LN2. All rights reserved.</span>
          <span>Performance unlocked.</span>
        </footer>
      </section>
    </main>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
      <p className="text-sm text-slate-400">{label}</p>
      <p className="mt-2 text-xl font-black text-cyan-200">{value}</p>
    </div>
  );
}

function Card({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 hover:bg-white/[0.07] transition">
      <div className="text-cyan-300 mb-5">{icon}</div>
      <h3 className="text-xl font-black">{title}</h3>
      <p className="mt-3 text-slate-400 leading-relaxed">{text}</p>
    </div>
  );
}
