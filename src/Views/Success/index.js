import React, { useEffect } from "react";
import "./style.css";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { success } from "Redux/Actions/HomeActions";
import { Images } from "Shared/Images";
import { SUCCESS_STRINGS } from "Shared/Constants";

function Success() {
  const object = JSON.parse(localStorage.getItem("persist:rootdata"));
  const obj = JSON.parse(object.auth);
  const token = obj.data;
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(success(token));
  }, [dispatch, token]);

  const handleOk = () => {
    history.push("/");
  };

  return (
    <div className="outer-success">
      <div className="success">
        <img className="tick" src={Images.correct} alt="correct" />
      </div>
      <div className="head">
        <h2>{SUCCESS_STRINGS.SUCCESS}</h2>
      </div>
      <div className="para">
        <p>
          {SUCCESS_STRINGS.PURCHASE_REQUEST}
          <br />
          {SUCCESS_STRINGS.TOUCH_SHORTLY}
        </p>
      </div>
      <div>
        <button className="btn btn-success" onClick={handleOk}>
          {SUCCESS_STRINGS.OK}
        </button>
      </div>
    </div>
  );
}

export default Success;
