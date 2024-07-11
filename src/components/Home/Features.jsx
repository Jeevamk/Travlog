// import React from 'react';
// import { FaMapMarkerAlt, FaCalendarAlt, FaTicketAlt } from 'react-icons/fa';

// const Features = () => {
//   return (
//     <section className="bg-white ">
//       <div className="container mx-auto px-4 md:px-8 lg:px-12">
//         <div className="flex flex-col md:flex-row items-center justify-between">
//           <div className="w-full md:w-1/2"> 
//             <h4 className="uppercase text-pink-700 text-lg font-semibold">Key Features</h4>
//             <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mt-4">We Offer Best Services</h1>
//             <p className="text-gray-500 mt-4 text-lg">
//               Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.
//             </p>
//             <div className="mt-12 space-y-8">
//               <div className="flex items-center space-x-4 ">
//                 <div className="bg-red-500 p-3 rounded-full">
//                   <FaMapMarkerAlt className="text-white" size={24} />
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-semibold">We offer best services</h3>
//                   <p className="text-gray-600">Lorem Ipsum is not simply random text</p>
//                 </div>
//               </div>
//               <div className="flex items-center space-x-4 border border-gray-300 rounded-lg px-4 py-3 max-w-sm">
//                 <div className="bg-yellow-500 p-3 rounded-full">
//                   <FaCalendarAlt className="text-white" size={24} />
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-semibold">Schedule your trip</h3>
//                   <p className="text-gray-600">It has roots in a piece of classical</p>
//                 </div>
//               </div>
//               <div className="flex items-center space-x-4">
//                 <div className="bg-pink-500 p-3 rounded-full">
//                   <FaTicketAlt className="text-white" size={24} />
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-semibold">Get discounted coupons</h3>
//                   <p className="text-gray-600">Lorem Ipsum is not simply random text</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="w-full md:w-1/2 mt-6  flex justify-end"> 
            
//               <img src="./features.svg" alt="Feature" className="w-full h-auto rounded-lg " />
           
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Features;


import React from 'react';
import { FaMapMarkerAlt, FaCalendarAlt, FaTicketAlt } from 'react-icons/fa';

const Features = () => {
  return (
    <section className="bg-white ">
      <div className="ps-4 md:ps-8 lg:ps-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 pe-20"> 
            <h4 className="uppercase text-pink-700 text-lg font-semibold">Key Features</h4>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mt-4">We Offer Best Services</h1>
            <p className="text-gray-500 mt-4 text-lg">
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.
            </p>
            <div className="mt-12 space-y-8 ">
              <div className="flex items-center space-x-4 ">
                <div className="bg-red-500 p-3 rounded-full">
                  <FaMapMarkerAlt className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">We offer best services</h3>
                  <p className="text-gray-600">Lorem Ipsum is not simply random text</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 border border-gray-300 rounded-lg px-4 py-3 max-w-sm">
                <div className="bg-yellow-500 p-3 rounded-full">
                  <FaCalendarAlt className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Schedule your trip</h3>
                  <p className="text-gray-600">It has roots in a piece of classical</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-pink-500 p-3 rounded-full">
                  <FaTicketAlt className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Get discounted coupons</h3>
                  <p className="text-gray-600">Lorem Ipsum is not simply random text</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 mt-6  flex justify-end"> 
            
              <img src="./features.svg" alt="Feature" className="w-full h-auto rounded-lg " />
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;