import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' 
import Todos from './components/Todos';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Todos/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;