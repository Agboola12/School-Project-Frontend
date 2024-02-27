import { configureStore } from "@reduxjs/toolkit";
import { adminReducer } from "./Slices/adminSlices";


const store = configureStore({
    reducer :{
        admin: adminReducer
    }
})

export default store