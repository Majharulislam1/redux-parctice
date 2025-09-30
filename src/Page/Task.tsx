
import { Add_task } from "@/components/layout/Add_task";
import Task_card from "@/components/layout/Task_card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { select_task, update_filter } from "@/redux/features/task/task";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
 



const Task = () => {


    const task = useAppSelector(select_task);
    const dispetch = useAppDispatch();


    return (
        <div>
            <div className="flex justify-between py-4">
                <Add_task></Add_task>

                <div className="flex w-full max-w-sm flex-col gap-6">
                    <Tabs defaultValue="all">
                        <TabsList>
                            <TabsTrigger onClick={()=>dispetch(update_filter('All'))}  value="all">All</TabsTrigger>
                            <TabsTrigger onClick={()=>dispetch(update_filter('High'))} value="high">High</TabsTrigger>
                            <TabsTrigger onClick={()=>dispetch(update_filter('Medium'))} value="medium">Medium</TabsTrigger>
                            <TabsTrigger onClick={()=>dispetch(update_filter('Low'))} value="low">Low</TabsTrigger>
                        </TabsList>
                    </Tabs>
                </div>

            </div>
            {
                task.map((task) => <Task_card key={task.id} task={task}></Task_card>)
            }
        </div>
    );
};

export default Task;