import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"

import { Form, FormControl, FormField, FormItem, FormLabel, } from "../ui/form"
import { useForm, type SubmitHandler } from "react-hook-form"
import { Select } from "@radix-ui/react-select"
import { SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { Calendar } from "../ui/calendar"
// import { useAppDispatch, useAppSelector } from "@/redux/hooks"
// import { add_tasks } from "@/redux/features/task/task"
import type { task_type } from "@/types/types"
 
import { useState } from "react"
import { useCreateTaskMutation } from "@/redux/api/baseApi"


export function Add_task() {

    const [isOpen, setOpen] = useState(false);



    const form = useForm<task_type>();
    // const dispatch = useAppDispatch();

    // const User = useAppSelector(select_user);

    const [createTask , {data,isLoading}] = useCreateTaskMutation();

   
    if(isLoading){
         return <p>Loading</p>
    }
 console.log(data);
    const onSubmit: SubmitHandler<task_type> = async (data: task_type) => {
        const newTask: task_type = {
            ...data,
            isComplete:false,
            // member: "John Doe",
            dueDate: new Date().toISOString(),
             
        }

        console.log(newTask);

        const task = await createTask(newTask);
        console.log(task);

        // dispatch(add_tasks(newTask))
        setOpen(false);
        form.reset();
    }

    return (
        <Dialog open={isOpen} onOpenChange={setOpen}>
            <form>
                <DialogTrigger asChild>
                    <Button variant="outline">Add Task</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Add Task</DialogTitle>
                        <DialogDescription className="sr-only">
                            Make changes to your profile here. Click save when you&apos;re
                            done.
                        </DialogDescription>
                    </DialogHeader>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            <FormField

                                control={form.control}
                                name="title"
                                render={({ field }) => (
                                    <FormItem className="my-2">
                                        <FormLabel>Title</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Title" {...field} value={field.value || ""} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="description"
                                render={({ field }) => (
                                    <FormItem className="my-2">
                                        <FormLabel>Description</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Description" {...field} value={field.value || ""} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />


                            <FormField
                                control={form.control}
                                name="priority"
                                render={({ field }) => (
                                    <FormItem className="w-full">
                                        <FormLabel>Priority</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}  >
                                            <FormControl>
                                                <SelectTrigger className="w-full">
                                                    <SelectValue placeholder="Priority" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent className="w-full">
                                                <SelectItem value="High">High</SelectItem>
                                                <SelectItem value="Medium">Medium</SelectItem>
                                                <SelectItem value="Low">Low</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </FormItem>
                                )}
                            />

                            {/* <FormField
                                control={form.control}
                                name="assignTo"
                                render={({ field }) => (
                                    <FormItem className="w-full mt-4">
                                        <FormLabel>Assign To:</FormLabel>
                                        <Select onValueChange={field.onChange}  >
                                            <FormControl>
                                                <SelectTrigger className="w-full">
                                                    <SelectValue placeholder="Assign To" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent className="w-full">

                                                {/* {
                                                    User.map(user => <SelectItem value={user.id} key={user.id}>{user.name}</SelectItem>)
                                                } */}

                                            {/* </SelectContent>
                                        </Select>
                            //         </FormItem> */}
                            
                            


                            <FormField
                                control={form.control}
                                name="dueDate"
                                render={({ field }) => (
                                    <FormItem className="flex flex-col my-4">
                                        <FormLabel>Due Date</FormLabel>
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <FormControl>
                                                    <Button
                                                        variant={"outline"}
                                                        className={cn(
                                                            "w-full pl-3 text-left font-normal",
                                                            !field.value && "text-muted-foreground"
                                                        )}
                                                    >
                                                        {field.value ? (
                                                            format(field.value, "PPP")
                                                        ) : (
                                                            <span>Pick a date</span>
                                                        )}
                                                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                    </Button>
                                                </FormControl>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-auto p-0" align="start">
                                                <Calendar
                                                    mode="single"
                                                    selected={field.value ? new Date(field.value) : undefined}
                                                    onSelect={field.onChange}
                                                    // disabled={(date) =>
                                                    //     date > new Date() || date < new Date("1900-01-01")
                                                    // }
                                                    captionLayout="dropdown"
                                                />
                                            </PopoverContent>
                                        </Popover>

                                    </FormItem>
                                )}
                            />







                            <DialogFooter className="my-2">
                                <DialogClose asChild>
                                    <Button variant="outline">Cancel</Button>
                                </DialogClose>
                                <Button type="submit">Submit</Button>
                            </DialogFooter>
                        </form>
                    </Form>
                </DialogContent>
            </form>
        </Dialog>
    )
}
