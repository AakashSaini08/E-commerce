import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import "./style.css";
import { BASE_URL } from "Shared/Constants";
import { useState } from "react";
import { addToCart } from "Redux/Actions/HomeActions";

function ProductDetail() {
  const products = useSelector((state) => state?.homeReducer?.products[1]);
  console.log(products);
  const productsArray = products ? Object.values(products) : [];
  const params = useParams();
  const { productDetails } = params;
  const selectedProduct = productsArray.find(
    (product) => product.id === +productDetails
  );
  console.log(selectedProduct);
  const [review, setReview] = useState();
  const handleReview = (e) => {
    setReview(e.target.value);
  };

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
      // console.log(error.data);
      // console.log(error?.data?.token);
    }
  };

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
            <p>Rating: 4.5</p>
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
              <button className="btn btn-dark ">Submit</button>
            </div>
          </div>
        </div>
        <div className="review-right">
          <div>
            <h3>Top Reviews</h3>
          </div>
          <div>
            <h4>User name</h4>
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
