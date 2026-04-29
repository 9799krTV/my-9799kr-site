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
    <main className="min-h-screen p-8 max-w-4xl mx-auto">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-blue-500 mb-2">9799KRSPACES</h1>
        <p className="text-zinc-400 italic">Welcome to 9799kr Secret Space ☁🛸</p>
      </header>

      <section className="mb-12">
        <h2 className="text-xl font-bold mb-4">🔴 Live Stream</h2>
        <StreamPlayer />
      </section>

      <div className="grid md:grid-cols-2 gap-8">
        <section>
          <h2 className="font-bold mb-4 border-b border-zinc-800 pb-2">Archives</h2>
          <div className="space-y-2">
            <a href="https://9799kr.carrd.co/" className="block p-3 bg-zinc-900 rounded hover:text-blue-400">Carrd Collection →</a>
            <a href="https://sites.google.com/view/9799krspace/home" className="block p-3 bg-zinc-900 rounded hover:text-blue-400">Google Site →</a>
          </div>
        </section>

        <section>
          <h2 className="font-bold mb-4 border-b border-zinc-800 pb-2">Socials</h2>
          <div className="grid grid-cols-2 gap-2">
            {socials.map((s) => (
              <a key={s.name} href={s.url} className="p-2 bg-zinc-900 text-center rounded text-sm hover:bg-blue-600">{s.name}</a>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
