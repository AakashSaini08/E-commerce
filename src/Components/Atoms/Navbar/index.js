import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import { useHistory } from 'react-router-dom'
import { Images } from 'Shared/Images'
// import Logout from 'Views/Logout'

// const Modal = ()=>{
//   const [showModal,setShowModal] = useState(false);
//   const closeModal =()=> setShowModal(false);
//   return(
//     <>
//       <button onClick={()=>setShowModal(true)}>Logout</button> 
//       {showModal && <Logout closeModal={closeModal}/>}
//     </>
//   );
// };


function Navbar() {

  const history = useHistory();

  function handleCart(){
    history.push("/cart")
  }

  return (
    <div className="navouter">
    <nav className="navbar navbar-expand-lg bg-body-tertiary fs-5 ">
    <img className="navimg" alt="logo" src={Images.amazonlogo} />
        <div className="container-fluid">
          
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
                <li className="nav-item nav-logout">
                  <Link className="nav-link " to="/logout">
                  LOGOUT
                </Link>
                </li>
            </ul>
          </div>
            <div>
            <img className="cartimg" alt="logo" src={Images.cartlogo} onClick={handleCart} />
            <p className='item-count'>0</p>
            </div>
          

        </div>
      </nav>
    </div>
  )
}

export default Navbar