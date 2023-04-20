import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import "./style.css";
import { BASE_URL } from "Shared/Constants";
import { useState, useEffect } from "react";
import {
  addReview,
  addToCart,
  getAllReviews,
  setAllReviews,
} from "Redux/Actions/HomeActions";

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
  const handleCount = (e) => {
    if (count >= 1 && count < 5) {
      setCount(e.target.value);
    } else {
      setCount(1);
    }
  };

  const handleCart = (selectedProduct) => {
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

  const [review, setReview] = useState();
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
  
      try {
        dispatch(
          addReview({
            data: formData,
            success: (Response) => {
              if (Response.status === 200) {
                dispatch(getAllReviews(selectedProduct?.id));
                history.push(`/productDetails/${selectedProduct?.id}`);
              }
            },
            fail: (err) => {
              alert("You need to buy this product before reviewing it...");
            },
          })
        );
      } catch (error) {}
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
            <h3>Price: ₹{selectedProduct?.price}</h3>
            <p>Inclusive of all taxes</p>
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
                  Free <br />
                  Delivery
                </p>
              </div>
              <div>
                <h4>
                  <i className="bi bi-wallet2 "></i>
                </h4>
                <p>
                  Pay on <br />
                  Delivery
                </p>
              </div>
              <div>
                <h4>
                  <i className="bi bi-arrow-repeat "></i>
                </h4>
                <p>
                  30 day <br /> Returnable
                </p>
              </div>
            </div>
            <hr />
            <div className="btns">
              <div className="count-value">
                <input
                  type="number"
                  placeholder="Quantity"
                  className="form-control my-2 "
                  value={count}
                  onChange={(e) => handleCount(e)}
                  required
                ></input>
              </div>
              <div>
                <button
                  className=" myBtn btn btn-dark"
                  onClick={() => handleCart(selectedProduct)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="review-outer">
          <div className="review-left">
            <div>
              <h3>Customer Reviews</h3>
              <label>
                Rating
                <select value={rating} onChange={handleChange}>
                  <option value="1"> 1 </option>
                  <option value="2"> 2 </option>
                  <option value="3"> 3 </option>
                  <option value="4"> 4 </option>
                  <option value="5"> 5 </option>
                </select>
              </label>
            </div>
            <div className="review-title">
              <div>
                <h4>Review this Product</h4>
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
                  Submit
                </button>
              </div>
            </div>
          </div>
          <div className="review-right">
            <div>
              <h3>Top Reviews</h3>
            </div>
            {finalReviews.length !== 0 ? (
              <div>
                {finalReviews?.map((rev, idx) => {
                  return (
                    <div className="single-review" key={idx}>
                      <h5>User Name : {rev?.username}</h5>
                      <h5>Rating : {rev?.rating}</h5>
                      <h5>Date : {rev?.date}</h5>
                      <h5>Message : {rev?.review}</h5>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div>
                <h5>No Reviews yet</h5>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
