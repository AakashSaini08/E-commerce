// import { useSelector, useDispatch } from 'react-redux'
import { useState } from "react";
import './style.css';
import { useHistory } from "react-router-dom";
import axios from "axios";

const SignIn = () => {
  var myToken;
  const history = useHistory();

  function handleSignup(){
    history.push("/signup")
  }


  // const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [contact, setContact] = useState("");
  const [errors,setErrors] = useState({});


  // const [errorMessage,setErrorMessage]=useState("")
  // const dispatch = useDispatch();
  // const data = useSelector(((state) => state.data.players))

  // function handleClick() {

  //   // let token = []
  //   // token = data?.filter(val => val.PhoneNo == contact )
  //   console.log("logged in");
  // }

  const validation = (contact,password) =>{
    let errors={}

    if(!contact){
      errors.contact = "Contact Required"
    }else if(contact.length < 10 || contact.length >10 ){
      errors.contact ="Contact number must be of size 10"
    }

    if(!password){
      errors.password = "Password Required"
    }else if(password.length < 5){
      errors.password ="Password must be greater than 5"
    }
    return errors;
  }

  function handleContact(e){  
    var contact = e.target.value;
    if(contact.length < 11){
      setContact(e.target.value)
    }
  }

  function handlePassword(e){
    var password = e.target.value;
    if(password.length < 15){
      setPassword(e.target.value)
    }
  }

  function handleForgot(){

      history.push("/forgot")

  }

  const formData = new FormData();
  formData.append("phone_number",contact)
  formData.append("password",password)
  
  const handleSubmit= async(e)=>{
    e.preventDefault();
    setErrors(validation(contact,password));
    if(contact !== '' && password !== ''){
      try{
        const resp = await axios.post("https://54ab-122-160-165-213.in.ngrok.io/signin/",
          formData
        );
        console.log(resp.data)
        myToken = resp.data.token
  
      }
      catch(error){
        console.log(error.data)
        console.log(error?.data?.token)
  
      }
     if(myToken)
      history.push("/")
    }
    else{
      alert("Invalid Contact or Phone number")
    }
  }

  return (
    <>
      <div className="d-flex  justify-content-center w-100 mt-2">
        {/* <h5 className="text-danger">{errorMessage}</h5> */}
      </div>
      <div className="signin d-flex justify-content-center w-100 login ">
        <div className="w-30 ">
          <div className='signin-box p-5 row-2' >
            <div className="column  rounded-4   ">
              <h1 className=" login-head text-dark p-3 text-center  rounded-bottom rounded-4 text-white">Sign In</h1>
              <div className="bbb px-4 bg-transparent">
                <form className="form-group" onSubmit={handleSubmit} >
                 
                  <div className='d-sm-grid gap-1'>
                    <label><b>Phone Number :</b></label>
                    <input type='number' placeholder='contact no.' className="form-control my-2" value={contact} onChange={(e) => handleContact(e)} ></input>
                    {errors.contact && <p>{errors.contact}</p>}
                  </div>
                  <div className='d-sm-grid gap-1'>
                    <label><b>Password :</b></label>
                    <input type='password' placeholder='Password' className="form-control my-2" value={password} onChange={(e) => handlePassword(e)} ></input>
                    {errors.password && <p>{errors.password}</p>}
                    <button className="btn btn-link text-black m-2  round rounded-4 " onClick={handleForgot}> Forgot Password</button>
                  </div>
                
                <div className='d-sm-grid gap-2 d-flex'>
                  <button className="btn btn-dark text-white m-2  round rounded-4 " type="submit" > login</button>
                </div>

                <div className='d-sm-grid gap-2 d-flex'>
                  <button className="btn btn-link text-black m-2  round rounded-4 " onClick={handleSignup}> Create Account</button>
                </div>
              </form>
              </div>
              
            </div>

          </div>

        </div>
      </div>
    </>
  );
};

export default SignIn;
