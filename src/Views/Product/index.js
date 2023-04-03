import './style.css'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addToCart } from 'Redux/Actions/HomeActions';
// import axios from 'axios';
function MyProduct() {
  // let count = 1;
  const dispatch = useDispatch();

  const products=useSelector((state)=>state?.homeReducer?.products[1]);
 const productsArray = products?Object.values(products):[];
 const history = useHistory();
 const handleProductDetail =(x)=>{
  history.push(`/${x}`)
 };

//  const formData = new FormData();
//  formData.append("product_id",productsArray.id)
//  formData.append("quabtity",count)
 
//  const handleCart= async(e)=>{
//   e.preventDefault();
//     try{
//       const resp = await axios.post("https://52d6-122-160-165-213.in.ngrok.io/cart/",
//         formData
//       );
//       console.log(resp.data)
//       // myToken = resp.data.token

//     }
//     catch(error){
//       console.log(error.data)
//       console.log(error?.data?.token)

//   //  if(myToken)
//     // history.push("/")
//   }
  
// }

  return (
    <>
   <div className='main'>
      {productsArray?.map((item,idx)=>{
      return (
        <div key={idx} className='card-outer'>
        <div className="myCard">
        <button className='prod-btn' onClick={()=>handleProductDetail(item.id)}>
        <img src= {"https://52d6-122-160-165-213.in.ngrok.io/"+ item.photo} className="pro-img " alt="..." />
        </button>
    <div className="myCard-body">
    <h5 className="card-title">{item.name}</h5>
    <p className="card-text"><b>Price:</b> {item.price}</p>
      <div>
      <a href="#fgghf" className=" myBtn btn btn-dark" onClick={()=>dispatch(addToCart(item))}>Add To Cart</a>
      </div>
      

    
  </div>
</div>
</div>)
    })}
    </div>
</>
  );
}

export default MyProduct;