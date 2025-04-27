import React, { useState } from "react";
import { MapPin, Clock } from "lucide-react";

const Search: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"book">("book");

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-lg p-8 -mt-20 relative z-20">
          {/* Tabs Header */}
          <div className="grid grid-cols-1 mb-6 border rounded-lg overflow-hidden shadow-sm w-1/2">
            <button
              onClick={() => setActiveTab("book")}
              className="text-lg py-3 font-semibold transition-all duration-300 bg-red-600 text-white rounded-t-lg shadow-sm hover:shadow-md w-full"
            >
              Book a Service
            </button>
          </div>

          {/* Book Form */}
          {activeTab === "book" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {/* Service Type */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Select Service</label>
                  <select className="w-full border rounded-lg p-3 outline-none shadow-md hover:shadow-lg focus:ring-2 focus:ring-red-600">
                    <option value="">Choose a service</option>
                    <option value="periodic-service">Periodic Service</option>
                    <option value="ac-service">AC Service</option>
                    <option value="car-spa-cleaning">Car Spa & Cleaning</option>
                    <option value="denting-painting">Denting & Painting</option>
                    <option value="battery-service">Battery Service</option>
                    <option value="windshield-service">Windshield Service</option>
                    <option value="car-detailing">Car Detailing</option>
                    <option value="tyre-service">Tyre Service</option>
                    <option value="24x7-breakdown">24x7 Breakdown</option>
                    <option value="pdi">PDI</option>
                    <option value="car-accessories">Car Accessories</option>
                    <option value="car-finance-loans">Car Finance & Loans</option>
                    <option value="car-sales">Car Sales</option>
                    <option value="rto-services">RTO Services</option>
                    <option value="car-insurance">Car Insurance</option>
                  </select>
                </div>

                {/* Location */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Your Location</label>
                  <div className="flex items-center border rounded-lg p-3 shadow-md hover:shadow-lg transition duration-200">
                    <MapPin className="h-5 w-5 text-gray-500 mr-3" />
                    <input
                      type="text"
                      placeholder="City, Address, etc."
                      className="w-full outline-none bg-transparent focus:ring-2 focus:ring-red-600"
                    />
                  </div>
                </div>

                {/* Date */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Service Date</label>
                  <div className="flex items-center border rounded-lg p-3 shadow-md hover:shadow-lg transition duration-200">
                    <Clock className="h-5 w-5 text-gray-500 mr-3" />
                    <input
                      type="date"
                      className="w-full outline-none bg-transparent focus:ring-2 focus:ring-red-600"
                    />
                  </div>
                </div>

                {/* Car Brand */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Car Brand</label>
                  <input
                    type="text"
                    placeholder="Eg: Hyundai, Maruti"
                    className="w-full border rounded-lg p-3 outline-none shadow-md hover:shadow-lg focus:ring-2 focus:ring-red-600"
                  />
                </div>

                {/* Car Model */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Car Model</label>
                  <input
                    type="text"
                    placeholder="Eg: i20, Swift"
                    className="w-full border rounded-lg p-3 outline-none shadow-md hover:shadow-lg focus:ring-2 focus:ring-red-600"
                  />
                </div>

                {/* Phone Number */}
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-medium">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    className="w-full border rounded-lg p-3 outline-none shadow-md hover:shadow-lg focus:ring-2 focus:ring-red-600"
                  />
                </div>
              </div>

              <div className="flex justify-end">
                <button className="bg-red-600 hover:bg-red-700 text-white h-12 px-6 rounded-lg font-semibold transition duration-300 transform hover:scale-105 shadow-md">
                  Book a Service
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Search;
