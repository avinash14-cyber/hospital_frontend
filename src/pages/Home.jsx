import React from 'react'
import { BiNotepad } from 'react-icons/bi'
import { FaStethoscope } from 'react-icons/fa'
import { FaUserDoctor } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <div className='d-flex flex-column min-vh-100 p-0 w-100 position-relative '>
       <div className="p-0 w-100 position-relative  " style={{height:'450px'}}>
        <img className='img-fluid w-100 p-0 h-100' style={{objectFit:'cover',objectPosition:'top'}} src="public/images/doc.jpg" alt="" />
        <div className='p-3 w-50 top-0   position-absolute h-100 bg-transparent text-wrap overflow-auto'id="home"style={{marginLeft:'20%'}}>
          <h1 className='w-75 lh-base ' style={{color:'rgba(8, 56, 108, 1)'}}> Your Partner in health 
            <br />and wellness
          </h1>
          <p className='w-75 fs-5 text-wrap fw-medium' style={{textAlign:'justify'}}>“Good health is the foundation of a fulfilling life. At our hospital, we believe that every individual deserves access to quality healthcare that is both compassionate and efficient. With the right balance of medical expertise, modern technology, and human care, we strive to create an environment where patients feel safe, supported, and valued.”</p>

         <Link to={'/appointments'}> <button type="button" class="btn btn-outline-primary">Book Your Appointment</button></Link>
        </div>
        <br />
        </div>
       <div className=" w-100  "style={{height:'500px',backgroundColor:'rgba(218, 224, 225, 1)'}}>
        <h1 className='text-center mt-3 fw-bold' style={{color:'rgba(8, 56, 108, 1)'}}>Our Healthcare Services</h1>
        <div className="d-flex justify-content-center gap-4 flex-wrap mt-5 w-100 text-center">
  <div className="bg-primary shadow-lg p-2 d-flex flex-row align-items-center justify-content-between text-wrap" style={{ height: '140px', width: '330px' }}>
    <BiNotepad className='text-white fs-1' />
    <Link to={'/yourappointments'} className='text-decoration-none'>
      <div className='p-2 d-flex justify-content-around h-100 flex-column'>
        <h3 className='text-white'>Your Appointments</h3>
        <p className='w-100 text-white'>Click to view all of your appointments</p>
      </div>
    </Link>
  </div>
  <div className="bg-primary shadow-lg p-2 d-flex flex-row align-items-center justify-content-between text-wrap" style={{ height: '140px', width: '330px' }}>
    <FaUserDoctor className='text-white fs-1' />
      <Link className='text-decoration-none' to={'/doctors'}>
        <div className='p-2 d-flex justify-content-around h-100 flex-column'>
        <h3 className='text-white'>Our Doctors</h3>
        <p className='w-100 text-white'>Click to view all of our different specialist</p>
      </div>
      </Link>
  </div>
  
</div>
       </div>
    </div>
    </>
  )
}

export default Home