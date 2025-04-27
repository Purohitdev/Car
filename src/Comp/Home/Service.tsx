import {
  Wrench,
  Snowflake,
  ShowerHead,
  Paintbrush,
  BatteryCharging,
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
    image: "/wind.jpg", // ✅ Windshield uses image
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
  {
    icon: <Wrench className="h-6 w-6 text-red-600" />,
    title: "24x7 Breakdown",
    description: "Breakdown Support & Crane Booking Anytime",
  },
  {
    image: "/pdi.jpg", // ✅ PDI uses image
    title: "PDI",
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
    icon: <Wrench className="h-6 w-6 text-red-600" />,
    title: "RTO Services",
    description: "Registration, Transfer & Other RTO Tasks",
  },
  {
    image: "/insure.jpg", // ✅ Insurance uses image
    title: "Car Insurance",
    description: "Renewals, Claims & Comprehensive Coverage",
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

        {/* Service Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-6 text-center"
            >
              <div className="h-12 w-12 mx-auto bg-red-100 rounded-full flex items-center justify-center mb-4 overflow-hidden">
                {service.icon ? (
                  service.icon
                ) : (
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-12 w-12 object-contain"
                  />
                )}
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
