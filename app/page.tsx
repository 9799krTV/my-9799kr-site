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
    /* We added a nice 'Radial Gradient' to the background here */
    <main className="min-h-screen p-8 max-w-4xl mx-auto bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-zinc-900 via-black to-black">
      
      <header className="mb-10 text-center">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-2">9799KRSPACES</h1>
        <p className="text-zinc-400 italic">Welcome to 9799kr Secret Space ☁🛸</p>
      </header>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
          Live Stream
        </h2>
        <StreamPlayer />
      </section>

      {/* --- NEW DONATION BUTTON AREA --- */}
      <section className="mb-12 flex justify-center">
        <a 
          href="https://ko-fi.com/9799kr" 
          target="_blank" 
          className="group relative inline-flex items-center justify-center px-8 py-3 font-bold text-white transition-all duration-200 bg-[#29abe0] font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-[#1a8dbd] shadow-lg shadow-blue-500/20"
        >
          <span className="mr-2">☕</span> Support Me on Ko-fi
        </a>
      </section>
      {/* --------------------------------- */}

      <div className="grid md:grid-cols-2 gap-8">
        <section>
          <h2 className="font-bold mb-4 border-b border-zinc-800 pb-2 text-zinc-300 uppercase tracking-widest text-sm">Archives</h2>
          <div className="space-y-2">
            <a href="https://9799kr.carrd.co/" target="_blank" className="block p-3 bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-lg hover:border-blue-500 transition-colors">Carrd Collection →</a>
            <a href="https://sites.google.com/view/9799krspace/home" target="_blank" className="block p-3 bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-lg hover:border-blue-500 transition-colors">Google Site →</a>
          </div>
        </section>

        <section>
          <h2 className="font-bold mb-4 border-b border-zinc-800 pb-2 text-zinc-300 uppercase tracking-widest text-sm">Socials</h2>
          <div className="grid grid-cols-2 gap-2">
            {socials.map((s) => (
              <a key={s.name} href={s.url} target="_blank" className="p-2 bg-zinc-900/50 border border-zinc-800 text-center rounded-lg text-sm hover:bg-blue-600 transition-all">{s.name}</a>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
