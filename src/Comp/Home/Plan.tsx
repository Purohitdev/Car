import { CheckCircle } from "lucide-react";

const goals = [
  {
    title: "Top-Notch Service",
    desc: "Delivering reliable, honest, and high-quality automotive repair services every time.",
  },
  {
    title: "Skilled Technicians",
    desc: "Continuously training our team to stay ahead with the latest tools and repair techniques.",
  },
  {
    title: "Tech-Driven Repairs",
    desc: "Integrating modern diagnostic tools and digital service records for transparency and speed.",
  },
  {
    title: "Customer Trust",
    desc: "Building long-term relationships through integrity, timely work, and clear communication.",
  },
];

const Plans = () => {
  return (
    <section id="goals" className="py-20 bg-gray-100 text-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-red-600">Vision</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're on a mission to redefine car care with transparency, skill, and customer-first values.
          </p>
        </div>

        {/* Goals Grid */}
        <div className="grid md:grid-cols-4 gap-8">
          {goals.map((goal, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="h-16 w-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">{goal.title}</h3>
              <p className="text-gray-600">{goal.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;
