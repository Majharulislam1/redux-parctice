 
import { Add_task } from "@/components/layout/Add_task";
import Task_card from "@/components/layout/Task_card";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

 

const Task = () => {
  
       const dispatch = useAppDispatch();
       const {task}= useAppSelector((state) => state.todos)

      

    return (
        <div>
             <div className="flex justify-center py-4">
                  <Add_task></Add_task>
             </div>
             {
                 task.map((task)=> <Task_card key={task.id} task={task}></Task_card>)
             }
        </div> 
    );
};

export default Task;