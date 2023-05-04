import { addToCart, getCart, viewed } from "Redux/Actions/HomeActions";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
// import { BASE_URL } from "Shared/Constants";
import ProductAdded from "Views/ProductAdded";
import { useState } from "react";

function MyProduct() {
  const [isProductAdded,setIsProductAdded] = useState(false);
  const count = 1;
  const dispatch = useDispatch();
  const products = useSelector((state) => state?.homeReducer?.products);
  const productsArray = products ? Object.values(products) : [];
  const token = useSelector((state) => state?.auth?.data);
  const history = useHistory();

  const handleProductDetail = (x) => {
    if (token) {
      const formData = new FormData();
      formData.append("product_id", x);
      dispatch(
        viewed({
          data: formData,
          success: (Response) => {},
          fail: (err) => {
            alert("Product doesn't add in recently viewed items");
          },
        })
      );
    }

    history.push(`productDetails/${x}`);
  };

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
          }
        })
      );
    }

    setTimeout(()=>{
      setIsProductAdded(false);
    },2000)
    
    if(!token) {
      alert("You need to login first");
    }

  };

  return (
    <>
    <div className="my-product-added">
        {isProductAdded ? <ProductAdded/> : null}
      </div>
      <div className="main">
        {productsArray?.map((item, idx) => {
          return (
            <div key={idx} className="card-outer">
              <div className="myCard">
                <button
                  className="prod-btn"
                  onClick={() => handleProductDetail(item?.id)}
                >

                  <img
                    src={item?.photo}
                    className="product-img "
                    alt="..."
                  />
                </button>
                <div className="myCard-body">
                  <div>
                    <h5 className="card-title">{item?.name}</h5>
                    <p className="card-text">
                      <b>In Stock:</b> {item?.quantity}
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
        })}
      </div>
    </>
  );
}

export default MyProduct;
