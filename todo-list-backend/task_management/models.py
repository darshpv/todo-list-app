from core.database import Base
from enum import Enum
from sqlalchemy import Column, Integer, String, Date, DateTime, Enum as SQLAlchemyEnum, func

class TaskPriority(str, Enum):
    high = "high"
    medium = "medium"
    low = "low"

class Task(Base):
    __tablename__ = "tasks"
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, nullable=False)
    description = Column(String, nullable=True)
    priority = Column(SQLAlchemyEnum(TaskPriority), nullable=False)
    date_added = Column(DateTime(timezone=False), server_default=func.now(), nullable=False)
    deadline = Column(String, nullable=True)