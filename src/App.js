
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Addtask from './Addtask';
import Filter from './Filter';
import Listtask from './Listtask';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>To Do</h3>
      <Filter/>
      <Addtask/>
      <Listtask/>
      </header>
    </div>
  );
}

export default App;
