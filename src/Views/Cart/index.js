import React, {useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {  addToCart, getCart, removeFromCart } from "Redux/Actions/HomeActions";
import { BASE_URL } from "Shared/Constants";
import "./style.css";

function Cart() {
    const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCart(page));
  }, [dispatch,page]);
  const finalList = useSelector((state) => state?.homeReducer?.checkoutData);
  const totalAmount = useSelector((state) => state?.homeReducer?.totalPrice);
  const subTotal = totalAmount ? Object.values(totalAmount) : [];
  const totalItems = useSelector((state) => state?.homeReducer?.totalItems);
  const token = useSelector((state) => state?.auth?.data);
  const history = useHistory();
  const handleBuy = () => {
    if (finalList?.length !== 0) {
      history.push("./checkout");
    }
  };

  const nextPage = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    dispatch(getCart(page + 1));
    setPage(page + 1);
  };
  const previousPage = () => {
    if (page > 1) {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      dispatch(getCart(page - 1));
      setPage(page - 1);
    }
  };

  const handleRemove = (id) => {
    let productId;
    const myId = finalList?.find((item) => {
      if (item.product_id === id) {
        productId = item.id;
      }
      return productId;
    });
    const formData = new FormData();
    formData.append("cart_id", myId.id);

    dispatch(
      removeFromCart({
        data: myId.id,
        success: (Response) => {
          dispatch(getCart(page));
        },
        fail: (err) => {
          alert("Item didn't removed");
        },
      })
    );
  };

  const handleChange = (item,idx,e) => {
    if (token) {
          const formData = new FormData();
          formData.append("product_id", item.product_id);
          formData.append("quantity", e.target.value);
          try {
            dispatch(
              addToCart({
                data: formData,
                success: (Response) => {
                  dispatch(getCart(page));
                },
                fail: (err) => {
                  if (token) {
                    alert("Item out of stock");
                  } 
                },
              })
            );
          } catch (error) {}
        }else {
          alert("You need to login first");
        }
      };

  return (
    <>
      <div className="Shoping-cart">
        <h2>Shopping Cart</h2>
      </div>
      <hr />

      {finalList?.length !== 0 ? (
        <div className="checkout">
          <div className="outer-main">
            {finalList?.map((item, idx) => {
              return (
                <div key={idx} className="inner-left">
                  <div className="details">
                    <div className="photo">
                      <img
                        className="cart-img"
                        src={BASE_URL + item.image_url}
                        alt="..."
                      ></img>
                    </div>
                    <div className="name-detail">
                      <h4>{item.product_name}</h4>
                      <p>{item.product_description}</p>
                      <h5>Total: ₹{item.product_price}</h5>
                      <label>
                        <h5>Quantity : </h5>
                      </label>

                      <select
                        className="quantity"
                        value={item.quantity}
                        onChange={(e) => handleChange(item,idx,e)}
                      >
                        <option value="1"> 1 </option>
                        <option value="2"> 2 </option>
                        <option value="3"> 3 </option>
                        <option value="4"> 4 </option>
                        <option value="5"> 5 </option>
                      </select>

                      <button
                        className=" remove-Btn btn btn-dark"
                        onClick={() => handleRemove(item.product_id)}
                      >
                        Remove
                      </button>
                    </div>
                    <div className="price"></div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="inner-right">
            <h3>Sub-Total</h3>
            <h4>₹{subTotal}</h4>
            <button className="btn btn-dark" onClick={handleBuy}>
              Proceed to Buy
            </button>
          </div>
        </div>
      ) : (
        <div className="emptyCart">
          <h2>Cart Is Empty</h2>
        </div>
      )}
      {totalItems !== 0 ? (
        <div className="paging">
          {page > 1 ? (
            <button className=" prev btn btn-dark m-5" onClick={previousPage}>
              Previous
            </button>
          ) : null}
          <div className="pg">
            <span>
              <b>{page}</b>
            </span>
          </div>
          {Math.ceil(totalItems / 5) !== page ? (
            <button className=" next btn btn-dark m-5" onClick={nextPage}>
              Next
            </button>
          ) : null}
        </div>
      ) : null}
    </>
  );
}

export default Cart;
