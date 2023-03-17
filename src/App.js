import './App.css';
import React,{useState, useEffect} from 'react';
import Login from './auth/login';
import Dashboard from './component/Dashboard';
import { BrowserRouter } from "react-router-dom";
function App() {
    const [login,setLogin]= useState(true);
    useEffect(() => {
      setLogin(true)
    },[login])
  return (
    <BrowserRouter>
    <div className="App">
      {login !== true ? <Login/> : <Dashboard/>
    }
    </div>
    </BrowserRouter>
  );
}

export default App;
