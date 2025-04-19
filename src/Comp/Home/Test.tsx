// components/TestimonialsSection.tsx
import Marquee from "react-fast-marquee";

const testimonials = [
  {
    name: "Rahul Mehra",
    location: "Jaipur",
    quote:
      "Mechanique fixed my car’s AC and did a full service in just a day. Super professional and honest pricing. Highly recommend!",
  },
  {
    name: "Sneha Verma",
    location: "Delhi",
    quote:
      "Had a major engine issue. These guys diagnosed and fixed it faster than expected. Mechanique is now my go-to garage.",
  },
  {
    name: "Amit Thakur",
    location: "Mumbai",
    quote:
      "Loved the pickup and drop service! My car feels brand new after the detailing and service package.",
  },
  {
    name: "Priya Shah",
    location: "Ahmedabad",
    quote:
      "Transparent process, quick turnaround, and genuine parts. Feels good to finally trust a garage.",
  },
  {
    name: "Zaid Khan",
    location: "Lucknow",
    quote:
      "Excellent service! Got my suspension fixed and brake pads replaced. Smooth experience from start to finish.",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="text-red-600">Customers Say</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Real stories from real people. Here's how Mechanique helped them stay on the road.
          </p>
        </div>

        {/* Marquee Testimonials */}
        <Marquee pauseOnHover speed={50} gradient={false}>
          <div className="flex gap-8 px-4">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="md:w-[40vw] w-[80vw] bg-white rounded-lg shadow-lg p-6 flex-shrink-0"
              >
                {/* Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500">★</span>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>

                {/* User Info */}
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 bg-gray-300 rounded-full overflow-hidden flex items-center justify-center text-white font-bold">
                    <img
                      src={`/placeholder.svg?height=50&width=50&text=${testimonial.name.charAt(0)}`}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default TestimonialsSection;
