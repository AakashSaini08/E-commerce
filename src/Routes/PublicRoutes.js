
import SignUp from "Views/SignUp";
import Home from "../Views/Home";
import SignIn from "../Views/SignIn"



export const PUBLIC_ROUTES = [
  {
    path: "/",
    component: Home,
    title: "Homepage",
    exact: true,
  },
  // {
  //   path: "/newArrivals",
  //   component: ShowPlayer,
  //   title: "New Arrivals",
  // },
  // {
  //   path: "/fashion",
  //   component: ShowTeam,
  //   title: "Fashion",
  // },
  // {
  //   path: "/mobile",
  //   component: SelectTeam,
  //   title: "Mobile",
  // },
  // {
  //   path: "/books",
  //   component: ScoreCard,
  //   title: "Books",
  // },
  // {
  //   path: "/sale",
  //   component: ScoreCard,
  //   title: "Sale",
  // },
  {
    path: "/login",
    component: SignIn ,
    title: "Score card",
  },
  {
    path: "/signup",
    component: SignUp ,
    title: "SIGNUP",
  },
  
];
