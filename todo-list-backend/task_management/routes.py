from fastapi import Depends, APIRouter
from sqlalchemy.ext.asyncio import AsyncSession
from task_management.schemas import (
    TaskCreateRequest,
    TaskUpdateRequest,
    TaskResponse
)
from typing import List
from core.database import get_db_session

from task_management import service

router = APIRouter(prefix="/tasks", tags=["Tasks"])

@router.post("/create_task", response_model=TaskResponse, status_code=201)
async def create_task(
    task_data: TaskCreateRequest,
    db: AsyncSession = Depends(get_db_session)
):
    return await service.create_task(new_db=db, task_data=task_data)

@router.put("/update_task/{task_id}", response_model=TaskResponse)
async def update_task(
    task_id: int,
    task_data: TaskUpdateRequest,
    db: AsyncSession = Depends(get_db_session),
): 
    return await service.update_task(new_db=db, task_id=task_id, task_data=task_data)

@router.delete("/delete_task/{task_id}")
async def delete_task(
    task_id: int,
    db: AsyncSession = Depends(get_db_session)
):
    return await service.delete_task(new_db=db, task_id=task_id)

@router.delete("/delete_tasks/")
async def delete_all_tasks(
    db: AsyncSession = Depends(get_db_session)
):
    return await service.delete_all_tasks(new_db=db)


@router.get("/get_tasks", response_model=List[TaskResponse])
async def list_tasks(
    db: AsyncSession = Depends(get_db_session)
):
    return await service.list_tasks(new_db=db)