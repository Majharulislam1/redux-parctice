 
import type { task_type } from "@/types/types";
import { createSlice } from "@reduxjs/toolkit";


interface taskIn {
    task: task_type[],
}

const initialState: taskIn = {
    task: [
        {
            id: '1252532asdfasdf',
            title: "hello world",
            description: 'create a github repo',
            isComplete: false,
            priority: 'High'
        },
        {
            id: '1252532asdfasdfsdfa',
            title: "hello world",
            description: 'create a github repo',
            isComplete: false,
            priority: 'High'
        }
    ]
}


const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {}
})



export default taskSlice.reducer;