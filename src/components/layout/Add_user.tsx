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

import { Form, FormControl,FormField, FormItem, FormLabel, } from "../ui/form"
import { useForm,   type SubmitHandler } from "react-hook-form"
 
 
import { useAppDispatch } from "@/redux/hooks"
 
import type { user_type } from "@/types/types"
 
import { add_user } from "@/redux/features/user/user_slice"
import { useState } from "react"


export function Add_user() {

    const form = useForm<user_type>();
     const dispatch = useAppDispatch();
     const [isOpen ,setOpen] = useState(false);

//     const onSubmit:SubmitHandler<task_type> = (data: task_type) => {
//        const newTask: task_type = {
//     ...data,
//     due_date: new Date().toISOString(),  
//   }

//   dispatch(add_tasks(newTask))
//     }

    const onSubmit:SubmitHandler<user_type> =(data:user_type)=>{
             
           
             dispatch(add_user(data));
           setOpen(false);
           form.reset();
    }

    return (
        <Dialog open={isOpen} onOpenChange={setOpen}>
            <form>
                <DialogTrigger asChild>
                    <Button variant="outline">Add User</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Add User</DialogTitle>
                        <DialogDescription className="sr-only">
                            Make changes to your profile here. Click save when you&apos;re
                            done.
                        </DialogDescription>
                    </DialogHeader>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            <FormField

                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem className="my-2">
                                        <FormLabel>Title</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Title" {...field} value={field.value || ""} required/>
                                        </FormControl>
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
