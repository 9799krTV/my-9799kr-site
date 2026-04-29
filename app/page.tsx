import StreamPlayer from './components/StreamPlayer';

export default function Home() {
  const socials = [
    { name: "X", url: "https://x.com/9799kr", icon: "https://www.svgrepo.com/show/342317/twitter.svg" },
    { name: "TikTok", url: "https://www.tiktok.com/@9799krtv", icon: "https://www.svgrepo.com/show/342296/tiktok.svg" },
    { name: "YouTube", url: "https://www.youtube.com/channel/UC_LPu1x_SwG-EKG4iytGgzA", icon: "https://www.svgrepo.com/show/342390/youtube.svg" },
    { name: "Bilibili (Global)", url: "https://www.bilibili.tv/en/space/1589181519", icon: "https://www.svgrepo.com/show/330058/bilibili.svg" },
    { name: "Bilibili (CN)", url: "https://space.bilibili.com/3546631593003540", icon: "https://www.svgrepo.com/show/330058/bilibili.svg" },
    { name: "OK.ru", url: "https://ok.ru/profile/584846564494", icon: "https://www.svgrepo.com/show/331518/odnoklassniki.svg" },
  ];

  return (
    <main className="min-h-screen p-4 md:p-12 bg-[#080808] text-white selection:bg-blue-500/30 overflow-x-hidden">
      
      {/* iOS Background Elements */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-5%] w-[50%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full"></div>
      </div>

      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-6xl font-black tracking-widest mb-4 bg-gradient-to-b from-white to-zinc-600 bg-clip-text text-transparent drop-shadow-2xl">
          9799KR<span className="text-blue-500">SPACES</span>
        </h1>
        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-xl text-[10px] tracking-[0.3em] text-zinc-500 uppercase">
          Digital Operations Center
        </div>
      </header>

      <div className="max-w-5xl mx-auto space-y-10">
        
        {/* Stream Player Glass Card */}
        <section className="bg-white/[0.03] backdrop-blur-3xl border border-white/10 p-2 md:p-6 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
           <StreamPlayer />
        </section>

        {/* Support Button */}
        <div className="flex justify-center">
          <a href="https://ko-fi.com/9799kr" target="_blank" className="group relative w-full md:w-auto px-12 py-5 bg-white text-black font-black rounded-3xl transition-all hover:scale-[1.03] active:scale-95 flex items-center justify-center gap-3">
            <img src="https://www.svgrepo.com/show/353966/ko-fi.svg" className="w-6 h-6" alt="kofi" />
            SUPPORT THE MISSION
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Archives */}
          <div className="bg-white/[0.02] backdrop-blur-3xl border border-white/10 p-8 rounded-[3rem]">
            <h2 className="text-[11px] font-black uppercase tracking-[0.5em] text-blue-400 mb-8 italic">Archives</h2>
            <div className="space-y-4">
              {[
                { label: "Carrd Collection", url: "https://9799kr.carrd.co/", icon: "https://www.svgrepo.com/show/443041/card-heading.svg" },
                { label: "Google Site", url: "https://sites.google.com/view/9799krspace/home", icon: "https://www.svgrepo.com/show/452210/google-drive.svg" }
              ].map((link) => (
                <a key={link.label} href={link.url} target="_blank" className="flex items-center gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all group">
                  <img src={link.icon} className="w-6 h-6 opacity-40 group-hover:opacity-100 transition-opacity grayscale invert" alt="icon" />
                  <span className="text-sm font-bold text-zinc-300 group-hover:text-white">{link.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Connectivity */}
          <div className="bg-white/[0.02] backdrop-blur-3xl border border-white/10 p-8 rounded-[3rem]">
            <h2 className="text-[11px] font-black uppercase tracking-[0.5em] text-blue-400 mb-8 italic">Connectivity</h2>
            <div className="grid grid-cols-2 gap-4">
              {socials.map((s) => (
                <a key={s.name} href={s.url} target="_blank" className="flex flex-col items-center justify-center gap-3 p-5 rounded-2xl bg-white/[0.03] border border-white/5 transition-all group hover:bg-blue-600/20 hover:border-blue-500/50">
                  <img src={s.icon} className="w-7 h-7 opacity-20 group-hover:opacity-100 transition-all grayscale invert group-hover:grayscale-0 group-hover:invert-0" alt={s.name} />
                  <span className="text-[10px] font-black text-zinc-500 group-hover:text-white tracking-widest uppercase">{s.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-32 pb-16 text-center">
        <p className="text-[9px] text-zinc-600 uppercase tracking-[0.6em]">
          © 2026 9799KRSPACES — LIVE WITH 9799KR
        </p>
      </footer>
    </main>
  );
}