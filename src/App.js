//import Menu from './Menu';
import Authentication from './Authentication/Authentication';
import './App.css';
//import Dashboard from './dashboard/Dashboard';
//import Navbar from './Navbar';
import React, { useEffect, useState } from "react";

//<h1>{initialData.title}</h1>
function App() {
  const [initialData,setInitialData] = useState([{}])

  useEffect(()=>{
    fetch('/api').then(

      response => response.json()
      ).then(data => setInitialData(data))
  }, []);
  return (
    <div className="App">
      
      <div className="navbar">
        <Authentication/>
      </div>
   </div>

  );
}

export default App;
