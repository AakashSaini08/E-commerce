import { useState } from "react";
import "./style.css";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signUpOtp } from "Redux/Actions/Auth";

const Otp = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [otp, setOtp] = useState("");
  const [errors, setErrors] = useState({});

  const validation = (otp) => {
    let errors = {};
    const contactRegex = new RegExp("^[0-9]{10}$");
    if (!otp) {
      errors.otp = "Please enter OTP";
    } else if (!contactRegex.test(otp)) {
      errors.otp = "OTP must contain 4 digit";
    }
    return errors;
  };

  function handleOtp(e) {
    var otp = e.target.value;
    if (otp.length < 5) {
      setOtp(e.target.value);
    }
  }

  const location = useLocation();
  let myContact = location?.state?.contact;
  const handleClick = async (e) => {
    const formData = new FormData();
    formData.append("otp", otp);
    formData.append("phone_number", myContact);
    e.preventDefault();
    setErrors(validation(otp));
    if (otp !== "" && otp.length===4) {
      try {
        dispatch(
          signUpOtp({
            data: formData,
            success: (Response) => {
              if(Response.data.response!=="fail"){
                history.push({
                  pathname: "/login",
                  state: { myContact },
                });
              }else{
                alert("Incorrect OTP");
              }
            },
            fail: (err) => {
              alert("Incorrect OTP");
            },
          })
        );
      } catch (error) {
        alert(error?.data);
      }
    }
  };

  return (
    <div>
      <div className="my-otp d-flex justify-content-center w-100 login ">
        <div className="w-30 ">
          <div className="otp-box p-5 row-2">
            <div className="column  rounded-4   ">
              <h1 className=" otp-head text-dark p-3 text-center  rounded-bottom rounded-4 text-white">
                OTP
              </h1>
              <div className=" px-4 bg-transparent">
                <form className="form-group">
                  <div className="d-sm-grid gap-1">
                    <label>
                      <b>OTP :</b>
                    </label>
                    <input
                      type="text"
                      placeholder="OTP"
                      className="form-control my-2"
                      value={otp}
                      onChange={(e) => handleOtp(e)}
                      required
                    ></input>
                    {errors.otp && <p className="err">{errors?.otp}</p>}
                  </div>
                </form>
                <div className="d-sm-grid gap-1 d-flex">
                  <button
                    className="btn btn-dark text-white m-2  round rounded-4 "
                    onClick={handleClick}
                  >
                    {" "}
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Otp;
