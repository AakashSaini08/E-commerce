import React, {useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTransactionHistory } from "Redux/Actions/HomeActions";
import { HISTORY_STRINGS, PAGING } from "Shared/Constants";
import "./style.css";

function History() {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getTransactionHistory(page));
  },[dispatch,page]);
  const myTransactionHistory = useSelector((state) => state?.homeReducer?.transactionHistory);
  const historyCount = useSelector((state) => state?.homeReducer?.orderCount);
  const finalTransactionHistory = myTransactionHistory ? (myTransactionHistory) : [];

  const nextPage = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    setPage(page + 1);
  };
  const previousPage = () => {
    if (page > 1) {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      setPage(page - 1);
    }
  };
  return (
    <>
      <div className="transaction-head">
        <h2>{HISTORY_STRINGS.TRANSACTION_HISTORY}</h2>
      </div>
      <hr />
      {finalTransactionHistory?.length !== 0 ? (
        <div className="Transaction">
          <div className="outer-transaction">
            {finalTransactionHistory?.map((item, idx) => {
              return (
                <div key={idx} className="trans-details">
                <div className="date-id">
                    <p>{HISTORY_STRINGS.ORDER_PLACED}:  {item?.date}</p>
                    <div>
                    <p>{HISTORY_STRINGS.TRANSACTION_ID}: {item?.transaction_id}</p>
                    </div>
                    </div>
                      <h4>{item?.product_name}</h4>
                      <h5>{HISTORY_STRINGS.PAID_STATUS} : <span className={item?.paid?'text-success':'text-danger'}>{item?.paid?"Success":"Failure"} </span></h5>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="emptyCart">
          <h2>{HISTORY_STRINGS.NO_TRANSACTION_MADE_YET}</h2>
        </div>
      )}
      {historyCount !== 0 ? (
        <div className="paging">
        {page > 1 ? (
          <button className="btn btn-dark m-5" onClick={previousPage}>
            {PAGING.PREVIOUS}
          </button>
        ) : null}
        <div className="pg">
        <span>
          <b className="pg">{page}</b>
        </span>
        </div>
        {Math.ceil(historyCount/5) !== page ? (
          <button className="btn btn-dark m-5" onClick={nextPage}>
            {PAGING.NEXT}
          </button>
        ) : null}
      </div>
      ): null}
      
    </>
  );
}

export default History;