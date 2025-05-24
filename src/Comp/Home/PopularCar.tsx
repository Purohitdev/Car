
// components/PopularCars.tsx
import Marquee from "react-fast-marquee";

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
  {
    name: "Maruti Suzuki Swift",
    image: "https://imgd.aeplcdn.com/1280x720/n/cw/ec/159231/swift-right-front-three-quarter.jpeg?isig=0&q=80",
  },
  {
    name: "Maruti Suzuki Baleno",
    image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/102663/baleno-exterior-right-front-three-quarter-69.jpeg?isig=0&q=80",
  },
  {
    name: "Hyundai Creta",
    image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/106815/creta-exterior-right-front-three-quarter-5.jpeg?isig=0&q=80",
  },
 
  {
    name: "Maruti Suzuki Brezza",
    image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/107543/brezza-exterior-right-front-three-quarter-9.jpeg?isig=0&q=80",
  },
  {
    name: "Hyundai Venue",
    image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/141113/venue-exterior-right-front-three-quarter-16.jpeg?isig=0&q=80",
  },
  {
    name: "Mahindra Scorpio-N",
    image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/40432/scorpio-n-exterior-right-front-three-quarter-76.jpeg?isig=0&q=80",
  },
  {
    name: "Mahindra Thar",
    image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/40087/thar-exterior-right-front-three-quarter-37.jpeg?isig=0&q=80",
  },
  {
    name: "Tata Punch",
    image: "https://imgd.aeplcdn.com/370x208/n/cw/ec/39015/punch-exterior-right-front-three-quarter-54.jpeg?isig=0&q=80",
  },
  {
    name: "Kia Seltos",
    image: "https://imgd.aeplcdn.com/1920x1080/n/cw/ec/174323/seltos-exterior-right-front-three-quarter.jpeg?isig=0&q=80&q=80",
  },
  {
    name: "Toyota Innova Crysta",
    image: "https://imgd.aeplcdn.com/642x336/n/cw/ec/140809/innova-crysta-exterior-right-front-three-quarter-2.png?isig=0&q=80",
  },
  {
    name: "Toyota Fortuner",
    image: "https://www.financialexpress.com/wp-content/uploads/2024/10/toyota-fortuner-leader-edition_20241001131301.jpg",
  },
  {
    name: "Maruti Suzuki Wagon R",
    image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/112947/wagon-r-exterior-right-front-three-quarter-5.jpeg?isig=0&q=80",
  },
  {
    name: "Honda City",
    image: "https://imgd.aeplcdn.com/1280x720/n/cw/ec/134287/city-exterior-right-front-three-quarter-78.jpeg?isig=0&q=80",
  },
  {
    name: "Kia Sonet",
    image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/174423/sonet-exterior-right-front-three-quarter-11.jpeg?isig=0&q=80",
  },
  {
    name: "Hyundai Exter",
    image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/144851/exter-exterior-right-front-three-quarter-63.jpeg?isig=0&q=80",
  },
  {
    name: "Maruti Suzuki Fronx",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWxMWsi61V3tom6RKH3Bxq4DjQBXw1FL_49Q&s",
  },
  {
    name: "Tata Harrier",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw4kHgSHMzfHTihI1f2F2UISe7cjORsGl2TQ&s",
  },
  {
    name: "Mahindra XUV700",
    image: "https://imgd.aeplcdn.com/1920x1080/n/cw/ec/42355/xuv700-exterior-right-front-three-quarter-4.jpeg?isig=0&q=80&q=80",
  },
  {
    name: "MG Hector",
    image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/130583/hector-exterior-right-front-three-quarter-86.jpeg?isig=0&q=80",
  },
];

export default function PopularCars() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-2 text-center">
          Popular <span className="text-red-500">Car Models</span> Servicing
        </h2>
        <p className="text-center text-gray-500 mb-10">
          Get servicing for top car models in Jaipur.
        </p>

        <Marquee speed={50} gradient={false} pauseOnHover autoFill className="overflow-hidden">
          <div className="flex py-4">
            {popularCars.map((car, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-4 flex flex-col items-center text-center min-w-[200px] mx-4"
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
        </Marquee>
      </div>
    </section>
  );
}
