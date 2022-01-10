import React,{useState} from 'react';
import Fetch from './Fetch'
/*{file && <ImageThumb image={file} />}*/
import './Mlc.css';
import MLCFaq from './MLCFaq';
import './Button.css';
const Mlc = (props) => {
  const [filelc,setFilelc] = React.useState("");
  const [namelc,setNamelc] = React.useState("");
  const [agelc,setAgelc] = React.useState("");
  
  const [statelc,setStatelc] = React.useState("");
  const [conditionlc,setConditionlc] = React.useState("");
  const [errorlc,setErrorlc] = React.useState("");
  function handleUploadlc(event){
    setFilelc(event.target.files[0]);
  }
  function isAlrightlc(){
    if(!(namelc==="yes" || namelc==="no"))
      {
        return false;
      }
    if(isNaN(agelc))
      return false;
    else{
      if(agelc<0 || agelc>120)
       return false;
      

    }
    return true;
  }
  async function handleUploadImagelc(ev) {
    ev.preventDefault();    
    setStatelc("");
    setConditionlc("");
    const data = new FormData();
    data.append('file', filelc);
    data.append('filename', namelc);
    if(isAlrightlc())
    await fetch('/uploadlc', {
      method: 'POST',
      body: data,
    })
    .then((response) => {response.json().then(data => {
      
      if(data.result==="Wrong File Extension"){
        setErrorlc('Wrong File Extension');
      }
      else{
      setStatelc(data.result);
      if(namelc==="yes" && statelc==="no LUNG CANCER")
      {
        setConditionlc("Gas or Other")
      }
      if(namelc==="no" && statelc==="no LUNG CANCER")
      {
        setConditionlc("Nothing")
      }
      if((namelc==="yes" || agelc>70) && statelc==="LUNG CANCER")
      {
        setConditionlc("Critical")
      }
      if(namelc==="no" && statelc==="LUNG CANCER")
      {
        setConditionlc("Worrysome")
      }
      }
      
      
    } )})
    
  
      else{
        setErrorlc("Please enter valid details");
      }
    
    //alert(state);
}

  return(
    
    <div className="float-container">
    <div className="float-child">
    <form className="fmlc">
       <fieldset>
        <legend>LUNG-CANCER</legend>    
    <br/>
    <br/>
    <div className="flex-containe">
    <div className="cardlc">
    <div className="containerlc">
    <h4><b>LUNG-CANCER</b></h4> 
    <p>
      {statelc}
    </p>
    </div>
    </div>
    <div className="cardlc">
    <div className="containerlc">
    <h4><b>Condition</b></h4> 
    <p>
      {conditionlc}
    </p>
    </div>
    </div>
    </div>
    
    <br>
    </br>
    <br>
    </br>
    <br>
    </br>
    
    <div>
    <label for="name">Chest Pain:-</label><br></br>
    <input name="name" value={namelc}  onChange={(e) => setNamelc(e.target.value)} type="text" placeholder="yes/no" />
    </div>
    <div>
    <label for="age">Age:-</label><br></br>
    <input name="age" value={agelc}  onChange={(e) => setAgelc(e.target.value)} type="text" placeholder="0-120" />
    </div>
    



    <br></br>
    <div id="upload-box">
    <label for="file-upload" class="custom-file-upload">
        Upload Here
    </label>
    <input id="file-upload" type="file" onChange={handleUploadlc}/>
    
    </div>
    <br></br>
    <div>
       <button onClick={handleUploadImagelc} className="btn">Check(Press twice to check other details)</button>
    </div>
    <p>{errorlc}</p>

    <br/>
    <br/>
    <br/>
    <br/>
    </fieldset>
    </form>    
    </div>
    <div className="float-child">
    FAQs
      <MLCFaq/>
    </div>
    </div>
    
    
  ) 
}

const ImageThumb = ({ imagelc }) => {
  return <img src={URL.createObjectURL(imagelc)} alt={imagelc.name} />;
};  
export default Mlc;