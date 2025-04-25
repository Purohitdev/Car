const ComingSoon = () => {
    return (
      <section className=" py-20 px-6 text-center">
        <h2 className="text-6xl font-bold text-gray-900 mb-4">Launching Soon!</h2>
        <p className="text-gray-600 text-lg mb-8">
          Get ready for the <span className="text-red-600 font-medium">Mechanique</span> Mobile App
        </p>
  
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-105"
          >
            <img
              src="https://i.ibb.co/BKyT0xg/App-Store.webp" // 👉 Replace with actual image
              alt="Download on the App Store"
              className="h-24"
            />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-105"
          >
            <img
              src="https://i.imgur.com/FHCeKeD.png" // 👉 Replace with actual image
              alt="Get it on Google Play"
              className="h-24"
            />
          </a>
        </div>
      </section>
    );
  };
  
  export default ComingSoon;
  