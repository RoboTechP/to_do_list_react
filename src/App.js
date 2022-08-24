import { BrowserRouter as Router, Route,Routes, useParams} from "react-router-dom";
import Header from "./component/Header"
import Tasks from "./component/Tasks";
import { useState, useEffect } from "react";
import AddTask from "./component/AddTask";
import Footer from "./component/Footer";
import About from "./component/About";
import TaskDetails from "./component/TaskDetails";
import NotFound from "./component/NotFound";


function App() {
  //const name = 'Arslan Amir'
  const [ShowAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState ([ ])



  useEffect(()=>{
    const getTasks = async () => {
      const tasksFromServer= await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks ();
  }, [])

  // Fetch tasks 
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    console.log(data)
    return data
  }
 
  // Fetch task 
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()
    console.log(data)
    return data
  }

  // Delete a task
     const deleteTask= async(id) => {
      await fetch(`http://localhost:5000/tasks/${id}`, {method: 'DELETE'})
       setTasks(tasks.filter((task)=> task.id !==id))
       console.log ("Deleting a task", id)
     }
     //Toggle reminder
     const ToggelReminder = async(id) => {
      const taskToToggle= await fetchTask (id)
      const updTask = {...taskToToggle, reminder: !taskToToggle.reminder}
      const res= await fetch(`http://localhost:5000/tasks/${id}`,{
        method: 'PUT',
        headers: {'Content-type' : 'application/json'},
        body: JSON.stringify(updTask),
        
     })
     console.log("here value of res is", res)
     const data=await res.json()
      setTasks(tasks.map((task)=>
      task.id===id ? {...task, reminder : data.reminder } :task))
     }

     // Add Task
     const addTask =async(task) => {
      const res = await fetch('http://localhost:5000/tasks', {method: 'POST', headers : {
        'Content-type': 'application/json'}, body: JSON.stringify(task)
      })
      const data = await res.json()
      setTasks([...tasks, data])
      // const id= Math.floor(Math.random () * 1000) +1
      //  console.log(id)
      //  const newTask = {id, ...task}
      //  setTasks([...tasks, newTask])
     }
  return (
      <Router>
    <div className="container">
        {/* <h1> Hello from react {name}</h1> */}
      <Header title= 'Task Tracker' onAdd={()=> setShowAddTask(!ShowAddTask)} showAdd= {ShowAddTask}/>
      <Routes>
      <Route path='' element = {      
        <>
       {ShowAddTask && <AddTask onAdd = {addTask}/>}
       { tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} OnToggle={ToggelReminder} />) : "No tasks to show" }
       </>
      }/>
     <Route path='/about' element={<About />} />
     <Route path='/task/:id' element={<TaskDetails />} />
     <Route path="*" element={<NotFound />}></Route>
      
      </Routes>
      <Footer/>
    </div>
    </Router>
  );
}
export default App;

// const [tasks, setTasks] = useState ([
//   {
//     id: 1,
//     text: 'Doctors Appointment',
//     day: '4th Feb 2022',
//     Country: 'Mexico',
//     reminder: false,
//   } , 
//   {
//       id: 2,
//       text: 'Doctors Appointment',
//       day: '4th Feb 2022',
//       Country: 'Mexico',
//       reminder: false,
//     } , 
//     {
//       id: 3,
//       text: 'Doctors Appointment',
//       day: '4th Feb 2022',
//       Country: 'Mexico',
//       reminder: false,
//     } , 
//     {
//       id: 4,
//       text: 'Doctors Appointment',
//       day: '4th Feb 2022',
//       Country: 'Mexico',
//       reminder: false,
//     } 
//    ])