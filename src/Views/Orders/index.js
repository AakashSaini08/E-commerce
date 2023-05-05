import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearOrders, getOrderHistory } from "Redux/Actions/HomeActions";
import { BASE_URL } from "Services/Api/Constants";
import { ORDER_STRINGS } from "Shared/Constants";
import "./style.css";

function Orders() {
  const pageRef = useRef(1);
  const dispatch = useDispatch();
  const orderDebounceRef = useRef(null);
  useEffect(() => {
    dispatch(getOrderHistory(1));
  }, [dispatch]);

  useEffect(() => {
    return () => {
      dispatch(clearOrders(null));
    }
  }, [dispatch]);
  
  const myOrderHistory = useSelector(
    (state) => state?.homeReducer?.orderHistory
  );
  const finalHistory = myOrderHistory ? myOrderHistory : [];
  const orderCount = myOrderHistory[0]?.data[0]?.total_count;

  window.onscroll = function () {
    var totalPageHeight = document.body.scrollHeight;
    var scrollPoint = window.scrollY + window.innerHeight;
    if (scrollPoint >= totalPageHeight) {
      if(Math.ceil(orderCount / 5) !== pageRef.current )
      {
        if(orderDebounceRef.current) {
          clearTimeout(orderDebounceRef.current)
        }
        orderDebounceRef.current = setTimeout(()=>{
          orderDebounceRef.current = null
          dispatch(getOrderHistory(++pageRef.current));
        },500)
      } 
    }
  };

  return (
    <>
      <div className="your-order">
        <h2>{ORDER_STRINGS.YOUR_ORDERS}</h2>
      </div>
      <hr />
      {orderCount !== undefined ? (
        <div>
          {finalHistory?.map((item, idx) => {
            return (
              <div className="outer-order" key={idx}>
                <div className="order-Header">
                  <div>{ORDER_STRINGS.ORDER_PLACED} : {item?.date}</div>
                  <div>{ORDER_STRINGS.ORDER_ID}: {item?.order_id}</div>
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
                                <h4>{item?.product_name?.name}</h4>
                                <h5>{ORDER_STRINGS.PRICE}{item?.price} </h5>
                                <p>{ORDER_STRINGS.QUANTITY}: {item?.quantity}</p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ) : (
                  ""
                )}
                <div className="order-bottom">{ORDER_STRINGS.SHIP_TO} : {item?.address}</div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="emptyCart">
          <h2>{ORDER_STRINGS.NO_PRODUCT_ORDERED_YET}</h2>
        </div>
      )}

      {/* {orderCount !== undefined ? (
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
          {Math.ceil(orderCount / 5) !== page ? (
            <button className="btn btn-dark m-5" onClick={nextPage}>
              Next
            </button>
          ) : null}
        </div>
      ) : null} */}
      {/* <div className="list-inner" onScroll={() => onScroll()} ref={listInnerRef}>
        {/* List items */}
      {/* </div> */}
    </>
  );
}

export default Orders;
