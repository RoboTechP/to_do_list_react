import Header from "./component/Header"
import Task from "./component/Task";




function App() {
  const name = 'Arslan Amir'

  return (
    <div className="container">
        {/* <h1> Hello from react {name}</h1> */}
        <Header title= 'Task Tracker'/>
        <Task />
    </div>
  );
}

export default App;
