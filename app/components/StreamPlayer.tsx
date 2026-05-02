"use client";
import { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';

export default function StreamPlayer() {
  const [hasWindow, setHasWindow] = useState(false);
  const [activeServer, setActiveServer] = useState('Server 1');

  useEffect(() => {
    setHasWindow(true);
  }, []);

  const servers = {
    "Server 1": "https://odysee.com/@9799kr:5/Live-with-9799krTV:c",
    "Server 2": "https://kick.com/9799krtvlive",
    "Server 3": "https://www.twitch.tv/9799krTVLIVE"
  };

  if (!hasWindow) return <div className="aspect-video w-full bg-zinc-900 rounded-xl animate-pulse" />;

  return (
    <div className="space-y-4">
      {/* Server Selection Buttons */}
      <div className="flex flex-wrap gap-2 mb-4">
        {Object.keys(servers).map((name) => (
          <button
            key={name}
            onClick={() => setActiveServer(name)}
            className={`px-4 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all border ${
              activeServer === name 
                ? "bg-blue-600 border-blue-400 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]" 
                : "bg-white/5 border-white/10 text-zinc-500 hover:text-white"
            }`}
          >
            {name}
          </button>
        ))}
      </div>

      {/* Main Video Player Area */}
      <div className="aspect-video w-full bg-black rounded-xl overflow-hidden border border-white/5 shadow-2xl relative">
        <ReactPlayer 
          url={servers[activeServer as keyof typeof servers]}
          width="100%"
          height="100%"
          controls
          playing
          muted
        />
      </div>

      {/* Footer Info Display */}
      <div className="flex items-center gap-2 px-1">
        <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
        <p className="text-zinc-500 text-[9px] uppercase tracking-[0.2em]">
          MODE: <span className="text-blue-400 font-bold">{activeServer}</span>
        </p>
      </div>
    </div>
  );
}