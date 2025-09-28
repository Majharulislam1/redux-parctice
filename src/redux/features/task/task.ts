 
import type { task_type } from "@/types/types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

interface taskIn {
    task: task_type[],
}

const initialState: taskIn = {
    task: []
}


const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
         add_tasks:(state,action:PayloadAction<task_type>)=>{

             const id = uuidv4();

             const newtaks = {
                 ...action.payload,
                 id,
                isComplete:false,
             }

             state.task.push(newtaks);
         }
    }
})

export const {add_tasks} = taskSlice.actions;

export default taskSlice.reducer;