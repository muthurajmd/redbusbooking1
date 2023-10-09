import { createSlice } from "@reduxjs/toolkit";
import user from '../main.json'
import { Route } from "react-router-dom";

export const Slice = createSlice({
    name:"Redbus",
    initialState:{
      offer:user.offer,
      route:user.route,
      busarr:user.busarr,
      select:[],
      name: {a:"React"}
        
        
    },
    reducers:{
        Updatearr:(state,action)=>{
            state.busarr = action.payload
         },
         Updateroute:(state,action)=>{
          state.route = action.payload
       },
       Updateselect:(state,action)=>{
        state.select = action.payload
     },
        
}
})
export default Slice.reducer
export const {Updatearr,Updateroute,Updateselect} = Slice.actions
