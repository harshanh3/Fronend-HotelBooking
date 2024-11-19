import React from 'react'

const HomePage = () => {
    return (
        <div>
            <div className="relative top-32">
                <div className="absolute top-96  left-0  w-full h-full  flex flex-col items-center justify-center text-center h-full px-4 ">
                    <h2 className="text-white text-6xl md:text-6xl font-bold mb-4 ">Let us be your getaway to luxury living</h2>
                    <p className="text-white text-lg md:text-2xl mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className="bg-dark p-4 rounded-lg shadow-lg flex space-x-4">
                        <div>
                            <label className="block text-white mb-1">Check-In Date</label>
                            <input type="date" className="border p-2 rounded-lg w-full" />
                        </div>
                        <div>
                            <label className="block text-white mb-1">Check-Out Date</label>
                            <input type="date" className="border p-2 rounded-lg w-full" />
                        </div>
                        <div>
                            <label className="block text-white mb-1">Guests:</label>
                            <select className="border p-2 rounded-lg">
                                {/* Option for single room with no adults */}
                                <option key="1-0">1 Room, No Adults</option>
                                {/* Other options */}
                                {Array.from({ length: 5 }, (_, roomIndex) =>
                                    Array.from({ length: 5 }, (_, guestIndex) => (
                                        guestIndex > 0 && ( // Skip the "0 adults" case except for the initial "No Adults" option
                                            <option key={`${roomIndex}-${guestIndex}`}>
                                                {roomIndex + 1} Room{roomIndex > 0 && 's'}, {guestIndex} Adult{guestIndex > 1 && 's'}
                                            </option>
                                        )
                                    ))
                                )}
                            </select>
                        </div>
                        <button className="bg-black text-white px-3 mt-8 h-10 text-sm rounded hover:bg-gray-800">
                            Book Now
                        </button>
                    </div>

                </div>
            </div>
            <img style={{ width: "100%" }} src="https://png.pngtree.com/background/20230425/original/pngtree-two-beds-are-in-a-hotel-room-picture-image_2471633.jpg" alt="" />
        </div>

    )
}

export default HomePage