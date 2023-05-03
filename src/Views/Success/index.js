import React, { useEffect } from "react";
import "./style.css";
import correct from "../../Assets/Images/correct-removebg-preview.png";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { success } from "Redux/Actions/HomeActions";

function Success() {

  
  const object = JSON.parse(localStorage.getItem("persist:rootdata"));
  const obj = JSON.parse(object.auth);
  const token = obj.data;
  // console.log(token, "myToken");

  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(success(token))
  },[dispatch,token])
 
  const handleOk = () => {
    history.push("/"); 
  };

  return (
    <div className="outer-success">
      <div className="success">
        <img className="tick" src={correct} alt="correct" />
      </div>
      <div className="head">
        <h2>Success</h2>
      </div>
      <div className="para">
        <p>
          We received your purchase request;
          <br /> we'll be in touch shortly!
        </p>
      </div>
      <div>
        <button className="btn btn-success" onClick={handleOk}>
          OK
        </button>
        
      </div>
    </div>
  );
}

export default Success;
