
const LeadershipCard = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 p-8 my-20 bg-white rounded-3xl shadow-2xl max-w-6xl mx-auto transition-transform duration-300 hover:scale-[1.02]">

      {/* Left - Circular Profile Image */}
      <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-red-600 shadow-md">
        <img
          src="/founder.jpeg"
          alt="Sarvesh Kabra"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right - Text Content */}
      <div className="text-center md:text-left space-y-4 max-w-2xl">
        <h2 className="text-3xl font-bold text-gray-800">Asmit Ssingh</h2>
        <p className="text-red-600 text-lg font-medium">Founder</p>
        <p className="text-gray-600 text-base leading-relaxed">
          Meet <strong>Asmit Ssingh</strong>, a true automobile enthusiast whose journey into the automotive world was fueled by a deep love for cars. An engineer by qualification and a musician by soul, he brings a unique blend of precision and creativity to everything he does.
          <br /><br />
          With over 10 years of hands-on experience, he possesses in-depth knowledge of the entire automotive spectrum — from entry-level hatchbacks to high-end luxury supercars.
          <br /><br />
          His passion goes beyond engines and horsepower — it’s about the emotion behind the wheel, the design language of every curve, and the engineering marvel beneath the hood. Whether it’s guiding buyers, reviewing machines, or simply talking torque and tech, he does it with unmatched clarity and heart.
        </p>
      </div>
    </div>
  );
};

export default LeadershipCard;

