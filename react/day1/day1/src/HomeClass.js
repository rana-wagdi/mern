import React from "react";
import Userdata from "./userdata";

class HomeClass extends React.Component {
    constructor() {
        //should call super
        console.log("constructor")
        super()
        this.state = {
            name: "Rana",
            position: "FrontEnd developer"
        }
    }
    componentDidMount() {
        console.log("DID MOUNT")
    }
    componentDidUpdate() {
        console.log("update")
    }
    componentWillUnmount() {
        console.log("Destory")///b dosrtoy 
    }

    changeUserName = (name) => {
        console.log("test ClIck")
        this.setState({
            name,
        })
    }
    render() {
        console.log("Render")
        return (
            <>
                <h1>Hello from class Component</h1>

                <p>Username: {this.state.name}</p>
                <p>Position: {this.state.position}</p>

                <button onClick={() => this.changeUserName("Karim")}>Chane username</button>
                <hr>
                </hr>
                <Userdata 
                // username={this.state.name} 
                // position={this.state.position}
                user={this.state}
                />
            </>
        )
    }



}

export default HomeClass;

