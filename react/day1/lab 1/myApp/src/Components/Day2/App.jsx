import React from "react";
import Add from "../Day2/Add";
import List from '../Day2/List'


let App = (props) =>{
    let StdArray = [
        { id: 1, Name: "blue", price: 45, quantity: 80, productImage: "1.png", productDescription: "short and tall products" },
        { id: 2, Name: "green", price: 45, quantity: 80, productImage: "2.png", productDescription: "short and tall products" },
    ]
   let ListStyle ={
        backgroundColor:'green',
        color:'blue'
    }
    
    let HandleAdding=()=>{
        alert("Hi Adding Component");
        
        let idValue= document.getElementById("txtID").value;
        let NameValue= document.getElementById("txtName").value;
        let newObject={
            id:idValue,
            Name:NameValue
        }
        StdArray.push(newObject)
        
        let newListItem = `<li>${newObject.Name}</li>`
        
        document.getElementById("List").innerHTML +=newListItem
        
    }
    return (
        <>
        <div>
        Day 2
        </div>
        <List refForArray={StdArray} refForStyle={ListStyle} Att3={props.AppAtt}/>
        <Add refForArray={StdArray} RefForAdding={HandleAdding} />
        
        </>
    )

}

export default App;