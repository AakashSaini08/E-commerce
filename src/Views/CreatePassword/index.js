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

  const validation = (contact, reset_password, confirm_password) => {
    let errors = {};

    // if(!user){
    //   errors.user = "Name is Required"
    // }else if(user.length < 3 ){
    //   errors.user ="Name must be greater than 3 charcter"
    // }

    if (!reset_password) {
      errors.reset_password = "Password Required";
    } else if (reset_password.length < 5) {
      errors.reset_password = "Password must be greater than 6";
    }

    if (!confirm_password) {
      errors.confirm_password = "Password Required";
    } else if (confirm_password.length < 5) {
      errors.confirm_password = "Password must be greater than 6";
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
  const formData = new FormData();
  formData.append("phone_number", myParam);
  formData.append("reset_password", reset_password);
  formData.append("confirm_password", confirm_password);

  const handleClick = async (e) => {
    e.preventDefault();
    setErrors(validation(reset_password, confirm_password));

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
  };

  return (
    <div>
      <div className="signup d-flex justify-content-center w-100 login ">
        <div className="w-30 ">
          <div className="signup-box p-5 row-2">
            <div className="column  rounded-4   ">
              <h1 className=" signup-head text-dark p-3 text-center  rounded-bottom rounded-4 text-white">
                Change Password
              </h1>
              <div className=" px-4 bg-transparent">
                <form className="form-group">
                  <div className="d-sm-grid gap-1">
                    <label>
                      <b>Reset Password :</b>
                    </label>
                    <input
                      type="password"
                      placeholder="abc@123"
                      className="form-control my-2"
                      value={reset_password}
                      onChange={(e) => handleResetPassword(e)}
                      required
                    ></input>
                    {errors.reset_password && <p>{errors.reset_password}</p>}
                  </div>
                  <div className="d-sm-grid gap-1">
                    <label>
                      <b>Password :</b>
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
                      <p>{errors.confirm_password}</p>
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
