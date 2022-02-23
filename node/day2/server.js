
const express = require('express');
const morgan = require('morgan')
const cors = require('cors')
const body_parser=require("body-parser");
const { request } = require('express');

// const AuthenticationRouter = require('./Controllers')
const app = express();
app.use(body_parser.json());
app.use(body_parser.urlencoded({extended:false}));


app.use(morgan('tiny'));
app.use(morgan(':url :method'))
app.use(cors())




///first middlewares

// app.get("/", (req, res) => {
//     res.send("Welcome to bezkoder application." );
//   });

app.use('/', require('./routers/AuthenticationRouter'))
app.use('/d', (request,response)=>{

response.send("hello")
})


app.use((request, response, next) => {
    console.log(request.method, request.url)
    next()
})


app.use((request, response, next) => {

    if (true) {
        console.log('authorized')

        next()
    }else {
        console.log('Not authorized')
    }

})


// app.use("/Authentication",departmentRouter)


// // const port = 8080

app.listen(process.env.PORT || 8080, () => {

    console.log("I am listening ..... ")
})


app.use((request,response)=>{
    response.status(404).json({data:"Not Fond"});
})

app.use((error,request,response,next)=>{   //JS  code function.length
    let status=error.status||500;
    response.status(status).json({Error:error+""});
})

// const express = require('express');
// const logger = require('morgan');
// const port = 8080;
  
// const app = express();
// app.use(logger('tiny'));
  
// app.get('/', (req, res) => {
//   res.send('<h1>Front Page</h1>');
// });
  
// app.listen(port, () => {
//   console.log(`Started at ${port}`);
// });