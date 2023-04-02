import { addToCart } from 'Redux/Actions/HomeActions';
import './style.css'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
function MyProduct() {
  const dispatch =useDispatch();
  const products=useSelector((state)=>state?.homeReducer?.products[1]);
 const productsArray = products?Object.values(products):[];
 const history = useHistory();
 const handleProductDetail =(x)=>{
  history.push(`/${x}`)
 };
  return (
    <>
   <div className='main'>
      {productsArray?.map((item,idx)=>{
      return (
        <div key={idx} className='card-outer'>
        <div className="myCard">
        <button className='prod-btn' onClick={()=>handleProductDetail(item.id)}>
        <img src= {"https://54ab-122-160-165-213.in.ngrok.io/"+ item.photo} className="pro-img " alt="..." />
        </button>
    <div className="myCard-body">
    <h5 className="card-title">{item.name}</h5>
    <p className="card-text"><b>Price:</b> {item.price}</p>
    <a href="#fgghf" className=" myBtn btn btn-dark" onClick={()=>dispatch(addToCart(item))}>Add To Cart</a>
  </div>
</div>
</div>)
    })}
    </div>
</>
  );
}

export default MyProduct;