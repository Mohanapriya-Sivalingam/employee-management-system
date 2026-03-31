import { configureStore } from "@reduxjs/toolkit";
import useReducer from "../EmployeeSlice/EmployeeSlice"


const store = configureStore({
    reducer: {
        empInfo: useReducer
    }
})

export default store