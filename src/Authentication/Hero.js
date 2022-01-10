import React , {useState,useEffect} from 'react';
//import M from './M';
//import Mc from './Mc';
import Navbar from './Navbar';
import './Hero.css';
//import Dashboard from './dashboard/Dashboard'
//import Menu from './Menu';
//<h1>{initialData.title}</h1>
/*
 
*/
const Hero = ({handleLogout}) => {
    const [initialData,setInitialData] = useState([{}])
    useEffect(()=>{
    fetch('/api').then(
      response => response.json()
      ).then(data => setInitialData(data))
    }, []);
    
    return(
        
        <section className="hero">
           
           <button className="exit" onClick={handleLogout}>Exit app</button>
            <Navbar/>
            <br></br>
            <br></br>
            
            
        </section>

             
    )
}

export default Hero;