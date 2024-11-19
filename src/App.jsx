
import { Routes,Route } from 'react-router-dom'
import './App.css'
import Header from './component/Header'
import Footer from './component/Footer'
import HomePage from './pages/HomePage'
import HotelDetails from './pages/HotelDetails'
import Hotellist from './pages/Hotellist'
import UserDashboard from './pages/UserDashboard'
import Login from './pages/Login'
import Pnf from './pages/Pnf'


function App() {

  return (
    <>
 <Header/>
    <Routes>
          <Route>
          <Route path="/" element={<HomePage />} />
          <Route path="/hotellist" element={<Hotellist />} />
          <Route path="/:id/hotel" element={<HotelDetails />} />
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path='/*' element={<Pnf />} />

          </Route>
         </Routes>
         <Footer />   
    </>
  )
}

export default App
