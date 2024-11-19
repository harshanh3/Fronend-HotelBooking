import React from 'react'

const HotelDetails = () => {



  return (
    <>
      <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <img
          src=""
          alt="no"
          className="w-full h-64 object-cover"
        />
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-2">name</h1>
          <p className="text-gray-600 mb-2">location</p>
          <p className="text-gray-800 mb-4">descrip</p>
          <div className="mb-4">
            <span className="text-lg font-semibold">Amenities:</span>
            <ul className="list-disc ml-6 mt-2">
              {/* {hotel.amenities.map((amenity, index) => (
                <li key={index} className="text-gray-700">
                  {amenity} */}
                {/* </li> */}
              {/* ))} */}
            </ul>
          </div>
          {/* otherservices */}
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Select Additional Services:</h2>
            <div className="flex items-center mb-2">
              <input
                type="checkbox"
                name="travelFacility"
                id="travelFacility"
                checked="travel faclity"
                // onChange={handleServiceChange}
                className="mr-2"
              />
              <label htmlFor="travelFacility" className="text-gray-700">
                Travel Facility
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                name="trekking"
                id="trekking"
                checked="servies"
                // onChange={handleServiceChange}
                className="mr-2"
              />
              <label htmlFor="trekking" className="text-gray-700">
                Trekking
              </label>
            </div>
          </div>
          <div className="flex justify-between items-center mb-4">
            <p className="text-lg font-bold">Price: $uhbhbb/night</p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
              Book Now
            </button>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">Reviews:</h2>
              <ul>
               <p>Hotel review</p>
                  <li className="border-t border-gray-300 py-2">
                    <p className="font-semibold">manu</p>
                    <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ex amet harum dicta earum quos aliquid minima quaerat consectetur quod commodi delectus ut nesciunt, quis, nisi odio dolore quas! Sit!</p>
                    <p className="text-sm text-yellow-500">
                      {/* {'★'.repeat(review.rating)}
                      {'☆'.repeat(5 - review.rating)} */}
                    </p>
                  </li>
              </ul>
              <p className="text-gray-500">No reviews yet.</p>
          </div>
        </div>
      </div>
    </div>
    </>

  )
}

export default HotelDetails