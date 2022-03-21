import React, { Component } from "react";


export default class ListClass extends Component {

    render() {
        console.log("List", this)
        let AllListItem = this.props.ListArrayRef.map((item,index) => {
            return <li key={index}>{item.Name}</li>
        })
        return (
            <>
                <div> List As A Class Component</div>
                <ol>{AllListItem}</ol>
            </>
        )
    }

}