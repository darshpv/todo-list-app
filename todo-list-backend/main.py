from fastapi import FastAPI
from task_management.routes import router

app = FastAPI(
    title="Task Manager App",
    version="0.1.0"
)

app.include_router(router)

@app.get("/")
async def root():
    return {"message": "App is running"}