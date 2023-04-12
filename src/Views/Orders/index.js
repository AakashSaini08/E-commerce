import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCart, getData, getOrderHistory } from "Redux/Actions/HomeActions";
import { BASE_URL } from "Shared/Constants";
import "./style.css";

function Cart() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCart(1));
    dispatch(getData([]));
  }, [dispatch]);

  useEffect(() => {
    dispatch(getOrderHistory(1));
  }, [dispatch]);

  const myOrderHistory = useSelector((state) => state?.homeReducer?.orderHistory);
  const finalHistory = myOrderHistory ? (myOrderHistory) : [];
  console.log(finalHistory, "final History");
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

  return (
    <>
      <div className="Shoping-cart">
        <h2>Your Orders</h2>
      </div>
      <hr />

      {finalHistory?.length !== 0 ? (
        <div className="checkout">
          <div className="outer-main">
            {finalHistory?.map((item, idx) => {
              return (
                <div key={idx} className="inner-left">
                  <div className="details">
                    <div className="photo">
                      <img
                        className="cart-img"
                        src={BASE_URL + item.product_name.photo}
                        alt="..."
                      ></img>
                    </div>
                    <div className="name-detail">
                    <h5>Date:  {item.date_of_payment}</h5>
                      <h2>{item.product_name.name}</h2>
                      <p>{item.product_name.product_details}</p>
                    </div>
                    <div className="price">
                      <h4>Price ₹{item.price} </h4>
                    </div>
                    <div className="qty">
                        <h4>Quantity {item.quantity}</h4>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="emptyCart">
          <h2>No product ordered yet</h2>
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
