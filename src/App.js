import Header from "./Header";

function App() {
  const name = 'Arslan Amir'

  return (
    <div className="container">
        <h1> Hello from react {name}</h1>
        <Header title={12}/>
    </div>
  );
}

export default App;
