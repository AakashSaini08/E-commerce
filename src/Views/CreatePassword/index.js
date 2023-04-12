import { useState } from "react";
import "./style.css";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getPassword } from "Redux/Actions/Auth";

const CreatePassword = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [reset_password, setreset_password] = useState("");
  const [confirm_password, setconfirm_password] = useState("");
  const [errors, setErrors] = useState({});

  const validation = (reset_password, confirm_password) => {
    let errors = {};
    const uppercaseRegExp = /(?=.*?[A-Z])/;
    const lowercaseRegExp = /(?=.*?[a-z])/;
    const digitsRegExp = /(?=.*?[0-9])/;
    const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;
    const minLengthRegExp = /.{8,}/;

    const rpasswordLength = reset_password.length;
    const ruppercasePassword = uppercaseRegExp.test(reset_password);
    const rlowercasePassword = lowercaseRegExp.test(reset_password);
    const rdigitsPassword = digitsRegExp.test(reset_password);
    const rspecialCharPassword = specialCharRegExp.test(reset_password);
    const rminLengthPassword = minLengthRegExp.test(reset_password);
    if (rpasswordLength === 0) {
      errors.reset_password = "Password is required";
    } else if (!ruppercasePassword) {
      errors.reset_password = "At least one Uppercase";
    } else if (!rlowercasePassword) {
      errors.reset_password = "At least one Lowercase";
    } else if (!rdigitsPassword) {
      errors.reset_password = "At least one digit";
    } else if (!rspecialCharPassword) {
      errors.reset_password = "At least one Special Characters";
    } else if (!rminLengthPassword) {
      errors.reset_password = "At least minumum 8 characters";
    } else {
      errors.reset_password = "";
    }

    const cpasswordLength = reset_password.length;
    const cuppercasePassword = uppercaseRegExp.test(confirm_password);
    const clowercasePassword = lowercaseRegExp.test(confirm_password);
    const cdigitsPassword = digitsRegExp.test(confirm_password);
    const cspecialCharPassword = specialCharRegExp.test(confirm_password);
    const cminLengthPassword = minLengthRegExp.test(confirm_password);
    if (cpasswordLength === 0) {
      errors.confirm_password = "Password is required";
    } else if (!cuppercasePassword) {
      errors.confirm_password = "At least one Uppercase";
    } else if (!clowercasePassword) {
      errors.confirm_password = "At least one Lowercase";
    } else if (!cdigitsPassword) {
      errors.confirm_password = "At least one digit";
    } else if (!cspecialCharPassword) {
      errors.confirm_password = "At least one Special Characters";
    } else if (!cminLengthPassword) {
      errors.confirm_password = "At least minumum 8 characters";
    } else {
      errors.confirm_password = "";
    }


    return errors;
  };

  function handleResetPassword(e) {
    var password = e.target.value;
    if (password.length < 15) {
      setreset_password(e.target.value);
    }
  }
  function handleConfirmPassword(e) {
    var password = e.target.value;
    if (password.length < 15) {
      setconfirm_password(e.target.value);
    }
  }
  const location = useLocation();
  let myParam = location.state.newContact;


  const handleClick = async (e) => {
    const formData = new FormData();
    formData.append("phone_number", myParam);
    formData.append("reset_password", reset_password);
    formData.append("confirm_password", confirm_password);
    e.preventDefault();
    setErrors(validation(reset_password, confirm_password));
    if(reset_password === confirm_password){
      try {
        dispatch(
          getPassword({
            data: formData,
            success: (Response) => {
              history.push({
                pathname: "/login",
                state: { myParam },
              });
            },
            fail: (err) => {
              alert("Password doesn't Match");
            },
          })
        );
      } catch (error) {
        console.log(error.data);
      }
      alert("Password has been reset, You can now login");
    }else{
      alert("Recheck Password you have entered")
    }
  };

  return (
    <div>
      <div className="signup d-flex justify-content-center w-100 login ">
        <div className="w-30 ">
          <div className="signup-box p-5 row-2">
            <div className="column  rounded-4   ">
              <h1 className=" signup-head text-dark p-3 text-center  rounded-bottom rounded-4 text-white">
                Reset Password
              </h1>
              <div className=" px-4 bg-transparent">
                <form className="form-group">
                  <div className="d-sm-grid gap-1">
                    <label>
                      <b>Set Password<span>*</span> :</b>
                    </label>
                    <input
                      type="password"
                      placeholder="abc@123"
                      className="form-control my-2"
                      value={reset_password}
                      onChange={(e) => handleResetPassword(e)}
                      required
                    ></input>
                    {errors.reset_password && <p className="err">{errors.reset_password}</p>}
                  </div>
                  <div className="d-sm-grid gap-1">
                    <label>
                      <b>Comfirm Password<span>*</span> :</b>
                    </label>
                    <input
                      type="password"
                      placeholder="abc@123"
                      className="form-control my-2"
                      value={confirm_password}
                      onChange={(e) => handleConfirmPassword(e)}
                      required
                    ></input>
                    {errors.confirm_password && (
                      <p className="err">{errors.confirm_password}</p>
                    )}
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

export default CreatePassword;
