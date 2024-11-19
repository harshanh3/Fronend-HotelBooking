import React from 'react'

const Search = () => {
  return (
    <div>
        <div className="flex items-center justify-center mt-4">
      <input
        type="text"
        placeholder="Search hotels..."
        className="w-full md:w-1/2 px-4 py-2  rounded-l-md focus:outline-none"
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600">
        Search
      </button>
    </div>
    </div>
  )
}

export default Search