import Image from "next/image";
import { Users, Cpu, Zap, Gauge } from "lucide-react";

const discordLink = "https://discord.gg/mvZEfZzyCk";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white flex items-center justify-center">
      
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <Image
          src="/background.jpg"
          alt="background"
          fill
          priority
          className="object-cover opacity-30"
        />
      </div>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,229,255,0.16),transparent_35%),linear-gradient(180deg,rgba(0,0,0,0.75),rgba(2,5,10,0.9),rgba(0,0,0,0.85))]" />

      {/* GRID EFFECT */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* CONTENT */}
      <section className="relative z-10 px-6 text-center max-w-4xl">

        {/* TOP BADGE */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100 backdrop-blur">
          <Zap size={15} />
          Windows Performance Optimization
        </div>

        {/* TITLE */}
        <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white/90">
          Project
        </h1>

        {/* LOGO */}
        <div className="mx-auto mt-6 mb-8 h-36 w-36 md:h-44 md:w-44 rounded-[2rem] border border-cyan-300/25 bg-black/40 backdrop-blur-xl flex items-center justify-center shadow-2xl shadow-cyan-500/20">
          <Image
            src="/ln2-logo.png"
            alt="LN2 Logo"
            width={130}
            height={130}
            priority
            className="drop-shadow-[0_0_25px_rgba(103,232,249,0.45)]"
          />
        </div>

        {/* COMING SOON */}
        <p className="text-2xl md:text-4xl font-black tracking-[0.35em] uppercase text-cyan-200">
          Coming Soon
        </p>

        {/* DESCRIPTION */}
        <p className="mt-6 text-slate-300 max-w-2xl mx-auto leading-relaxed">
          A lightweight, performance-focused Windows custom OS built for gamers,
          responsiveness and real compatibility.
        </p>

        {/* BUTTON */}
        <div className="mt-10 flex justify-center">
          <a
            href={discordLink}
            target="_blank"
            className="inline-flex items-center gap-2 rounded-2xl bg-cyan-300 text-black px-8 py-4 font-black hover:bg-cyan-200 transition shadow-xl shadow-cyan-500/20"
          >
            <Users size={20} />
            Join Discord
          </a>
        </div>

        {/* FEATURES MINI */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
          <Info icon={<Gauge size={18} />} label="Low resource usage" />
          <Info icon={<Cpu size={18} />} label="Gaming focused" />
          <Info icon={<Zap size={18} />} label="Performance unlocked" />
        </div>

      </section>
    </main>
  );
}

function Info({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 backdrop-blur flex items-center justify-center gap-2 text-slate-300">
      <span className="text-cyan-300">{icon}</span>
      {label}
    </div>
  );
}
