

import React, { useState } from "react";
import { MapPin, Clock } from "lucide-react";

const Search: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"book" | "return">("book");

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-lg p-8 -mt-20 relative z-20">
          {/* Tabs Header */}
          <div className="grid grid-cols-2 mb-6 border rounded-lg overflow-hidden shadow-sm">
            <button
              onClick={() => setActiveTab("book")}
              className={`text-lg py-3 font-semibold transition-all duration-300 ${
                activeTab === "book"
                  ? "bg-red-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-200"
              } rounded-t-lg shadow-sm hover:shadow-md`}
            >
              Book a Service
            </button>
            <button
              onClick={() => setActiveTab("return")}
              className={`text-lg py-3 font-semibold transition-all duration-300 ${
                activeTab === "return"
                  ? "bg-red-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-200"
              } rounded-t-lg shadow-sm hover:shadow-md`}
            >
              Return a Mechanic Service
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
                    <option value="engine">Engine Repair</option>
                    <option value="oil-change">Oil Change</option>
                    <option value="tyre">Tyre Replacement</option>
                    <option value="battery">Battery Check</option>
                    <option value="general">General Maintenance</option>
                  </select>
                </div>

                {/* Location */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Service Location</label>
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

                {/* Time */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Service Time</label>
                  <div className="flex items-center border rounded-lg p-3 shadow-md hover:shadow-lg transition duration-200">
                    <Clock className="h-5 w-5 text-gray-500 mr-3" />
                    <input
                      type="time"
                      className="w-full outline-none bg-transparent focus:ring-2 focus:ring-red-600"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <button className="bg-red-600 hover:bg-red-700 text-white h-12 px-6 rounded-lg font-semibold transition duration-300 transform hover:scale-105 shadow-md">
                  Book a Service
                </button>
              </div>
            </div>
          )}

          {/* Return Form */}
          {activeTab === "return" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Booking Reference */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Booking Reference</label>
                  <input
                    type="text"
                    placeholder="Enter your booking reference"
                    className="w-full border rounded-lg p-3 outline-none shadow-md hover:shadow-lg focus:ring-2 focus:ring-red-600"
                  />
                </div>

                {/* Return Location */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Service Return Location</label>
                  <div className="flex items-center border rounded-lg p-3 shadow-md hover:shadow-lg transition duration-200">
                    <MapPin className="h-5 w-5 text-gray-500 mr-3" />
                    <input
                      type="text"
                      placeholder="City, Address, etc."
                      className="w-full outline-none bg-transparent focus:ring-2 focus:ring-red-600"
                    />
                  </div>
                </div>

                {/* Service Type */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Service Type</label>
                  <select className="w-full border rounded-lg p-3 outline-none shadow-md hover:shadow-lg focus:ring-2 focus:ring-red-600">
                    <option value="">Select the returned service</option>
                    <option value="engine">Engine Repair</option>
                    <option value="oil-change">Oil Change</option>
                    <option value="tyre">Tyre Replacement</option>
                    <option value="battery">Battery Check</option>
                    <option value="general">General Maintenance</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-end">
                <button className="bg-red-600 hover:bg-red-700 text-white h-12 px-6 rounded-lg font-semibold transition duration-300 transform hover:scale-105 shadow-md">
                  Process Return
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
