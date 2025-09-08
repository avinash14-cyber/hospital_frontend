import { configureStore } from "@reduxjs/toolkit";
import appointmentSlice from './slice/appointmentSlice'
import yourappSlice from './slice/yourappSlice'
const hospStore=configureStore({

    reducer:{

        appointmentReducer:appointmentSlice,
        yourappReducer:yourappSlice
    }
})

export default hospStore