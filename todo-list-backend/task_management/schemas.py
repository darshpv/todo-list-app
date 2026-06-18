from pydantic import BaseModel, Field, ConfigDict
from typing import Optional
from task_management.models import TaskPriority
from datetime import datetime

class TaskCreateRequest(BaseModel):
    title: str = Field(
        ...,
        min_length=5,
        max_length=100
    )
    description: Optional[str] = Field(
        None,
        min_length=10,
        max_length=255
    )
    priority: TaskPriority
    deadline: Optional[str] = None

class TaskUpdateRequest(BaseModel):
    title: Optional[str] = Field(
        None,
        min_length=10,
        max_length=100
    )
    description: Optional[str] = Field(
        None,
        min_length=10,
        max_length=255
    )
    priority: Optional[TaskPriority] = None
    deadline: Optional[str] = None

class TaskResponse(BaseModel):
    id: int
    title: str
    description: str
    priority: TaskPriority
    date_added: datetime
    deadline: str

    model_config = ConfigDict(from_attributes=True)