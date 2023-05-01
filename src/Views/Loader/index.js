import React from "react";
import "./style.css";

function Loader({ isShow }) {
  return (
    <>
      {isShow ? (
        <div className="my-overlay">
          <div className="loader-outer">
            <div class="lds-ring">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Loader;
