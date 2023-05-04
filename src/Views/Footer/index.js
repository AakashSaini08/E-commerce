import React from "react";
import "./style.css";
import { Images } from "Shared/Images";
import { FOOTERSTRINGS } from "Shared/Constants";
function Footer() {
  return (
    <div className="main-footer">
      <div className="footer1">
        <h3>{FOOTERSTRINGS.ONLINE_SHOPPING}</h3>
        <ul>
          <li>{FOOTERSTRINGS.MEN}</li>
          <li>{FOOTERSTRINGS.WOMEN}</li>
          <li>{FOOTERSTRINGS.KIDS}</li>
          <li>{FOOTERSTRINGS.BOOKS}</li>
          <li>{FOOTERSTRINGS.SALE}</li>
        </ul>
      </div>
      <div className="footer2">
        <h3>{FOOTERSTRINGS.CUSTOMER_POLICIES}</h3>
        <ul>
          <li>{FOOTERSTRINGS.CUSTOMER_POLICIES}</li>
          <li>{FOOTERSTRINGS.FAQ}</li>
          <li>{FOOTERSTRINGS.TC}</li>
          <li>{FOOTERSTRINGS.RETURNS}</li>
          <li>{FOOTERSTRINGS.TERMS_OF_USE}</li>
          <li>{FOOTERSTRINGS.PRIVACY_POLICY}</li>
        </ul>
      </div>
      <div className="footer3">
        <h3>{FOOTERSTRINGS.EXPERIENCE_US_ON}</h3>
        <img className="playImg" alt="Google Play" src={Images.googlePlay} />
        <img className="storeImg" alt="Google Play" src={Images.appStore} />
      </div>
      <div className="footer4">
        <div>
          <h3>{FOOTERSTRINGS.KEEP_IN_TOUCH}</h3>
          <div className="myIcons">
            <div>
              <h3>
                <i className="bi bi-instagram"></i>
              </h3>
            </div>
            <div>
              <h3>
                <i className="bi bi-facebook"></i>
              </h3>
            </div>
            <div>
              <h3>
                <i className="bi bi-twitter"></i>
              </h3>
            </div>
            <div>
              <h3>
                <i className="bi bi-youtube"></i>
              </h3>
            </div>
          </div>
        </div>
        <div className="mt-3">
          <h5>{FOOTERSTRINGS.ORIGINAL} </h5>
          <h5>{FOOTERSTRINGS.RETURN}</h5>
        </div>
      </div>
    </div>
  );
}

export default Footer;
