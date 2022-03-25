import React, { Component } from "react";


export default class AddClass extends Component {

    render() {

        return (
            <>
                <div> Add As A Class Component</div>
                <button onClick={this.props.refAddHandler}>Fire AddHandler</button>
            </>
        )
    }

}
