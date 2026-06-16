from task_management.models import Task
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select

class TaskRepository():

    async def create_task(self, db: AsyncSession, task: Task):
        try:
            new_task = Task(
                title=task.title,
                description=task.description,
                priority=task.priority,
                deadline=task.deadline
            )

            db.add(new_task)
            await db.commit()
            await db.refresh(new_task)

            return new_task
        
        except Exception as e:
            await db.rollback()
            raise e
    
    async def update_task(self, db: AsyncSession, task_id: int, update_data: dict):
        try:
            result = await db.execute(
                select(Task).where(Task.id==task_id)
            )

            result_task = result.scalar_one_or_none()

            for field, value in update_data.items():
                if value is not None:
                    setattr(result_task, field, value)
            
            await db.commit()
            await db.refresh(result_task)

            return result_task
        
        except Exception as e:
            await db.rollback()
            raise e
    
    async def delete_task(self, db:AsyncSession, task_id: int):
        try:
            result = await db.execute(
                select(Task).where(Task.id == task_id)
            )

            task = result.scalar_one_or_none()

            await db.delete(task)
            await db.commit()
        
        except Exception as e:
            await db.rollback()
            raise e
    
    async def get_task_by_id(self, db: AsyncSession, task_id: int):
        try:
            result = await db.execute(
                select(Task).where(Task.id == task_id)
            )

            task = result.scalar_one_or_none()

            return task
        
        except Exception as e:
            await db.rollback()
            raise e
    