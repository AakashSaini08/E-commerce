import {ADD_TO_CART, GETDATA, SETDATA, SET_ADD_TO_CART} from "../../Actions/HomeActions/actionStates";

const initialData={
    products:[],
    cartData:[],
};

const homeReducer = (data = initialData,action) => {
    // console.log('reducer....')
    switch(action.type){
        case GETDATA:
            return data;
        case SETDATA:
            // console.log('setdata........')
            return {...data, products: action?.data?.map((data) => ({...data}))};
            
        case ADD_TO_CART:
            return {...data, cartData: action?.data?.map((data) => ({...data}))};

        // case SET_ADD_TO_CART:
        //     return {...data, cartData: action?.data?.map((data) => ({...data}))};

        default:
            return data;
  }

};
export default homeReducer;