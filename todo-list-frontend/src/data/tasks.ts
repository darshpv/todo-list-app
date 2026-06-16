import type { Task } from "../types/task";

export const sampleTasks: Task[] = [
    {
        id: 1,
        title: "Task 1",
        description: "Set up the project repository and initial files.",
        priority: "high",
        date_added: new Date(),
        deadline: new Date()
    },
    {
        id: 2,
        title: "Task 2",
        description: "Implement task listing and sample data display.",
        priority: "medium",
        date_added: new Date(),
        deadline: new Date()
    },
    {
        id: 3,
        title: "Task 3",
        description: "Create the task detail view and edit form.",
        priority: "low",
        date_added: new Date(),
        deadline: new Date()
    },
    {
        id: 4,
        title: "Task 4",
        description: "Add filtering and sorting for task priorities.",
        priority: "high",
        date_added: new Date(),
        deadline: new Date()
    },
    {
        id: 5,
        title: "Task 5",
        description: "Improve task validation and user input handling.",
        priority: "medium",
        date_added: new Date(),
        deadline: new Date()
    },
    {
        id: 6,
        title: "Task 6",
        description: "Finalize styling and responsive layout for the app.",
        priority: "low",
        date_added: new Date(),
        deadline: new Date()
    },
]; 