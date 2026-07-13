import  { configureStore }  from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice"

export const storee= configureStore({
    reducer:{
        counter: counterReducer

    }
})
