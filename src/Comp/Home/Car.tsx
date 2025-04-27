"use client";

import { useRef } from "react";

const featuredVideos = [
  {
    id: 1,
    title: "Introduction - Mechanique",
    subtitle: "Learn about who we are and what we offer.",
    videoUrl: "https://videos.pexels.com/video-files/3066463/3066463-uhd_2732_1440_24fps.mp4",
  },
  {
    id: 2,
    title: "How to book a service on Mechanique",
    subtitle: "Step-by-step guide to book your first service easily.",
    videoUrl: "/v1.mp4",
  },
  {
    id: 3,
    title: "How to apply for Mechanique Franchise",
    subtitle: "Become a part of our growing network by applying today.",
    videoUrl: "/v2.mp4",
  },
];

const FeaturedCarsSection = () => {
  const videoRefs = useRef<HTMLVideoElement[]>([]);

  const handleVideoClick = (index: number) => {
    const videoElement = videoRefs.current[index];
    if (videoElement) {
      // Unmute before fullscreen
      videoElement.muted = false;

      // Try to enter fullscreen
      if (videoElement.requestFullscreen) {
        videoElement.requestFullscreen();
      } else if ((videoElement as any).webkitRequestFullscreen) {
        (videoElement as any).webkitRequestFullscreen();
      } else if ((videoElement as any).mozRequestFullScreen) {
        (videoElement as any).mozRequestFullScreen();
      } else if ((videoElement as any).msRequestFullscreen) {
        (videoElement as any).msRequestFullscreen();
      }

      // Play video with audio
      videoElement.play();
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-red-600">Videos</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Learn more about Mechanique through these quick video guides.
          </p>
        </div>

        {/* Videos */}
        <div className="grid md:grid-cols-3 gap-8">
          {featuredVideos.map((video, index) => (
            <div
              key={video.id}
              className="overflow-hidden rounded-lg bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div
                className="relative h-48 bg-black cursor-pointer"
                onClick={() => handleVideoClick(index)}
              >
                <video
                  ref={(el) => {
                    if (el) videoRefs.current[index] = el;
                  }}
                  src={video.videoUrl}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-red-600 mb-2">{video.title}</h3>
                <p className="text-gray-600 text-sm">{video.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCarsSection;
