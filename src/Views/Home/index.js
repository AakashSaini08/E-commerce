import Carousel from "../../Components/Atoms/Carousel";
import React, { useEffect } from "react";
import "./style.css";
import Products from "../../Assets/Images/Products.png";
import MyProduct from "Views/Product";
import { useDispatch, useSelector} from "react-redux";
import { getCart, getData, getViewedItems } from "Redux/Actions/HomeActions";
import RecentProducts from "Views/RecentProduct";
import Footer from "Views/Footer";
import { ALLSTRINGS} from "Shared/Constants";

function Home() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state?.auth?.data);

  useEffect(() => {
    setTimeout(() => {
      dispatch(getData([]));
      if(token){
        dispatch(getViewedItems([]));
        dispatch(getCart(1)); 
      }
    },500)
  }, [dispatch, token]);

  
  return (
    <div>
      <Carousel />
      <RecentProducts/>
      <h2 className="headings">{ALLSTRINGS.DEAL_OF_THE_DAY}</h2>
      <div>
        <img className="productList" alt="myProducts" src={Products} />
      </div>
      
      <h2 className="headings">{ALLSTRINGS.Most_Selling_Products}</h2>
      <div>
        <MyProduct />
      </div>

      <Footer/>

      
    </div>
  );
}

export default Home;
