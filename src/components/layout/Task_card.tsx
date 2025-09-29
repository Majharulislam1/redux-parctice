import type { task_type } from "@/types/types";

 

 

 

const Task_card = ({task}:{task:task_type}) => {
  
         

    return (
        <div className="p-4 relative">
             <div className={` ${task.priority === "High" && 'bg-red-600'} ${task.priority === 'Low' && 'bg-yellow-600'} ${task.priority === 'Medium' && 'bg-green-600'} w-3 h-3  rounded-full absolute top-[20px] left-[20px]`}></div>
             <div className='border p-4 flex justify-between mb-4 rounded-sm'>
                   <div> 
                        <h1> {task.title}</h1>
                        <p>{task.description}</p>
                   </div>
                   <div>
                           <svg  xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill={"currentColor"}  viewBox="0 0 24 24" > <path d="m17,6v-2c0-1.1-.9-2-2-2h-6c-1.1,0-2,.9-2,2v2H2v2h2v12c0,1.1.9,2,2,2h12c1.1,0,2-.9,2-2v-12h2v-2h-5Zm-8-2h6v2h-6v-2Zm9,16H6v-12h12v12Z"></path><path d="M14.29 10.29 12 12.59 9.71 10.29 8.29 11.71 10.59 14 8.29 16.29 9.71 17.71 12 15.41 14.29 17.71 15.71 16.29 13.41 14 15.71 11.71 14.29 10.29z"></path></svg>
                   </div>

                  
             </div>
        </div>
    );
};

export default Task_card;