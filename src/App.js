import './App.css';
import React,{useState, useEffect} from 'react';
import Login from './auth/login';
import Dashboard from './component/Dashboard';
function App() {
    const [login,setLogin]= useState(true);
    useEffect(() => {
      setLogin(true)
    },[login])
  return (
    <div className="App">
      {login !== true ? <Login/> : <Dashboard/>
      
    }
    </div>
  );
}

export default App;
