import React from "react";
import productData from '../data/ProductData'

let Add = (props) => {

    let IdRef = React.createRef();
    let NameRef = React.createRef();
    let PriceRef = React.createRef();
    let QuantityRef = React.createRef()
    let save = () => {

        let newproduct = {
            // id: IdRef.current.value,
            Name: NameRef.current.value,
            price: PriceRef.current.value,
            quantity:QuantityRef.current.value

            // quantity:QuantityRef.current.value

        };
 
    //append table
  
  
    //push object inside array
    productData.push(newproduct);
    console.log(props.studentArray);
  };
    
    return (
        <div>

            <input name="name" ref={NameRef} type="text" />
            <input name="price" ref={PriceRef} />
            {/* <input name="price" ref={PriceRef} />
            <input name="price" ref={PriceRef} /> */}
            <input name="quantity" ref={QuantityRef} />
            <button onClick={save}>Save</button>
        </div>

    )

}

export default Add;