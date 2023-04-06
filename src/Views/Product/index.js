import { addToCart } from "Redux/Actions/HomeActions";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { BASE_URL } from "Shared/Constants";

// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { ToastContainer,toast } from "react-toastify";

function MyProduct() {
  const count = 1;
  const dispatch = useDispatch();
  const products = useSelector((state) => state?.homeReducer?.products[1]);
  // console.log('lkj',products)
  const productsArray = products ? Object.values(products) : [];
  //  console.log(productsArray.id)

  //  const token=useSelector((state)=>state?.auth?.data);
  // console.log(token);

  const history = useHistory();
  const handleProductDetail = (x) => {
    history.push(`/${x}`);
  };

  const handleCart = (item) => {
    // debugger;
    // toast("Wow so easy!");
    alert("item has been added to cart")
    const formData = new FormData();
    formData.append("product_id", item.id);
    formData.append("quantity", count);
    dispatch(
      addToCart({
        data: formData,
        success: (Response) => {
          history.push("/");
        },
        fail: (err) => {
          alert("Item out of stock");
        },
      })
    );
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
                    className="pro-img "
                    alt="..."
                  />
                </button>
                <div className="myCard-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">
                    <b>Price:</b> ₹{item.price}
                  </p>
                  <button
                    className=" myBtn btn btn-dark"
                    onClick={() => handleCart(item)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* <ToastContainer /> */}
    </>
  );
}

export default MyProduct;
