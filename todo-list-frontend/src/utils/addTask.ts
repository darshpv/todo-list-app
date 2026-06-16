import type { Task } from "../types/task";
import { sampleTasks } from "../data/tasks";

export function addTask(task: Task): Task[] {
    return [...sampleTasks, task];
}