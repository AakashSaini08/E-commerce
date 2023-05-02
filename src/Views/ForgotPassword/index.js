import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getOtp } from "Redux/Actions/Auth";
const ForgotPassword = () => {
  const dispatch = useDispatch();
  const [contact, setContact] = useState("");
  const [errors, setErrors] = useState({});

  const history = useHistory();

  function handleContact(e) {
    var contact = e.target.value;
    if (contact.length < 11) {
      setContact(e.target.value);
    }
  }

  const validation = (contact, password) => {
    let errors = {};
    const contactRegex = new RegExp("^[0-9]{10}$");
    if (!contact) {
      errors.contact = "Contact is empty";
    } else if (!contactRegex.test(contact)) {
      errors.contact = "Contact must be 10 digit number";
    }
    return errors;
  };

  const formData = new FormData();
  formData.append("phone_number", contact);

  const handleClick = async (e) => {
    const formData = new FormData();
    formData.append("phone_number", contact);
    e.preventDefault();
    setErrors(validation(contact));
    if (contact !== "") {
      try {
        dispatch(
          getOtp({
            data: formData,
            success: (Response) => {
              console.log(Response,"dfdfd")
              if (Response.data.status === 200) {
                history.push({
                  pathname: "/phoneotp",
                  state: { contact },
                });
              }else{
                alert("dfdf")
              }
            },
            fail: (err) => {
              alert("Please enter a valid Phone number");
            },
          })
        );
      } catch (error) {
        alert("Please enter a valid Phone number");
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
                Forgot Password
              </h1>
              <div className=" px-4 bg-transparent">
                <form className="form-group">
                  <div className="d-sm-grid gap-1">
                    <label>
                      <b>Phone no. :</b>
                    </label>
                    <input
                      type="text"
                      placeholder="Phone no."
                      className="form-control my-2"
                      value={contact}
                      onChange={(e) => handleContact(e)}
                      required
                    ></input>
                    {errors.contact && <p className="err">{errors?.contact}</p>}
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

export default ForgotPassword;
