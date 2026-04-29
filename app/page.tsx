import StreamPlayer from './components/StreamPlayer';

export default function Home() {
  const socials = [
    { name: "X", url: "https://x.com/9799kr" },
    { name: "TikTok", url: "https://www.tiktok.com/@9799krtv" },
    { name: "YouTube", url: "https://www.youtube.com/channel/UC_LPu1x_SwG-EKG4iytGgzA" },
    { name: "Bilibili (Global)", url: "https://www.bilibili.tv/en/space/1589181519" },
    { name: "Bilibili (CN)", url: "https://space.bilibili.com/3546631593003540" },
    { name: "OK.ru", url: "https://ok.ru/profile/584846564494" },
  ];

  return (
    <main className="min-h-screen p-4 md:p-12 bg-[#050505] text-white selection:bg-blue-500/30 overflow-x-hidden">
      
      {/* iOS Style Background Glows */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-blue-600/10 blur-[150px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-purple-600/10 blur-[150px] rounded-full"></div>
      </div>

      {/* --- LOGO SECTION (Medium size, Clear on all devices) --- */}
      <header className="mb-12 text-center mt-6">
        <h1 className="text-4xl md:text-5xl font-black tracking-[0.2em] mb-3 bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent uppercase drop-shadow-2xl">
          9799KR<span className="text-blue-500">SPACES</span>
        </h1>
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[10px] md:text-xs tracking-[0.2em] text-zinc-400 uppercase">
          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-ping"></span>
          Secret Space Operations
        </div>
      </header>

      {/* Main Content Glass Container */}
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Stream Section */}
        <section className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          <div className="relative bg-zinc-900/40 backdrop-blur-2xl border border-white/10 p-2 md:p-4 rounded-2xl shadow-2xl">
             <StreamPlayer />
          </div>
        </section>

        {/* Support Button (Ko-fi) */}
        <div className="flex justify-center py-4">
          <a 
            href="https://ko-fi.com/9799kr" 
            target="_blank" 
            className="w-full md:w-auto px-10 py-4 bg-white/90 backdrop-blur-md text-black font-heavy text-center rounded-2xl hover:bg-white hover:scale-[1.02] transition-all shadow-xl active:scale-95"
          >
            ☕ <span className="font-bold tracking-tight">SUPPORT THE MISSION</span>
          </a>
        </div>

        {/* Bottom Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Archives - iOS Glass Style */}
          <div className="bg-white/5 backdrop-blur-3xl border border-white/10 p-6 rounded-[2.5rem] shadow-2xl">
            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-400 mb-6 italic">Archives</h2>
            <div className="space-y-3">
              {[
                { label: "Carrd Collection", url: "https://9799kr.carrd.co/" },
                { label: "Google Site", url: "https://sites.google.com/view/9799krspace/home" }
              ].map((link) => (
                <a 
                  key={link.label}
                  href={link.url} 
                  target="_blank"
                  className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all group"
                >
                  <span className="text-sm font-semibold text-zinc-200">{link.label}</span>
                  <span className="text-zinc-500 group-hover:text-white transition-colors">→</span>
                </a>
              ))}
            </div>
          </div>

          {/* Connectivity - iOS Glass Style */}
          <div className="bg-white/5 backdrop-blur-3xl border border-white/10 p-6 rounded-[2.5rem] shadow-2xl">
            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-400 mb-6 italic">Connectivity</h2>
            <div className="grid grid-cols-2 gap-3">
              {socials.map((s) => (
                <a 
                  key={s.name} 
                  href={s.url} 
                  target="_blank" 
                  className="p-3 text-center rounded-2xl bg-white/5 border border-white/5 text-zinc-300 text-[10px] font-bold hover:bg-blue-600/20 hover:border-blue-500/50 hover:text-white transition-all uppercase tracking-wider"
                >
                  {s.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* --- UPDATED COPYRIGHT SECTION --- */}
      <footer className="mt-24 pb-12 text-center">
        <p className="text-[9px] md:text-[10px] text-zinc-500 uppercase tracking-[0.4em] leading-loose">
          © 2026 9799KRSPACES — LIVE WITH 9799KR
        </p>
      </footer>
    </main>
  );
}
