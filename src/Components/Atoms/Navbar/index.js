import React, { useEffect }  from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { useHistory } from "react-router-dom";
import { Images } from "Shared/Images";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "Redux/Actions/HomeActions";

function Navbar() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData([]));
  }, [dispatch]);
  const userName = useSelector((state) => state?.auth?.userInfo?.username);
  const totalItems = useSelector((state) => state?.homeReducer?.totalItems);
  const token = useSelector((state) => state?.auth?.data);
  const history = useHistory();
  function handleCart() {
    history.push({
      pathname:"/cart"
  });
  }

  function handleLogo() {
    history.push("./");
  }


  return (
    <div className="navouter">
      <nav className="navbar navbar-expand-lg bg-body-tertiary fs-5 ">
        <div className="nav-left container-fluid">
          <img
            onClick={handleLogo}
            className="navimg"
            alt="logo"
            src={Images.amazonlogo}
          />
          <div className=" nav-right collapse navbar-collapse">
            <ul className="navbar-nav ">
              <li className="nav-item ">
                <Link className="nav-link " aria-current="page" to="/">
                  HOME
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
                <li className="nav-item nav-orders">
                  <Link className="nav-link " to="/orders">
                    ORDERS
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
          {token ?(

          
          <div>
            <img
              className="cartimg"
              alt="logo"
              src={Images.cartlogo}
              onClick={handleCart}
            />
            <p className="item-count">{totalItems}</p>
          </div>
          ):[]}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
