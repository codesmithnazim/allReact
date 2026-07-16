import  { configureStore }  from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice"

const STORE = configureStore({
    reducer:{
        cOounter: counterReducer,
        mounter:counterReducer
    }
})

export {STORE}
