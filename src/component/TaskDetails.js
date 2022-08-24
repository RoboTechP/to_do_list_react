import React, { useEffect, useState } from 'react'
import { useParams, Navigate, useNavigate} from 'react-router-dom'

const TaskDetails = () => {
    const [loading, setLoading] = useState(true)
    const [task, setTask] = useState({})
    const [error,setError] = useState(null)
    const params= useParams()
    const Navigate= useNavigate ()

    useEffect(()=>{
        const fetchTask= async () => {
            const res= await fetch (`http://localhost:5000/tasks/${params.id}`)
            const data = await res.json() 

                // res.status? 404: setError("Task not found")

                if (res.status===404) {
                     setError("Task not found")
                     console.log("page not found")
                }
                setTask(data)
                setLoading(false)
        }
        fetchTask( )

    },[])

    if (error) {
       Navigate('/')
    }

  return loading? (
    <h3> Loading ...</h3>
  ) : 
  <div>
    <h3> {task.id}</h3>
    <h3> {task.text}</h3>
    <h3> {task.day}</h3>
  </div>
}

export default TaskDetails