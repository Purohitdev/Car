import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What services does Mechanique.in offer?",
    answer:
      "We provide car servicing, mechanical repairs, detailing, diagnostics, oil changes, brake checks, and more—everything your car needs under one roof.",
  },
  {
    question: "Do I need an appointment for service?",
    answer:
      "Appointments are recommended for quicker service, but we also accept walk-ins depending on availability.",
  },
  {
    question: "What types of vehicles do you service?",
    answer:
      "We handle all major car brands—sedans, hatchbacks, SUVs, and even premium and luxury models.",
  },
  {
    question: "How long does a regular service take?",
    answer:
      "A standard service usually takes 2–3 hours, depending on your vehicle's condition and the services required.",
  },
  {
    question: "Can I get an estimate before work starts?",
    answer:
      "Absolutely! We provide a detailed quote before starting any repair or maintenance work.",
  },
  {
    question: "Are your mechanics certified?",
    answer:
      "Yes, our technicians are trained professionals with certifications and experience in handling various vehicle systems.",
  },
  {
    question: "Do you use original spare parts?",
    answer:
      "We use 100% genuine OEM parts to ensure your vehicle performs like new after every service.",
  },
  {
    question: "Is there any warranty on repairs?",
    answer:
      "Yes, all our repairs come with a limited warranty. Specific terms depend on the service type and parts used.",
  },
  {
    question: "Can I track my service status?",
    answer:
      "Yes, you’ll receive real-time updates via WhatsApp or SMS about your vehicle’s service progress.",
  },
  {
    question: "What payment options do you accept?",
    answer:
      "We accept UPI, debit/credit cards, net banking, and cash.",
  },
  // {
  //   question: "Do you offer emergency breakdown assistance?",
  //   answer:
  //     "Yes, we provide roadside assistance within city limits for emergencies like battery jumpstart, towing, or flat tires.",
  // },
  // {
  //   question: "Can I reschedule or cancel my appointment?",
  //   answer:
  //     "Yes, appointments can be rescheduled or cancelled via our website or customer care, ideally 24 hours in advance.",
  // },
  // {
  //   question: "Do you offer car pickup and drop service?",
  //   answer:
  //     "Yes, our free pickup and drop facility ensures a hassle-free experience for our customers.",
  // },
  // {
  //   question: "How do I book a service?",
  //   answer:
  //     "Simply visit mechanique.in, choose your service, and confirm your booking in a few clicks.",
  // },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked <span className="text-red-600">Questions</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to the most common questions about our garage services.
          </p>
        </div>

        {/* Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-lg overflow-hidden">
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center text-left px-5 py-4 bg-gray-100 hover:bg-gray-200 transition"
              >
                <span className="font-medium text-gray-800">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 text-gray-600 transform transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-5 pb-4 text-gray-700 bg-white border-t">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
