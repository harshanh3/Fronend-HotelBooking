import React, { useState } from 'react'
import mylogin from '../assets/images/login.png'

const Login = () => {

  const [isRegister, setIsRegister] = useState(false);

  const toggleForm = () => {
    setIsRegister(!isRegister);
  };


  return (
    <>
 <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col md:flex-row items-center bg-white shadow-md rounded-lg overflow-hidden w-3/4">
        {/* Image Section */}
        <div className="md:w-1/2">
          <img
            src={mylogin}
            alt={`${isRegister ? 'Register' : 'Login'} illustration`}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Form Section */}
        <div className="md:w-1/2 p-6">
          <h1 className="text-3xl font-bold mb-6 text-center">
            {isRegister ? 'Register' : 'Login'}
          </h1>
          <form>
            {isRegister && (
              <div className="mb-4">
                <label htmlFor="username" className="block text-gray-700 mb-2">Username</label>
                <input
                  type="text"
                  placeholder="Username"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            )}
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 mb-2">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
                required
              />
            </div>
            {isRegister && (
              <div className="mb-6">
                <label htmlFor="confirmPassword" className="block text-gray-700 mb-2">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Confirm your password"
                  required
                />
              </div>
            )}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
            >
              {isRegister ? 'Register' : 'Login'}
            </button>
          </form>
          <p className="mt-4 text-center text-gray-600">
            {isRegister ? (
              <>
                Already have an account?{' '}
                <button onClick={toggleForm} className="text-blue-500 hover:underline">
                  Login
                </button>
              </>
            ) : (
              <>
                Don't have an account?{' '}
                <button onClick={toggleForm} className="text-blue-500 hover:underline">
                  Register
                </button>
              </>
            )}
          </p>
        </div>
      </div>
    </div>

    </>
  )
}

export default Login