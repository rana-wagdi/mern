import React, { useEffect, useState } from "react";
// import React, { useEffect, useState } from "react";
// import { Formik, Form } from 'formik';
// import { TextField } from './TextField';
// import * as Yup from 'yup';

function Register() {
    // const initialValues = { username: "", email: "", password: "" };
    // const [formValues, setFormValues] = useState(initialValues);
    // const [formErrors, setFormErrors] = useState({});
    // const [isSubmit, setIsSubmit] = useState(false);

    // const handleChange = (e) => {
    //   const { name, value } = e.target;
    //   setFormValues({ ...formValues,
    //   [name]: value });
    // };

    // const handleSubmit = (e) => {
    //   e.preventDefault();
    //   setFormErrors(validate(formValues));
    //   setIsSubmit(true);
    // };

    // useEffect(() => {
    //   console.log(formErrors);
    //   if (Object.keys(formErrors).length === 0 && isSubmit) {
    //     console.log(formValues);
    //   }
    // }, [formErrors]);
    // const validate = (values) => {
    //   const errors = {};
    //   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    //   if (!values.username) {
    //     errors.username = "Username is required!";
    //   }else if (!regex.test(values.username)) {
    //     errors.username = "This is not a valid email format!";
    //   }
    //   if (!values.email) {
    //     errors.email = "Email is required!";
    //   } else if (!regex.test(values.email)) {
    //     errors.email = "This is Not valid ";
    //   }
    //   if (!values.password) {
    //     errors.password = "Password is required";
    //   } else if (values.password.length < 4) {
    //     errors.password = "Password must be more than 4 characters";
    //   } else if (values.password.length > 10) {
    //     errors.password = "Password cannot exceed more than 10 characters";
    //   }
    //   return errors;
    // };

    // return (
    //   <div className="container">
    //     {Object.keys(formErrors).length === 0 && isSubmit ? (
    //       <div className="ui message success">Signed in successfully</div>
    //     ) : (
    //       <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
    //     )}

    //     <form onSubmit={handleSubmit}>
    //       <h1>Login Form</h1>
    //       <div className="ui divider"></div>
    //       <div className="ui form">
    //         <div className="field">
    //           <label>Username</label>
    //           <input
    //             type="text"
    //             name="username"
    //             placeholder="Username"
    //             value={formValues.username}
    //             onChange={handleChange}
    //           />
    //         </div>
    //         <p>{formErrors.username}</p>
    //         <div className="field">
    //           <label>Email</label>
    //           <input
    //             type="text"
    //             name="email"
    //             placeholder="Email"
    //             value={formValues.email}
    //             onChange={handleChange}
    //           />
    //         </div>
    //         <p>{formErrors.email}</p>
    //         <div className="field">
    //           <label>Password</label>
    //           <input
    //             type="password"
    //             name="password"
    //             placeholder="Password"
    //             value={formValues.password}
    //             onChange={handleChange}
    //           />
    //         </div>
    //         <p>{formErrors.password}</p>
    //         <button className="fluid ui button blue">Submit</button>
    //       </div>
    //     </form>
    //   </div>
    // );
    const [passwordShown, setPasswordShown] = useState(false);

    const togglePassword = () => {
        // When the handler is invoked
        // inverse the boolean state of passwordShown
        setPasswordShown(!passwordShown);
    };
    const [userForm, setUserForm] = useState({
        userName:"",
        name: "",
        email: "",
        password: "",
        confirmPassword:""
    })
    const [userFormERR, setUserFormERR] = useState({
        userNameERR:"",
        nameErr: "",
        emailERR: "",
        passwordERR: "",
        confirmPasswordERR:""
    })
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const regexx = /\s/i;
    const regPass=  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

    const handleForm = (event) => {
        console.log(event.target.id, event.target.value)
        if (event.target.id === 'userName') {
            setUserForm({
                ...userForm,
                userName: event.target.value,
            })
            setUserFormERR({
                ...userFormERR,
                // emailERR: event.target.value.length === 0 ?"This feild is required":null
                userNameERR: event.target.value.length === 0 ? "This feild is required" :null


            })
        }
        if (event.target.id === 'name') {
            setUserForm({
                ...userForm,
                name: event.target.value,
            })
            setUserFormERR({
                ...userFormERR,
                // emailERR: event.target.value.length === 0 ?"This feild is required":null
                nameErr: event.target.value.length === 0 ? "This feild is required" : regexx.test(event.target.value) ? "This is Not valid" : null


            })
        }
        if (event.target.id === 'email') {
            setUserForm({
                ...userForm,
                email: event.target.value,
            })
            setUserFormERR({
                ...userFormERR,
                // emailERR: event.target.value.length === 0 ?"This feild is required":null
                emailERR: event.target.value.length === 0 ? "This feild is required" :!regex.test(event.target.value) ? "This is Not valid" : null


            })
        } else if (event.target.id === 'password') {
            setUserForm({
                ...userForm,
                password: event.target.value,
            })
            setUserFormERR({
                ...userFormERR,
                // passwordERR: event.target.value.length < 8 ? "This feild should be more than 8 charchters" : null
                passwordERR: event.target.value.length === 0 ? "This feild is required" :!regPass.test(event.target.value) ? "This is Not valid" : null

            })
        }
        else if (event.target.id === 'confirmPassword') {
            setUserForm({
                ...userForm,
                confirmPassword: event.target.value,
            })
            
    
        }
        
        // if( userForm.password !== userForm.confirmPassword){
        //     setUserFormERR({
        //         ...userFormERR,
        //         // passwordERR: event.target.value.length < 8 ? "This feild should be more than 8 charchters" : null
        //         confirmPasswordERR:"This feild is required"
    
        //     })
        
        // }
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
                <label htmlFor="userName" className="form-label">
                    Name
                </label>
                <input
                    type="text"
                    className={` ${userFormERR.userNameERR? "border-danger" : ""
                        }`}
                    id="userName"
                    aria-describedby="usernameHelp"
                    onChange={handleForm}
                />
                <div id="usernameHelp" className="form-text text-danger">
                    {userFormERR.userNameERR}
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">
                    userName
                </label>
                <input
                    type="text"
                    className={` ${userFormERR.nameErr ? "border-danger" : ""
                        }`}
                    id="name"
                    aria-describedby="usernameHelp"
                    onChange={handleForm}
                />
                <div id="usernameHelp" className="form-text text-danger">
                    {userFormERR.nameErr}
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">
                    Email
                </label>
                <input
                    type="email"
                    className={` ${userFormERR.emailERR ? "border-danger" : ""
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


                <input type={passwordShown ? "text" : "password"} id="password" onChange={handleForm} className={`${userFormERR.passwordERR ? "border-danger" : ""
                    }`} />
                <button onClick={togglePassword}>Show Password</button>
                <div id="ageHelp" className="form-text text-danger">
                    {userFormERR.passwordERR}
                </div>
            </div>
            
            
            <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label">
                  confirm  Password
                </label>


                <input type={passwordShown ? "text" : "password"} id="confirmPassword" onChange={handleForm} className={`${userFormERR.passwordERR ? "border-danger" : ""
                    }`} />
                <button onClick={togglePassword}>Show Password</button>
                <div id="ageHelp" className="form-text text-danger">
                    {userFormERR.confirmPasswordERR}
                </div>
            </div>

            <button type="submit" className="btn btn-primary">
                Login
            </button>
        </form>
    )
}

export default Register