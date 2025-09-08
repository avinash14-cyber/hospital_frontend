import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDoctor } from './redux/slice/appointmentSlice'

const Doctors = () => {
 const dispatch = useDispatch()
  const doc = useSelector(state => state.appointmentReducer.doctor)
  

  useEffect(() => {
    if (doc.length === 0) {
      dispatch(getDoctor())
    }
  }, [ doc.length])
  return (
    <div className='w-100 row d-flex flex-row gap-4 justify-content-evenly min-vh-100 p-3'>
      {
        doc?.map((item,index)=>(
                     <div key={index} className='d-flex flex-column  justify-content-evenly col-2 rounded bg-light' style={{height:'450px',borderColor:'#00ac9b',borderStyle:'solid'}}>
                    <img className='w-100 h-50 mt-3 img-fluid p-0'style={{objectFit:'contain'}} src={item.image} alt="" />
                    <div className='d-flex flex-column justify-content-evenly  w-100'>
                      <h3 className='text-center w-100'> {item.name}</h3>
        
                    </div>
                </div>
                ))
      }
    </div>
  )
}

export default Doctors