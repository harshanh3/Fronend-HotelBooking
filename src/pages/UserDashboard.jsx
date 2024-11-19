import React from 'react'

const UserDashboard = () => {
  return (
    <>
  
  <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">My Dashboard</h1>
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-2xl font-semibold mb-4">Your Bookings</h2>
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th className="px-4 py-2">Hotel Name</th>
                <th className="px-4 py-2">Check-in Date</th>
                <th className="px-4 py-2">Check-out Date</th>
                <th className="px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
                <tr  className="border-b border-gray-300">
                  <td className="px-4 py-2">hotelName</td>
                  <td className="px-4 py-2">checkInDate</td>
                  <td className="px-4 py-2">checkOutDate</td>
                  <td className="px-4 py-2">
                   <p>completed /uncompleted</p>
                  </td>
                </tr>
            </tbody>
          </table>
      </div>
    </div>
    </>
  )
}

export default UserDashboard