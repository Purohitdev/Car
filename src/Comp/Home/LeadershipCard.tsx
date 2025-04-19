const LeadershipCard = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-6 my-18 bg-white rounded-3xl shadow-xl max-w-5xl mx-auto transition-transform hover:scale-[1.02] duration-300">
      
      {/* Left - Circular Profile Image */}
      <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg border-4 border-red-600">
        <img
          src="https://i.pinimg.com/736x/f1/ee/19/f1ee19d2487376eaf80c4632897c6f43.jpg" // 👈 Replace with actual image path
          alt="Sarvesh Kabra"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right - Text Content */}
      <div className="text-center md:text-left space-y-3 max-w-xl">
        <h2 className="text-2xl font-semibold text-gray-800">Sarvesh Kabra</h2>
        <p className="text-red-600 font-medium">Co-Founder</p>
        <p className="text-gray-600 text-base leading-relaxed">
          Tech-driven entrepreneur focused on scaling GaadiMech's operations and implementing
          cutting-edge solutions. Committed to transforming the automotive service landscape
          through the innovative 90-minute service model.
        </p>
      </div>
    </div>
  );
};

export default LeadershipCard;
