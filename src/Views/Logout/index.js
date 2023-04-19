import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { logout, setLogin} from "Redux/Actions/Auth";
import { setCart } from "Redux/Actions/HomeActions";
import "./style.css";
function Logout({open,close}) {

  const dispatch = useDispatch();
  const history = useHistory();
  // const handleCancel = () => {
  //   history.push("./");
  // };

  const handleLogout = async () => {

    dispatch(
      logout({
        success: (response) => {
          history.push("./login");
        },
        fail: (err) => {
          alert("Sever didn't respond");
        },
      })
    );
    dispatch(setLogin(null));
    dispatch(setCart(null));
    close();
  };
  if(!open) return null;
  return (
    <div onClick={close} className="overlay">
    <div onClick={(e)=>{e.stopPropagation()}} className="logout-outer">
      <h2>Do you want to Logout</h2>
      {/* <p onClick={close}>Close</p> */}
      <div className="my-button">
        <button className="btn btn-dark cancel-btn" onClick={close}>
          CANCEL
        </button>
        <button className="btn btn-dark ok-btn" onClick={handleLogout}>
          OK
        </button>
      </div>
    </div>
    </div>
  );
}

export default Logout;
