// components/Service.tsx
import { Car, Users, MapPin, ArrowRight } from "lucide-react";

const services = [
  {
    icon: <Car className="h-6 w-6 text-red-600" />,
    title: "Car Rental",
    description:
      "Choose from our wide selection of vehicles for your daily, weekly, or monthly rental needs.",
    link: "#",
  },
  {
    icon: <Users className="h-6 w-6 text-red-600" />,
    title: "Corporate Rentals",
    description:
      "Special rates and services for businesses, with dedicated account management and flexible billing.",
    link: "#",
  },
  {
    icon: <MapPin className="h-6 w-6 text-red-600" />,
    title: "Airport Transfers",
    description:
      "Convenient pickup and drop-off services at major airports, with meet and greet options available.",
    link: "#",
  },
];

const Service = () => {
  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-red-600">Services</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a wide range of services to meet all your car rental needs, from short-term rentals to
            long-term leases.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6"
            >
              <div className="h-12 w-12 bg-red-100 rounded-full flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <a
                href={service.link}
                className="text-red-600 font-medium flex items-center gap-2 hover:gap-3 transition-all"
              >
                Learn More <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
