import { sortTasksByPriority } from "../utils/taskSorting";
import type { Task } from "../types/task";
import "./TaskBar.css";

type TaskBarProps = {
    tasks: Task[];
    onSort: (sortedTasks: Task[]) => void;
};

export default function TaskBar({ tasks, onSort }: TaskBarProps) {
    const handleSort = () => {
        const sortedTasks:Task[] = sortTasksByPriority(tasks);
        onSort(sortedTasks);
    };

    return (
        <div className="task-bar">
            <h2>Task Organiser</h2>
            <div className="task-bar-buttons">
                <button>Add Task</button>
                <button onClick={handleSort}>
                    Sort Tasks
                </button>
                <button>Task History</button>
            </div>
        </div>
    );
}