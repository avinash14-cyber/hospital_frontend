import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addAppointment, getDoctor, reset, setField } from './redux/slice/appointmentSlice';

const Appointments = () => {

  const handleChange=(e)=>{
    const{name,value}=e.target;
    dispatch(setField({name,value}))
    
  }
  const handleclick=()=>{
    dispatch(addAppointment(appoint));
    dispatch(reset())
  }
  const handleapi=()=>{
    dispatch(getDoctor())
  }

  const appoint=useSelector(state=>state.appointmentReducer.appdetails)
  const doc=useSelector(state=>state.appointmentReducer.doctor)
  const dispatch=useDispatch()
  return (
    <>
    <div className='w-100 min-vh-100 '>
      <div className='w-100 ' style={{height:'400px'}}>
        <img className='img-fluid w-100 h-100 ' style={{objectFit:'cover',objectPosition:'center'}} src="/images/appointments.jpg" alt="" />
      </div>

      <div className='w-100 d-flex justify-content-center flex-column text-wrap 'style={{height:'500px'}}>
      <div id='appoint' className='w-100 container-fluid  px-3 position-relative ms-3  mt-4  'style={{height:'fit-content'}}>
      <h1  style={{color:'#00ac9b'}} className='fw-bold  '>REQUEST AN APPOINTMENT</h1>
      <hr className='fw-bold fs-3 w-100'style={{height:'10px'}} />
      </div>
      <div className='row d-flex align-items-center flex-column flex-md-row justify-content-center mt-5 positon-relative top-0   gap-5 w-100' style={{height:'500px'}}>
       <div className="col-2 " style={{height:'50px'}}>
        <select onChange={(e)=>{handleChange(e);
          handleapi(e)}
        } name='department' value={appoint.department} className="form-select w-100 h-100" aria-label="Default select example">
  <option selected>--Select Department--</option>
  <option value="Cardiology">Cardiology</option>
  <option value="Neurology">Neurology</option>
  <option value="Orthopedics">Orthopedics</option>
  <option value="Pediatrics">Pediatrics</option>
  <option value="Obstetrics & Gynecology">Obstetrics & Gynecology</option>
  <option value="Dermatology">Dermatology</option>
  <option value="Oncology">Oncology</option>
  
</select>
       </div>
       <div className="col-2 " style={{height:'50px'}}>
        <select onChange={handleChange} name='doctor' value={appoint.doctor} className="form-select w-100 h-100" aria-label="Default select example">
  <option selected>--Select Doctor--</option>
  {doc?.filter(item=>item.department==appoint.department).map((item,index)=>(
    <option key={index} value={item.name}>{item.name}</option>
  ))}

</select>
       </div>
       <div className="col-2 position-relative " style={{height:'50px'}}>
         <input onChange={handleChange} value={appoint.name} name='name' type="text" className="form-control "style={{padding:'12px'}} id="exampleFormControlInput1" placeholder="Name"></input>
       </div>
       <div className="col-2 " style={{height:'50px'}}>
         <input onChange={handleChange} value={appoint.dob} name='dob' type="text" className="form-control "style={{padding:'12px'}} id="exampleFormControlInput1" placeholder="DD-MM-YYYY"></input>
       </div>
      </div>

      <div className='row d-flex align-items-center flex-column flex-md-row justify-content-center mt-5 positon-relative top-0   gap-5 w-100' style={{height:'500px'}}>
       <div className="col-2 " style={{height:'50px'}}>
         <input type="number" onChange={handleChange} value={appoint.phone} name='phone' className="form-control "style={{padding:'12px'}} id="exampleFormControlInput1" placeholder="Telephone no:"></input>
       </div>
       <div className="col-2 " style={{height:'50px'}}>
         <input type="email" className="form-control " onChange={handleChange} value={appoint.email} name='email' style={{padding:'12px'}} id="exampleFormControlInput1" placeholder="Email"></input>
       </div>
       <div className="col-2 position-relative " style={{height:'50px'}}>
         <input type="text" className="form-control "style={{padding:'12px'}} onChange={handleChange} value={appoint.state} name='state' id="exampleFormControlInput1" placeholder="State"></input>
       </div>
       <div className="col-2 " style={{height:'50px'}}>
         <input type="text" onChange={handleChange} value={appoint.city} name='city' className="form-control "style={{padding:'12px'}} id="exampleFormControlInput1" placeholder="City"></input>
       </div>
      </div>
      <div className='row d-flex align-items-center flex-column flex-md-row justify-content-evenly  mt-5 positon-relative top-0    w-100' style={{height:'500px'}}>
        <div className='col-4'>
              <textarea className="form-control" id="exampleFormControlTextarea1" onChange={handleChange} value={appoint.address} name='address' placeholder='Address' rows="3"></textarea>
        </div>
        <div className='col-4'>
              <textarea className="form-control" id="exampleFormControlTextarea1" onChange={handleChange} value={appoint.comments} name='comments' placeholder='Comments' rows="3"></textarea>
        </div>
      
      </div>
      <button onClick={handleclick} type="button" className="btn btn-success mx-auto w-25 mt-4">SUBMIT</button>
      </div>
    </div>

    </>
  )
}

export default Appointments