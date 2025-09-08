import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Doctors from './pages/Doctors'

import Appointments from './pages/Appointments'
import Pnf from './pages/Pnf'
import Header from './pages/Header'
import Yourapp from './pages/Yourapp'

const App = () => {
  return (
    <>
     <Header/>
     <Routes>
      <Route path='/'element={<Home/>}></Route>
      <Route path='/doctors'element={<Doctors/>}></Route>
      <Route path='/yourappointments' element={<Yourapp/>}></Route>    
      <Route path='/appointments' element={<Appointments/>}></Route>
      <Route path='*'element={<Pnf/>}></Route>
     </Routes>
    </>
  )
}

export default App