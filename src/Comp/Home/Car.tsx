// components/FeaturedCarsSection.tsx
const featuredVideos = [
  {
    id: 1,
    title: "Introduction - Mechanique",
    subtitle: "Learn about who we are and what we offer.",
    videoUrl: "https://videos.pexels.com/video-files/3066463/3066463-uhd_2732_1440_24fps.mp4", // Placeholder video
  },
  {
    id: 2,
    title: "How to book a service on Mechanique",
    subtitle: "Step-by-step guide to book your first service easily.",
    videoUrl: "/v1.mp4", // Placeholder video
  },
  {
    id: 3,
    title: "How to apply for Mechanique Franchise",
    subtitle: "Become a part of our growing network by applying today.",
    videoUrl: "/v2.mp4", // Placeholder video
  },
];

const FeaturedCarsSection = () => {
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
          {featuredVideos.map((video) => (
            <div
              key={video.id}
              className="overflow-hidden rounded-lg bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48 bg-black">
                <video
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
