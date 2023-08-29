import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';
import Login from './components/Login';
import Register from './components/Register';

function App() {

  return (
    <>
      <NoteState>
        <Router>
          <Navbar/>
          {/* <Alert message="Hello"/> */}
          <div className='py-5 px-10'>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
          </Routes>
          </div>
        </Router>
      </NoteState >
    </>
  );
}

export default App;
