import { useState } from "react";
import { TaskItem } from "./TaskItem";
import type { Task, TaskPriority } from "../types/task";
import TaskBar from "./TaskBar";
import { sortTasksByPriority } from "../utils/taskSorting";
import "./TaskBoard.css";

export type TaskBoardProps = {
    tasks: Task[];
};

export default function TaskBoard({ tasks }: TaskBoardProps) {
    const [displayedTasks, setDisplayedTasks] = useState(tasks);

    const handlePriorityChange = (
        taskId: number,
        newPriority: TaskPriority
    ) => {
        setDisplayedTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === taskId
                    ? { ...task, priority: newPriority }
                    : task
            )
        );
    };

    const handleSort = () => {
        const sortedTasks: Task[] = sortTasksByPriority(displayedTasks);
        setDisplayedTasks(sortedTasks);
    };

    return (
        <div 
        className="task-board"
        style={{
            border: "5px solid white"
        }}
        >
            <TaskBar
                tasks={displayedTasks}
                onSort={handleSort}
            />

            {displayedTasks.map((task) => (
                <TaskItem
                    key={task.id} // assuming tasks have an id
                    task={task}
                    onPriorityChange={handlePriorityChange}
                />
            ))}
        </div>
    );
}