import React from "react";

let List = (Attributes)=>{
console.log(Attributes)
    return (
    <>
    <ol id="List">
    {
        Attributes.refForArray.map(item =>{
        return(
            <li>{item.Name}</li>
        )
        
        })
    }
    </ol>
    </>
    )

}
export default List;