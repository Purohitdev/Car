// components/PopularCarsAndBrands.tsx
import { ChevronRight } from "lucide-react";

const popularCars = [
  {
    name: "Swift",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm37aRnfYqCuAySMxVUeZD__z3KsFw0q6aMQ&s",
  },
  {
    name: "Punch",
    image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/39015/punch-exterior-right-front-three-quarter-54.jpeg?isig=0&q=80",
  },
  {
    name: "Nexon",
    image: "https://imgd.aeplcdn.com/370x208/n/cw/ec/141867/nexon-exterior-right-front-three-quarter-75.jpeg?isig=0&q=80",
  },
];

const popularBrands = [
  {
    name: "Nissan",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4Pccxrc98AwKo8eNRDQ6BVwuNGAaNP2zFsA&s",
  },
  {
    name: "Kia",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo8gTUCq9PQr6fmhC_-HZkac1hhpjcqmauoQ&s",
  },
  {
    name: "Honda",
    image: "https://pngimg.com/d/honda_PNG102937.png",
  },
  {
    name: "Hyundai",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqMGRlQ0mQCEZiaK0B9CqH3u8i2FOC2-XTNA&s",
  },
];

export default function PopularCarsAndBrands() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      {/* Popular Cars */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-2 text-center">
          Popular <span className="text-red-500">Car Models</span> Servicing
        </h2>
        <p className="text-center text-gray-500 mb-10">
          Get servicing for top car models in jaipur.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {popularCars.map((car, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-4 flex flex-col items-center text-center"
            >
              <img
                src={car.image}
                alt={car.name}
                className="h-40 object-contain mb-4"
              />
              <h3 className="text-lg font-semibold">{car.name}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Brands */}
      <div>
        <h2 className="text-3xl font-bold mb-2 text-center">
          Popular <span className="text-red-500">Brands</span> Servicing
        </h2>
        <p className="text-center text-gray-500 mb-10">
          Top brands we service across jaipur.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {popularBrands.map((brand, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-4 flex flex-col items-center text-center"
            >
              <img
                src={brand.image}
                alt={brand.name}
                className="h-20 object-contain mb-4"
              />
              <h3 className="text-lg font-semibold">{brand.name}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Button */}
      <div className="flex justify-center mt-12">
        <button className="flex items-center gap-2 px-6 py-3 border-2 border-red-500 text-red-500 font-semibold rounded-full hover:bg-red-500 hover:text-white transition">
          View All
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
}
