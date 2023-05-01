import SignUp from "Views/SignUp";
import ForgotPassword from "Views/ForgotPassword";
import SignIn from "Views/SignIn";
import Otp from "Views/Otp";
import PhoneOtp from "Views/PhoneOtp";
import CreatePassword from "Views/CreatePassword";

export const AUTH_ROUTES = [
  {
    path: "/login",
    component: SignIn,
    title: "Sign In",
  },
  {
    path: "/signup",
    component: SignUp,
    title: "Sign Up",
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
    path: "/createpassword",
    component: CreatePassword,
    title: "Create Password",
  },
];
