import React from 'react';
import Products from './Components/Products'

let App = () => {
    
    let ProductArray= [
    {id:1,Name:"blue",price:45,quantity:80,productImage:"1.png", productDescription:"short and tall products"},
    {id:2,Name:"blue",price:45,quantity:80,productImage:"2.png", productDescription:"short and tall products"},
    {id:8,Name:"blue",price:45,quantity:80,productImage:"3.png", productDescription:"short and tall products"},
    {id:4,Name:"blue",price:45,quantity:80,productImage:"4.png", productDescription:"short and tall products"},
    {id:5,Name:"blue",price:45,quantity:80,productImage:"1.png", productDescription:"short and tall products"},
    {id:6,Name:"blue",price:45,quantity:80,productImage:"2.png", productDescription:"short and tall products"},
    {id:7,Name:"blue",price:45,quantity:80,productImage:"3.png", productDescription:"short and tall products"},

    
    ]
    

    return (
        <div>
            <Products productList = {ProductArray} />
        </div>

    )
}

export default App;

