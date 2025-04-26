// components/PopularCarsAndBrands.tsx
import { ChevronRight } from "lucide-react";
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
    image: "https://static.toiimg.com/thumb/msid-109498773,width-1280,height-720,imgsize-621764,resizemode-6,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
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
  {
    name: "Mahindra",
    image: "https://1000logos.net/wp-content/uploads/2020/04/Mahindra-Logo-2012.png",
  },
  {
    name: "Tata",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkzD9iBdEOivOry0YRMvDD5lHLFipaPcDRiQ&s",
  },
  {
    name: "Volkswagen",
    image: "https://uploads.vw-mms.de/system/production/images/vwn/030/145/images/7a0d84d3b718c9a621100e43e581278433114c82/DB2019AL01950_web_1600.jpg?1649155356",
  },
  {
    name: "Bentley",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT2IKs6neLxtQMygFk7Wy9xbRlMK_Aj5fS5g&s",
  },
  {
    name: "Mercedes-Benz",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Logo.svg",
  },
  {
    name: "BMW",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg",
  },
  {
    name: "Audi",
    image: "https://img.favpng.com/10/18/6/audi-a3-car-emblem-logo-png-favpng-8jv3VHvLKxLWr8yrywsWjF92Z.jpg",
  },
  {
    name: "Lexus",
    image: "https://static.vecteezy.com/system/resources/previews/020/500/685/non_2x/lexus-brand-logo-car-symbol-with-name-black-design-japan-automobile-illustration-free-vector.jpg",
  },
  {
    name: "Porsche",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbMjVyHHRG81YJYuwg-k5cFKeMpJOgGh8iHg&s",
  },
  {
    name: "Maserati",
    image: "https://www.carlogos.org/car-logos/maserati-logo-2006-download.png",
  },
  {
    name: "Aston Martin",
    image: "https://fabrikbrands.com/wp-content/uploads/Aston-Martin-Logo-1-scaled.jpg",
  },
  {
    name: "Jaguar",
    image: "https://5.imimg.com/data5/SELLER/Default/2020/10/MP/RH/FK/18519298/jaguar-car-logo.jpg",
  },
  {
    name: "Land Rover",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5bSbgBqyvspDstQpcG7jushpDC_0mbhGAuQ&s",
  },
  {
    name: "Ferrari",
    image: "https://thumbs.dreamstime.com/b/logo-scuderia-ferrari-logo-scuderia-ferrari-car-color-vector-format-aviable-ai-124366774.jpg",
  },
  {
    name: "Lamborghini",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWf4LQZ7MXBunDJFz3MLWk5s4kCjxTmkVF8g&s",
  },
  {
    name: "Jeep",
    image: "https://static.vecteezy.com/system/resources/previews/020/500/247/non_2x/jeep-brand-logo-car-symbol-black-design-usa-automobile-illustration-free-vector.jpg",
  },
  {
    name: "Maruti",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTain4-QJSzFSmSd7i4XU01ZaSqq-mfNPlizg&s",
  },
  {
    name: "BYD",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgxq-WhI0k5i9vbkcgJYfNMPuxb0FEVcn3rA&s",
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
          Get servicing for top car models in Jaipur.
        </p>

        <Marquee
          speed={50}
          gradient={false}
          pauseOnHover
          className="overflow-hidden"
          autoFill={true}
        >
          <div className="flex  py-4">
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

      {/* Popular Brands */}
      <div>
        <h2 className="text-3xl font-bold mb-2 text-center">
          Popular <span className="text-red-500">Brands</span> Servicing
        </h2>
        <p className="text-center text-gray-500 mb-10">
          Top brands we service across Jaipur.
        </p>

        <Marquee
          speed={50}
          gradient={false}
          pauseOnHover
          direction="right"
          className="overflow-hidden"
          autoFill={true}

        >
          <div className="flex  py-4">
            {popularBrands.map((brand, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-4 flex flex-col items-center text-center min-w-[150px] mx-3"
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
        </Marquee>
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
