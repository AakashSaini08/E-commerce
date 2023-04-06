import Cart from "Views/Cart";
import Checkout from "Views/Checkout";
import CreatePassword from "Views/CreatePassword";
import ForgotPassword from "Views/ForgotPassword";
import Logout from "Views/Logout";
import Otp from "Views/Otp";
import PhoneOtp from "Views/PhoneOtp";
import ProductDetail from "Views/ProductDetails.js";
import SignUp from "Views/SignUp";
import Home from "../Views/Home";
import SignIn from "../Views/SignIn";

export const PUBLIC_ROUTES = [
  {
    path: "/",
    component: Home,
    title: "Homepage",
    exact: true,
  },
  {
    path: "/login",
    component: SignIn,
    title: "SIGNIN",
  },
  {
    path: "/signup",
    component: SignUp,
    title: "SIGNUP",
  },
  {
    path: "/cart",
    component: Cart,
    title: "Cart",
  },
  {
    path: "/otp",
    component: Otp,
    title: "OTP",
  },
  {
    path: "/forgot",
    component: ForgotPassword,
    title: "Forgot",
  },
  {
    path: "/phoneotp",
    component: PhoneOtp,
    title: "Phone Otp",
  },
  {
    path: "/checkout",
    component: Checkout,
    title: "Checkout",
  },
  {
    path: "/createpassword",
    component: CreatePassword,
    title: "Create Password",
  },
  {
    path: "/logout",
    component: Logout,
    title: "Logout",
  },
  {
    path: "/:productDetails",
    component: ProductDetail,
    title: "Product Details",
  },
  
];
