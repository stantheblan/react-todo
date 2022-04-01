import './App.css';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom' 
import Todos from './components/Todos';
import { NewTodo } from './components/NewTodo';
import { Show } from './components/Show';

function App() {
  return (
    <div className="App">
     
      <Router> 
        <nav>
        <Link to='/'>Home</Link>        
        <Link to='/new'>New</Link>
        </nav>
        <Routes>
          <Route path='/' element={<Todos/>}></Route>
          <Route path='/:id' element={<Show/>}></Route>
          <Route path='/new' element={<NewTodo/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;