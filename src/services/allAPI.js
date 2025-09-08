import { serverURL } from "./serverURL";
import { commonAPI } from "./commonAPI";

//add apointments
export const addAppointmentAPI=async(reqBody)=>{
    return await commonAPI('post',`${serverURL}/appointments`,reqBody)
}

//get doctors
export const getDoctorsAPI=async()=>{
    return await commonAPI('get',`${serverURL}/doctors`,"")
}
//get patients

export const getpatientsAPI=async()=>{
    return await commonAPI('get',`${serverURL}/appointments`,"")
}

//update

export const updatepatientsAPI=async(id,reqBody)=>{
    return await commonAPI('put',`${serverURL}/appointments/${id}`,reqBody)
}

//delete

export const deletepatientsAPI=async(id)=>{
    return await commonAPI('delete',`${serverURL}/appointments/${id}`,"")
}