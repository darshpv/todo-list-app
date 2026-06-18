import React, { useState } from "react";
import type { TaskPriority } from "../types/task";
import { ENDPOINTS, instance } from "./api";
import { useNavigate } from "react-router-dom";

export default function TaskCreationForm() {

    const [taskTitle, setTaskTitle] = useState("");
    const [taskDescription, setTaskDescription] = useState("");
    const [taskPriority, setTaskPriority] = useState<TaskPriority>("medium");
    const [taskDeadline, setTaskDeadline] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false)
    const navigate = useNavigate()

    const handleOnSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (isSubmitting) {
            return;
        }

        setIsSubmitting(true)

        try {
            await instance.post(ENDPOINTS.CREATE_TASK(), {
                title: taskTitle,
                description: taskDescription,
                priority: taskPriority,
                deadline: taskDeadline
            })

            navigate("/")
        } catch (e) {
            alert(e)
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <div className="task-creation-form">
                <div className="task-bar">
                <h2>Add New Task</h2>
                <div className="task-bar-buttons">
                <button
                    type="button"
                    onClick={() => {
                        navigate("/");
                    }}
                >Go Back</button>
                </div>
                </div>
                <h4>Title:</h4>
                <input
                    id="task_title"
                    type="text"
                    placeholder="Enter task title"
                  //  value={taskTitle}
                    onChange={(e) => {
                        setTaskTitle(e.target.value);
                    }}
                />
                <br></br>
                <h4>Description:</h4>
                <input
                    id="task_description"
                    type="text"
                    placeholder="Enter task decription"
                  //  value={taskDescription}
                    onChange={(e) => {
                        setTaskDescription(e.target.value);
                    }}
                />
                <br></br>
                <h4>Priority:</h4>
                <select
                    title="Edit task priority"
                    className="task-priority-select"
                    value={taskPriority}
                    onChange={(e) => {
                        setTaskPriority(e.target.value as TaskPriority)
                    }}
                >
                    <option value="high">High Priority</option>
                    <option value="medium">Medium Priority</option>
                    <option value="low">Low Priority</option>
                </select>
                <br></br>
                <h4>Deadline:</h4>
                <input
                    id="task_deadline"
                    type="text"
                    placeholder="Enter task deadline"
                   // value={taskDeadline}
                    onChange={(e) => {
                        setTaskDeadline(e.target.value);
                        console.log(taskDeadline);
                    }}
                />
                <br></br>
                <button
                    type="submit"
                    disabled={isSubmitting}
                >{isSubmitting ? ("Submitting...") : "Submit"}</button>
            </div>
        </form>
    );
}