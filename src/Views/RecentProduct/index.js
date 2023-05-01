import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { addToCart, getCart } from "Redux/Actions/HomeActions";
import { BASE_URL } from "Shared/Constants";
import ProductAdded from "Views/ProductAdded";
import "./style.css";

function RecentProducts() {
  const [isProductAdded, setIsProductAdded] = useState(false);
  const products = useSelector((state) => state?.homeReducer?.products[1]);
  const productsArray = products ? Object.values(products) : [];
  const viewedItems = useSelector((state) => state?.homeReducer?.viewedData);
  const token = useSelector((state) => state?.auth?.data);
  const arr = [];
  viewedItems?.map((item) => {
    let data = productsArray.find((value) => value?.id === item?.product_id);
    if (data) {
      arr.push(data);
    }
    return arr;
  });

  const history = useHistory();
  const handleProductDetail = (x) => {
    history.push(`productDetails/${x}`);
  };

  const count = 1;
  const dispatch = useDispatch();

  const handleCart = (item) => {
    if (token) {
      setIsProductAdded(true);
      const formData = new FormData();
      formData.append("product_id", item?.id);
      formData.append("quantity", count);
      dispatch(
        addToCart({
          data: formData,
          success: (Response) => {
            dispatch(getCart(1));
            history.push("/");
          },
          fail: (err) => {
            if (token) {
              alert("Item out of stock");
            }
          },
        })
      );
    }

    setTimeout(() => {
      setIsProductAdded(false);
    }, 2000);

    if (!token) {
      alert("You need to login first");
    }
  };

  return (
    <>
      {token ? (
        <div>
        <div className="my-product-added">
        {isProductAdded ? <ProductAdded/> : null}
      </div>
          <div>
            <h2 className="headings">Recently viewed Products</h2>
          </div>
          <div className="recent-main">
            {arr.length > 0 ? (
              arr?.map((item, idx) => {
                return (
                  <div key={idx} className="card-outer-recent">
                    <div className="myCard-recent">
                      <button
                        className="prod-btn"
                        onClick={() => handleProductDetail(item?.id)}
                      >
                        <img
                          src={BASE_URL + item?.photo}
                          className="product-img "
                          alt="..."
                        />
                      </button>
                      <div className="myCard-body">
                        <div>
                          <h5 className="card-title">{item?.name}</h5>
                          <p className="card-text">
                            <b>Quantity:</b> {item?.quantity}
                            <br />
                            <b>Price:</b> ₹{item?.price}
                          </p>
                        </div>
                        <div>
                          <button
                            className=" myBtn btn btn-dark"
                            onClick={() => handleCart(item)}
                          >
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div>
                <h2>No item viewed yet</h2>
              </div>
            )}
          </div>
        </div>
      ) : (
        []
      )}
    </>
  );
}

export default RecentProducts;
