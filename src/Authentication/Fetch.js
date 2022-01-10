import React , {useState,useEffect} from 'react';

//import Menu from './Menu';
/*
 
*/
const Fetch = ({props}) => {
    const [data,setData] = useState("")
    useEffect(()=>{
    fetch('/api').then(

      response => response.json()
      ).then(data => setData(data))
    }, []);
    
    return(
        
        <section className="hero">
            <h1>{data}</h1>
        </section>

             
    )
}

export default Fetch;