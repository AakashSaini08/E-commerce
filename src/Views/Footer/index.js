import React from "react";
import "./style.css";
import { Images } from "Shared/Images";
import { FOOTER_STRINGS } from "Shared/Constants";
function Footer() {
  return (
    <div className="main-footer">
      <div className="footer1">
        <h3>{FOOTER_STRINGS.ONLINE_SHOPPING}</h3>
        <ul>
          <li>{FOOTER_STRINGS.MEN}</li>
          <li>{FOOTER_STRINGS.WOMEN}</li>
          <li>{FOOTER_STRINGS.KIDS}</li>
          <li>{FOOTER_STRINGS.BOOKS}</li>
          <li>{FOOTER_STRINGS.SALE}</li>
        </ul>
      </div>
      <div className="footer2">
        <h3>{FOOTER_STRINGS.CUSTOMER_POLICIES}</h3>
        <ul>
          <li>{FOOTER_STRINGS.CUSTOMER_POLICIES}</li>
          <li>{FOOTER_STRINGS.FAQ}</li>
          <li>{FOOTER_STRINGS.TC}</li>
          <li>{FOOTER_STRINGS.RETURNS}</li>
          <li>{FOOTER_STRINGS.TERMS_OF_USE}</li>
          <li>{FOOTER_STRINGS.PRIVACY_POLICY}</li>
        </ul>
      </div>
      <div className="footer3">
        <h3>{FOOTER_STRINGS.EXPERIENCE_US_ON}</h3>
        <img className="playImg" alt="Google Play" src={Images.googlePlay} />
        <img className="storeImg" alt="Google Play" src={Images.appStore} />
      </div>
      <div className="footer4">
        <div>
          <h3>{FOOTER_STRINGS.KEEP_IN_TOUCH}</h3>
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
          <h5>{FOOTER_STRINGS.ORIGINAL} </h5>
          <h5>{FOOTER_STRINGS.RETURN}</h5>
        </div>
      </div>
    </div>
  );
}

export default Footer;
