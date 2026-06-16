import { useState } from 'react'
import './App.css'
import { TaskItem } from './components/TaskItem'
import { sampleTasks } from './data/tasks'
import TaskBoard from './components/TaskBoard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{
      border: "5px solid white",
    }}>
      <TaskBoard 
        tasks={sampleTasks}
      />
    </div>
  )
}

export default App
