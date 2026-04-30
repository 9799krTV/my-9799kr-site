"use client";
import { useState } from 'react';
import ReactPlayer from 'react-player';
import { VideoJSPlayer } from './VideoJSPlayer';

export default function StreamPlayer() {
  const [activeServer, setActiveServer] = useState('Server 1');

  const servers = {
    // This is a professional HLS test link
    "Server 1": "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8", 
    "Server 2": "https://kick.com/9799krtvhd",
    "Server 3": "https://odysee.com/@9799kr:5"
  };

  const videoJsOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [{
      src: servers["Server 1"],
      type: 'application/x-mpegURL' // This type is required for .m3u8 links
    }]
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2 mb-4">
        {Object.keys(servers).map((name) => (
          <button
            key={name}
            onClick={() => setActiveServer(name)}
            className={`px-4 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all ${
              activeServer === name 
                ? "bg-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)]" 
                : "bg-white/5 text-zinc-500 hover:text-white border border-white/5"
            }`}
          >
            {name}
          </button>
        ))}
      </div>

      <div className="aspect-video w-full bg-black rounded-xl overflow-hidden border border-white/5 shadow-2xl">
        {activeServer === "Server 1" ? (
          <VideoJSPlayer options={videoJsOptions} />
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
    </div>
  );
}
