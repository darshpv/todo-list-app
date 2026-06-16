export type TaskPriority = "high" | "medium" | "low";

export type Task = {
    id: number;
    title: string;
    description: string;
    priority: TaskPriority;
    date_added: Date;
    deadline: Date;
}