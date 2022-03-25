import React, { Component } from "react";
import AddClass from "./AddAsClass";
import ListClass from "./ListClass";


export default class AppClass extends Component {
    constructor() {
        super();
        this.state={
            StdArray:[
                { id: 1, Name: "blue", price: 45, quantity: 80, productImage: "1.png", productDescription: "short and tall products" },
                { id: 2, Name: "green", price: 45, quantity: 80, productImage: "2.png", productDescription: "short and tall products" },
            ]
        }
        // this.HandlingAdd=this.HandlingAdd.bind(this)
    }
    
    HandlingAdd=()=>{
    console.log(this)
        let StdArray = this.state.StdArray
    }
    render() {
    console.log(this)
        return (
        <>
            <div> App As A Class Component</div>
            <ListClass ListArrayRef={this.state.StdArray}/>
            {/* <button onClick={this.HandlingAdd}>calling Handler </button> */}
            <AddClass refAddHandler={this.HandlingAdd}/>
            </>
        )
        
    }

}
