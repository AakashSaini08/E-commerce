import React from "react";
import {useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { addToCart, getCart } from "Redux/Actions/HomeActions";
import { BASE_URL } from "Shared/Constants";
import "./style.css";

function RecentProducts() {
    const products = useSelector((state) => state?.homeReducer?.products[1]);
  const productsArray = products ? Object.values(products) : [];
  console.log(productsArray, "ProductsArrays OK");

  const viewedItems = useSelector((state) => state?.homeReducer?.viewedData);
  console.log(viewedItems, "viewedItems OK");

  const arr = [];
  viewedItems?.map((item) => {
    let data = productsArray.find((value) => value.id === item.product_id);
    if (data) {
      arr.push(data);
    }
    return arr;//remember
  });
  console.log(arr,"finalList")

  const history = useHistory();
  const handleProductDetail = (x) => {
    history.push(`/${x}`);
  };

  const count = 1;
  const dispatch = useDispatch();

  const handleCart = (item) => {
    const formData = new FormData();
    formData.append("product_id", item.id);
    formData.append("quantity", count);
    dispatch(
      addToCart({
        data: formData,
        success: (Response) => {
          dispatch(getCart());
          history.push("/");
        },
        fail: (err) => {
          alert("Item out of stock");
        },
      })
    );
    alert("item has been added to cart");
  };

  return (
    <div>
      <div>
        <h2 className="headings">Recently viewed Products</h2>
      </div>
      <div className="main">
      {arr?.map((item, idx) => {
        return (
            <div key={idx} className="card-outer">
              <div className="myCard">
                <button
                  className="prod-btn"
                  onClick={() => handleProductDetail(item.id)}
                >
                  <img
                    src={BASE_URL + item.photo}
                    className="pro-img "
                    alt="..."
                  />
                </button>
                <div className="myCard-body">
                <div>
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">
                    <b>Quantity:</b> {item.quantity}<br/>
                    <b>Price:</b> ₹{item.price}
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
        })}
      </div>
    </div>
  );
}

export default RecentProducts;
