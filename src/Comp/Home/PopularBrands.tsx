// components/PopularBrands.tsx
import Marquee from "react-fast-marquee";

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
  ]

export default function PopularBrands() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div>
        <h2 className="text-3xl font-bold mb-2 text-center">
          Popular <span className="text-red-500">Brands</span> Servicing
        </h2>
        <p className="text-center text-gray-500 mb-10">
          Top brands we service across Jaipur.
        </p>

        <Marquee speed={50} gradient={false} pauseOnHover direction="right" autoFill className="overflow-hidden">
          <div className="flex py-4">
            {popularBrands.map((brand, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-4 flex flex-col items-center text-center min-w-[200px] mx-4"
              >
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="h-30 object-contain mb-4"
                />
                <h3 className="text-lg font-semibold">{brand.name}</h3>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
}
