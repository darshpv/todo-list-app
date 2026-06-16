import type { Task } from "../types/task";

export function sortTasksByPriority(tasks: Task[]): Task[] {
    const high: Task[] = [];
    const medium: Task[] = [];
    const low: Task[] = [];

    for (const task of tasks) {
        switch (task.priority) {
            case "high":
                high.push(task);
                break;
            case "medium":
                medium.push(task);
                break;
            case "low":
                low.push(task);
                break;
        }
    }

    return [...high, ...medium, ...low];
}