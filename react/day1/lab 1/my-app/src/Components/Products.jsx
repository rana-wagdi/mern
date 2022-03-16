import React from "react";
// import Adding from "./AddStd";

let Products = (props) => {
    console.log(props);

    let TablRef = React.createRef();

    // eslint-disable-next-line no-undef
    let ShowDetail = (index, object) => {
        // console.log(TablRef);
        // console.log(object)
        // console.log(index)

    };
   

    return (
        <>
            <table class="table table" ref={TablRef} >
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
                    {props.productList.map((pro, index) => {
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
                                    <i class="fa-solid fa-trash"></i>
                                </td>
                                <td>
                                    <button TblRef={TablRef} onClick={() => ShowDetail(index, pro)} className="btn btn-secondary">Details</button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
                {/* <input type="button" value="AddnewStd" className="btn btn-primary" onClick={ShowAddForm} /> */}
            </table>

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