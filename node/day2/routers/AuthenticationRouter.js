// // app.post("/register", (req, res) => {
// //     // our register logic goes here...
// //     });
    
// //     // Login
// //     app.post("/login", (req, res) => {
// //     // our login logic goes here
// //     });
    
//     app.post("/login", async (req, res) => {

//         // Our login logic starts here
//           // Get user input
//           const {username, password} = req.body;
//           // Validate user input
//           if (!(username && password)) {
//             res.status(400).send("All input is required");
//           }
          
//         })

const express = require('express');
const {getRegisterView, getLoginView, createDepartment} = require('../Controllers/authenController');
// const {body,query,param}=require("express-validator")
const router = express.Router();
const body_parser=require("body-parser");
const { check, validationResult } = require('express-validator');
// const { response, request } = require('express');


router.get('/register', getRegisterView);
router.get('/login', getLoginView);






router.get("/add",(request, response)=>{
	let username = req.body.username;
	let password = req.body.password;
	var post = req.body;
  if (post === username && post === password) {
    response.redirect('/')
  }else{
  response.redirect('/')
  }
  
})

router.post('/regist', [
    check('name').notEmpty().isAlpha().withMessage('Name is required'),
    check('email').notEmpty().withMessage('Email is required'),
    check('password').notEmpty().isInt().withMessage('Password is required'),
], (req, res)=> {

			res.redirect('/login')
})



  // console.log(request.body);

// response.status(200).json({data:"added"})
	// // Capture the input fields
	// let username = request.body.username;
	// let password = request.body.password;
	// // Ensure the input fields exists and are not empty
	// if (username && password) {
	// 	// Execute SQL query that'll select the account from the database based on the specified username and password
	// 	connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
	// 		// If there is an issue with the query, output the error
	// 		if (error) throw error;
	// 		// If the account exists
	// 		if (results.length > 0) {
	// 			// Authenticate the user
	// 			request.session.loggedin = true;
	// 			request.session.username = username;
	// 			// Redirect to home page
	// 			response.redirect('/');
	// 		} else {
	// 			response.send('Incorrect Username and/or Password!');
	// 		}			
	// 		response.end();
	// 	});
	// } else {
	// 	response.send('Please enter Username and Password!');
	// 	response.end();
	// }
// });
module.exports = router;