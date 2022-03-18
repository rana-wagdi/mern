import React from "react";
import productData from '../data/ProductData'
import Add from "./Day2/Add";

// import Adding from "./AddStd";

// import Header from './Header'
let Products = (props) => {
    console.log(props);
    let DeletePro = (index, object) => {
        console.log(object);
      productData.splice(index, 1);
    };
    

    let TablRef = React.createRef();



    let ShowDetail = (index, object) => {
        console.log(object);
        document.getElementById("p1").innerHTML = `${object.Name} <br> ${object.price} <br> ${object.quantity} <br> ${object.productImage} <br> ${object.productDescription}`
    };


    return (
        <>

            <table class="table table" ref={TablRef}  >
                <thead>
                    <tr>
                        <th scope="col">Serial</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Product image</th>
                        <th scope="col">product description</th>
                        <th scope="col">Delete</th>
                        <th scope="col">Operations</th>
                    </tr>
                </thead>
                <tbody>
                
                    {productData.map((pro, index) => {
                        console.log(index)
                        return (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{pro.Name}</td>
                                <td>{pro.price}</td>
                                <td>{pro.quantity}</td>
                                <td>
                                
                                
                                
                              <img
                                        src={`images/${pro.productImage}`}
                                        style={{
                                            width: "200px",
                                            height: "150px",
                                        }} />
                                </td>
                                <td>{pro.productDescription}</td>
                                <td>
                                    <i class="fa-solid fa-trash" style={{
                                        cursor: "pointer",
                                    }} onClick={() => DeletePro(index, pro)}></i>
                                </td>
                                <td>
                                    <button TblRef={TablRef} onClick={() => ShowDetail(index, pro)} className="btn btn-secondary">Details</button>
                                    {/* <button TblRef={TablRef} onClick={() => ShowDetail(index, pro)} className="btn btn-success ">Add</button> */}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
                {/* <input type="button" value="AddnewS
                td" className="btn btn-primary" onClick={ShowAddForm} /> */}
            </table>
<Add/>

<div id="p1"></div>
            {/* //calling bta3 details we a5fiha */}
            {/* <div ref={AddRef}
        style={{
          display: "none",
        }}
      >
        <Adding TblRef={TablRef} AddRef={AddRef}  studentArray={props.Students}/>
      </div> */}
        </>
    );
};
export default Products;