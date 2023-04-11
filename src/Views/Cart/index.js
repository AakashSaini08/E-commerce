import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getCart, getData, removeFromCart } from "Redux/Actions/HomeActions";
import { BASE_URL } from "Shared/Constants";
import "./style.css";

function Cart() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCart(1));
    dispatch(getData([]));
  }, [dispatch]);

  const products = useSelector((state) => state?.homeReducer?.products[1]);
  const productsArray = products ? Object.values(products) : [];
  const finalList = useSelector((state) => state?.homeReducer?.checkoutData);
  const totalAmount = useSelector((state) => state?.homeReducer?.totalPrice);
  const subTotal = totalAmount ? Object.values(totalAmount) : [];

  const history = useHistory();
  const handleBuy = () => {
    if (finalList?.length !== 0) {
      history.push("./checkout");
    }
  };

  const arr = [];
  finalList?.map((item) => {
    let data = productsArray.find((value) => value.id === item.product_id);
    if (data) {
      arr.push(data);
    }
    return arr;
  });
  const [page, setPage] = useState(1);
  const nextPage = () => {
    dispatch(getCart(page + 1));
    setPage(page + 1);
  };
  const previousPage = () => {
    if (page > 1) {
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

  return (
    <>
      <div className="Shoping-cart">
        <h2>Shopping Cart</h2>
      </div>
      <hr />

      {finalList?.length !== 0 ? (
        <div className="checkout">
          <div className="outer-main">
            {arr?.map((item, idx) => {
              return (
                <div key={idx} className="inner-left">
                  <div className="details">
                    <div className="photo">
                      <img
                        className="cart-img"
                        src={BASE_URL + item.photo}
                        alt="..."
                      ></img>
                    </div>
                    <div className="name-detail">
                      <h2>{item.name}</h2>
                      <p>{item.product_details}</p>
                      <button
                        className=" myBtn btn btn-dark"
                        onClick={() => handleRemove(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                    <div className="price">
                      <h2>Price </h2>
                      <h3>₹{item.price}</h3>
                    </div>
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

      <div className="paging">
        {page > 1 ? (
          <button className="btn btn-dark m-5" onClick={previousPage}>
            Previous
          </button>
        ) : null}
        <span>
          <b className="pg">{page}</b>
        </span>
        {page <= 1 ? (
          <button className="btn btn-dark m-5" onClick={nextPage}>
            Next
          </button>
        ) : null}
      </div>
    </>
  );
}

export default Cart;
