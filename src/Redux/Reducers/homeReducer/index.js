import {GETDATA, SETDATA} from "../../Actions/HomeActions/actionStates";

const initialData={
    products:[],
};

const homeReducer = (data = initialData,action) => {
    // console.log('reducer....')
    switch(action.type){
        case GETDATA:
            return data;
        case SETDATA:
            // console.log('setdata........')
            return {...data, products: action?.data?.map((data) => ({...data}))};

        default:
            return data;
  }

};
export default homeReducer;