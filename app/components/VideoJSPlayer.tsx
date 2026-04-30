"use client";
import React, { useEffect, useRef } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

export const VideoJSPlayer = ({ options }: { options: any }) => {
  const videoRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<any>(null);

  useEffect(() => {
    if (!playerRef.current) {
      const videoElement = document.createElement("video-js");
      // Use 'vjs-big-play-centered' to put the play button in the middle
      videoElement.classList.add('vjs-big-play-centered', 'vjs-fluid');
      videoRef.current?.appendChild(videoElement);

      const player = playerRef.current = videojs(videoElement, options);
    } else {
      const player = playerRef.current;
      player.autoplay(options.autoplay);
      player.src(options.sources);
    }
  }, [options, videoRef]);

  // Cleanup on close
  useEffect(() => {
    const player = playerRef.current;
    return () => {
      if (player && !player.isDisposed()) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, [playerRef]);

  return (
    <div data-vjs-player className="rounded-xl overflow-hidden">
      <div ref={videoRef} />
    </div>
  );
};
