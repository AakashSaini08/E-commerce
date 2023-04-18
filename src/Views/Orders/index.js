import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCart, getOrderHistory } from "Redux/Actions/HomeActions";
import { BASE_URL } from "Shared/Constants";
import "./style.css";

function Orders() {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCart(1));
    dispatch(getOrderHistory(page));
  }, [dispatch, page]);
  const myOrderHistory = useSelector(
    (state) => state?.homeReducer?.orderHistory
  );
  const finalHistory = myOrderHistory ? myOrderHistory : [];
  console.log(myOrderHistory, "orderHistory");
  const orderCount = myOrderHistory[0]?.total_count;

  // const myOrderId = useSelector((state) => state?.homeReducer?.orderId);
  // console.log(myOrderId, "orderId");

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
  return (
    <>
      <div className="Shoping-cart">
        <h2>Your Orders</h2>
      </div>
      <hr />
      {finalHistory?.map((item,idx)=>{
        return(
          <div key={idx}>
          <div className="order-Header">
          <div>Order Placed : {item.date}</div>
          <div>Ship To : {item.address}</div>
          <div>Order Id : {item.order_id}</div>
          </div>
          {item?.data?.length !== 0 ? (
        <div className="order">
          <div className="order-main">
            {item?.data?.map((item, idx) => {
              return (
                <div key={idx} className="inner-order-left">
                  <div className="order-details">
                    <div className="photo">
                      <img
                        className="order-img"
                        src={BASE_URL + item?.product_name?.photo}
                        alt="..."
                      ></img>
                    </div>
                    <div className="name-detail">
                      <h4>{item.product_name?.name}</h4>
                      <h5>Price: ₹{item?.price} </h5>
                      <p>Quantity: {item?.quantity}</p>
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
        </div>
        );
        
      })}

      
      {orderCount !== 0 ? (
        <div className="paging">
        {page > 1 ? (
          <button className="btn btn-dark m-5" onClick={previousPage}>
            Previous
          </button>
        ) : null}
        <div className="pg">
        <span>
          <b className="pg">{page}</b>
        </span>
        </div>
        {Math.ceil(orderCount/5) !== page ? (
          <button className="btn btn-dark m-5" onClick={nextPage}>
            Next
          </button>
        ) : null}
      </div>
      ): null}
    </>
  );
}

export default Orders;
