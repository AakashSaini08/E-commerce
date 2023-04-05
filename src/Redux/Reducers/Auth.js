import { LOGIN, SETLOGIN } from "../Actions/Auth";
import { ACTION_STATES } from "../Actions/ActionStates";

const initialState = {
  token: null,
  userInfo: {},
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN + ACTION_STATES.SUCCESS: {
      // console.log(action);
      return {
        ...state,
        data: action.data,
      };
    }

    case SETLOGIN: {
      // console.log(action.data,"sdsafdas")
      //  console.log(action);
      return {
        ...state,
        data: action.payload.token,
        userInfo: action.payload.data,
      };
    }

    // case GETOTP + ACTION_STATES.SUCCESS: {
    //   return state;
    // }

    // case SETOTP + ACTION_STATES.SUCCESS: {
    //   return state;
    // }

    // case GETVERIFY + ACTION_STATES.SUCCESS: {
    //   return state;
    // }

    // case SETVERIFY + ACTION_STATES.SUCCESS: {
    //   return state;
    // }

    default: {
      return state;
    }
  }
};

export default authReducer;
