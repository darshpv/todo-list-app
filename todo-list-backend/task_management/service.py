from sqlalchemy.ext.asyncio import AsyncSession
from task_management.repository import TaskRepository
from task_management.schemas import TaskCreateRequest, TaskUpdateRequest
from datetime import datetime
from fastapi import HTTPException
from task_management.models import Task

taskRepository = TaskRepository()

async def create_task(new_db: AsyncSession, task_data: TaskCreateRequest):


    new_task = Task(
        title=task_data.title,
        description=task_data.description,
        priority = task_data.priority,
        deadline=task_data.deadline
    )

    created_task = await taskRepository.create_task(db=new_db, task=new_task)

    return created_task

async def update_task(new_db: AsyncSession, task_id: int, task_data: TaskUpdateRequest):

    task = await taskRepository.get_task_by_id(db=new_db, task_id=task_id)

    if task is None:
        raise HTTPException(status_code=404, detail="The entered task does not exist")
    
    
    update_data = task_data.model_dump(exclude_unset=True)

    updated_task = await taskRepository.update_task(
        db=new_db,
        task_id=task_id,
        update_data=update_data
    )

    return updated_task

async def delete_task(new_db: AsyncSession, task_id: int):

    task = await taskRepository.get_task_by_id(db=new_db, task_id=task_id)

    if task is None:
        raise HTTPException(status_code=404, detail="The enetered task does not exist")

    await taskRepository.delete_task(db=new_db, task_id=task_id)

async def delete_all_tasks(new_db: AsyncSession):

    await taskRepository.delete_all_tasks(db=new_db)

async def list_tasks(new_db: AsyncSession):

    tasks = await taskRepository.get_tasks(db=new_db)

    if tasks is None:
        raise HTTPException(status_code=404, detail="There are no tasks to show")
    
    return tasks
