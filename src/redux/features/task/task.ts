
import type { RootState } from "@/redux/store";
import type { task_type } from "@/types/types";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";


interface taskIn {
    task: task_type[],
    filter: string
}

const initialState: taskIn = {
    task: [],
    filter: 'all'
}


type DraftTask = Pick<task_type, "title" | "description" | "due_date" | "priority">;

const create_task = (due_task: DraftTask): task_type => {
    return { id: nanoid(), isComplete: false, ...due_task };
}


const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        add_tasks: (state, action: PayloadAction<task_type>) => {

            const newtaks = create_task(action.payload);

            state.task.push(newtaks);
        },
        toggle_line_throw: (state, action: PayloadAction<string>) => {
            state.task.forEach((task) => {
                if (task.id === action.payload) {
                    task.isComplete = !task.isComplete;
                }
            });

        },
        delete_task: (state, action: PayloadAction<string>) => {
            state.task = state.task.filter((task) => task.id !== action.payload);
        },
        update_filter: (state, action) => {
            state.filter = action.payload;
        }
    }
})


export const select_task = (state: RootState) => {

    if (state.todos.filter === 'High') {
        return state.todos.task.filter((task) => task.priority === 'High');
    } else if (state.todos.filter === 'Medium') {
        return state.todos.task.filter((task) => task.priority === 'Medium');
    } else if (state.todos.filter === 'Low') {
        return state.todos.task.filter((task) => task.priority === 'Low');
    }
    else {
        return state.todos.task;
    }
}

export const { add_tasks, toggle_line_throw, delete_task, update_filter } = taskSlice.actions;

export default taskSlice.reducer;