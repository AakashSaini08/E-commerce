import { SHOW_LOADER, HIDE_LOADER } from '../../Actions/LoadingActions'
const initalState = {
  isLoading: false
}

const loadingReducer = (state = initalState, action) => {
  switch(action.type) {
    case SHOW_LOADER:
      return {
        isLoading: true
      }
    case HIDE_LOADER:
    return {
      isLoading: false
    }
    default:
    return state
  }
};

export default loadingReducer;
