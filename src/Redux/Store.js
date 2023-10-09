import { configureStore } from "@reduxjs/toolkit";
import sliceReducer from './Reducer'


export const Store = configureStore({
    reducer:{
    task:sliceReducer,
    }
    
})