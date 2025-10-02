


export interface task_type {
    id: string,
    title: string,
    description: string,
    isComplete: boolean,
    dueDate:string | Date,
    priority: 'High' | 'Medium' | 'Low',
    // assignTo:string | null
    member: string
}

export interface user_type {
    id: string,
    name: string
}