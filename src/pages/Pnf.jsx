import React from 'react'
import err from '../assets/images/cbe.gif'
import { Link } from 'react-router-dom'

const Pnf = () => {
  return (
    <div style={{ background: 'black', height: '100vh', width: '100%' }} className='relative flex justify-center items-center'>
    <img src={err} alt="Error Image" className='object-cover' />
    <div className='absolute text-center'>
        <h4 className='text-white text-3xl mt-56'>Page Not Found</h4>
        <Link to={'/'}  className='mt-2 px-4 py-2 bg-gray-700 text-white rounded btn btn-info'>Back To Home</Link>
    </div>
</div>

  )
}

export default Pnf