import './App.css';
import { useState, useEffect } from 'react'
import { getTodos } from './services/todos-api.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' 
import Todos from './components/todos';

function App() {
  const [todosArray, setTodos] = useState([]);

  useEffect(() => {
    getTodos()
    .then(res => setTodos(res.data))
  }, [])
  console.log(todosArray)
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Todos/>}></Route>
          {}
        </Routes>
      </Router>
    </div>
  );
}

export default App;