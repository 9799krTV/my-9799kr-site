"use client";
import { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import Hls from 'hls.js'; // This helps play the .m3u8 link

export default function StreamPlayer() {
  const [hasWindow, setHasWindow] = useState(false);
  const [activeServer, setActiveServer] = useState('Server 1');

  useEffect(() => {
    setHasWindow(true);
    
    // Logic to play the .m3u8 Odysee link on Server 1
    if (activeServer === 'Server 1') {
      const video = document.getElementById('odysee-player') as HTMLVideoElement;
      const videoUrl = "https://cloud.odysee.live/content/57132c5cf814dee8334362de50b72a48b0e603d5/master.m3u8";

      if (video && Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(videoUrl);
        hls.attachMedia(video);
      } else if (video && video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = videoUrl;
      }
    }
  }, [activeServer]);

  const servers = {
    "Server 1": "Odysee Direct",
    "Server 2": "https://kick.com/9799krtvlive",
    "Server 3": "https://www.twitch.tv/9799krTVLIVE"
  };

  if (!hasWindow) return <div className="aspect-video w-full bg-zinc-900 rounded-xl animate-pulse" />;

  return (
    <div className="space-y-4">
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

      <div className="aspect-video w-full bg-black rounded-xl overflow-hidden border border-white/5 shadow-2xl">
        {activeServer === "Server 1" ? (
          <video 
            id="odysee-player" 
            controls 
            autoPlay 
            muted 
            className="w-full h-full"
          />
        ) : (
          <ReactPlayer 
            url={servers[activeServer as keyof typeof servers]}
            width="100%"
            height="100%"
            controls
            playing
          />
        )}
      </div>

      <div className="flex items-center gap-2 px-1">
        <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
        <p className="text-zinc-500 text-[9px] uppercase tracking-[0.2em]">
          Mode: <span className="text-blue-400 font-bold">{activeServer === "Server 1" ? "Direct Odysee HLS" : "Platform Embed"}</span>
        </p>
      </div>
    </div>
  );
}
