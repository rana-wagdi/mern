import React, { useEffect, useState } from "react";
// import React, { useEffect, useState } from "react";


function Login() {
    const [passwordShown, setPasswordShown] = useState(false);

    const togglePassword = () => {
        // When the handler is invoked
        // inverse the boolean state of passwordShown
        setPasswordShown(!passwordShown);
    };
    const [userForm, setUserForm] = useState({
        email: "",
        password: ""
    })
    
    const handleForm =(event)=>{
        console.log(event.target.id, event.target.value)
        if(event.target.id ==='email'){
            setUserForm({
                ...userForm,
                email: event.target.value,
            }) 
    } else if(event.target.id ==='password'){
        setUserForm({
            ...userForm,
            password: event.target.value,
        }) 
} 

    }
    const handleSubmitForm = (e) => {
        e.preventDefault()
        console.log(handleSubmitForm)
    }
    return (
        <form onSubmit={handleSubmitForm}>
            <div className="mb-3">
                <label htmlFor="username" className="form-label">
                    Username
                </label>
                <input
                    type="email"

                    id="email"
                    aria-describedby="usernameHelp"
                    onChange={handleForm}
                />
                <div id="usernameHelp" className="form-text text-danger">

                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">
                    Password
                </label>

                    
                <input type={passwordShown ? "text" : "password"} id="password" onChange={handleForm}  />
                <button onClick={togglePassword}>Show Password</button>
                <div id="ageHelp" className="form-text text-danger">

                </div>
            </div>

            <button type="submit" className="btn btn-primary">
                Submit
            </button>
        </form>
    )
}

export default Login