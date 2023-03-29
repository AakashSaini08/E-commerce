import './style.css'
import { useSelector } from 'react-redux';
function MyProduct() {
  const products=useSelector((state)=>state.homeReducer.products[1]);
 const productsArray = Object.values(products);
  return (
    <>
    {/* <div>
      <h3>Some of our best selling products</h3>
    </div> */}
    {productsArray.map((e)=>{
      return (<div className="myCard">
    <img src="https://m.media-amazon.com/images/I/71yzJoE7WlL._AC_UY218_.jpg" className="pro-img " alt="..." />
    <div className="myCard-body">
    <h5 className="card-title">{e.name}</h5>
    <p className="card-text">Rating: 4.5</p>
    <p className="card-text">Price: 1,49,900</p>
    <a href="#fgghf" className="btn btn-dark">Add To Cart</a>
  </div>
</div>)
    })}
    
</>
  );
}

export default MyProduct;