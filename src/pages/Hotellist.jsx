import React from 'react'
import Search from '../component/Search'
import HotelCard from '../component/HotelCard'
import Timeline from './Timeline'


const Hotellist = () => {
  return (
    <div>
          <div className="container mx-auto p-4">
      <Search />
      <Timeline/>
      <div className="grid mt-12 grid-cols-1 md:grid-cols-3 gap-6">
          <HotelCard  />
      </div>
    </div>
    </div>
  )
}

export default Hotellist