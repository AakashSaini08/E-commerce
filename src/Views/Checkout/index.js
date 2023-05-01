import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCart, getData, paynow } from "Redux/Actions/HomeActions";
import "./style.css";

function Checkout() {
  const [address, setAddress] = useState("");
  const handleAddress = (e) => {
    setAddress(e.target.value);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCart(1));
    dispatch(getData([]));
  }, [dispatch]);
  const totalAmount = useSelector((state) => state?.homeReducer?.totalPrice);
  const subTotal = totalAmount ? Object.values(totalAmount) : [];
  const handlePay=()=>{
    const formData = new FormData();
    formData.append("address", address);
    if(address !== ''){
      try {
        dispatch(
          paynow({
            data: formData,
            success: (Response) => {
              window.open(Response.data.url,"_self")
            },
            fail: (err) => {
              alert("Payment Faild");
            },
          })
        );
        
      } catch (error) {
        console.log(error.data);
      }
    }else{
      alert("Please Enter Address")
    }
  }

  return (
    <div>
      <div className="checkoutTitle">
        <h1>Checkout</h1>
      </div>
      <hr />
      <div className="outer-cart-main">
        <div className="outer-cart-left">
          <div className="address">
            <div>
              <h3>Delivery Address</h3>
            </div>
            <div>
              <textarea
                name="textValue"
                value={address}
                onChange={handleAddress}
              />
            </div>
          </div>
          
        </div>
        <div className="outer-cart-right">
          <div>
            <h3>Order Summary</h3>
          </div>

          <div>
            <p>
              Choose a payment method to continue checking out.
              <br />
              You'll still have a chance to review your
              <br /> order before it's final.
            </p>
          </div>
          <hr />
          <div className="bill">
            <h3>Total Amount</h3>
            <p>Price:  ₹{subTotal}</p>
          </div>
          <div className="bill">
            <button className="btn btn-warning" onClick={handlePay}>Pay now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
//7983732368
//8427908502