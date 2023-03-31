import {GETDATA, GETUSER, SETDATA, SETUSER} from "../../Actions/HomeActions/actionStates";

const initialData={
    products:[],
    user:[]
};

const homeReducer = (data = initialData,action) => {
    // console.log('reducer....')
    switch(action.type){
        case GETDATA:
            return data;
        case SETDATA:
            // console.log('setdata........')
            return {...data, products: action?.data?.map((data) => ({...data}))};

        case GETUSER:
            return data;
        case SETUSER:
            return {...data, user: action.data  };

        default:
            return data;
  }

};
export default homeReducer;