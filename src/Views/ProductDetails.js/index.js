import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import "./style.css";
import { BASE_URL } from "Shared/Constants";
import { useState } from "react";
import { addReview, addToCart } from "Redux/Actions/HomeActions";

function ProductDetail() {
  const products = useSelector((state) => state?.homeReducer?.products[1]);
  const productsArray = products ? Object.values(products) : [];
  const params = useParams();
  const { productDetails } = params;
  const selectedProduct = productsArray.find(
    (product) => product.id === +productDetails
  );
  const history = useHistory();
  const dispatch = useDispatch();
  const goBack = () => {
    history.push("/");
  };

  const [count, setCount] = useState(1);
  const handleCount = (e) => {
    if (count >= 1) {
      setCount(e.target.value);
    } else {
      setCount(1);
    }
  };

  const handleCart = (selectedProduct) => {
    const countt = parseInt(count);
    const formData = new FormData();
    formData.append("product_id", selectedProduct.id);
    formData.append("quantity", countt);
    try {
      dispatch(
        addToCart({
          data: formData,
          success: (Response) => {
            history.push("/cart");
          },
          fail: (err) => {
            alert("Item out of stock");
          },
        })
      );
    } catch (error) {
    }
  };

  const [rating, setRating] = useState(1);
  const handleChange = (event) => {
   setRating(event.target.value);
 };

  const [review, setReview] = useState();
  const handleReview = (e) => {
    setReview(e.target.value);
  };

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("product_id", selectedProduct.id);
    formData.append("review", review);
    formData.append("rating", rating);

    try {
      dispatch(
        addReview({
          data: formData,
          success: (Response) => {
            history.push(`/${selectedProduct.id}`);
          },
          fail: (err) => {
            alert("Something went wrong");
          },
        })
      );
    } catch (error) {
    }
  }

  return (
    <>
      <div className="main-product ">
        <div>
          <img
            className="product-img"
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
                placeholder="Phone number"
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
            <div>
              <button className="btn btn-dark" onClick={goBack}>
                Go Back
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="review-outer">
        <div className="review-left">
          <div>
            <h3>Customer Reviews</h3>
            <label>Rating
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
              <button className="btn btn-dark " onClick={handleSubmit}>Submit</button>
            </div>
          </div>
        </div>
        <div className="review-right">
          <div>
            <h3>Top Reviews</h3>
          </div>
          <div>
            <h5>User name</h5>
            <h5>Rating</h5>
            <p>
              I previously bought JBL Charge 5, which was a Rs. 16K trash
              speaker. But when I compare that JBL with this speaker, this one
              is well over my expectation. This speaker sounds really really
              good. Of course the bigger the speaker, the better it will sound.
              In this case, the speaker is about 12cm (height) x 29cm (wide) x
              12cm(depth). And the speaker has to be bigger to give you more
              bass.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
