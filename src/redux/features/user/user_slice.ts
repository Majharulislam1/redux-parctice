import type { RootState } from "@/redux/store";
import type { user_type } from "@/types/types";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";



const initialState = {
    user: [

    ]
}



const createUser = createSlice({
    name: 'user_slice',
    initialState,
    reducers: {

        add_user: (state, action: PayloadAction<Omit<user_type, 'id'>>) => {
            const newUser: user_type = {
                id: nanoid(),
                ...action.payload,
            }
            state.user.push(newUser);  
        },

        delete_user :(state,action:PayloadAction<string>)=>{
              
            state.user = state.user.filter((user:user_type) => user.id !== action.payload);
        
        }

    }
})


export const select_user = (state: RootState) => {
    return state.user.user;
}


export const { add_user , delete_user} = createUser.actions;

export default createUser.reducer;