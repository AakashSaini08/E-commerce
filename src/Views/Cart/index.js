import React from 'react'
import cartlogo from '../../Assets/Images/cartlogo.png'

function Cart() {
  return (
    <div>
        <header>
          <div className="continue-shopping">
            <img src="./images/arrow.png" alt="arrow" className="arrow-icon" />
            <h3>continue shopping</h3>
          </div>

          <div className="cart-icon">
            <img src={cartlogo} alt="cart" />
            <p>7</p>
          </div>
        </header>
    </div>
  )
}

export default Cart