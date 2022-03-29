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
    const [userFormERR, setUserFormERR] = useState({
        emailERR: "",
        passwordERR: ""
    })
    
    const handleForm =(event)=>{
        console.log(event.target.id, event.target.value)
        if(event.target.id ==='email'){
            setUserForm({
                ...userForm,
                email: event.target.value,
            }) 
            setUserFormERR({
                    ...userFormERR,
                    emailERR: event.target.value.length === 0 ?"This feild is required":null
                    
            })
    } else if(event.target.id ==='password'){
        setUserForm({
            ...userForm,
            password: event.target.value,
        }) 
        setUserFormERR({
            ...userFormERR,
            passwordERR: event.target.value.length <8 ?"This feild should be more than 8 charchters":null
            
    })
} 

    }
    const handleSubmitForm = (e) => {
        e.preventDefault()
        if (
            !userFormERR.emailERR &&
            !userFormERR.passwordERR
            
          ) {
            console.log(userForm);
          }
    }
    return (
        <form onSubmit={handleSubmitForm}>
            <div className="mb-3">
                <label htmlFor="username" className="form-label">
                    Username
                </label>
                <input
                    type="email"
                    className={` ${
            userFormERR.emailERR ? "border-danger" : ""
          }`}
                    id="email"
                    aria-describedby="usernameHelp"
                    onChange={handleForm}
                />
                <div id="usernameHelp" className="form-text text-danger">
                        {userFormERR.emailERR}
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">
                    Password
                </label>

                    
                <input type={passwordShown ? "text" : "password"} id="password" onChange={handleForm} className={`${
            userFormERR.passwordERR ? "border-danger" : ""
          }`} />
                <button onClick={togglePassword}>Show Password</button>
                <div id="ageHelp" className="form-text text-danger">
                    {userFormERR.passwordERR}
                </div>
            </div>

            <button type="submit" className="btn btn-primary">
               Login
            </button>
        </form>
    )
}

export default Login