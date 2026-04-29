import StreamPlayer from './components/StreamPlayer';

export default function Home() {
  const socials = [
    { name: "X", url: "https://x.com/9799kr", color: "hover:text-sky-400" },
    { name: "TikTok", url: "https://www.tiktok.com/@9799krtv", color: "hover:text-pink-500" },
    { name: "YouTube", url: "https://www.youtube.com/channel/UC_LPu1x_SwG-EKG4iytGgzA", color: "hover:text-red-600" },
    { name: "Bilibili (Global)", url: "https://www.bilibili.tv/en/space/1589181519", color: "hover:text-blue-400" },
    { name: "Bilibili (CN)", url: "https://space.bilibili.com/3546631593003540", color: "hover:text-blue-500" },
    { name: "OK.ru", url: "https://ok.ru/profile/584846564494", color: "hover:text-orange-500" },
  ];

  return (
    <main className="min-h-screen p-6 md:p-12 max-w-5xl mx-auto bg-black text-zinc-100 font-sans selection:bg-blue-500/30">
      {/* Background Decor */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-900/20 blur-[120px] rounded-full"></div>
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-purple-900/10 blur-[120px] rounded-full"></div>
      </div>

      <header className="mb-16 text-center">
        <h1 className="text-6xl font-black tracking-tighter italic mb-4 bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent uppercase">
          9799KR<span className="text-blue-500">SPACES</span>
        </h1>
        <div className="inline-block px-4 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 backdrop-blur-md text-zinc-400 text-sm tracking-widest uppercase">
          Welcome to 9799kr Secret Space ☁🛸
        </div>
      </header>

      <section className="mb-16">
        <div className="flex items-center justify-between mb-6 px-2">
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-zinc-500 flex items-center gap-3">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            Live Command Center
          </h2>
        </div>
        <StreamPlayer />
      </section>

      <section className="mb-16 flex justify-center">
        <a 
          href="https://ko-fi.com/9799kr" 
          target="_blank" 
          className="group relative px-10 py-4 bg-white text-black font-bold rounded-2xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-white/20"
        >
          ☕ Support the Mission
        </a>
      </section>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Archives Card */}
        <div className="p-8 rounded-3xl bg-zinc-900/30 border border-zinc-800/50 backdrop-blur-xl hover:border-zinc-700 transition-all duration-500">
          <h2 className="text-xs font-black uppercase tracking-[0.4em] text-blue-500 mb-8 italic">Archives</h2>
          <div className="space-y-4">
            {[
              { label: "Carrd Collection", url: "https://9799kr.carrd.co/" },
              { label: "Google Site", url: "https://sites.google.com/view/9799krspace/home" }
            ].map((link) => (
              <a 
                key={link.label}
                href={link.url} 
                target="_blank"
                className="group flex items-center justify-between p-4 rounded-xl bg-zinc-800/20 border border-zinc-800/50 hover:bg-zinc-800/40 transition-all"
              >
                <span className="text-sm font-medium text-zinc-300 group-hover:text-white">{link.label}</span>
                <span className="text-zinc-600 group-hover:translate-x-1 transition-transform">→</span>
              </a>
            ))}
          </div>
        </div>

        {/* Socials Card */}
        <div className="p-8 rounded-3xl bg-zinc-900/30 border border-zinc-800/50 backdrop-blur-xl hover:border-zinc-700 transition-all duration-500">
          <h2 className="text-xs font-black uppercase tracking-[0.4em] text-blue-500 mb-8 italic">Connectivity</h2>
          <div className="grid grid-cols-2 gap-3">
            {socials.map((s) => (
              <a 
                key={s.name} 
                href={s.url} 
                target="_blank" 
                className={`p-3 text-center rounded-xl bg-zinc-800/30 border border-zinc-800/50 text-zinc-400 text-xs font-bold transition-all ${s.color} hover:border-current hover:bg-zinc-800/80`}
              >
                {s.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      <footer className="mt-20 py-8 text-center border-t border-zinc-900">
        <p className="text-[10px] text-zinc-600 uppercase tracking-[0.5em]">© 2024 9799KRSPACES — Digital Operations</p>
      </footer>
    </main>
  );
}
