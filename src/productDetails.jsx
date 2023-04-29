import React from "react";
import './props.css'
const ProductDetails=(props)=>{
  const handleClick=()=>{
    alert(`${props.productName} , which is Shoes of brand ${props.Brand} has of amount $${props.Price}  is added in the cart , please proceed to pay !!! `)
  }
  return(
    <div className="props">
      <img src={props.productPic}/>
    <h5>{props.productId}</h5>
    <h4>{props.productName}</h4>
    <h3>{props.Brand}</h3>
    <p>{props.productDescription}</p>
    <h4>${props.Price}</h4>
    <div className="buttonDiv">
    <button id="button" onClick={handleClick}> Add to Cart</button></div>

    </div>
  )
}
export default ProductDetails