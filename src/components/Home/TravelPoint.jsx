
// import React from 'react';

// const TravelPoint = () => {
//   return (
//     <section className="bg-white py-12">
//       <div className="container mx-auto px-4 md:px-8 lg:px-12">
//         <div className="flex flex-col md:flex-row items-center justify-between">
//         <div className="w-full md:w-1/2 mt-6  flex justify-end"> 
//             <img src="./travelpoint.svg" alt="Feature" className="w-full h-auto rounded-lg " />
//         </div>
//           <div className="w-full md:w-1/2 "> 
//             <h4 className="uppercase text-pink-600 text-lg font-bold">Travel Point</h4>
//             <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-800 mt-4">We helping you find<br></br> your dream location</h1>
//             <p className="text-gray-500 mt-4 text-lg">
//               Contrary to popular belief, Lorem Ipsum is not <br></br> simply random text. It has roots in a piece of <br></br> classical Latin literature from 45 BC.
//             </p>
//             <div className="mt-12 space-y-8">
//               <div className="flex items-center space-x-4 ">
                
//                 <div className='border border-gray-200 p-6 rounded-2xl'>
//                   <h3 className="text-3xl text-center font-bold text-orange-600">500+</h3>
//                   <p className="text-gray-600">Holiday Package</p>
//                 </div>
//                 <div className='border border-gray-200 p-6 rounded-2xl'>
//                   <h3 className="text-3xl text-center font-bold text-orange-600">100 </h3>
//                   <p className="text-gray-600">Luxury Hotel</p>
//                 </div>
//               </div>
              
//               <div className="flex items-center space-x-4">
//               <div className='border border-gray-200 p-6 rounded-2xl'>
//                   <h3 className="text-3xl text-center font-bold text-orange-600">7</h3>
//                   <p className="text-gray-600">Premium Airlines</p>
//                 </div>
//                 <div className='border border-gray-200 p-6 rounded-2xl'>
//                   <h3 className="text-3xl text-center font-bold text-orange-600">2K+</h3>
//                   <p className="text-gray-600">Happy Customer</p>
//                 </div>
//               </div>
//             </div>
//           </div>
          
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TravelPoint;


import React from 'react';

const TravelPoint = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-0 md:px-0 lg:px-0">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 mt-6 flex justify-end"> 
            <img src="./travelpoint.svg" alt="Feature" className="w-full h-auto rounded-lg" />
          </div>
          <div className="w-full md:w-1/2 px-6 md:px-0"> 
            <h4 className="uppercase text-pink-600 text-lg font-bold">Travel Point</h4>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-800 mt-4">We helping you find<br /> your dream location</h1>
            <p className="text-gray-500 mt-4 text-lg">
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.
            </p>
            <div className="mt-12 space-y-8">
              <div className="flex items-center space-x-4">
                <div className='border border-gray-200 p-6 rounded-2xl'>
                  <h3 className="text-3xl text-center font-bold text-orange-600">500+</h3>
                  <p className="text-gray-600">Holiday Package</p>
                </div>
                <div className='border border-gray-200 p-6 rounded-2xl'>
                  <h3 className="text-3xl text-center font-bold text-orange-600">100</h3>
                  <p className="text-gray-600">Luxury Hotel</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className='border border-gray-200 p-6 rounded-2xl'>
                  <h3 className="text-3xl text-center font-bold text-orange-600">7</h3>
                  <p className="text-gray-600">Premium Airlines</p>
                </div>
                <div className='border border-gray-200 p-6 rounded-2xl'>
                  <h3 className="text-3xl text-center font-bold text-orange-600">2K+</h3>
                  <p className="text-gray-600">Happy Customer</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default TravelPoint;
