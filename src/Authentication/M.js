import React,{useState} from 'react';
import Fetch from './Fetch'
/*{file && <ImageThumb image={file} />}*/
import './M.css';
import MFaq from './MFaq';
import './Button.css';
const M = (props) => {
  const [file,setFile] = React.useState("");
  const [name,setName] = React.useState("");
  const [age,setAge] = React.useState("");
  const [weight,setWeight] = React.useState("");
  const [height,setHeight] = React.useState("");
  const [obesity,setObesity] = React.useState("");
  const [hospitalization,setHospitalization] = React.useState("");
  const [state,setState] = React.useState("");
  const [err,setErr] = React.useState("");
  function handleUpload(event){
    setFile(event.target.files[0]);
  }
  function isAlright(){
    if(!(name==="yes" || name==="no"))
      {
        return false;
      }
    if(isNaN(age) || isNaN(weight) || isNaN(height))
      return false;
    else{
      if(age<0 || age>120)
       return false;
      if(height<0 || height>270)
       return false;
       if(weight<0 || weight>442)
       return false;

    }
    return true;
  }
  async function handleUploadImage(ev) {
    ev.preventDefault();    
    
    setState("");
    setHospitalization("");
    setObesity("");
    setErr("");
    const data = new FormData();
    data.append('file', file);
    data.append('filename', name);
    if(isAlright())
    await fetch('/upload', {
      method: 'POST',
      body: data,
    })
    .then((response) => {response.json().then(data => {
      
      if(data.result==="Wrong File Extension"){
        setErr('Wrong File Extension');
      }
      else{
        setState(data.result);
        
        if(state==="No Pneumonia")
        {
        setHospitalization("Not Required");
        }
        else if(state==="Pneumonia"){
          if(name==="yes" || obesity==="Overweight" || age>65 ){
            setHospitalization("Required");
          }
          else{
            setHospitalization("Not Required");
          }
         
         }
         var bmi = parseInt(weight) / ((parseInt(height)/100)*(parseInt(height)/100));
         if(bmi>25){
          setObesity("Overweight");
         }
         else{
           setObesity("Normal"); 
          }
          
      }
     
    } )})
    else{
      setErr("Please enter valid details");
    }

    //alert(state);
    
    
    
}

  return(
    
       
    
    <div className="float-container">
    <div className="float-child"> 
    <form className="fm">
     
     <fieldset>
     <legend>Pneumonia Detection</legend>
  
   <br/>
   <br/>
   
   <div className="flex-container">
   <div className="card">
   <div className="container">
   <h4><b>Hospitalisation</b></h4> 
   <p>
     {hospitalization}
   </p>
   </div>
   </div>

   <div className="card">
   <div className="container">
   <h4><b>Obesity</b></h4> 
   <p>
     {obesity}
   </p>
   </div>
   </div>

   <div className="card">
   <div className="container">
   <h4><b>Pneumonia</b></h4> 
   <p>
     {state}
   </p>
   </div>
   </div>

   </div>

   
   <br>
   </br>

   <div>
   <label for="name">Any Comorbitiy:-</label><br></br>
   <input name="name" value={name}  onChange={(e) => setName(e.target.value)} type="text" placeholder="yes/no(Required)" />
   </div>


   <div>
   <label for="age">Age:-</label><br></br>
   <input name="age" value={age}  onChange={(e) => setAge(e.target.value)} type="text" placeholder="0-120(Required)" />
   </div>


   <div>
   <label for="weight">Weight:-</label><br></br>
   <input name="weight" value={weight}  onChange={(e) => setWeight(e.target.value)} type="text" placeholder="0-442 in Kg(Required)" />
   </div>

   <div>
   <label for="height">Height:-</label><br></br>
   <input name="height" value={height}  onChange={(e) => setHeight(e.target.value)} type="text" placeholder="0-270 in CM(Required)" />
   </div>


   <br></br>
   <div id="upload-box">
   <label for="file-upload" class="custom-file-upload">
       Upload Here
   </label>
   <input id="file-upload" type="file" onChange={handleUpload}/>
   
   </div>
   <p>{err}</p>
   <br></br>
   <div>
      <button onClick={handleUploadImage} className="btn">Check(Press twice to check hospitalization)</button>
   </div>


   <br/>
   <br/>
   <br/>
   <br/>
   </fieldset>
   </form>    

    </div>
    <div className="float-child">
    
    <MFaq/>

    </div>
      
    </div>
    

  ) 
}

const ImageThumb = ({ image }) => {
  return <img src={URL.createObjectURL(image)} alt={image.name} />;
};  
export default M;