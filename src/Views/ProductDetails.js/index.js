// import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
// import { getData } from 'Redux/Actions/HomeActions';

import { useHistory, useParams } from 'react-router-dom';
import './style.css'

function ProductDetail() {
    // const dispatch = useDispatch();
    // useEffect(() => {
    //   dispatch(getData([]));
    // }, [])
    const products=useSelector((state)=>state?.homeReducer?.products[1]);
    console.log(products)
    const productsArray = products?Object.values(products):[];
    const params = useParams();
    const {productDetails} = params;
    // console.log(productDetails);
    // console.log(productsArray);
    const selectedProduct = productsArray.find((product)=>product.id === +productDetails);
    console.log(selectedProduct);
    const history = useHistory();
    const goBack =()=>{
        history.push("/")
    }

  return (
    <>  
        <div className='main-product '>
        <div >
            <img className='product-img' src={"https://e956-122-160-165-213.in.ngrok.io/"+ selectedProduct.photo} alt='iphone 14'/>
        </div>
        <div className='product-detail'>
        
            <h2>{selectedProduct.name}</h2>
            <hr/>
            <h3>Price: {selectedProduct.price}</h3>
            <p>Inclusive of all taxes</p>
            <hr/>
            <div>
                <p>{selectedProduct.product_details}</p>
            </div>
            <hr/>
            <div className='icons'>
                <div ><h4><i className="bi bi-truck"></i></h4>
                <p>Free <br/>Delivery</p>
                </div>
                <div ><h4><i className="bi bi-wallet2 "></i></h4>
                <p>Pay on <br/>Delivery</p>
                </div>
                <div ><h4><i className="bi bi-arrow-repeat "></i></h4>
                <p>30 day <br/> Returnable</p>
                </div>
            </div>
            <hr/>
            <div className='btns'>
                <div >
                    <button className='btn btn-dark'>Add to Cart</button>
                </div>
                <div>
                    <button className='btn btn-dark' onClick={goBack}>Go Back</button>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default ProductDetail