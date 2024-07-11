
// import React, { useState } from 'react';

// const DestinationSlider = () => {
//   // Data for each card (image and description)
//   const cards = [
//     { image: '/image1.svg', description: 'Description for image 1' },
//     { image: '/image2.svg', description: 'Description for image 2' },
//     { image: '/image3.svg', description: 'Description for image 3' },
    
//   ];

//   const [currentSlide, setCurrentSlide] = useState(0);

//   const cardsPerPage = 3;

//   const numSlides = Math.ceil(cards.length / cardsPerPage);

//   const prevSet = () => {
//     setCurrentSlide(currentSlide === 0 ? numSlides - 1 : currentSlide - 1);
//   };

//   const nextSet = () => {
//     setCurrentSlide(currentSlide === numSlides - 1 ? 0 : currentSlide + 1);
//   };

//   return (
//     <div className="max-w-screen-lg mx-auto">
//       <div className="relative">
//         <div className="overflow-hidden rounded-lg">
//           <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
//             {cards.slice(currentSlide * cardsPerPage, currentSlide * cardsPerPage + cardsPerPage).map((card, index) => (
//               <div key={index} className="w-1/4 p-4">
//                 <img src={card.image} alt={`Slide ${index}`} className="w-full h-auto rounded-lg shadow-md" />
//                 <div className="p-4 bg-white shadow-md">
//                   <p className="text-gray-800">{card.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Previous button */}
//         <button
//           className="absolute top-1/2 left-0 transform -translate-y-1/2 px-4 py-2 bg-gray-800 text-white rounded-md"
//           onClick={prevSet}
//         >
//           Previous
//         </button>

//         {/* Next button */}
//         <button
//           className="absolute top-1/2 right-0 transform -translate-y-1/2 px-4 py-2 bg-gray-800 text-white rounded-md"
//           onClick={nextSet}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default DestinationSlider;


import React, { useState, useEffect } from 'react';

const DestinationSlider = () => {
  // Mock data for card images
  const cardSlide = [
    '/image1.svg',
    '/image2.svg',
    '/image3.svg',
    
  ];

  // State to manage images for the slider
  const [images, setImages] = useState(cardSlide);

  // Function to handle next slide
  const handleNext = () => {
    setImages((prevImages) => {
      const next = [...prevImages];
      next.unshift(next.pop());
      return next;
    });
  };

  // Function to handle previous slide
  const handlePrev = () => {
    setImages((prevImages) => {
      const prev = [...prevImages];
      prev.push(prev.shift());
      return prev;
    });
  };

 

  return (
    <div className="max-w-screen-lg mx-auto">
      <div className="relative">
        {/* Slider */}
        <div className="overflow-hidden rounded-lg">
          <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${0 * 100}%)` }}>
            {images.map((img, index) => (
              <div key={index} className="w-1/4 p-4">
                <img src={img} alt={`Slide ${index}`} className="w-full h-auto rounded-lg shadow-md" />
              </div>
            ))}
          </div>
        </div>

        {/* Previous button */}
        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 px-4 py-2 bg-gray-800 text-white rounded-md"
          onClick={handlePrev}
        >
          Prev
        </button>

        {/* Next button */}
        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 px-4 py-2 bg-gray-800 text-white rounded-md"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default DestinationSlider;
