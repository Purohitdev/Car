// // components/Search.tsx
// import React, { useState } from "react";
// import { MapPin, Clock } from "lucide-react";

// const Search: React.FC = () => {
//   const [activeTab, setActiveTab] = useState<"rent" | "return">("rent");

//   return (
//     <section className="bg-gray-100 py-12">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="bg-white rounded-xl shadow-lg p-6 -mt-20 relative z-20">
//           {/* Tabs Header */}
//           <div className="grid grid-cols-2 mb-6 border rounded-md overflow-hidden">
//             <button
//               onClick={() => setActiveTab("rent")}
//               className={`text-lg py-2 font-medium ${
//                 activeTab === "rent"
//                   ? "bg-red-600 text-white"
//                   : "bg-white text-gray-700 hover:bg-gray-100"
//               } transition`}
//             >
//               Rent a Car
//             </button>
//             <button
//               onClick={() => setActiveTab("return")}
//               className={`text-lg py-2 font-medium ${
//                 activeTab === "return"
//                   ? "bg-red-600 text-white"
//                   : "bg-white text-gray-700 hover:bg-gray-100"
//               } transition`}
//             >
//               Return a Car
//             </button>
//           </div>

//           {/* Rent Form */}
//           {activeTab === "rent" && (
//             <div className="space-y-4">
//               <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//                 <div className="space-y-2">
//                   <label className="text-sm font-medium">Pick-up Location</label>
//                   <div className="flex items-center border rounded-md p-2">
//                     <MapPin className="h-5 w-5 text-gray-500 mr-2" />
//                     <input
//                       type="text"
//                       placeholder="City, Airport, etc."
//                       className="w-full outline-none bg-transparent"
//                     />
//                   </div>
//                 </div>

//                 <div className="space-y-2">
//                   <label className="text-sm font-medium">Pick-up Date</label>
//                   <div className="flex items-center border rounded-md p-2">
//                     <Clock className="h-5 w-5 text-gray-500 mr-2" />
//                     <input
//                       type="date"
//                       className="w-full outline-none bg-transparent"
//                     />
//                   </div>
//                 </div>

//                 <div className="space-y-2">
//                   <label className="text-sm font-medium">Return Date</label>
//                   <div className="flex items-center border rounded-md p-2">
//                     <Clock className="h-5 w-5 text-gray-500 mr-2" />
//                     <input
//                       type="date"
//                       className="w-full outline-none bg-transparent"
//                     />
//                   </div>
//                 </div>

//                 <div className="flex items-end mt-6">
//                   <button className="w-full bg-red-600 hover:bg-red-700 text-white h-12 rounded font-medium transition">
//                     Search Cars
//                   </button>
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* Return Form */}
//           {activeTab === "return" && (
//             <div className="space-y-4">
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                 <div className="space-y-2">
//                   <label className="text-sm font-medium">Booking Reference</label>
//                   <input
//                     type="text"
//                     placeholder="Enter your booking reference"
//                     className="w-full border rounded-md p-2 outline-none"
//                   />
//                 </div>

//                 <div className="space-y-2">
//                   <label className="text-sm font-medium">Return Location</label>
//                   <div className="flex items-center border rounded-md p-2">
//                     <MapPin className="h-5 w-5 text-gray-500 mr-2" />
//                     <input
//                       type="text"
//                       placeholder="City, Airport, etc."
//                       className="w-full outline-none bg-transparent"
//                     />
//                   </div>
//                 </div>

//                 <div className="flex items-end mt-6">
//                   <button className="w-full bg-red-600 hover:bg-red-700 text-white h-12 rounded font-medium transition">
//                     Process Return
//                   </button>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Search;


import React, { useState } from "react";
import { MapPin, Clock } from "lucide-react";

const Search: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"rent" | "return">("rent");

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-lg p-8 -mt-20 relative z-20">
          {/* Tabs Header */}
          <div className="grid grid-cols-2 mb-6 border rounded-lg overflow-hidden shadow-sm">
            <button
              onClick={() => setActiveTab("rent")}
              className={`text-lg py-3 font-semibold transition-all duration-300 ${
                activeTab === "rent"
                  ? "bg-red-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-200"
              } rounded-t-lg shadow-sm hover:shadow-md`}
            >
              Rent a Car
            </button>
            <button
              onClick={() => setActiveTab("return")}
              className={`text-lg py-3 font-semibold transition-all duration-300 ${
                activeTab === "return"
                  ? "bg-red-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-200"
              } rounded-t-lg shadow-sm hover:shadow-md`}
            >
              Return a Car
            </button>
          </div>

          {/* Rent Form */}
          {activeTab === "rent" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Pick-up Location</label>
                  <div className="flex items-center border rounded-lg p-3 shadow-md hover:shadow-lg transition duration-200">
                    <MapPin className="h-5 w-5 text-gray-500 mr-3" />
                    <input
                      type="text"
                      placeholder="City, Airport, etc."
                      className="w-full outline-none bg-transparent focus:ring-2 focus:ring-red-600"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Pick-up Date</label>
                  <div className="flex items-center border rounded-lg p-3 shadow-md hover:shadow-lg transition duration-200">
                    <Clock className="h-5 w-5 text-gray-500 mr-3" />
                    <input
                      type="date"
                      className="w-full outline-none bg-transparent focus:ring-2 focus:ring-red-600"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Return Date</label>
                  <div className="flex items-center border rounded-lg p-3 shadow-md hover:shadow-lg transition duration-200">
                    <Clock className="h-5 w-5 text-gray-500 mr-3" />
                    <input
                      type="date"
                      className="w-full outline-none bg-transparent focus:ring-2 focus:ring-red-600"
                    />
                  </div>
                </div>

                <div className="flex items-end mt-6">
                  <button className="w-full bg-red-600 hover:bg-red-700 text-white h-12 rounded-lg font-semibold transition duration-300 transform hover:scale-105 shadow-md">
                    Search Cars
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Return Form */}
          {activeTab === "return" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Booking Reference</label>
                  <input
                    type="text"
                    placeholder="Enter your booking reference"
                    className="w-full border rounded-lg p-3 outline-none shadow-md hover:shadow-lg focus:ring-2 focus:ring-red-600"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Return Location</label>
                  <div className="flex items-center border rounded-lg p-3 shadow-md hover:shadow-lg transition duration-200">
                    <MapPin className="h-5 w-5 text-gray-500 mr-3" />
                    <input
                      type="text"
                      placeholder="City, Airport, etc."
                      className="w-full outline-none bg-transparent focus:ring-2 focus:ring-red-600"
                    />
                  </div>
                </div>

                <div className="flex items-end mt-6">
                  <button className="w-full bg-red-600 hover:bg-red-700 text-white h-12 rounded-lg font-semibold transition duration-300 transform hover:scale-105 shadow-md">
                    Process Return
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Search;
