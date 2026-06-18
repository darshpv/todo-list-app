import { useState } from 'react'
import './App.css'
import { TaskItem } from './components/TaskItem'
import { sampleTasks } from './data/tasks'
import TaskBoard from './components/TaskBoard'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TaskCreationForm from './components/TaskCreationForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<TaskBoard></TaskBoard>}></Route>
            <Route path='create_task/' element={<TaskCreationForm/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
