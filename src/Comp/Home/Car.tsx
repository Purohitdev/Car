// components/FeaturedCarsSection.tsx
import { Car, Users, Star } from "lucide-react";

const featuredCars = [
  {
    id: 1,
    name: "SUV Premium",
    rating: 4.8,
    seats: 5,
    transmission: "Automatic",
    price: 89,
    image: `https://i.pinimg.com/736x/c3/11/81/c31181b512254a69932040217c9c7969.jpg`,
  },
  {
    id: 2,
    name: "Luxury Sedan",
    rating: 4.7,
    seats: 5,
    transmission: "Automatic",
    price: 99,
    image: `https://i.pinimg.com/736x/13/5e/7f/135e7fd0b90481f19e39547d82763956.jpg`,
  },
  {
    id: 3,
    name: "Economy Hatchback",
    rating: 4.5,
    seats: 4,
    transmission: "Manual",
    price: 59,
    image: `https://i.pinimg.com/736x/09/e2/05/09e205bde731e0106606a0aef9e8a4fb.jpg`,
  },
];

const FeaturedCarsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-red-600">Cars</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our most popular rental vehicles, perfect for any occasion or travel need.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {featuredCars.map((car) => (
            <div
              key={car.id}
              className="overflow-hidden rounded-lg bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-bold">{car.name}</h3>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-sm font-medium">{car.rating}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-600 mb-4 text-sm">
                  <Users className="h-4 w-4" />
                  <span>{car.seats} Seats</span>
                  <span className="mx-2">•</span>
                  <Car className="h-4 w-4" />
                  <span>{car.transmission}</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-2xl font-bold text-red-600">${car.price}</span>
                    <span className="text-gray-600">/day</span>
                  </div>
                  <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition">
                    Rent Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <button className="border border-red-600 text-red-600 px-6 py-2 rounded hover:bg-red-600 hover:text-white transition">
            View All Cars
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCarsSection;
