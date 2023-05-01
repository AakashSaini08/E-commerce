import Cart from "Views/Cart";
import Checkout from "Views/Checkout";
import Failure from "Views/Failure";
import History from "Views/History";
import Orders from "Views/Orders";
import Success from "Views/Success";

export const PRIVATE_ROUTES = [
  {
    path: "/checkout",
    component: Checkout,
    title: "Checkout",
  },
  {
    path: "/success",
    component: Success,
    title: "Success",
  },
  {
    path: "/failure",
    component: Failure,
    title: "Failure",
  },
  {
    path: "/cart",
    component: Cart,
    title: "Cart",
  },
  {
    path: "/orders",
    component: Orders,
    title: "Orders",
  },
  {
    path: "/history",
    component: History,
    title: "History",
  },
];
