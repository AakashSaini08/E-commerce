export const LOGIN = "LOGIN";
export const SETLOGIN = "SETLOGIN";
export const SIGNUP = "SIGNUP";
export const SETSIGNUP = "SETSIGNUP";
export const LOGOUT = "LOGOUT";
export const SETLOGOUT = "SETLOGOUT";

export const GETOTP = "GETOTP";
export const SETOTP = "SETOTP";
export const GETVERIFY = "GETVERIFY";
export const SETVERIFY = "SETVERIFY";
export const GETPASSWORD = "GETPASSWORD";
export const SETPASSWORD = "SETPASSWORD";
export const SIGNUPOTP = "SIGNUPOTP";
export const SETSIGNUPOTP = "SETSIGNUPOTP";

export const login = (payload) => {
  // debugger;
  // console.log("login action........");
  // console.log(payload)
  return {
    type: LOGIN,
    payload,
  };
};
export const setLogin = (payload) => {
  // console.log('set login action...........')
  console.log(payload);
  return {
    type: SETLOGIN,
    payload,
  };
};

export const getOtp = (payload) => {
  return {
    type: GETOTP,
    payload,
  };
};

export const setOtp = (payload) => {
  return {
    type: SETOTP,
    payload,
  };
};

export const getVerify = (payload) => {
  return {
    type: GETVERIFY,
    payload,
  };
};

export const setVerify = (payload) => {
  return {
    type: SETVERIFY,
    payload,
  };
};

export const getPassword = (payload) => {
  return {
    type: GETPASSWORD,
    payload,
  };
};

export const setPassword = (payload) => {
  return {
    type: SETPASSWORD,
    payload,
  };
};

export const signup = (payload) => {
  return {
    type: SIGNUP,
    payload,
  };
};

export const setSignUp = (payload) => {
  return {
    type: SETSIGNUP,
    payload,
  };
};

export const signUpOtp = (payload) => {
  return {
    type: SIGNUPOTP,
    payload,
  };
};

export const setSignUpOtp = (payload) => {
  return {
    type: SETSIGNUPOTP,
    payload,
  };
};

export const logout = (payload) => {
  return {
    type: LOGOUT,
    payload,
  };
};

export const setLogout = () => {
  return {
    type: SETLOGOUT,
  };
};
