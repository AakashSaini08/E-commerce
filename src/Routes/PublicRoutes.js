import ProductDetail from "Views/ProductDetails.js";
import Home from "../Views/Home";


export const PUBLIC_ROUTES = [
  {
    path: "/",
    component: Home,
    title: "Homepage",
    exact: true,
  },
  {
    path: "/productDetails/:id",
    component: ProductDetail,
    title: "Product Details",
  },
  
];
