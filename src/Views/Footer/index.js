import React from "react";
import "./style.css";
import googlPlay from "../../Assets/Images/googlePlay.png";
import appStore from "../../Assets/Images/appStore.png";
// import { BsInstagram,BsFacebook,BsYoutube,BsTwitter } from "react-icons/bs";

function MyFooter() {
  return (
    <div className="main-footer">
      <div className="footer1">
        <h3>Online Shoping</h3>
        <ul>
          <li>Men</li>
          <li>Women</li>
          <li>Kids</li>
          <li>Books</li>
          <li>Sale</li>
        </ul>
      </div>
      <div className="footer2">
        <h3>Customer Policies</h3>
        <ul>
          <li>Contact Us</li>
          <li>FAQ</li>
          <li>T&C</li>
          <li>Returns</li>
          <li>Terms Of Use</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div className="footer3">
        <h3>Experience us on</h3>
        <img className="playImg" alt="Google Play" src={googlPlay} />
        <img className="storeImg" alt="Google Play" src={appStore} />
      </div>
      <div className="footer4">
        <div>
          <h3>Keep In Touch</h3>
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
          <h5>100% ORIGINAL guarantee for all products </h5>
          <h5>Return within 30days of receiving your order</h5>
        </div>
      </div>
    </div>
  );
}

export default MyFooter;
