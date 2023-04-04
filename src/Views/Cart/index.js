import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCart, getData } from 'Redux/Actions/HomeActions';
import { BASE_URL } from 'Shared/Constants';
import "./style.css"

function Cart() {

    const dispatch=useDispatch()
  useEffect(() => {
    dispatch(getCart([]));
    dispatch(getData([]));
  },[])


  const products=useSelector((state)=>state?.homeReducer?.products[1]);
  const productsArray = products?Object.values(products):[];
  console.log(productsArray,"ProductsArrays");
  const finalList=useSelector((state)=>state?.homeReducer?.checkoutData);
  // const totalAmount = useSelector((state)=>state?.homeReducer?.totalPrice)
  console.log(finalList,"final Data")

  // const myItems =productsArray.filter((item)=>{
  //   if(finalList.find((value)=> value.product_id === item.id))
  //   return item;
  // }
  // ) 

  const arr= [];
  finalList.map((item)=>{
    let data = (productsArray.find((value)=>value.id === item.product_id))
    if(data){
      arr.push(data)
    }
  })
  console.log(arr,"hggggg")


  // const [count,setCount] = useState(0);
  // const handleCount = (e)=>{
  //   setCount(e.target.value)
  // }
 
  return (
    <>

          <div className="Shoping-cart">
            <h3>Shopping Cart</h3>
          </div>
          <hr/>

    <div className='outer-main'>
        {arr?.map((item,idx) => {
          return(
            <div key={idx} className='inner-left'>
          
          <div className='details'>
            <div ><img className='cart-img' src={BASE_URL+ item.photo} alt='...'></img></div>
            <div className='name-detail'>
              <h2>{item.name}</h2>
              <p>{item.product_details}</p>
            </div>
            <div className='price'>
              <h2>Price </h2>
              <h3>{item.price}</h3>
            </div>
          </div>
          </div>
          )
          
        })}
        

          <div className='inner-right'>
            <h3>Sub-Total</h3>
            <h4>{}</h4>
            <button className='btn btn-dark'>Proceed to Buy</button>
          </div>

    </div>
    </>
  )
}

export default Cart