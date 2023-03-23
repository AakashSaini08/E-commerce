import React from 'react'
import { Link } from 'react-router-dom'
import amazonlogo from '../../../Assets/Images/amazonlogo.png'
import cartlogo from '../../../Assets/Images/cartlogo.png'
import './style.css'

function Navbar() {
  return (
    <div className="navouter">
    <nav className="navbar navbar-expand-lg bg-body-tertiary fs-5 ">
        <div className="container-fluid">
          <img className="navimg" alt="logo" src={amazonlogo} />
          <div className="collapse navbar-collapse"  >
            <ul className="navbar-nav ">
              <li className="nav-item ">
                <Link className="nav-link " aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/newArrival">
                  New arrivals
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/fashion">
                  Fashion
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/mobile">
                  Mobile
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/Books">
                  Books
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/sale">
                  Sale
                </Link>
              </li>
              <li className="nav-item nav-login">
                <Link className="nav-link " to="/login">
                  Login
                </Link>
              </li>
            </ul>
          </div>
          <img className="cartimg" alt="logo" src={cartlogo} />
        </div>
      </nav>
    </div>
  )
}

export default Navbar