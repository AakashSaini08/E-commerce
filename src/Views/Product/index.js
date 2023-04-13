import { addToCart, getCart, viewed } from "Redux/Actions/HomeActions";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { BASE_URL } from "Shared/Constants";

function MyProduct() {
  const count = 1;
  const dispatch = useDispatch();
  const products = useSelector((state) => state?.homeReducer?.products[1]);
  const productsArray = products ? Object.values(products) : [];
  const history = useHistory();
  
  const handleProductDetail = (x) => {
    const formData = new FormData();
  formData.append("product_id",x)
    dispatch(
      viewed({
        data:formData,
        success: (Response) => {
        },
        fail: (err) => {
          alert("Product dosen't add in recently viewed items");
        },
      })
    )
    history.push(`/${x}`);
  };

  const handleCart = (item) => {
    const formData = new FormData();
    formData.append("product_id", item.id);
    formData.append("quantity", count);
    dispatch(
      addToCart({
        data: formData,
        success: (Response) => {
          dispatch(getCart(1));
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
    <>
      <div className="main">
        {productsArray?.map((item, idx) => {
          return (
            <div key={idx} className="card-outer">
              <div className="myCard">
                <button
                  className="prod-btn"
                  onClick={() => handleProductDetail(item.id)}
                >
                  <img
                    src={BASE_URL + item.photo}
                    className="product-img "
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
    </>
  );
}

export default MyProduct;
