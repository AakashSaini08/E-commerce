import React  from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { useHistory } from "react-router-dom";
import { Images } from "Shared/Images";
import { useSelector } from "react-redux";
// import Logout from 'Views/Logout'

function Navbar() {
  const userName = useSelector((state) => state?.auth?.userInfo?.username);
  const finalList = useSelector((state) => state?.homeReducer?.checkoutData);
  const token = useSelector((state) => state?.auth?.data);

  // console.log(token, userName);
  // console.log(info,"userInfo")
  //  const productsArray = products?Object.values(products):[];

  //  const user = useSelector((state)=>state?.auth?.)
  
  const history = useHistory();
  function handleCart() {
    history.push("/cart");
  }

  function handleLogo() {
    history.push("./");
  }


  return (
    <div className="navouter">
      <nav className="navbar navbar-expand-lg bg-body-tertiary fs-5 ">
        <div className="container-fluid">
          <img
            onClick={handleLogo}
            className="navimg"
            alt="logo"
            src={Images.amazonlogo}
          />
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ">
              <li className="nav-item ">
                <Link className="nav-link " aria-current="page" to="/">
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/">
                  MEN
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/">
                  WOMEN
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/">
                  KIDS
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/">
                  BOOKS
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/">
                  SALE
                </Link>
              </li>
              {token ? (
                <li className="nav-item user-name">
                  <p>{"Hi, " + userName}</p>
                </li>
              ) : []}
              {!token ? (
                <li className="nav-item nav-login">
                  <Link className="nav-link " to="/login">
                    LOGIN
                  </Link>
                </li>
              ) : []}
              {token ? (
                <li className="nav-item nav-logout">
                  <Link className="nav-link " to="/logout">
                    LOGOUT
                  </Link>
                </li>
              ) : []}
            </ul>
          </div>
          <div>
            <img
              className="cartimg"
              alt="logo"
              src={Images.cartlogo}
              onClick={handleCart}
            />
            <p className="item-count">{finalList?.length}</p>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
