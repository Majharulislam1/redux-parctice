import type { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";



const initialState = {
      user:[
         {
            id:'aksjdfasdff',
            name:'Majharul islam'
         }
      ]
}



const createUser = createSlice({
     name:'user_slice',
     initialState,
     reducers:{

     }
})


export const select_user = (state:RootState)=>{
      return state.user.user;
}


export default createUser.reducer ;