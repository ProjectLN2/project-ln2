import Image from "next/image";
import { Users } from "lucide-react";

const discordLink = "https://discord.gg/mvZEfZzyCk";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#02050a] text-white flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,229,255,0.18),transparent_35%),linear-gradient(180deg,#02050a,#050914,#02050a)]" />
      <div className="absolute h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl animate-pulse" />

      <section className="relative text-center px-6">
        <div className="mx-auto mb-8 h-32 w-32 rounded-[2rem] border border-cyan-300/30 bg-cyan-300/10 flex items-center justify-center shadow-2xl shadow-cyan-500/20 animate-pulse">
          <Image
            src="/ln2-logo.png"
            alt="LN2 Logo"
            width={90}
            height={90}
            priority
          />
        </div>

        <h1 className="text-5xl md:text-7xl font-black tracking-tight">
          Project <span className="text-cyan-300">LN2</span>
        </h1>

        <p className="mt-5 text-2xl md:text-3xl text-slate-300 font-bold tracking-[0.35em] uppercase">
          Coming Soon
        </p>

        <a
          href={discordLink}
          target="_blank"
          className="mt-10 inline-flex items-center gap-2 rounded-2xl bg-cyan-300 text-black px-7 py-4 font-black hover:bg-cyan-200 transition shadow-xl shadow-cyan-500/20"
        >
          <Users size={20} />
          Join Discord
        </a>
      </section>
    </main>
  );
}
