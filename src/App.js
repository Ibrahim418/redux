
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Addtask from './component/Addtask';
import Filter from './component/Filter';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Filter/>
  <Addtask/>
      </header>
    </div>
  );
}

export default App;
