// components/TestimonialsSection.tsx
import Marquee from "react-fast-marquee";

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "New York",
    quote:
      "The service was exceptional! The car was clean, well-maintained, and the pickup process was quick and easy. Will definitely use again.",
  },
  {
    name: "Michael Chen",
    location: "Los Angeles",
    quote:
      "I've rented from many companies, but CarRental stands out for their customer service and quality vehicles. Highly recommended!",
  },
  {
    name: "Emily Rodriguez",
    location: "Chicago",
    quote:
      "The online booking process was seamless, and the staff was friendly and professional. The car was perfect for our family vacation.",
  },
  {
    name: "Liam Patel",
    location: "San Francisco",
    quote:
      "Excellent experience! The car ran perfectly, and the return process was smooth and hassle-free. Five stars!",
  },
  {
    name: "Ava Thompson",
    location: "Miami",
    quote:
      "We were in a rush and the team helped us get on the road in minutes. Incredible efficiency and service!",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Customer <span className="text-red-600">Testimonials</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See what our satisfied customers have to say about their experience with us.
          </p>
        </div>

        {/* Marquee Testimonials */}
        <Marquee pauseOnHover speed={50} gradient={false}>
          <div className="flex gap-8 px-4 ">
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
