import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What types of vehicles do you service?",
    answer:
      "We service all types of vehicles including hatchbacks, sedans, SUVs, and even commercial vehicles. Whether it's a regular service or a complex engine repair — we’ve got you covered.",
  },
  {
    question: "Do I need to book an appointment?",
    answer:
      "While walk-ins are welcome, we recommend booking an appointment to ensure faster service and guaranteed slot availability, especially during weekends or peak hours.",
  },
  {
    question: "Can I get a cost estimate before the repair?",
    answer:
      "Absolutely! After a quick diagnosis, we provide a transparent estimate before any work begins. No hidden charges, just honest pricing.",
  },
  {
    question: "Do you use genuine spare parts?",
    answer:
      "Yes, we only use genuine or OEM-approved parts to ensure the best performance and durability for your vehicle.",
  },
  {
    question: "Is there a warranty on your repairs?",
    answer:
      "Yes! Most of our services come with a service warranty ranging from 15 days to 6 months depending on the type of repair.",
  },
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
