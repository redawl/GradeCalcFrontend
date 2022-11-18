import './App.css';
import Main from './components/Main/Main';
import Class from './components/Class/Class';
import { Router, Routes, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <Router location={history.location}>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/class" element={<Class/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
