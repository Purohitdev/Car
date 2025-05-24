"use client";

import { useRef, useState } from "react";
import { PlayCircle, } from "lucide-react";

const featuredVideos = [
  {
    id: 1,
    title: "Introduction - Mechanique",
    subtitle: "Learn about who we are and what we offer.",
    videoUrl: "/intro.mp4",
  },
  {
    id: 2,
    title: "How to book a service on Mechanique",
    subtitle: "Step-by-step guide to book your first service easily.",
    videoUrl: "/Howtobook.mp4",
  },
];

const FeaturedCarsSection = () => {
  const videoRefs = useRef<HTMLVideoElement[]>([]);
  const [isPaused, setIsPaused] = useState<boolean[]>(featuredVideos.map(() => true));

  const handleVideoClick = (index: number) => {
    const video = videoRefs.current[index];
    if (video) {
      const updatedState = [...isPaused];
      if (video.paused) {
        video.play();
        updatedState[index] = false;
      } else {
        video.pause();
        updatedState[index] = true;
      }
      setIsPaused(updatedState);
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-3">
            Featured <span className="text-red-600">Videos</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            Explore helpful walkthroughs and get to know Mechanique better with our short videos.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {featuredVideos.map((video, index) => (
            <div
              key={video.id}
              className="w-[90%] sm:w-[320px] md:w-[390px] rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition overflow-hidden"
            >
              <div
                className="relative aspect-[9/16] cursor-pointer group"
                onClick={() => handleVideoClick(index)}
              >
                <video
                  ref={(el) => {
                    if (el) videoRefs.current[index] = el;
                  }}
                  src={video.videoUrl}
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
                {isPaused[index] && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition">
                    <PlayCircle className="text-white w-16 h-16 opacity-90 group-hover:scale-105 transition duration-200" />
                  </div>
                )}
              </div>
              <div className="p-5 bg-white">
                <h3 className="text-xl font-semibold text-gray-800 mb-1">{video.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{video.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCarsSection;
