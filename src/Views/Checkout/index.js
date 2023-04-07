import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useHistory } from "react-router-dom";
import { getCart, getData, paynow } from "Redux/Actions/HomeActions";
import "./style.css";

function Checkout() {
  const [address, setAddress] = useState("");
  const handleAddress = (e) => {
    setAddress(e.target.value);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCart([]));
    dispatch(getData([]));
  }, [dispatch]);
//   const checkoutList = useSelector((state) => state?.homeReducer?.checkoutData);
  const totalAmount = useSelector((state) => state?.homeReducer?.totalPrice);
  const subTotal = totalAmount ? Object.values(totalAmount) : [];
// console.log(checkoutList,subTotal)
// const item_id =checkoutList[0].product_id;
// const item_qty =checkoutList[0].quantity;
// const history = useHistory();
// console.log(checkoutList[1].product_id,"sdsd",checkoutList[1].quantity)//product_id , quanitity
//   console.log(address,"dfafd");

  const formData = new FormData();
  formData.append("address", address);


  const handlePay=()=>{
    if(address !== ''){
      try {
        dispatch(
          paynow({
            data: formData,
            success: (Response) => {
                // console.log(Response.data.url)
              window.open(Response.data.url)
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
