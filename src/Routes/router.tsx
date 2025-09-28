import App from "@/App";
import Task from "@/Page/Task";
import User from "@/Page/User";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
    children:[
         {
             path:"/user",
             Component:User,
         },
         {
             path:"/",
             Component:Task,
         },
         {
             path:"/task",
             Component:Task
         }
    ]
  },
]);



export default router;