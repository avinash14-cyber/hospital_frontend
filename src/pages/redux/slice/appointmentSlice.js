import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addAppointmentAPI, getDoctorsAPI } from "../../../services/allAPI";



export const addAppointment=createAsyncThunk('appointment/addAppointment',async(appdetails,{ rejectWithValue })=>{
    
    try{
        const response=await addAppointmentAPI(appdetails)
        console.log(response.data);
        return response.data
        
        
    }
    catch(err){
       return rejectWithValue("Something went wrong");
    }
    
})
export const getDoctor=createAsyncThunk('appointment/getDoctor',async(__,{ rejectWithValue })=>{
    
    try{
        const response=await getDoctorsAPI()
        console.log(response.data);
        return response.data
         
        
    }
    catch(err){
       return rejectWithValue("Something went wrong");
    }
    
})
const appointmentSlice=createSlice({

    name:'appointment',
    initialState:{
        appdetails:{
          department:'',
          doctor:'',
          name:'',
          dob:'',
          phone:'',
          email:'',
          state:'',
          city:'',
          address:'',
          comments:''
        },
        list:[],
        doctor:[],
        loading:false,
        errorMsg:''
    },
    reducers:{
        setField:(state,actionByAppointment)=>{
            const{name,value}=actionByAppointment.payload
            state.appdetails[name]=value;
        },
        reset:(state)=>{
            state.appdetails={
          department:'',
          doctor:'',
          name:'',
          dob:'',
          phone:'',
          email:'',
          state:'',
          city:'',
          address:'',
          comments:''
        }
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(addAppointment.pending,(state)=>{
            state.loading=true
            state.errorMsg=""
        }
)

  builder.addCase(addAppointment.rejected,(state)=>{
    state.loading=false
    state.errorMsg="Failed to upload"
  })

  builder.addCase(addAppointment.fulfilled,(state,apiResult)=>{
    state.loading=false
    state.list.push(apiResult.payload)
    state.errorMsg=""
  })
 
  .addCase(getDoctor.pending, (state) => {
      state.loading = true;
      state.errorMsg = "";
    })
    .addCase(getDoctor.rejected, (state) => {
      state.loading = false;
      state.errorMsg = "Failed to fetch doctors";
    })
    .addCase(getDoctor.fulfilled, (state, apiResult) => {
      state.loading = false;
      state.doctor = apiResult.payload; 
      state.errorMsg = "";
    })
}
  


})

export default appointmentSlice.reducer;
export const{setField,reset}=appointmentSlice.actions;