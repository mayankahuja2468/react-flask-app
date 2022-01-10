import React,{useState,useEffect} from 'react';
//import fire from "./Fire";
const Login = (props) =>{
    //const [passwordE,setPasswordE] = useState('');
    const {email,setEmail,password,setPassword,handleLogin,handleSignUp,hasAccount,setHasAccount,emailError,passwordError} = props
    const [passwordE,setPasswordE] = useState('');
    function update(event){
        const a = event.target.value;
        if(a.length<6)
         setPasswordE('The length should be greater than 6');
        else
        setPasswordE('');

        setPassword(a);
    }
    
    return(
        <section className="login">
         <div className = "loginContainer">
            <label>Username(Email)</label>
            <input
            type = "text"
            autoFocus
            required
            value = {email}
            onChange = {(e) => setEmail(e.target.value)}
            />
            <p className="errorMsg">{emailError}</p>
            <label>Password</label>
            <input
            type = "password"
            required
            value = {password}
            onChange = {update}
            />
         <p className="errorMsg">{passwordE}</p>
         <p className="errorMsg">{passwordError}</p>
         <div className="btnContainer">
         {hasAccount?(
             <>
             <button onClick={handleLogin}>Sign in</button>
             <p>Don't have an account ? 
                 <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span> 
                
            </p>
             </>
         ):(
             <>
             <button onClick={handleSignUp}>Sign up</button>
             <p>Have an account?
                 <span onClick={() => setHasAccount(!hasAccount)}> Sign In </span></p>
             </>

         )}
         </div>
         </div>
         

        </section>
    )
}
export default Login;
