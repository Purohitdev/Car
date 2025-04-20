// components/Service.tsx
import {
  Wrench,
  Snowflake,
  ShowerHead,
  Paintbrush,
  BatteryCharging,
  ShieldCheck,
  Sparkles,
  CircleDashed,
} from "lucide-react";

const services = [
  {
    icon: <Wrench className="h-6 w-6 text-red-600" />,
    title: "Periodic Service",
    description: "Regular Maintenance and Servicing",
  },
  {
    icon: <Snowflake className="h-6 w-6 text-red-600" />,
    title: "AC Service",
    description: "Professional Car AC Repair and Maintenance",
  },
  {
    icon: <ShowerHead className="h-6 w-6 text-red-600" />,
    title: "Car Spa & Cleaning",
    description: "Professional Car Cleaning Services",
  },
  {
    icon: <Paintbrush className="h-6 w-6 text-red-600" />,
    title: "Denting & Painting",
    description: "Expert Dent Removal and Painting Services",
  },
  {
    icon: <BatteryCharging className="h-6 w-6 text-red-600" />,
    title: "Battery Service",
    description: "Battery Check, Repair and Replacement",
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-red-600" />,
    title: "Windshield Service",
    description: "Windshield Repair and Replacement",
  },
  {
    icon: <Sparkles className="h-6 w-6 text-red-600" />,
    title: "Car Detailing",
    description: "Professional Car Detailing Services",
  },
  {
    icon: <CircleDashed className="h-6 w-6 text-red-600" />,
    title: "Tyre Service",
    description: "Tyre Maintenance and Replacement",
  },

  // NEW ITEMS BELOW
  {
    icon: <Wrench className="h-6 w-6 text-red-600" />,
    title: "24x7 Breakdown",
    description: "Breakdown Support & Crane Booking Anytime",
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-red-600" />,
    title: "PDI ",
    description: "Pre-delivery Inspection for Used & New Cars",
  },
  {
    icon: <Sparkles className="h-6 w-6 text-red-600" />,
    title: "Car Accessories",
    description: "Installations & Customization Options",
  },
  {
    icon: <CircleDashed className="h-6 w-6 text-red-600" />,
    title: "Car Finance & Loans",
    description: "Affordable Finance for New & Used Cars",
  },
  {
    icon: <Wrench className="h-6 w-6 text-red-600" />,
    title: "Car Sales",
    description: "Buy, Sell or Exchange Cars Easily",
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-red-600" />,
    title: "RTO Services",
    description: "Registration, Transfer & Other RTO Tasks",
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
          <p className="text-gray-600">Aapki Gaadi, Hamari Zimmedari</p>
        </div>

        {/* Express Car Service Banner */}
        <div className="bg-white border-l-4 border-red-500 shadow-md p-6 rounded-lg mb-12 relative">
          <div className="absolute top-0 right-0 bg-gradient-to-r from-red-500 to-red-700 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
            Super Fast
          </div>
          <h3 className="text-xl font-semibold text-red-600 mb-2">
            Why Wait All Day?
          </h3>
          <p className="text-gray-800 mb-1">
            Get Premium Car Service in 90 Minutes for 20% Less
          </p>
          <p className="text-orange-500 text-sm italic mb-4">
            Fast, Affordable, Done Right!
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-medium">
              🚗 90-Minute Service
            </button>
            <button className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-red-700 transition">
              Schedule Slot Now
            </button>
          </div>
        </div>

        {/* Service Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-6 text-center"
            >
              <div className="h-12 w-12 mx-auto bg-red-100 rounded-full flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                {service.title}
              </h4>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
