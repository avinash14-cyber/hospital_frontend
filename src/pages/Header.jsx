import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'

const Header = () => {

    const[btnclick,setbtnclick]=useState(false)
  return (
    <>
    <nav style={{backgroundColor:'rgba(211, 222, 215, 0.98)'}}>
        <div className='d-flex justify-content-between px-3 align-items-center'>
            <h2 className='text-primary'>Wellcare <span className='text-dark'>Partner</span></h2>


               <FaBars onClick={()=>setbtnclick(!btnclick)} className={`d-md-none d-block fs-4 ${btnclick ? 'd-none' : ''}`} />
              {
                btnclick?
                ( <div className='d-flex  flex-row d-md-none'>
                  <FaBars onClick={()=>setbtnclick(!btnclick)} className='fs-4 mt-1 me-3'/>  
                <ul className='fs-5 list-unstyled ' >
                <li className=' me-3'>Home</li>
                <li className=' me-3'>Doctors</li>
                <li className=''>About</li>
            </ul>
               </div>):""
              }
            <ul className='m-2 fs-5 fw-bold d-none d-md-block' >
                <li className='d-inline me-3'>Home</li>
                <li className='d-inline me-3'>Doctors</li>
                <li className='d-inline me-3'>About</li>
            </ul>
        </div>
    </nav>

    
    </>
  )
}

export default Header