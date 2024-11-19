import React from 'react'

const HotelCard = () => {
  return (
    <>
     <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src="hotel-image.jpg" alt="Hotel" className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">Hotel Name</h3>
        <p className="text-gray-600 mb-2">Location: City, Country</p>
        <p className="text-gray-600 mb-2">Price: $100/night</p>
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          View Details
        </button>
      </div>
    </div>
    </>
  )
}

export default HotelCard