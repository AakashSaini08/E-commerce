import { useState } from "react";
import "./style.css";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "Redux/Actions/Auth";

const SignIn = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  let myMsg = "Password must contain 1 capital letter , 1 small letter , 1 digit, 1 special character, length should be more than or equal to 8"
  function handleSignup() {
    history.push("/signup");
  }
  const [password, setPassword] = useState("");
  const [contact, setContact] = useState("");
  const [errors, setErrors] = useState({});
  const validation = (contact, password) => {
    let errors = {};
    const contactRegex = new RegExp("^[0-9]{10}$");
    if (!contact) {
      errors.contact = "Contact is empty";
    } else if (!contactRegex.test(contact)) {
      errors.contact = "Contact must be 10 digit number";
    }

    const uppercaseRegExp = /(?=.*?[A-Z])/;
    const lowercaseRegExp = /(?=.*?[a-z])/;
    const digitsRegExp = /(?=.*?[0-9])/;
    const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;
    const minLengthRegExp = /.{8,}/;

    const passwordLength = password.length;
    const uppercasePassword = uppercaseRegExp.test(password);
    const lowercasePassword = lowercaseRegExp.test(password);
    const digitsPassword = digitsRegExp.test(password);
    const specialCharPassword = specialCharRegExp.test(password);
    const minLengthPassword = minLengthRegExp.test(password);
    if (passwordLength === 0) {
      errors.password = "Password is empty";
    } else if (!uppercasePassword) {
      errors.password = "At least one Uppercase";
    } else if (!lowercasePassword) {
      errors.password = "At least one Lowercase";
    } else if (!digitsPassword) {
      errors.password = "At least one digit";
    } else if (!specialCharPassword) {
      errors.password = "At least one Special Characters";
    } else if (!minLengthPassword) {
      errors.password = "At least minumum 8 characters";
    } else {
      errors.password = "";
    }
    return errors;
  };

  function handleContact(e) {
    var contact = e.target.value;
    if (contact.length < 11) {
      setContact(e.target.value);
    }
  }

  function handlePassword(e) {
    var password = e.target.value;
    if (password.length < 15) {
      setPassword(e.target.value);
    }
  }

  function handleForgot() {
    history.push("/forgot");
  }

  const handleSubmit = async (e) => {
    const formData = new FormData();
    formData.append("phone_number", contact);
    formData.append("password", password);
    e.preventDefault();
    setErrors(validation(contact, password));
    if (contact !== "" && password !== "" ) {
      try {
        dispatch(
          login({
            data: formData,
            success: (Response) => {
              if (Response.data.token) {
                history.push("/");
              } else {
                alert(Response.data.message);
              }
            },
            fail: (err) => {
              alert("Invalid Contact or Phone number");
            },
          })
        );
      } catch (error) {
        // console.log(error.data);
        // console.log(error?.data?.token);
      }
    }
  };

  return (
    <>
      <div className="d-flex  justify-content-center w-100 mt-2"></div>
      <div className="signin d-flex justify-content-center w-100 login ">
        <div className="w-30 ">
          <div className="signin-box p-5 row-2">
            <div className="column  rounded-4   ">
              <h1 className=" login-head text-dark p-3 text-center  rounded-bottom rounded-4 text-white">
                Sign In
              </h1>
              <div className="bbb px-4 bg-transparent">
                <form className="form-group" onSubmit={handleSubmit}>
                  <div className="d-sm-grid gap-1">
                    <label>
                      <b>
                        Phone Number<span>*</span> :
                      </b>
                    </label>
                    <input
                      type="text"
                      placeholder="contact no."
                      className="form-control my-2"
                      value={contact}
                      onChange={(e) => handleContact(e)}
                    ></input>
                    {errors.contact && <p className="err">{errors.contact}</p>}
                  </div>
                  <div className="d-sm-grid gap-1">
                    <label>
                      <b>
                        Password<span>*</span> :
                      </b>
                    </label>
                    <input
                      type="password"
                      placeholder="Password"
                      className="form-control my-2"
                      value={password}
                      autoComplete="off"
                      onChange={(e) => handlePassword(e)}
                    ></input>
                    {errors.password && (
                      <p className="err">{<p className="myMsg">{myMsg}</p>} { errors.password}</p>
                    )}
                    <button
                      className="btn btn-link text-black m-2  round rounded-4 "
                      onClick={handleForgot}
                    >
                      {" "}
                      Forgot Password
                    </button>
                  </div>

                  <div className="d-sm-grid gap-2 d-flex">
                    <button
                      className="btn btn-dark text-white m-2  round rounded-4 "
                      type="submit"
                    >
                      {" "}
                      login
                    </button>
                  </div>

                  <div className="d-sm-grid gap-2 d-flex">
                    <button
                      className="btn btn-link text-black m-2  round rounded-4 "
                      onClick={handleSignup}
                    >
                      {" "}
                      Create Account
                    </button>
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
