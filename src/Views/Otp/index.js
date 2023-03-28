import { useState } from "react";
import './style.css';
import { useHistory, useLocation} from "react-router-dom";
import axios from "axios";


const Otp = () => {
    let otpResp;
    const history =useHistory();

    // function handleSignin(){
    //   history.push("/login")
    // }
   // const [name, setName] = useState("");
//    const [user, setUser] = useState("");
   const [otp,setOtp] = useState("");
  //  const[contact,setContact] = useState("")
//    const [password, setPassword] = useState("");
//    const [errors,setErrors] = useState({});

   // const [errorMessage,setErrorMessage]=useState("")
   // const dispatch = useDispatch();
   // const data = useSelector(((state) => state.data.players))
//    function handleContact(e){  
//     var contact = e.target.value;
//     if(contact.length < 11){
//       setContact(e.target.value)
//     }
//   }

  // function handleContact(e){  
  //   var contact = e.target.value;
  //   if(contact.length < 11){
  //     setContact(e.target.value)
  //   }
  // }

  function handleOtp(e){ 
    var otp = e.target.value;
    if(otp.length < 7){
        setOtp(e.target.value); 
    }
  }
  const location = useLocation()
  let myContact = location.state.contact
  const formData = new FormData();
  formData.append("otp",otp)
  formData.append("phone_number", myContact)

  const handleClick = async(e) =>{
    e.preventDefault();
    if(otp !== ''){
      try{
        const resp = await axios.post("https://c196-122-160-165-213.in.ngrok.io/verify/",
          formData
        );
        console.log(resp.data)
  
        otpResp = resp.data.status;
      }
      catch(error){
        console.log(error.data)
      }
     if(otpResp)
      history.push("/login")
    }
    else{
      alert ("OTP incorrect")
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
                {/* <div className='d-sm-grid gap-1'>
                    <label><b>Phone no. :</b></label>
                    <input type='number' placeholder='Phone no.' className="form-control my-2" value={contact} onChange={(e) => handleContact(e)} required></input>
                  </div> */}
                  <div className='d-sm-grid gap-1'>
                    <label><b>OTP :</b></label>
                    <input type='number' placeholder='OTP' className="form-control my-2" value={otp} onChange={(e) => handleOtp(e)} required></input>
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
  )
};

export default Otp;
