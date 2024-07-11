import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const products = [
  {
    image: "./image1.svg",
    name: "Paradise Beach, Bantayan Island",
    price: "$550.16",
    rating: 4.8,
    place: "Rome, Italy",
  },
  {
    image: "./image2.svg",
    name: "Ocean with full of Colors",
    price: "$20.99",
    rating: 4.5,
    place: "Maldives",
  },
  {
    image: "./image3.svg",
    name: "Mountain View, Above the cloud",
    price: "$150.99",
    rating: 5.0,
    place: "United Arab Emirates",
  },
];

const DestinationSlider = () => {
  const [currentProducts, setCurrentProducts] = useState(products.slice(0, 3));

  const handleRightClick = () => {
    const firstItem = products.shift();
    products.push(firstItem);
    setCurrentProducts(products.slice(0, 3));
  };

  const handleLeftClick = () => {
    const lastItem = products.pop();
    products.unshift(lastItem);
    setCurrentProducts(products.slice(0, 3));
  };

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col items-center mt-10">
      <div className="flex justify-between items-center mb-8 w-full max-w-7xl">
        <div>
          <h3 className="text-pink-600 text-lg md:text-xl lg:text-2xl ">TOP DESTINATION</h3>
          <h2 className="text-black text-2xl md:text-4xl lg:text-3xl font-bold">Explore top destination</h2>
        </div>
        <div className="flex space-x-4">
          <button
            onClick={handleLeftClick}
            className="w-[8vw] h-[8vw] md:w-[50px] md:h-[50px] border border-[#5D50C6] bg-white text-[#5D50C6] rounded-full flex items-center justify-center hover:bg-gray-200"
          >
            <FaArrowLeft size={20} />
          </button>
          <button
            onClick={handleRightClick}
            className="w-[8vw] h-[8vw] md:w-[50px] md:h-[50px] border border-[#5D50C6] bg-[#5D50C6] text-white rounded-full flex items-center justify-center hover:bg-[#4b3db3]"
          >
            <FaArrowRight size={20} />
          </button>
        </div>
      </div>
      <div className="flex flex-col space-y-8 md:flex-row md:space-y-0 md:space-x-8 transition-transform duration-300">
        {currentProducts.map((product, index) => (
          <div
            key={index}
            className="w-full md:w-[373.33px] h-auto md:h-[575px] p-4 border rounded-lg shadow-md flex flex-col"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-2/3 object-cover rounded-t-lg"
            />
            <div className="p-4 flex flex-col justify-between flex-grow">
              <div className="flex justify-between items-center">
                <h3 className="text-lg md:text-xl lg:text-2xl font-semibold">{product.name}</h3>
                <p className="text-pink-600 font-bold">{product.price}</p>
              </div>
              <p className="text-gray-600">{product.place}</p>
              <div className="text-lg font-bold text-orange-500">{product.rating} ★</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DestinationSlider;