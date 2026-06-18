import { sortTasksByPriority } from "../utils/taskSorting";
import type { Task } from "../types/task";
import "./TaskBar.css";
import { useNavigate } from "react-router-dom";

type TaskBarProps = {
    tasks: Task[];
    onSort: (sortedTasks: Task[]) => void;
    onClear: () => Promise<void>;
};

export default function TaskBar({ tasks, onSort, onClear }: TaskBarProps) {
    const handleSort = () => {
        const sortedTasks:Task[] = sortTasksByPriority(tasks);
        onSort(sortedTasks);
    };

    const navigate = useNavigate()
    const handleAddNavigate = () => {
        navigate("/create_task")
    }

    const handleClearTasks = async() => {
        await onClear();
    }

    return (
        <div className="task-bar">
            <h2>Task Organiser</h2>
            <div className="task-bar-buttons">
                <button onClick={handleAddNavigate}>Add Task</button>
                <button onClick={handleSort}>
                    Sort Tasks
                </button>
                <button onClick={handleClearTasks}>Clear Tasks</button>
            </div>
        </div>
    );
}