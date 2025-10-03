


export interface task_type {
    id: string,
    title: string,
    description: string,
    isComplete: boolean,
    dueDate:string | Date,
    priority: 'high' | 'medium' | 'low',
    // assignTo:string | null
    member: string
}

export interface user_type {
    id: string,
    name: string
}