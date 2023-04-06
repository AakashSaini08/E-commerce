import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { logout, setLogin} from "Redux/Actions/Auth";
import "./style.css";
function Logout() {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleCancel = () => {
    history.push("./");
  };

  const handleLogout = async () => {
    dispatch(
      logout({
        success: (response) => {
          // localStorage.clear();
          history.push("./login");
        },
        fail: (err) => {
          alert("Sever didn't respond");
        },
      })
    );
    dispatch(setLogin(null));
  };

  return (
    <div className="logout-outer">
      <h2>Do you want to Logout</h2>
      <div>
        <button className="btn btn-dark" onClick={handleCancel}>
          Cancel
        </button>
        <button className="btn btn-dark" onClick={handleLogout}>
          Ok
        </button>
      </div>
    </div>
  );
}

export default Logout;
