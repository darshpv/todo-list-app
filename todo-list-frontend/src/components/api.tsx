import axios from "axios"

export const ENDPOINTS = {

    CREATE_TASK: () => "/tasks/create_task",
    UPDATE_TASK: (task_id: number) => `/tasks/update_task/${task_id}`,
    DELETE_TASK: (task_id: number) => `/tasks/delete_task/${task_id}`,
    GET_TASKS: () => "/tasks/get_tasks",
    DELETE_TASKS: () => "/tasks/delete_tasks/"
}

export const instance = axios.create({
    baseURL: "http://127.0.0.1:8000/"
})
