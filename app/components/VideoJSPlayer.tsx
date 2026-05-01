"use client";
import React, { useEffect, useRef } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

export const VideoJSPlayer = ({ options }: { options: any }) => {
  const videoRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<any>(null);

  useEffect(() => {
    // Check if we are in the browser
    if (typeof window !== 'undefined' && !playerRef.current) {
      const videoElement = document.createElement("video-js");
      videoElement.classList.add('vjs-big-play-centered');
      videoRef.current?.appendChild(videoElement);

      const player = playerRef.current = videojs(videoElement, options, () => {
        console.log('Player Ready');
      });
    }
  }, [options]);

  // Clean up to prevent memory leaks and build errors
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
    <div data-vjs-player className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
      <div ref={videoRef} />
    </div>
  );
};
