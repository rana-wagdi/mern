import React, { useEffect, useState } from "react";
// import React, { useEffect, useState } from "react";


function AddUser() {

    const [userForm, setUserForm]=useState({
        username:"Rana",
        age:""
    })
    
    const handleFormChange = (event) =>{
        console.log(event.target.id, event.target.value)
        if(event.target.id ==='username'){
            setUserForm({
                ...userForm,
                username: event.target.value,
            })
        }else if(event.target.id ==='age'){
            setUserForm({
                ...userForm,
                age: event.target.value,
            })
        }
    }
    
    const handleSubmitForm =(e)=>{
        
        e.preventDefault()
        console.log(userForm)
    }
    return (
        <form onSubmit={handleSubmitForm} >
            <div className="mb-3">
                <label htmlFor="username" className="form-label">
                    Username
                </label>
                <input
                    type="text"

                    id="username"
                    aria-describedby="usernameHelp"
                    value={userForm.username}
                    onChange={handleFormChange}
                />
                <div id="usernameHelp" className="form-text text-danger">

                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="age" className="form-label">
                    Age
                </label>
                <input
                    type="number"
                    className="form-control"
                    id="age"
                    aria-describedby="ageHelp"
                    value={userForm.age}
                    onChange={handleFormChange}
                />
                <div id="ageHelp" className="form-text text-danger">

                </div>
            </div>

            <button type="submit" className="btn btn-primary">
                Submit
            </button>
        </form>
    )
}

export default AddUser;