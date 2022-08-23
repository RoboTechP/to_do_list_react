import Header from "./component/Header"
import Tasks from "./component/Tasks";
import { useState } from "react";

function App() {
  const name = 'Arslan Amir'
  const [tasks, setTasks] = useState ([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: '4th Feb 2022',
      Country: 'Mexico',
      reminder: false,
    } , 
    {
        id: 2,
        text: 'Doctors Appointment',
        day: '4th Feb 2022',
        Country: 'Mexico',
        reminder: false,
      } , 
     ])

     const deleteTask= (id) => {
       setTasks(tasks.filter((task)=> task.id !==id))
       console.log ("Deleting a task", id)
     }

  return (
    <div className="container">
        {/* <h1> Hello from react {name}</h1> */}
        <Header title= 'Task Tracker'/>
        <Tasks tasks={tasks} onDelete={deleteTask}/>
    </div>
  );
}
export default App;
