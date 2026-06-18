import { useEffect, useState } from "react";
import { TaskItem } from "./TaskItem";
import type { Task, TaskPriority } from "../types/task";
import TaskBar from "./TaskBar";
import { sortTasksByPriority } from "../utils/taskSorting";
import "./TaskBoard.css";
import { ENDPOINTS, instance } from "./api";



export default function TaskBoard() {
    const [displayedTasks, setDisplayedTasks] = useState<Task[]>([]);

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

    const getAllTasks = async() => {
        try {
            const response = await instance.get(ENDPOINTS.GET_TASKS())

            if (response.data != null) {
                setDisplayedTasks(response.data)
            } else {
                alert("No tasks to show")
            }
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getAllTasks()
    }, [])

    const handleSort = () => {
        const sortedTasks: Task[] = sortTasksByPriority(displayedTasks || []);
        setDisplayedTasks(sortedTasks);
    };

    const handleClearTasks = async () => {
        try {
            await instance.delete(ENDPOINTS.DELETE_TASKS())
            setDisplayedTasks([])
        } catch (e) {
            console.log(e)
            alert(e)
        }
    }
    const handleTaskDeletion = async(id: number) => {
        try {
            await instance.delete(ENDPOINTS.DELETE_TASK(id))
            setDisplayedTasks((prevTasks) => prevTasks.filter((task) => task.id !== id))
        } catch (e) {
            console.log(e)
            alert(e)
        }
    }

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
                onClear={handleClearTasks}
            />
            <div className="board-items">
                {displayedTasks.length > 0 ? displayedTasks.map((task) => (
                <TaskItem
                    key={task.id} // assuming tasks have an id
                    task={task}
                    onPriorityChange={handlePriorityChange}
                    onDelete={() => {
                        console.log(task);
                        handleTaskDeletion(task.id)
                    }}
                />
                )) : (
                    <div className="board-items-text">
                        <h2>No Tasks to Show</h2>
                    </div>
                )}
            </div>
        </div>
    );
}