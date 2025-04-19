const AdvantageSection = () => {
    return (
      <section className="bg-white py-16 px-6 md:px-12 flex flex-col md:flex-row items-center justify-center gap-12 max-w-7xl mx-auto">
        {/* Left - Phone Mockup Image */}
        <div className="relative w-full max-w-sm">
          <div className="bg-white rounded-3xl shadow-2xl p-4">
            <img
              src="https://i.ibb.co/k1H7j7b/App-Frame.jpg" // 👈 Replace with your actual phone image
              alt="App Mockup"
              className="rounded-2xl"
            />
            <div className="text-center mt-6">
              <button className="bg-red-600 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-red-700 transition duration-300">
                BOOK NOW
              </button>
            </div>
          </div>
        </div>
  
        {/* Right - Text Content */}
        <div className="max-w-xl space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">
            The <span className="text-red-600">Mechanique</span> Advantage
          </h2>
          <p className="text-gray-600 text-base">
            Mechanique isn't just another car service platform. We're a complete car care ecosystem
            that puts you in control while delivering unmatched quality and convenience.
          </p>
  
          <ul className="space-y-5">
            <li className="flex items-start gap-3">
              <div className="text-red-600 text-xl">✔️</div>
              <div>
                <p className="font-semibold text-gray-800">Curated Network of Experts</p>
                <p className="text-gray-600 text-sm">Access our rigorously vetted network of professional workshops and technicians</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="text-red-600 text-xl">🛡️</div>
              <div>
                <p className="font-semibold text-gray-800">Quality Guarantee</p>
                <p className="text-gray-600 text-sm">Every service backed by our quality assurance and customer satisfaction promise</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="text-red-600 text-xl">⏱️</div>
              <div>
                <p className="font-semibold text-gray-800">Real-Time Tracking</p>
                <p className="text-gray-600 text-sm">Monitor your service progress with our transparent real-time tracking system</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="text-red-600 text-xl">🚚</div>
              <div>
                <p className="font-semibold text-gray-800">Doorstep Convenience</p>
                <p className="text-gray-600 text-sm">Enjoy pickup and drop services for ultimate convenience</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    );
  };
  
  export default AdvantageSection;
  