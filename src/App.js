import React from "react";
import "./style.css";
import ProductDetails from './productDetails.jsx'

export default function App() {
  return (
    <div className="main">
      <ProductDetails 
      productId ="1"
      productPic ="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/awjogtdnqxniqqk0wpgf/air-max-270-shoes-2V5C4p.png"
      productName = "Air Max 270"
      Brand = "Nike "
      productDescription ="Just Do It."
      Price = "9"
      Rating ="4.0"
      />
            <ProductDetails 
      productId ="2"
      productPic ="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/aa621ce9b1b24d3a8e05ac7c0137a5cb_9366/Ultraboost_21_Shoes_White_FZ2929_04_standard.jpg
      "
      productName = "Ultraboost 21"
      Brand = "Adidas  "
      productDescription ="Impossible Is Nothing."
      Price = "12"
      Rating ="4.3"
      />
            <ProductDetails 
      productId ="3"
      productPic ="https://denimcarts.com/wp-content/uploads/2023/04/6fdaa2_53aadf3e01cd4bb0a046fac4e18a6f7cmv2.jpg"
      productName = "All Star Low Top"
      Brand = "Converse Chuck Taylor "
      productDescription ="Shoes are boring.Wear sneakers."
      Price = "15"
      Rating ="3.9"
      /><div className="mainDiv">
      <ProductDetails 
      productId ="4"
      productPic ="https://m.media-amazon.com/images/I/61-9xoAOylL._UX625_.jpg"
      productName = "Skate Shoe"
      Brand = "Vans Old Skool "
      productDescription ="Off The Wall."
      Price = "14"
      Rating ="4.9"
      />
      <ProductDetails 
      productId ="5"
      productPic ="https://m.media-amazon.com/images/I/41Q9ZOI9R4L._SX395_SY395_.jpg"
      productName = "Classic 6-Inch Boot"
      Brand = "Timberland  "
      productDescription ="Make It Better. "
      Price = "12"
      Rating ="3.7"
      /></div>
   
    </div>
  );
}
