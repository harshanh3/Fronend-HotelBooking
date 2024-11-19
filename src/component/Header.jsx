import React from 'react'
import { Link } from 'react-router-dom'
import mylogo from '../assets/images/logo.png'

const Header = () => {
  return (
    <div>
    <nav className="bg-transparent shadow-lg ">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center text-decoration-none">
            <img src={mylogo} alt="Logo" className="h-20 mr-2" />
            <span className="text-2xl font-bold text-white">Hoteluxe</span>
          </Link>
          <div
            id="nav-menu"
            className="hidden md:flex space-x-6 items-center "
          >
            <Link to="/" className="text-white text-decoration-none hover:text-blue-500 ">
              Home
            </Link>
            <Link to="/" className="text-white text-decoration-none hover:text-blue-500">
              Book Now
            </Link>
            <Link to="/" className="text-white text-decoration-none hover:text-blue-500">
              Reviews
            </Link>
            <Link to="/hotellist" className="text-white text-decoration-none hover:text-blue-500">
              Rooms
            </Link>
            <Link to="/contact" className="text-white text-decoration-none hover:text-blue-500">
              Contact
            </Link>
            <Link to="/packages" className="text-white text-decoration-none hover:text-blue-500">
              Darrels Packages
            </Link>
            <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
             login
            </button>
          </div>
        </div>
      </div>
    </nav>

    </div>
  )
}

export default Header