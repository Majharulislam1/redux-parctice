


export interface task_type {
    id: string,
    title: string,
    description: string,
    isComplete: boolean,
    due_date:string | Date,
    priority: 'High' | 'Medium' | 'Low',
    assignTo:string | null
}

export interface user_type {
    id: string,
    name: string
}