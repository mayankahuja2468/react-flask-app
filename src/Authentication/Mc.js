import React,{useState} from 'react';
import Fetch from './Fetch'
import MCFaq from './MCFaq';
/*{file && <ImageThumb image={file} />}*/
import './Mc.css';
import './Button.css';
const Mc = (props) => {
  const [filec,setFilec] = React.useState("");
  const [namec,setNamec] = React.useState("");
  const [agec,setAgec] = React.useState("");
  const [weightc,setWeightc] = React.useState("");
  const [heightc,setHeightc] = React.useState("");
  const [obesityc,setObesityc] = React.useState("");
  const [hospitalizationc,setHospitalizationc] = React.useState("");
  const [statec,setStatec] = React.useState("");
  const [errc,setErrc] = React.useState("");
  function handleUploadc(event){
    setFilec(event.target.files[0]);
  }
  function isAlrightc(){
    if(!(namec==="yes" || namec==="no"))
      {
        return false;
      }
    if(isNaN(agec) || isNaN(weightc) || isNaN(heightc))
      return false;
    else{
      if(agec<0 || agec>120)
       return false;
      if(heightc<0 || heightc>270)
       return false;
       if(weightc<0 || weightc>442)
       return false;

    }
    return true;
  }
  async function handleUploadImagec(ev) {
   
    ev.preventDefault();
    setErrc("");
    setStatec("");
    setHospitalizationc("");
    setObesityc("");    
    const data = new FormData();
    data.append('file', filec);
    data.append('filename', namec);
    if(isAlrightc())
    await fetch('/uploadc', {
      method: 'POST',
      body: data,
    })
    .then((response) => {response.json().then(data => {
    
    
    var bmi = parseInt(weightc) / ((parseInt(heightc)/100)*(parseInt(heightc)/100));
    var n = namec.toLowerCase();
    if(data.result==="Wrong File Extension"){
      setErrc('Wrong File Extension');
    }
    else{
      setStatec(data.result);
      if(n==="yes" && statec==="COVID-19" && parseInt(agec)>60 && bmi<25){
        setHospitalizationc("Required");
        setObesityc("Very High Risk");
  
      }
      if(n==="no" && statec==="no COVID-19" && (parseInt(agec)<60) && (bmi<25))
      {
        setHospitalizationc("Not Required");
        setObesityc("Low Risk");
      }
      else if(n==="yes" && statec==="no COVID-19" && parseInt(agec)<60 && bmi<25){
        setHospitalizationc("Not Required");
        setObesityc("High Risk");
      }
      else if(n==="no" && statec==="no COVID-19" && (parseInt(agec)>60 || bmi>25)){
        setHospitalizationc("Not Required");
        setObesityc("High Risk");
      }
      else if(n==="no" && statec==="no COVID-19" && parseInt(agec)<60 && bmi>25){
        setHospitalizationc("Not Required");
        setObesityc("Medium Risk");
      }
      else if(n==="yes" && statec==="no COVID-19" && (parseInt(agec)>60 || bmi>25)){
        setHospitalizationc("Not Required");
        setObesityc("Very High Risk");
  
      }
  
  
      else if(n==="no" && statec==="COVID-19" && parseInt(agec)<60 && bmi<25)
      {
        setHospitalizationc("Not Required");
        setObesityc("Low Risk");
      }
      else if(n==="yes" && statec==="COVID-19" && parseInt(agec)<60 && bmi<25){
        setHospitalizationc("Required");
        setObesityc("High Risk");
      }
      else if(n==="no" && statec==="COVID-19" && (parseInt(agec)>60 && bmi<25)){
        setHospitalizationc("Required");
        setObesityc("High Risk");
      }
      else if(n==="no" && statec==="COVID-19" && parseInt(agec)<60 && bmi>25){
        if(n==="no" && statec==="COVID-19" && parseInt(agec)<45 && bmi>25)
        {setHospitalizationc("Not Required");
        setObesityc("Medium Risk");}
        else if(n==="no" && statec==="COVID-19" && parseInt(agec)>45 && bmi>25){
        setHospitalizationc("Required");
        setObesityc("High Risk");
        }
      }
      else if(n==="yes" && statec==="COVID-19" && (parseInt(agec)>60 && bmi>25)){
        setHospitalizationc("Required");
        setObesityc("Very High Risk");
  
      }
      else if(n==="yes" && statec==="COVID-19" && parseInt(agec)>60 && bmi<25){
        setHospitalizationc("Required");
        setObesityc("High Risk");
  
      }

    }
    
    } )})
    else{
      setErrc("Please enter valid details");
    }
    
    //alert(state);
}

  return(
    <div className="float-container">
        <div className="float-child">
      <form className="fm">
       <fieldset>
        <legend>COVID-19</legend>    
    <br/>
    <br/>
    <div className="flex-container">
    

    <div className="card">
    <div className="container">
    <h4><b>Risk</b></h4> 
    <p>
      {obesityc}
    </p>
    </div>
    </div>

    <div className="card">
    <div className="container">
    <h4><b>Hosptalise</b></h4> 
    <p>
      {hospitalizationc}
    </p>
    </div>
    </div>
    <div className="card">
    <div className="container">
    <h4><b>Covid-19</b></h4> 
    <p>
      {statec}
    </p>
    </div>
    </div>

    </div>
    <br>
    </br>
    <div>
    <label for="name">Any Breatlessness:-</label><br></br>
    <input name="name" value={namec}  onChange={(e) => setNamec(e.target.value)} type="text" placeholder="yes/no" />
    </div>
    <div>
    <label for="age">Age:-</label><br></br>
    <input name="age" value={agec}  onChange={(e) => setAgec(e.target.value)} type="text" placeholder="0-120(Required)" />
    </div>
    <div>
    <label for="weight">Weight:-</label><br></br>
    <input name="weight" value={weightc}  onChange={(e) => setWeightc(e.target.value)} type="text" placeholder="0-442 in Kg(Required)" />
    </div>

    <div>
    <label for="heightc">Height:-</label><br></br>
    <input name="heightc" value={heightc}  onChange={(e) => setHeightc(e.target.value)} type="text" placeholder="0-270 in CM(Required)" />
    </div>


    <br></br>
    <div id="upload-box">
    <label for="file-upload" class="custom-file-upload">
        Upload Here
    </label>
    <input id="file-upload" type="file" onChange={handleUploadc}/>
    
    </div>
    <p>{errc}</p>
    <br></br>
    <div>
       <button onClick={handleUploadImagec} className="btn">Check(Press twice to check other details)</button>
    </div>


    <br/>
    <br/>
    <br/>
    <br/>
    </fieldset>
    </form>    
    </div>
    
    <div className="float-child">

    FAQs
      <MCFaq/>
   
    

    </div>
    </div>
    
  ) 
}

const ImageThumb = ({ imagec }) => {
  return <img src={URL.createObjectURL(imagec)} alt={imagec.name} />;
};  
export default Mc;