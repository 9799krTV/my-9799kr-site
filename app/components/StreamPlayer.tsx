"use client";
import { useState } from 'react';
import ReactPlayer from 'react-player';

export default function StreamPlayer() {
  const [activeServer, setActiveServer] = useState('Server 1');

  // We map the Server names to your actual links here
  const servers = {
    "Server 1": "https://www.twitch.tv/9799krTVHD",
    "Server 2": "https://kick.com/9799krtvhd",
    "Server 3": "https://odysee.com/@9799kr:5"
  };

  return (
    <div className="space-y-4">
      {/* Server Switcher Buttons */}
      <div className="flex flex-wrap gap-2 mb-4">
        {Object.keys(servers).map((serverName) => (
          <button
            key={serverName}
            onClick={() => setActiveServer(serverName)}
            className={`px-5 py-2 rounded-lg text-xs font-bold uppercase tracking-widest transition-all border ${
              activeServer === serverName 
                ? "bg-blue-600 border-blue-400 text-white shadow-[0_0_20px_rgba(37,99,235,0.3)]" 
                : "bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-600"
            }`}
          >
            {serverName}
          </button>
        ))}
      </div>

      {/* The Player */}
      <div className="aspect-video w-full bg-black rounded-xl overflow-hidden border border-zinc-800 shadow-2xl">
        <ReactPlayer 
          url={servers[activeServer as keyof typeof servers]}
          width="100%"
          height="100%"
          controls
          playing
        />
      </div>
      
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
        <p className="text-zinc-500 text-[10px] uppercase tracking-tighter">
          Connected to <span className="text-blue-400 font-bold">{activeServer}</span>
        </p>
      </div>
    </div>
  );
}
