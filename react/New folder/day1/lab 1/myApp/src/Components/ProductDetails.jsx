import React from "react";
import productData from '../data/ProductData'
let ProductDetails = (props) => {
  
        console.log(props);
        let DetailesPro = (index, object) => {
            console.log(object);
          productData
        };
    return (
    <div>
      <p>{props.}</p>
    </div>
    )

}

export default ProductDetails;