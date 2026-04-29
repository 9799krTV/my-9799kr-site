"use client";
import { useState } from 'react';
import ReactPlayer from 'react-player';

export default function StreamPlayer() {
  // This keeps track of which player is active (Default is Twitch)
  const [activePlatform, setActivePlatform] = useState('twitch');

  const links = {
    twitch: "https://www.twitch.tv/9799krTVHD",
    kick: "https://kick.com/9799krtvhd",
    odysee: "https://odysee.com/@9799kr:5"
  };

  return (
    <div className="space-y-4">
      {/* Platform Switcher Buttons */}
      <div className="flex flex-wrap gap-2 mb-4">
        {Object.keys(links).map((platform) => (
          <button
            key={platform}
            onClick={() => setActivePlatform(platform)}
            className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all border ${
              activePlatform === platform 
                ? "bg-blue-600 border-blue-400 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]" 
                : "bg-zinc-900 border-zinc-800 text-zinc-500 hover:border-zinc-600"
            }`}
          >
            {platform}
          </button>
        ))}
      </div>

      {/* The Player Container */}
      <div className="aspect-video w-full bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 shadow-2xl">
        <ReactPlayer 
          url={links[activePlatform as keyof typeof links]}
          width="100%"
          height="100%"
          controls
          playing
        />
      </div>
      
      <p className="text-zinc-500 text-xs italic">
        Currently watching on <span className="text-blue-400 capitalize">{activePlatform}</span>
      </p>
    </div>
  );
}
