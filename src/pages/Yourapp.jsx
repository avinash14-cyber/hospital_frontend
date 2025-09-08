import React, { useEffect, useState } from 'react'
import { FaArrowRight, FaRegTrashAlt, FaSearch } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'

import { serverURL } from '../services/serverURL';
import { deletepatient, getpatient, updatepatient } from './redux/slice/yourappSlice';


const Yourapp = () => {

    const [newperson,setnewperson]=useState({})
    const handleclick=(name)=>{
    
        const person=patient.find(item=>item.doctor==name)
        console.log(person);
        
        setnewperson(person)
    }
    const handledelete=(name)=>{
        const guy=patient.find(item=>item.doctor==name)
        dispatch(deletepatient(guy.id))
        dispatch(getpatient())
    }
    const handleupdate=()=>{
        dispatch(updatepatient({ id: newperson.id, data: newperson }))
        setbtn(false)
    }
    const[btn,setbtn]=useState(false)
    const dispatch=useDispatch()
    useEffect(()=>{
     dispatch(getpatient())
    },[])
const patient=useSelector(state=>state.yourappReducer.patients?.filter(item=>item?.doctor))

const doc=useSelector(state=>state.appointmentReducer.doctor?.filter(item=>patient?.some(d=>d.doctor==item.name)))
    
  return (
    <>
    <div className='w-100 d-flex px-4 justify-content-evenly align-items-center flex-column flex-md-row'style={{height:'400px',backgroundColor:'#00ac9b'}}>
        <img className='img-fluid h-100' style={{}} src="/images/yourapp.jpg" alt="" />

       <div className='h-100 d-flex flex-column justify-content-center align-items-center' style={{width:'500px'}}>
           <img src="/images/clock.png" className='img-fluid top-0 end-0 h-25' alt="" />
          <h1 className='fw-bold w-100 ' style={{color:'#f5f5dc'}}>View all your appointments</h1>
            <div className='position-relative d-flex flex-row align-items-center bg-light rounded rounded-3 w-100' style={{height:'60px'}}>
              <input class="form-control w-100 h-100" type="text" placeholder="Look-up your appointment" aria-label="default input example"/>
            <FaSearch className='fs-3 end-0 position-absolute me-3 ' />
            </div>
       </div>
    </div>
    <div className=' row p-0 m-0 position-absolute py-5 w-100  gap-4 d-flex justify-content-evenly' style={{minHeight:'300px',backgroundColor:'rgba(201, 209, 204, 1)'}}>
       
      {
        btn?
        ( <div className='w-50 bg-light d-flex flex-column justify-content-evenly align-items-center' style={{height:'600px'}}>
         
          <select  name='department' value={newperson?.department|| ""} onChange={(e)=>setnewperson({...newperson,[e.target.name]: e.target.value})}  className="form-select w-75" aria-label="Default select example">
  <option selected>--Select Department--</option>
  <option value="Cardiology">Cardiology</option>
  <option value="Neurology">Neurology</option>
  <option value="Orthopedics">Orthopedics</option>
  <option value="Pediatrics">Pediatrics</option>
  <option value="Obstetrics & Gynecology">Obstetrics & Gynecology</option>
  <option value="Dermatology">Dermatology</option>
  <option value="Oncology">Oncology</option>
  
</select>
<input  name='name' value={newperson?.name} onChange={(e)=>setnewperson({...newperson,name: e.target.value})} type="text" className="form-control w-75 "style={{padding:'12px'}} id="exampleFormControlInput1" placeholder="Name"></input>
       
       <input  name='dob' type="text" className="form-control w-75 "style={{padding:'12px'}} value={newperson?.dob} onChange={(e)=>setnewperson({...newperson,dob: e.target.value})} id="exampleFormControlInput1" placeholder="DD-MM-YYYY"></input>
      
       <input type="number"  name='phone'value={newperson?.phone} onChange={(e)=>setnewperson({...newperson,phone: e.target.value})} className="form-control w-75 "style={{padding:'12px'}} id="exampleFormControlInput1" placeholder="Telephone no:"></input>
               <input type="email" value={newperson?.email} onChange={(e)=>setnewperson({...newperson,email: e.target.value})} className="form-control w-75 "  name='email' style={{padding:'12px'}} id="exampleFormControlInput1" placeholder="Email"></input>

         <div className='w-100 d-flex justify-content-evenly'>
          <button type="button" class="btn btn-success" onClick={handleupdate}>UPDATE</button>
<button type="button" class="btn btn-danger" onClick={()=>setbtn(false)}>CLOSE</button>
         </div>

       </div>):
       (
        doc?.map((item,index)=>(
             <div key={index} className='d-flex   flex-column justify-content-evenly col-2 rounded bg-light' style={{height:'450px',borderColor:'#00ac9b',borderStyle:'solid'}}>
            <img className='w-100 h-50 mt-3 img-fluid p-0'style={{objectFit:'contain'}} src={item.image} alt="" />
            <div className='d-flex flex-column justify-content-evenly  w-100'>
              <h3 className='text-center w-100'>Appointment with {item.name}</h3>
<div className='d-flex w-100 align-items-center flex-row justify-content-evenly'>
                  <button style={{backgroundColor:"#00ac9b"}} onClick={()=>{setbtn(true);handleclick(item.name)}} className='btn w-25  mx-auto '><FaArrowRight className='fs-4 text-light' />
    </button>
    <FaRegTrashAlt onClick={()=>handledelete(item.name)} className='fs-4 text-danger' />

</div><br />
            </div>
        </div>
        ))
    )

      }
        
    </div>
    </>
  )
}

export default Yourapp