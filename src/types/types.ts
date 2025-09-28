


export interface task_type {
    id: string,
    title: string,
    description: string,
    isComplete: boolean,
    due_date:string,
    priority: 'High' | 'Medium' | 'Low',
}