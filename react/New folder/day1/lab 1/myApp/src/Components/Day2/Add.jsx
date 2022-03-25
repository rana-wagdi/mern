import React from "react";

let Add = (props) => {
    let ListItem = document.getElementById("List")
    console.log(ListItem)
    console.log(props)

    let CustomHandlerAdding = () => {
            let newObject = {
                    id:document.getElementById("txtID").value,
                    Name:document.getElementById("txtName").value,
            }
            props.RefForAdding(newObject)
    }
    return (

        <div>
            ID  <input type="text" id="txtID" />
            Name  <input type="text" id="txtName" />
            {/* <input type="button" value="Saving Add" onClick={props.RefForAdding} /> */}
            <input type="button" value="Saving Add" onClick={props.CustomHandlerAdding} />
            {/* <input type="button" value="test Add" onClick={props.RefForAdding} /> */}
        </div>
    )
}
export default Add;