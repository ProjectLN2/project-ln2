'use client'

import { motion } from 'framer-motion'
import { Cpu, Gauge, Gamepad2, ShieldCheck, Download, Users, Zap, HardDrive, Wifi, CheckCircle2, Sparkles, Terminal, Radio, Rocket, Lock, Activity } from 'lucide-react'

const features = [
  { icon: Gauge, title: 'Low idle usage', text: 'Built to reduce background activity, useless services and unnecessary Windows load.' },
  { icon: Gamepad2, title: 'Gaming first', text: 'Designed around smooth input, launchers, multiplayer games and practical compatibility.' },
  { icon: ShieldCheck, title: 'Anti-cheat aware', text: 'Core compatibility is prioritized before dangerous component removal.' },
  { icon: Wifi, title: 'Real hardware ready', text: 'Essential networking, USB, storage, setup and driver systems are preserved.' },
  { icon: Terminal, title: 'Manual tuning', text: 'Optimizations are reviewed by hand to avoid blind scripts and unstable presets.' },
  { icon: Activity, title: 'Responsive feel', text: 'Tweaked for fast desktop interactions, clean startup and reduced system noise.' },
]

const stats = [
  { label: 'Target idle RAM', value: '1.2–1.8 GB' },
  { label: 'Target processes', value: '70–90' },
  { label: 'Base', value: 'Windows 11 LTSC' },
  { label: 'Alpha target', value: 'Q3 2026' },
]

const roadmap = [
  'Prototype validation and stability testing',
  'Wi‑Fi, Bluetooth, USB and NVMe compatibility pass',
  'Eco, Balanced, Performance, Ryzen and Intel power plans',
  'Branding pack, wallpapers, Discord community and website',
  'Private tests before public alpha release',
]

