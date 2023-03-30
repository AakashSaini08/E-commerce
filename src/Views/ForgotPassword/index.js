import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
const ForgotPassword = () => {
  var status;
  const[contact,setContact] = useState("");
  const history =useHistory();

  function handleContact(e){  
    var contact = e.target.value;
    if(contact.length < 11){
      setContact(e.target.value)
    }
  }

  const formData = new FormData();
  formData.append("phone_number",contact)

  const handleClick =async()=>{
    if(contact !== ''){
      try{
        const resp = await axios.post("https://54ab-122-160-165-213.in.ngrok.io/resend_otp/",
          formData
        );
        console.log(resp.data)
        status =resp.data.status
      }
      catch(error){
        console.log(error.data)
      }
      if(status && contact !=='')
      history.push({
        pathname:"/phoneotp",
        state:{contact}
      })
    }
    else{
      alert("Please enter a valid Phone number")
    }
  }

  return (
    <div>
      <div className="my-otp d-flex justify-content-center w-100 login ">
        <div className="w-30 ">
          <div className='otp-box p-5 row-2' >
            <div className="column  rounded-4   ">
              <h1 className=" otp-head text-dark p-3 text-center  rounded-bottom rounded-4 text-white">OTP</h1>
              <div className=" px-4 bg-transparent">
                <form className="form-group" >
                <div className='d-sm-grid gap-1'>
                    <label><b>Phone no. :</b></label>
                    <input type='number' placeholder='Phone no.' className="form-control my-2" value={contact} onChange={(e) => handleContact(e)} required></input>
                  </div>
                </form>

                <div className='d-sm-grid gap-1 d-flex'>
                  <button className="btn btn-dark text-white m-2  round rounded-4 " onClick={handleClick}> Continue</button>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
