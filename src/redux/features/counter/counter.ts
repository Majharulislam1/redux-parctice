import { createSlice } from "@reduxjs/toolkit";


 const initialState = {
     count:0
 }

 const counterSlice = createSlice({
     name:'counter',
     initialState,
     reducers:{
        increments:(state,action)=>{
            state.count = state.count + action.payload;
        },
        decrements:(state)=>{
            state.count = state.count - 1;
        }
     }
})

export const {increments,decrements} = counterSlice.actions;

export default counterSlice.reducer;