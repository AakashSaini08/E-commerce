import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { useHistory } from "react-router-dom";
import { Images } from "Shared/Images";
import { useSelector } from "react-redux";
import Logout from "Views/Logout";

function Navbar() {
  const [openModel,setOpenModel] = useState(false);
  const userName = useSelector((state) => state?.auth?.userInfo?.username);
  const totalItems = useSelector((state) => state?.homeReducer?.totalItems);
  const token = useSelector((state) => state?.auth?.data);
  const history = useHistory();

  function handleCart() {
    history.push("/cart");
  }

  function handleLogo() {
    history.push("/");
  }

  return (
    <div className="navouter">
      <nav className="navbar navbar-expand-lg bg-body-tertiary fs-5 ">
        <img
          onClick={handleLogo}
          className="navimg"
          alt="logo"
          src={Images.applogo}
        />
        <div className="nav-left container-fluid">
          <div className=" nav-right collapse navbar-collapse">
            <ul className="navbar-nav ">
              <li className="nav-item ">
                <Link className="nav-link " aria-current="page" to="/">
                  HOME
                </Link>
              </li>

              {token ? (
                <div>
                  <li className="nav-item ">
                    <Link
                      className="nav-link "
                      aria-current="page"
                      to="/history"
                    >
                      HISTORY
                    </Link>
                  </li>

                  <li className="nav-item user-name">
                    <p>{"Hi, " + userName}</p>
                  </li>

                  <li className="nav-item nav-orders">
                    <Link className="nav-link " to="/orders">
                      ORDERS
                    </Link>
                  </li>

                  <li className="nav-item nav-logout">
                    <button onClick={()=>setOpenModel(true)} className="nav-link log-out">LOGOUT</button>
                  </li>
                </div>
              ) : (
                <li className="nav-item nav-login">
                  <Link className="nav-link " to="/login">
                    LOGIN
                  </Link>
                </li>
              )}
            </ul>
          </div>
          {token ? (
            <div>
              <img
                className="cartimg"
                alt="logo"
                src={Images.cartlogo}
                onClick={handleCart}
              />
              <p className="item-count">{totalItems}</p>
            </div>
          ) : (
            []
          )}
        </div>
      </nav>
      <Logout open={openModel} close={()=>setOpenModel(false)}/>
    </div>
    
  );
}

export default Navbar;
