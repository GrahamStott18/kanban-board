import logo from './logo.svg';
import './App.css';
import KanbanBoard from './components/KanbanBoard';
import Task from './components/Task';
import Column from './components/Column';

function App() {
  return (
    <div className="App">
      <KanbanBoard />
    </div>
  );
}

export default App;
