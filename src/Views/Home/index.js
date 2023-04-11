import Carousel from "../../Components/Atoms/Carousel";
import React, { useEffect } from "react";
import "./style.css";
import Products from "../../Assets/Images/Products.png";
import MyFooter from "../Footer/index";
import MyProduct from "Views/Product";
import { useDispatch} from "react-redux";
import { getCart, getData, getViewedItems } from "Redux/Actions/HomeActions";
import RecentProducts from "Views/RecentProduct";

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch(getData([]));
      dispatch(getViewedItems([]));
      dispatch(getCart(1));  
    },1000)
  }, [dispatch]);

  
  return (
    <div>
      <Carousel />
      <RecentProducts/>
      <h2 className="headings">DEAL OF THE DAY</h2>
      <div>
        <img className="productList" alt="myProducts" src={Products} />
      </div>
      
      <h2 className="headings">Most Selling Products</h2>
      <div>
        <MyProduct />
      </div>

      <MyFooter />
    </div>
  );
}

export default Home;
