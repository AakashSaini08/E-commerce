import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { logout, setLogin } from "Redux/Actions/Auth";
import { setCart } from "Redux/Actions/HomeActions";
import { LOGOUT_STRINGS } from "Shared/Constants";
import "./style.css";
function Logout({ open, close }) {
  const dispatch = useDispatch();
  const history = useHistory();
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
  if (!open) return null;
  return (
    <div onClick={close} className="overlay">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="logout-outer"
      >
        <h2>{LOGOUT_STRINGS.DO_YOU_WANT_TO_LOGOUT}</h2>
        <div className="my-button">
          <button className="btn btn-dark cancel-btn" onClick={close}>
            {LOGOUT_STRINGS.CANCEL}
          </button>
          <button className="btn btn-dark ok-btn" onClick={handleLogout}>
            {LOGOUT_STRINGS.OK}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Logout;
