// // components/About.tsx
// import { CheckCircle } from "lucide-react";

// const features = [
//   {
//     title: "Quality Vehicles",
//     description: "All our cars are regularly maintained and inspected",
//   },
//   {
//     title: "24/7 Support",
//     description: "Our customer service team is always available",
//   },
//   {
//     title: "Flexible Rental",
//     description: "Daily, weekly, and monthly rental options",
//   },
//   {
//     title: "No Hidden Fees",
//     description: "Transparent pricing with no surprises",
//   },
// ];

// const About = () => {
//   return (
//     <section id="about" className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4">
//         {/* Section Header */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">
//             About Our <span className="text-red-600">Company</span>
//           </h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             We've been in the car rental business for over 15 years, providing quality vehicles and exceptional
//             service to our customers.
//           </p>
//         </div>

//         {/* Content Grid */}
//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           {/* Image */}
//           <div className="h-[400px] rounded-lg overflow-hidden">
//             <img
//               src="https://i.pinimg.com/736x/44/8e/7a/448e7ad06d1606eaaa875613c72419ac.jpg"
//               alt="About our company"
//               className="w-full h-full object-cover"
//             />
//           </div>

//           {/* Text & Features */}
//           <div className="space-y-6">
//             <h3 className="text-2xl font-bold">Your Journey, Our Passion</h3>
//             <p className="text-gray-600">
//               Founded in 2008, CarRental has grown from a small local business to one of the leading car rental
//               services in the country. Our mission is to provide affordable, reliable, and convenient car rental
//               solutions for all your travel needs.
//             </p>

//             <div className="grid grid-cols-2 gap-4">
//               {features.map((feature, index) => (
//                 <div key={index} className="flex items-start gap-2">
//                   <CheckCircle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
//                   <div>
//                     <h4 className="font-medium">{feature.title}</h4>
//                     <p className="text-sm text-gray-600">{feature.description}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* CTA */}
//             <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded font-medium transition">
//               Learn More About Us
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;


import { CheckCircle } from "lucide-react";

const features = [
  {
    title: "Quality Vehicles",
    description: "All our cars are regularly maintained and inspected",
  },
  {
    title: "24/7 Support",
    description: "Our customer service team is always available",
  },
  {
    title: "Flexible Rental",
    description: "Daily, weekly, and monthly rental options",
  },
  {
    title: "No Hidden Fees",
    description: "Transparent pricing with no surprises",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About Our <span className="text-red-600">Company</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We've been in the car rental business for over 15 years, providing quality vehicles and exceptional
            service to our customers.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-lg hover:scale-105 transform transition duration-500 ease-in-out">
            <img
              src="https://i.pinimg.com/736x/44/8e/7a/448e7ad06d1606eaaa875613c72419ac.jpg"
              alt="About our company"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Text & Features */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">Your Journey, Our Passion</h3>
            <p className="text-gray-600">
              Founded in 2008, CarRental has grown from a small local business to one of the leading car rental
              services in the country. Our mission is to provide affordable, reliable, and convenient car rental
              solutions for all your travel needs.
            </p>

            <div className="grid  md:grid-cols-1 gap-6 mt-6">
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
