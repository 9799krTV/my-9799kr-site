"use client";
import ReactPlayer from 'react-player/lazy';

export default function StreamPlayer() {
  const activePlatform = "twitch"; // Change this to "kick" or "odysee" whenever you want!

  const links = {
    twitch: "https://www.twitch.tv/9799krTVHD",
    kick: "https://kick.com/9799krtvhd",
    odysee: "https://odysee.com/@9799kr:5"
  };

  return (
    <div className="aspect-video w-full bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800">
      <ReactPlayer url={links[activePlatform as keyof typeof links]} width="100%" height="100%" controls />
    </div>
  );
}
