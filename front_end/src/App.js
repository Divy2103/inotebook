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
import { useState, useEffect,useContext } from 'react';
import Profile from './components/Profile';
import NoteContext from './context/notes/NoteContext';
import { useNavigate } from 'react-router-dom'

function App() {
  // const navigate = useNavigate()
  // const context = useContext(NoteContext);
  // const { getUser } = context;

  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  // useEffect(() => {
  //   if (localStorage.getItem('token')) {
  //     getUser()
  //   }
  //   else {
  //     navigate("/login")
  //   }
  // }, [])

  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Alert alert={alert} />
          <div className='py-5 px-10'>
            <Routes>
              <Route path="/login" element={<Login showAlert={showAlert} />} />
              <Route path="/register" element={<Register showAlert={showAlert} />} />
              <Route path="/" element={<Home showAlert={showAlert} />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/profile" element={<Profile showAlert={showAlert}/>}></Route>
            </Routes>
          </div>
        </Router>
      </NoteState >
    </>
  );
}

export default App;
