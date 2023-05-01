import { LOGIN, SETLOGIN } from "../Actions/Auth";
import { ACTION_STATES } from "../Actions/ActionStates";

const initialState = {
  userInfo: {},
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN + ACTION_STATES.SUCCESS: {
      return {
        ...state,
        data: action.data,
      };
    }

    case SETLOGIN: {
      return {
        ...state,
        data: action.payload?.token,
        userInfo: action.payload?.data,
      };
    }
    default: {
      return state;
    }
  }
};

export default authReducer;
