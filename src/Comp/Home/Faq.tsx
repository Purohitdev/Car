// // components/FaqSection.tsx
// import { useState } from "react";
// import { ChevronDown } from "lucide-react";

// const faqs = [
//   {
//     question: "What documents do I need to rent a car?",
//     answer:
//       "You'll need a valid driver's license, a credit card in your name, and a form of identification (such as a passport). International renters may need additional documentation.",
//   },
//   {
//     question: "Is there a minimum age requirement to rent a car?",
//     answer:
//       "Yes, the minimum age to rent a car is typically 21 years old. However, renters under 25 may be subject to a young driver surcharge.",
//   },
//   {
//     question: "Can I modify or cancel my reservation?",
//     answer:
//       "Yes, you can modify or cancel your reservation online or by calling our customer service. Cancellation policies vary depending on the type of reservation.",
//   },
//   {
//     question: "Do you offer one-way rentals?",
//     answer:
//       "Yes, we offer one-way rentals between many of our locations. Additional fees may apply depending on the pickup and drop-off locations.",
//   },
//   {
//     question: "What is your fuel policy?",
//     answer:
//       'Our standard policy is "full-to-full." This means you\'ll receive the car with a full tank and are expected to return it with a full tank. If you return the car with less fuel, you\'ll be charged for the missing fuel plus a refueling service fee.',
//   },
// ];

// const FaqSection = () => {
//   const [openIndex, setOpenIndex] = useState<number | null>(null);

//   const toggle = (index: number) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <section id="faq" className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">
//             Frequently Asked <span className="text-red-600">Questions</span>
//           </h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Find answers to common questions about our car rental services.
//           </p>
//         </div>

//         {/* Accordion */}
//         <div className="max-w-3xl mx-auto space-y-4">
//           {faqs.map((faq, index) => (
//             <div key={index} className="border rounded-lg overflow-hidden">
//               <button
//                 onClick={() => toggle(index)}
//                 className="w-full flex justify-between items-center text-left px-5 py-4 bg-gray-100 hover:bg-gray-200 transition"
//               >
//                 <span className="font-medium text-gray-800">{faq.question}</span>
//                 <ChevronDown
//                   className={`h-5 w-5 text-gray-600 transform transition-transform duration-200 ${
//                     openIndex === index ? "rotate-180" : ""
//                   }`}
//                 />
//               </button>
//               {openIndex === index && (
//                 <div className="px-5 pb-4 text-gray-700 bg-white border-t">
//                   {faq.answer}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FaqSection;


// components/FaqSection.tsx
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What documents do I need to rent a car?",
    answer:
      "You'll need a valid driver's license, a credit card in your name, and a form of identification (such as a passport). International renters may need additional documentation.",
  },
  {
    question: "Is there a minimum age requirement to rent a car?",
    answer:
      "Yes, the minimum age to rent a car is typically 21 years old. However, renters under 25 may be subject to a young driver surcharge.",
  },
  {
    question: "Can I modify or cancel my reservation?",
    answer:
      "Yes, you can modify or cancel your reservation online or by calling our customer service. Cancellation policies vary depending on the type of reservation.",
  },
  {
    question: "Do you offer one-way rentals?",
    answer:
      "Yes, we offer one-way rentals between many of our locations. Additional fees may apply depending on the pickup and drop-off locations.",
  },
  {
    question: "What is your fuel policy?",
    answer:
      'Our standard policy is "full-to-full." This means you\'ll receive the car with a full tank and are expected to return it with a full tank. If you return the car with less fuel, you\'ll be charged for the missing fuel plus a refueling service fee.',
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
            Find answers to common questions about our car rental services.
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

