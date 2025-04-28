import React, { useRef, useState, useEffect } from "react";
import { MapPin, Clock } from "lucide-react";
import emailjs from "emailjs-com";
import { Transition } from "@headlessui/react";

const Modelsec: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    emailjs.sendForm(
      "service_45ojwmu",
      "template_k5acskd",
      formRef.current,
      "4I-m1sMQfVIm6XNCu"
    ).then(
      (result) => {
        console.log("SUCCESS!", result.text);
        alert("Service booked successfully! ✅");
        formRef.current?.reset();
      },
      (error) => {
        console.error("FAILED...", error.text);
        alert("Failed to book service ❌");
      }
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setShowModal(true);
    }, 60000); 
    return () => clearInterval(interval);
  }, []);

  const closeModal = () => setShowModal(false);

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <Transition
          show={showModal}
          enter="transition transform duration-300 ease-out"
          enterFrom="scale-75 opacity-0"
          enterTo="scale-100 opacity-100"
          leave="transition transform duration-200 ease-in"
          leaveFrom="scale-100 opacity-100"
          leaveTo="scale-75 opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-20 flex justify-center items-center z-50">
            <div className="bg-white rounded-2xl shadow-xl p-6 w-[90%] max-w-md relative">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl"
              >
                &times;
              </button>

              <h2 className="text-2xl font-bold text-center mb-6">
                Schedule Your Service
              </h2>

              <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
                {/* Service */}
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Select Service *
                  </label>
                  <select
                    name="service"
                    required
                    className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-orange-500"
                  >
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
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Your Location *
                  </label>
                  <div className="flex items-center border rounded-lg p-3">
                    <MapPin className="h-5 w-5 text-gray-400 mr-2" />
                    <input
                      name="location"
                      type="text"
                      placeholder="City, Address, etc."
                      className="w-full outline-none bg-transparent"
                      required
                    />
                  </div>
                </div>

                {/* Service Date */}
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Service Date *
                  </label>
                  <div className="flex items-center border rounded-lg p-3">
                    <Clock className="h-5 w-5 text-gray-400 mr-2" />
                    <input
                      name="service_date"
                      type="date"
                      className="w-full outline-none bg-transparent"
                      required
                    />
                  </div>
                </div>

                {/* Car Brand */}
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Car Brand *
                  </label>
                  <input
                    name="car_brand"
                    type="text"
                    placeholder="e.g., Hyundai, Maruti"
                    className="w-full border rounded-lg p-3 outline-none"
                    required
                  />
                </div>

                {/* Car Model */}
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Car Model *
                  </label>
                  <input
                    name="car_model"
                    type="text"
                    placeholder="e.g., i20, Swift"
                    className="w-full border rounded-lg p-3 outline-none"
                    required
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Phone Number *
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    className="w-full border rounded-lg p-3 outline-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="bg-red-600 hover:bg-red-600 text-white font-semibold py-3 rounded-lg w-full transition"
                >
                  Schedule Service
                </button>
              </form>
            </div>
          </div>
        </Transition>
      </div>
    </section>
  );
};

export default Modelsec;
