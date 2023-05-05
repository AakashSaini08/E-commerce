import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCart, getData, paynow } from "Redux/Actions/HomeActions";
import { CHECKOUT_STRINGS } from "Shared/Constants";
import "./style.css";

function Checkout() {
  const [address, setAddress] = useState("");
  const handleAddress = (e) => {
    if (e.target.value.length < 100) {
      setAddress(e.target.value);
    } 
    else {
      alert("Address limit exceeded...")
    }
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCart(1));
    dispatch(getData([]));
  }, [dispatch]);
  const totalAmount = useSelector((state) => state?.homeReducer?.totalPrice);
  const subTotal = totalAmount ? Object.values(totalAmount) : [];
  const handlePay = () => {
    const formData = new FormData();
    formData.append("address", address);
    if (address !== "" && address.trim() !== "") {
      try {
        dispatch(
          paynow({
            data: formData,
            success: (Response) => {
              window.open(Response.data.url, "_self");
            },
            fail: (err) => {
              alert("Payment Faild");
            },
          })
        );
      } catch (error) {
        alert(error.data);
      }
    } else {
      alert("Please Enter Address");
    }
  };

  return (
    <div>
      <div className="checkoutTitle">
        <h1>{CHECKOUT_STRINGS.CHECKOUT}</h1>
      </div>
      <hr />
      <div className="outer-cart-main">
        <div className="outer-cart-left">
          <div className="address">
            <div>
              <h3>{CHECKOUT_STRINGS.DELIVERY_ADDRESS}</h3>
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
            <h3>{CHECKOUT_STRINGS.ORDER_SUMMARY}</h3>
          </div>

          <div>
            <p>
              {CHECKOUT_STRINGS.PAYMENT_METHOD}
              <br />
              {CHECKOUT_STRINGS.REVIEW}
              <br /> {CHECKOUT_STRINGS.FINAL}
            </p>
          </div>
          <hr />
          <div className="bill">
            <h3>{CHECKOUT_STRINGS.TOTAL_AMOUNT}</h3>
            <p>{CHECKOUT_STRINGS.PRICE}{subTotal}</p>
          </div>
          <div className="bill">
            <button className="btn btn-warning" onClick={handlePay}>
              {CHECKOUT_STRINGS.PAY_NOW}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
//7983732368
//8427908502