const launchers = ['Steam', 'Epic Games', 'Battle.net', 'Ubisoft Connect', 'EA App', 'Xbox App', 'GOG Galaxy', 'Riot Client']

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#03060c] text-white">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 grid-bg opacity-60" />
        <div className="absolute -top-40 left-1/2 h-[540px] w-[540px] -translate-x-1/2 rounded-full bg-cyan-400/20 blur-[120px]" />
        <div className="absolute top-1/3 right-0 h-[420px] w-[420px] rounded-full bg-blue-600/15 blur-[110px]" />
      </div>

      <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <a href="#top" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/30 bg-cyan-300/10 shadow-lg shadow-cyan-500/10 overflow-hidden">
            <img src="/ln2-logo.png" alt="LN2 Logo" className="h-10 w-10 object-contain" onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none' }} />
            <span className="absolute font-black tracking-tight">LN²</span>
          </div>
          <div>
            <p className="font-black leading-none tracking-tight">Project LN2</p>
            <p className="text-xs text-slate-400">Performance unlocked</p>
          </div>
        </a>
        <nav className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#compatibility" className="hover:text-white">Compatibility</a>
          <a href="#roadmap" className="hover:text-white">Roadmap</a>
          <a href="#download" className="hover:text-white">Download</a>
        </nav>
      </header>

      <section id="top" className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-12 lg:grid-cols-2 lg:pb-28 lg:pt-20">
        <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100">
            <Rocket size={16} /> Private prototype in development
          </div>
          <h1 className="max-w-3xl text-6xl font-black leading-[0.9] tracking-[-0.06em] md:text-8xl">
            Project <span className="text-cyan-300 drop-shadow-[0_0_24px_rgba(103,232,249,.35)]">LN2</span>
          </h1>
          <p className="mt-7 max-w-xl text-xl leading-relaxed text-slate-300">
            A custom Windows OS built for gamers who want speed, responsiveness, low resource usage and real game compatibility.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href="#download" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-300 px-6 py-4 font-black text-slate-950 shadow-xl shadow-cyan-500/20 transition hover:bg-cyan-200">
              <Download size={19} /> Download coming soon
            </a>
            <a href="#community" className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-4 font-black transition hover:bg-white/10">
              <Users size={19} /> Join Discord
            </a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8, delay: .1 }} className="relative">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-cyan-950/50 backdrop-blur-xl">
            <div className="rounded-[1.5rem] border border-cyan-300/20 bg-slate-950/80 p-6">
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">LN2 Control Center</p>
                  <p className="text-2xl font-black">Performance Mode</p>
                </div>
                <Cpu className="text-cyan-300" size={36} />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <p className="text-sm text-slate-400">{stat.label}</p>
                    <p className="mt-2 text-xl font-black text-cyan-200">{stat.value}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-4 text-sm text-cyan-100">
                Status: private testing phase. Public alpha planned after core compatibility validation.
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="features" className="relative z-10 mx-auto max-w-7xl px-6 py-16">
        <p className="font-black text-cyan-300">Features</p>
        <h2 className="mt-2 max-w-3xl text-4xl font-black tracking-tight md:text-5xl">Optimized, but not broken.</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => <div key={feature.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition hover:bg-white/[0.07]"><feature.icon className="mb-5 text-cyan-300" size={30}/><h3 className="mb-3 text-xl font-black">{feature.title}</h3><p className="leading-relaxed text-slate-400">{feature.text}</p></div>)}
        </div>
      </section>

      <section id="compatibility" className="relative z-10 mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur md:p-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div><p className="font-black text-cyan-300">Compatibility</p><h2 className="mt-2 text-4xl font-black tracking-tight md:text-5xl">Launcher ready.</h2></div>
            <p className="max-w-xl text-slate-400">LN2 is designed to keep the core systems needed by modern launchers, multiplayer games, runtimes and drivers.</p>
          </div>
          <div className="mt-9 grid gap-3 sm:grid-cols-2 md:grid-cols-4">
            {launchers.map((item) => <div key={item} className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-center font-bold text-slate-200">{item}</div>)}
          </div>
        </div>
      </section>

      <section id="roadmap" className="relative z-10 mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-2">
        <div><p className="font-black text-cyan-300">Roadmap</p><h2 className="mt-2 text-4xl font-black tracking-tight md:text-5xl">Alpha planned for Q3 2026.</h2><p className="mt-5 text-lg leading-relaxed text-slate-400">LN2 is being tested and refined. Stability, hardware support and game compatibility come before aggressive removals.</p></div>
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
          {roadmap.map((item) => <div key={item} className="flex gap-4 border-b border-white/10 py-4 last:border-b-0"><CheckCircle2 className="shrink-0 text-cyan-300" size={22}/><span className="text-slate-200">{item}</span></div>)}
        </div>
      </section>

      <section id="download" className="relative z-10 mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-[2rem] border border-cyan-300/20 bg-cyan-300/10 p-8 text-center md:p-12">
          <HardDrive className="mx-auto mb-5 text-cyan-200" size={44}/>
          <h2 className="text-4xl font-black tracking-tight md:text-5xl">Downloads are not public yet.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-300">The first alpha will be shared once compatibility tests are complete. Join Discord to follow progress and testing updates.</p>
        </div>
      </section>

      <section id="community" className="relative z-10 mx-auto max-w-7xl px-6 py-16 pb-24">
        <div className="flex flex-col gap-8 rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur md:flex-row md:items-center md:justify-between md:p-12">
          <div><p className="font-black text-cyan-300">Community</p><h2 className="mt-2 text-4xl font-black tracking-tight md:text-5xl">Join Project LN2.</h2><p className="mt-4 text-lg text-slate-400">Announcements, testing progress, screenshots and future alpha information.</p></div>
          <a href="#" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-7 py-4 font-black text-slate-950 transition hover:bg-slate-200"><Radio size={19}/> Discord link here</a>
        </div>
      </section>

      <footer className="relative z-10 mx-auto flex max-w-7xl flex-col justify-between gap-3 border-t border-white/10 px-6 py-8 text-sm text-slate-500 md:flex-row">
        <span>© 2026 Project LN2. All rights reserved.</span><span>Performance unlocked.</span>
      </footer>
    </main>
  )
}
