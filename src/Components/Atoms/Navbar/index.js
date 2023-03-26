import React from 'react'
import { Link } from 'react-router-dom'
import amazonlogo from '../../../Assets/Images/amazonlogo.png'
import cartlogo from '../../../Assets/Images/cartlogo.png'
import './style.css'
import { useHistory } from 'react-router-dom'

function Navbar() {

  const history = useHistory();

  function handleCart(){
    history.push("/cart")
  }


  return (
    <div className="navouter">
    <nav className="navbar navbar-expand-lg bg-body-tertiary fs-5 ">
        <div className="container-fluid">
          <img className="navimg" alt="logo" src={amazonlogo} />
          <div className="collapse navbar-collapse"  >
            <ul className="navbar-nav ">
              <li className="nav-item ">
                <Link className="nav-link " aria-current="page" to="/">
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/men">
                  MEN
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/women">
                  WOMEN
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/kids">
                  KIDS
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/Books">
                  BOOKS
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/sale">
                  SALE
                </Link>
              </li>
              <li className="nav-item nav-login">
                <Link className="nav-link " to="/login">
                  LOGIN
                </Link>
              </li>
            </ul>
          </div>
          <img className="cartimg" alt="logo" src={cartlogo} onClick={handleCart} />
        </div>
      </nav>
    </div>
  )
}

export default Navbar