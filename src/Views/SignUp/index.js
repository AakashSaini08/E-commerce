import { useState } from "react";
import "./style.css";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signup } from "Redux/Actions/Auth";

const SignUp = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  function handleSignin() {
    history.push("/login");
  }
  const [user, setUser] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [detail, setDetail] = useState("");
  const validation = (user, contact, password) => {
    let errors = {};

    const nameRegex = new RegExp("^[A-Za-z]+$");
    if (!user) {
      errors.user = "Name is required";
    } else if (user.length < 3) {
      errors.user = "Name must be greater than 3 charcter";
    } else if (!nameRegex.test(user)) {
      errors.user = "Name should contain only charcters";
    }

    const contactRegex = new RegExp("^[0-9]{10}$");
    if (!contact) {
      errors.contact = "Contact is required";
    } else if (!contactRegex.test(contact)) {
      errors.contact = "Contact must be a 10 digit number";
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
      errors.password = "Password is required";
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

  function handleUser(e) {
    var name = e.target.value;
    if (name.length < 15) {
      setUser(e.target.value);
    }
  }

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

  function handleDetail(val) {
    setDetail(val);
  }
  const handleClick = async (e) => {
    const formData = new FormData();
    formData.append("name", user);
    formData.append("phone_number", contact);
    formData.append("password", password);
    formData.append("detail", detail);
    e.preventDefault();
    setErrors(validation(user, contact, password));
    // console.log(Object.keys(validation(user, contact, password)).length);
    if (
      user !== "" &&
      contact !== "" &&
      password !== "" &&
      detail !== ""
    ) {
      try {
        dispatch(
          signup({
            data: formData,
            success: (Response) => {
              history.push({
                pathname: "/otp",
                state: { contact },
              });
            },
            fail: (err) => {
              alert("Check Empty Fields");
            },
          })
        );
      } catch (error) {
        console.log(error.data);
      }
    }
  };

  return (
    <div>
      <div className="signup d-flex justify-content-center w-100 login ">
        <div className="w-30 ">
          <div className="signup-box p-5 row-2">
            <div className="column  rounded-4   ">
              <h1 className=" signup-head text-dark p-3 text-center  rounded-bottom rounded-4 text-white">
                Sign Up
              </h1>
              <div className=" px-4 bg-transparent">
                <form className="form-group">
                  <div className="d-sm-grid gap-1">
                    <label>
                      <b>
                        Name<span>*</span> :
                      </b>

                      <input
                        type="text"
                        placeholder="Name"
                        className="form-control my-2"
                        value={user}
                        onChange={(e) => handleUser(e)}
                        required
                      ></input>
                    </label>
                    {errors.user && <p className="err">{errors.user}</p>}
                  </div>
                  <div className="d-sm-grid gap-1">
                    <label>
                      <b>
                        Phone Number<span>*</span> :
                      </b>

                      <input
                        type="text"
                        placeholder="Phone number"
                        className="form-control my-2"
                        value={contact}
                        onChange={(e) => handleContact(e)}
                        required
                      ></input>
                    </label>
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
                      onChange={(e) => handlePassword(e)}
                      required
                    ></input>
                    {errors.password && (
                      <p className="err">{errors.password}</p>
                    )}
                  </div>
                  <div className="d-sm-grid gap-1">
                    <label>
                      <b>
                        Detail<span>*</span> :
                      </b>
                    </label>
                    <div className="customer-outer">
                      <div>
                        <input
                          type="radio"
                          className="customer"
                          value="0"
                          name="detail"
                          onChange={(e) => handleDetail(0)}
                        />
                      </div>
                      <div>
                        <p>Customer</p>
                      </div>
                    </div>
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

              <div className="otp d-sm-grid gap-1 d-flex">
                <button
                  className="btn btn-link text-black m-2  round rounded-4 "
                  onClick={handleSignin}
                >
                  {" "}
                  Already have an account? login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
