import Todo from './components/Todo'

function App() {
  return (
    <div className="container">
      <h1>My ToDos</h1>
      <Todo text='Learn React'/>
      <Todo text='Master React'/>
      <Todo text='Explore the full React course' />
      <Todo text='Full crash course on React'/>
    </div>
  );
}

export default App;
