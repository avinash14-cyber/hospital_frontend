import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getpatientsAPI, updatepatientsAPI } from "../../../services/allAPI";


export const getpatient=createAsyncThunk("yourapp/getpatient",async(__,{rejectWithValue})=>{

    try{
        const response= await getpatientsAPI()
        return response.data
    }
     catch(err){
       return rejectWithValue("Something went wrong");
    }

})

export const updatepatient=createAsyncThunk("yourapp/updatepatient",async({id,data},{rejectWithValue})=>{

    try{
        const response= await updatepatientsAPI(id,data)
        return response.data
    }
     catch(err){
       return rejectWithValue("Something went wrong");
    }

})

export const deletepatient=createAsyncThunk("yourapp/deletepatient",async(id,{rejectWithValue})=>{

    try{
        const response= await updatepatientsAPI(id)
        return response.data
    }
     catch(err){
       return rejectWithValue("Something went wrong");
    }

})
const yourappSlice=createSlice({
    name:"yourapp",
    initialState:{
        patients:[],
        loading:false,
        errorMsg:''
    },
    reducers:{},
   
    extraReducers:(builder)=>{
        builder.addCase(getpatient.pending,(state)=>{
                    state.loading=true
                    state.errorMsg=""
                }
        )

        builder.addCase(getpatient.rejected,(state)=>{
                    state.loading=false
                    state.errorMsg="Loading failed"
                }
        )

        builder.addCase(getpatient.fulfilled,(state,apiResult)=>{
                    state.loading=false
                    state.errorMsg=""
                    state.patients=apiResult.payload
                }
        )

         builder.addCase(updatepatient.pending,(state)=>{
                    state.loading=true
                    state.errorMsg=""
                }
        )

         builder.addCase(updatepatient.rejected,(state)=>{
                    state.loading=false
                    state.errorMsg="Loading failed"
                }
        )

        builder.addCase(updatepatient.fulfilled,(state,apiResult)=>{
                    state.loading=false
                    state.errorMsg=""
                    
                }
        )

        builder.addCase(deletepatient.pending,(state)=>{
                    state.loading=true
                    state.errorMsg=""
                }
        )

        builder.addCase(deletepatient.rejected,(state)=>{
                    state.loading=false
                    state.errorMsg="Loading failed"
                }
        )

         builder.addCase(deletepatient.fulfilled,(state,apiResult)=>{
                    state.loading=false
                    state.errorMsg=""
                    
                }
        )


    }
})


export default yourappSlice.reducer;
export const{}=yourappSlice.actions;