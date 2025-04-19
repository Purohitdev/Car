import { CheckCircle } from "lucide-react";

const features = [
  {
    title: "Certified Mechanics",
    description: "Our technicians are trained and certified to handle all types of repairs.",
  },
  {
    title: "24/7 Breakdown Support",
    description: "Stuck on the road? We’re just one call away — anytime, anywhere.",
  },
  {
    title: "Comprehensive Services",
    description: "From oil changes to engine rebuilds, we’ve got your vehicle covered.",
  },
  {
    title: "Honest Pricing",
    description: "No hidden charges. Just transparent and fair estimates.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About Our <span className="text-red-600">Workshop</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            With over 15 years in the auto repair industry, we’ve built a reputation for reliability, professionalism,
            and customer satisfaction.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-lg hover:scale-105 transform transition duration-500 ease-in-out">
            <img
              src="https://i.pinimg.com/736x/44/8e/7a/448e7ad06d1606eaaa875613c72419ac.jpg"
              alt="Our workshop"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Text & Features */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">Driven by Passion, Backed by Skill</h3>
            <p className="text-gray-600">
              Since 2008, our workshop has been a trusted destination for vehicle owners. Whether it’s routine
              maintenance or a complex repair job, our team ensures your car is treated with the care it deserves.
            </p>

            <div className="grid md:grid-cols-1 gap-6 mt-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4 hover:scale-105 transform transition duration-200">
                  <CheckCircle className="h-8 w-8 text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg text-gray-800">{feature.title}</h4>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition duration-300 transform hover:scale-105 shadow-md">
              Learn More About Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
