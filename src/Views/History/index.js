import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCart, getTransactionHistory } from "Redux/Actions/HomeActions";
import "./style.css";

function Orders() {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getCart(1));
    dispatch(getTransactionHistory(page));
  },[dispatch,page]);
  const myTransactionHistory = useSelector((state) => state?.homeReducer?.transactionHistory);
  const finalTransactionHistory = myTransactionHistory ? (myTransactionHistory) : [];
console.log(finalTransactionHistory,"gfgdf");
//   const TransactionCount =myTransactionHistory[0]?.total_count;
  
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
      <div className="transaction-head">
        <h2>Transaction History</h2>
      </div>
      <hr />

      {finalTransactionHistory?.length !== 0 ? (
        <div className="Transaction">
          <div className="outer-transaction">
            {finalTransactionHistory?.map((item, idx) => {
              return (
                <div key={idx} className="trans-details">
                    <p>Order Placed:  {item.date}</p>
                      <h4>{item.product_name}</h4>
                      <h5>Paid Status : <span className={item.paid?'text-success':'text-danger'}>{item.paid.toString()?"Success":"False"} </span></h5>
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
      {/* {orderCount !== 0 ? ( */}
        <div className="paging">
        {/* {page > 1 ? ( */}
          <button className="btn btn-dark m-5" onClick={previousPage}>
            Previous
          </button>
        {/* ) : null} */}
        <div className="pg">
        <span>
          <b className="pg">{page}</b>
        </span>
        </div>
        {/* {Math.ceil(orderCount/5) !== page ? ( */}
          <button className="btn btn-dark m-5" onClick={nextPage}>
            Next
          </button>
        {/* ) : null} */}
      </div>
      {/* ): null} */}
      
    </>
  );
}

export default Orders;
