import React from "react";
import Add from "../Add";
import List from './List'


let App = () =>{
    let StdArray = [
        { id: 1, Name: "blue", price: 45, quantity: 80, productImage: "1.png", productDescription: "short and tall products" },
        { id: 2, Name: "blue", price: 45, quantity: 80, productImage: "2.png", productDescription: "short and tall products" },
    ]
    return (
        <>
        <div>
        Day 2
        </div>
        <List refForArray={StdArray} />
        <Add refForArray={StdArray}/>
        </>
    )

}

export default App;