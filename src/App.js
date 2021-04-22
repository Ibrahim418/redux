
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Addtask from './Addtask';
import Filter from './Filter';
import Listtask from './Listtask';
import {useSelector} from 'react-redux'

function App() {
  const todos = useSelector(state => state.todos)
  console.log(todos)
  const filter = useSelector(state => state.filter)
console.log(filter)

  return (
    <div className="App">
      <header className="App-header">
        <h3>To Do</h3>
      <Filter/>
      <Addtask/>
      <Listtask todos={filter===null? todos : todos.filter(todo=>todo.done===filter)}/>
      </header>
    </div>
  );
}

export default App;
