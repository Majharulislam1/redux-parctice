import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counter/counter";
import taskSlice from "./features/task/task";



export const store = configureStore({
     reducer:{
       counter:counterSlice,
       todos:taskSlice,
     }
})



export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;