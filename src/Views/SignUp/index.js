import { useState } from "react";
import './style.css';
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signup } from "Redux/Actions/Auth";


const SignUp = () => {
  const dispatch = useDispatch();
    const history =useHistory();

    function handleSignin(){
      history.push("/login")
    }
   // const [name, setName] = useState("");
   const [user, setUser] = useState("");
   const [contact, setContact] = useState("");
   const [password, setPassword] = useState("");
   const [errors,setErrors] = useState({});
   const [detail,setDetail] = useState('');

   // const [errorMessage,setErrorMessage]=useState("")
   // const dispatch = useDispatch();
   // const data = useSelector(((state) => state.data.players))
 
     const validation = (user, contact,password) =>{
    let errors={}

    if(!user){
      errors.user = "Name is Required"
    }else if(user.length < 3 ){
      errors.user ="Name must be greater than 3 charcter"
    }
    
    if(!contact){
      errors.contact = "Contact Required"
    }else if(contact.length < 10 || contact.length >10 ){
      errors.contact ="Contact number must be of size 10"
    }

    if(!password){
      errors.password = "Password Required"
    }else if(password.length < 9){
      errors.password ="Password must be greater than 8"
    }
    return errors;
  }

  function handleUser(e){  
    var name = e.target.value;
    if(name.length < 15){
      setUser(e.target.value)
    }
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

  function handleDetail(val){
    // e.preventDefault();
      setDetail(val)
  }

  const formData = new FormData();
  formData.append("name",user)
  formData.append("phone_number",contact)
  formData.append("password",password)
  formData.append("detail",detail)
  
  const handleClick = async(e) =>{
    e.preventDefault();
    setErrors(validation(user,contact,password));
    if(user !== "" && contact!=="" && password !=="" && detail !== ""){
      try{
        dispatch(signup({
          data:formData,
          success:(Response)=>{
            history.push({
              pathname:"/otp",
              state:{contact}
            })
          },
          fail:(err)=>{
            alert("Check Empty Fields")
          }
        }))
      }
      catch(error){
        console.log(error.data)
      }
    }
  }

  return (
    <div>
      <div className="signup d-flex justify-content-center w-100 login ">
        <div className="w-30 ">
          <div className='signup-box p-5 row-2' >
            <div className="column  rounded-4   ">
              <h1 className=" signup-head text-dark p-3 text-center  rounded-bottom rounded-4 text-white">Sign Up</h1>
              <div className=" px-4 bg-transparent">
                <form className="form-group" >
                <div className='d-sm-grid gap-1'>
                    <label><b>Name :</b></label>
                    <input type='text' placeholder='First and last name' className="form-control my-2" value={user} onChange={(e) => handleUser(e)} required></input>
                    {errors.user && <p>{errors.user}</p>}
                  </div>
                  <div className='d-sm-grid gap-1'>
                    <label><b>Phone Number :</b></label>
                    <input type='number' placeholder='Phone number' className="form-control my-2" value={contact} onChange={(e) => handleContact(e)} required></input>
                    {errors.contact && <p>{errors.contact}</p>}
                  </div>
                  <div className='d-sm-grid gap-1'>
                    <label><b>Password :</b></label>
                    <input type='password' placeholder='abc@123' className="form-control my-2" value={password} onChange={(e) => handlePassword(e)} required></input>
                    {errors.password && <p>{errors.password}</p>}
                  </div>
                  <div className='d-sm-grid gap-1'>
                    <label><b>Detail:</b></label>
                    <div className="customer-outer">
                      <div><input type='radio' className="customer" value="0" name="detail" onChange={(e) => handleDetail(0)}/></div> 
                      <div><p >Customer</p></div>
                    </div>
                    <div className="vendor-outer">
                      <div><input type='radio' className="vendor" value="1" name="detail" onChange={(e) => handleDetail(1)}/></div>
                      <div> <p>Vendor</p></div>
                    </div>
                  </div>
                </form>

                <div className='d-sm-grid gap-1 d-flex'>
                  <button className="btn btn-dark text-white m-2  round rounded-4 " onClick={handleClick}> Continue</button>
                </div>

              </div>

              <div className='otp d-sm-grid gap-1 d-flex'>
                  <button className="btn btn-link text-black m-2  round rounded-4 " onClick={handleSignin}> Already have an account? login</button>
                </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  )
};

export default SignUp;
