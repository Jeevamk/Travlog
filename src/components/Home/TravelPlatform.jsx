import React from 'react';
import logos from '../../utils/traverlplatform';
const TravelPlatform = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8 xl:gap-10 px-4 lg:px-6 py-2.5 mt-10">
      {logos.map((logo, index) => (
        <img 
          key={index} 
          src={logo} 
          alt={`Logo ${index + 1}`} 
          className="h-10  " 
        />
      ))}
    </div>
  );
};

export default TravelPlatform;
