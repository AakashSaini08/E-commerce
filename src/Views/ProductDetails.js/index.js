import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import "./style.css";

import { useState, useEffect } from "react";
import {
  addReview,
  addToCart,
  getAllReviews,
  getData,
  setAllReviews,
} from "Redux/Actions/HomeActions";
import { BASE_URL } from "Services/Api/Constants";
import { PRODUCT_DETAIL_STRINGS } from "Shared/Constants";

function ProductDetail() {
  const products = useSelector((state) => state?.homeReducer?.products[1]);
  const productsArray = products ? Object.values(products) : [];
  const params = useParams();
  const selectedProduct = productsArray.find(
    (product) => product.id === +params?.id
  );

  const myReviews = useSelector((state) => state?.homeReducer?.reviews);
  const finalReviews = myReviews ? Object.values(myReviews) : [];
  const token = useSelector((state) => state?.auth?.data);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData(1))
    if (token) {
      dispatch(getAllReviews(selectedProduct?.id));
    }
  }, [dispatch, selectedProduct?.id, token]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    return () => {
      dispatch(setAllReviews(null));
    };
  }, [dispatch]);

  const [count, setCount] = useState(1);
  const handleQuantity = (e) => {
      setCount(e.target.value);
  };

  const handleCart = (selectedProduct,e) => {
    if (token) {
      const countt = parseInt(count);
      const formData = new FormData();
      formData.append("product_id", selectedProduct?.id);
      formData.append("quantity", countt);
      try {
        dispatch(
          addToCart({
            data: formData,
            success: (Response) => {
              history.push("/cart");
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

  const [rating, setRating] = useState(1);
  const handleChange = (event) => {
    setRating(event.target.value);
  };

  const [review, setReview] = useState("");
  const handleReview = (e) => {
    if (token) {
      setReview(e.target.value);
    }
  };

  const handleSubmit = () => {
    if(token){
      const formData = new FormData();
      formData.append("product_id", selectedProduct?.id);
      formData.append("review", review);
      formData.append("rating", rating);
      if(review.trim() !== '' && review !== null){
        try {
          dispatch(
            addReview({
              data: formData,
              success: (Response) => {
                if (Response.status === 200) {
                  dispatch(getAllReviews(selectedProduct?.id));
                  history.push(`/productDetails/${selectedProduct?.id}`);
                  setReview("");
                  setRating(1)
                }
              },
              fail: (err) => {
                alert("You need to buy this product before reviewing it...");
              },
            })
          );
        } catch (error) {}
      }else{
        alert("Review cannot be leaved empty")
      } 
      }else{
        alert("You need to login first")
      }
      
      
    
  };

  

  return (
    <>
      <div className="detail-out">
        <div className="main-product ">
          <div>
            <img
              className="detail-product-img"
              src={BASE_URL + selectedProduct?.photo}
              alt="iphone 14"
            />
          </div>
          <div className="product-detail">
            <h2>{selectedProduct?.name}</h2>
            <hr />
            <h3>{PRODUCT_DETAIL_STRINGS.PRICE}{selectedProduct?.price}</h3>
            <p>{PRODUCT_DETAIL_STRINGS.INCLUSIVE}</p>
            <hr />
            <div>
              <p>{selectedProduct?.product_details}</p>
            </div>
            <hr />
            <div className="icons">
              <div>
                <h4>
                  <i className="bi bi-truck"></i>
                </h4>
                <p>
                  {PRODUCT_DETAIL_STRINGS.FREE} <br />
                  {PRODUCT_DETAIL_STRINGS.DELIVERY}
                </p>
              </div>
              <div>
                <h4>
                  <i className="bi bi-wallet2 "></i>
                </h4>
                <p>
                  {PRODUCT_DETAIL_STRINGS.PAY_ON} <br />
                  {PRODUCT_DETAIL_STRINGS.DELIVERY}
                </p>
              </div>
              <div>
                <h4>
                  <i className="bi bi-arrow-repeat "></i>
                </h4>
                <p>
                {PRODUCT_DETAIL_STRINGS.DAY} <br />{PRODUCT_DETAIL_STRINGS.RETURNABLE}
                </p>
              </div>
            </div>
            <hr />
            <div className="btns">
              <div className="count-value">
              <select
                        className="prod-quantity"
                        value={count}
                        onChange={(e) => handleQuantity(e)}
                      >
                        <option value="1"> {PRODUCT_DETAIL_STRINGS.ONE} </option>
                        <option value="2"> {PRODUCT_DETAIL_STRINGS.TWO} </option>
                        <option value="3"> {PRODUCT_DETAIL_STRINGS.THREE} </option>
                        <option value="4"> {PRODUCT_DETAIL_STRINGS.FOUR} </option>
                        <option value="5"> {PRODUCT_DETAIL_STRINGS.FIVE} </option>
                      </select>
              </div>
              <div>
                <button
                  className=" myBtn btn btn-dark"
                  onClick={() => handleCart(selectedProduct)}
                >
                  {PRODUCT_DETAIL_STRINGS.ADD_TO_CART}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="review-outer">
          <div className="review-left">
            <div>
              <h3>{PRODUCT_DETAIL_STRINGS.CUSTOMER_REVIEWS}</h3>
              <label>
                {PRODUCT_DETAIL_STRINGS.RATING}
                <select value={rating} onChange={handleChange}>
                  <option value="1"> {PRODUCT_DETAIL_STRINGS.ONE}</option>
                  <option value="2"> {PRODUCT_DETAIL_STRINGS.TWO} </option>
                  <option value="3"> {PRODUCT_DETAIL_STRINGS.THREE} </option>
                  <option value="4"> {PRODUCT_DETAIL_STRINGS.FOUR} </option>
                  <option value="5"> {PRODUCT_DETAIL_STRINGS.FIVE} </option>
                </select>
              </label>
            </div>
            <div className="review-title">
              <div>
                <h4>{PRODUCT_DETAIL_STRINGS.REVIEW_THIS_PRODUCT}</h4>
              </div>
              <div>
                <textarea
                  name="textValue"
                  value={review}
                  onChange={handleReview}
                />
              </div>
              <div>
                <button className="btn btn-dark " onClick={handleSubmit}>
                  {PRODUCT_DETAIL_STRINGS.SUBMIT}
                </button>
              </div>
            </div>
          </div>
          <div className="review-right">
            <div>
              <h3>{PRODUCT_DETAIL_STRINGS.TOP_REVIEWS}</h3>
            </div>
            {finalReviews.length !== 0 ? (
              <div>
                {finalReviews?.map((rev, idx) => {
                  return (
                    <div className="single-review" key={idx}>
                      <h5>{PRODUCT_DETAIL_STRINGS.USER_NAME} : {rev?.username}</h5>
                      <h5>{PRODUCT_DETAIL_STRINGS.RATING} : {rev?.rating}</h5>
                      <h5>{PRODUCT_DETAIL_STRINGS.DATE} : {rev?.date}</h5>
                      <h5>{PRODUCT_DETAIL_STRINGS.MESSAGE}: {rev?.review}</h5>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div>
                <h5>{PRODUCT_DETAIL_STRINGS.NO_REVIEW_YET}</h5>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;