import "./TaskItem.css";
import type { Task, TaskPriority } from "../types/task";

export type TaskItemProps = {
    task: Task;
    onPriorityChange: (
        taskId: number,
        priority: TaskPriority
    ) => void;
};

export function TaskItem({ task, onPriorityChange }: TaskItemProps) {


    const handlePriorityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onPriorityChange(
            task.id,
            e.target.value as TaskPriority
        );
    };

    return (
        <div className="task-item">
            <div className="task-info">
                <h3>Title: {task.title}</h3>
                <h3>Description: {task.description}</h3>
                <h3>Date Added: {task.date_added.toLocaleDateString()}</h3>
                <h3>Deadline: {task.deadline.toLocaleDateString()} at {task.deadline.toLocaleTimeString()}</h3>
            </div>
            <div className="task-priority">
                <h3 className={`priority-${task.priority}`}>{task.priority} priority</h3>
                <select
                    value={task.priority}
                    onChange={handlePriorityChange}
                    title="Edit task priority"
                    className="task-priority-select"
                >
                    <option value="high">High Priority</option>
                    <option value="medium">Medium Priority</option>
                    <option value="low">Low Priority</option>
                </select>
            </div>
        </div>
    );
}