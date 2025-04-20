// components/TestimonialsSection.tsx
import Marquee from "react-fast-marquee";

const testimonials = [
  {
    name: "Abhay Soni",
    location: "Periodic Car Service",
    quote:
      "mechanique.in has become my go-to for car servicing. They picked up my car from home, did a full checkup, and returned it spotless. The whole process was smooth and super professional!",
    img: '/Abhay.jpeg'
  },
  {
    name: "Surendra Gehlot",
    location: "Brake and Suspension Repair",
    quote:
      "I had issues with my car's suspension and brakes. Team mechanique diagnosed the problem quickly and fixed everything within a day. The team is skilled and trustworthy!",
    img: '/Surendra.jpeg'

  },
  {
    name: "Prateek Mathur",
    location: "Emergency Breakdown Assistance",
    quote:
      "My car broke down late at night, and I panicked. Team mechanique’s roadside assistance was a lifesaver. They arrived in 30 minutes and got me back on the road!",
    img: '/Prateek.jpeg'

  },
  {
    name: "Hemant Verma",
    location: "Car Detailing & Interior Cleaning",
    quote:
      "The detailing service was top-notch. My 5-year-old car looks brand new! They cleaned every corner with such perfection. Highly recommend Mechanique!",
    img: '/Hemant.jpeg'

  },
  {
    name: "Daulat Lakhani",
    location: "Battery Replacement & Diagnostics",
    quote:
      "Faced sudden battery issues during a road trip. Team Mechanique came with a new battery and installed it on the spot. Quick diagnostics and great service!",
      img: '/Daulat.jpeg'

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
                      src={testimonial.img}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="object-cover object-top"
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
