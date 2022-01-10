import React, {Component} from 'react';
//import {MenuItem} from "./MenuItem";
//import Authentication from './Authentication/Authentication'
import Dashboard from './dashboard/Dashboard'
import './Navbar.css'
//import { Button } from './Button';
import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";
import './dashboard/Dashboard.css';
import M from './M';
import Mc from './Mc';
import Mlc from './Mlc';
import Hero from './Hero';
const MenuItems = [
    {

        title: 'Home',
        url: '#',
        cName: 'nav-links'
    },
    {
        title: 'Services',
        url: '#',
        cName: 'nav-links'
    },
    {
        title: 'Products',
        url: '#',
        cName: 'nav-links'
    },
    {
        title: 'Contact Us',
        url: '#',
        cName: 'nav-links'
    },
    {
        title: 'Sign In',
        url: '/Authentication',
        cName: 'nav-links'
    }

]
function Navbar(){
   

return(

<Router>
<nav className="NavbarItems">
<h1 className="navbar-logo">
    MedX
    <i className="fab fa-react">
    </i>
</h1>
<div className="menu-icon">
    <i className='fas fa-times'>
    
    </i>

</div>    
<ul className='nav-menu active'>
    <li className='nav-links'>
        <Link to="/dashboard">Covid-19 Dashboard</Link>
    </li>
    <li className='nav-links'>
        <Link to="/M">Pneumonia</Link>
    </li>
    <li className='nav-links'>
        <Link to="/Mc">Covid-19</Link>
    </li>
    <li className='nav-links'>
        <Link to="/Mlc">Lung Cancer</Link>
    </li>
</ul>
</nav>
<Switch>
<Route exact path="/Hero">
   <Hero/>
</Route>

<Route exact path="/M">
    <div className="App">
        <M/>
    </div>
</Route>

<Route exact path="/Mc">
    <div className="App">
        <Mc/>
    </div>
</Route>
<Route exact path="/Mlc">
    <div className="App">
        <Mlc/>
    </div>
</Route>


<Route path="/dashboard">
    <div className="App">
        <Dashboard/>
    </div>
</Route>



</Switch>
</Router>



    
)
    
        
  
}

export default Navbar;
