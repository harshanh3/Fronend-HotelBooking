import React from 'react';

const Timeline = () => {
  const steps = ['Dates', 'Rooms', 'Options', 'Book'];
  const currentStep = 0; // Change this value to set the current step (0 = Dates, 1 = Rooms, etc.)

  return (
    <div className="flex justify-between items-center w-full p-4">
      {steps.map((step, index) => (
        <div key={index} className="flex-1">
          <div className="flex items-center">
            <div
              className={`w-6 h-6 rounded-full ${
                index <= currentStep ? 'bg-black' : 'border-2 border-black'
              } flex items-center justify-center`}
            >
              {index <= currentStep && (
                <div className="w-3 h-3 bg-white rounded-full"></div>
              )}
            </div>
            {index < steps.length - 1 && (
              <div
                className={`flex-1 h-[2px] ${
                  index < currentStep ? 'bg-black' : 'bg-gray-300'
                }`}
              ></div>
            )}
          </div>
          <p className="text-center mt-2">{step}</p>
        </div>
      ))}
    </div>
  );
};

export default Timeline;

