// components/Service.tsx
import { Wrench, ShieldCheck, SprayCan, ArrowRight } from "lucide-react";

const services = [
  {
    icon: <Wrench className="h-6 w-6 text-red-600" />,
    title: "General Repairs",
    description:
      "From engine issues to brake repairs, we handle all major and minor mechanical problems.",
    link: "#",
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-red-600" />,
    title: "Vehicle Diagnostics",
    description:
      "Advanced diagnostic tools to quickly identify and fix electronic or performance-related issues.",
    link: "#",
  },
  {
    icon: <SprayCan className="h-6 w-6 text-red-600" />,
    title: "Custom Paint & Detailing",
    description:
      "Bring your car back to life with custom paint jobs, polishing, ceramic coating, and detailing services.",
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
            We offer complete workshop solutions — from mechanical repairs and diagnostics to custom detailing.
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
