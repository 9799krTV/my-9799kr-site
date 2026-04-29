import StreamPlayer from './components/StreamPlayer';
import { 
  X, 
  Video, 
  Youtube, 
  Share2, 
  Globe, 
  Link, 
  Coffee, 
  Archive, 
  ChevronRight 
} from 'lucide-react';

export default function Home() {
  const socials = [
    { name: "X", url: "https://x.com/9799kr", Icon: X },
    { name: "TikTok", url: "https://www.tiktok.com/@9799krtv", Icon: Video },
    { name: "YouTube", url: "https://www.youtube.com/channel/UC_LPu1x_SwG-EKG4iytGgzA", Icon: Youtube },
    { name: "Bilibili (Global)", url: "https://www.bilibili.tv/en/space/1589181519", Icon: Share2 },
    { name: "Bilibili (CN)", url: "https://space.bilibili.com/3546631593003540", Icon: Share2 },
    { name: "OK.ru", url: "https://ok.ru/profile/584846564494", Icon: Globe },
  ];

  return (
    <main className="min-h-screen p-4 md:p-10 bg-[#050505] text-white selection:bg-blue-500/30 overflow-x-hidden">
      
      {/* iOS Glass Backgrounds */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-5%] w-[50%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full"></div>
      </div>

      <header className="mb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-black tracking-[0.2em] mb-4 bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent uppercase">
          9799KR<span className="text-blue-500">SPACES</span>
        </h1>
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[10px] tracking-[0.2em] text-zinc-400 uppercase">
          9799kr Secret Spaces
        </div>
      </header>

      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Stream Card */}
        <section className="bg-white/[0.03] backdrop-blur-3xl border border-white/10 p-3 md:p-5 rounded-[2rem] shadow-2xl">
           <StreamPlayer />
        </section>

        {/* Support Button */}
        <div className="flex justify-center">
          <a href="https://ko-fi.com/9799kr" target="_blank" className="px-8 py-3 bg-white text-black font-bold rounded-xl transition-all hover:scale-105 active:scale-95 flex items-center gap-2 text-sm shadow-xl">
            <Coffee size={18} />
            SUPPORT THE MISSION
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Archives */}
          <div className="bg-white/[0.02] backdrop-blur-3xl border border-white/10 p-6 rounded-[2rem]">
            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-400 mb-6 flex items-center gap-2">
              <Archive size={14} /> Archives
            </h2>
            <div className="space-y-3">
              {[
                { label: "Carrd Collection", url: "https://9799kr.carrd.co/" },
                { label: "Google Site", url: "https://sites.google.com/view/9799krspace/home" }
              ].map((link) => (
                <a key={link.label} href={link.url} target="_blank" className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all group">
                  <div className="flex items-center gap-3">
                    <Link size={16} className="text-zinc-500 group-hover:text-white transition-colors" />
                    <span className="text-sm font-semibold text-zinc-300 group-hover:text-white">{link.label}</span>
                  </div>
                  <ChevronRight size={14} className="text-zinc-600 group-hover:text-white group-hover:translate-x-1 transition-all" />
                </a>
              ))}
            </div>
          </div>

          {/* Connectivity */}
          <div className="bg-white/[0.02] backdrop-blur-3xl border border-white/10 p-6 rounded-[2rem]">
            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-400 mb-6 italic">Connectivity</h2>
            <div className="grid grid-cols-2 gap-3">
              {socials.map((s) => (
                <a key={s.name} href={s.url} target="_blank" className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 transition-all group hover:bg-blue-600/20 hover:border-blue-500/50">
                  <s.Icon size={16} className="text-zinc-500 group-hover:text-white transition-colors" />
                  <span className="text-[10px] font-bold text-zinc-400 group-hover:text-white tracking-wider uppercase">{s.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-20 pb-10 text-center">
        <p className="text-[9px] text-zinc-600 uppercase tracking-[0.4em]">
          © 2026 9799KRSPACES — LIVE WITH 9799KR
        </p>
      </footer>
    </main>
  );
}
