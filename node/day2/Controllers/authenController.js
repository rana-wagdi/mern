// const {validationResult}=require("express-validator");

// exports.getAlldepartments=(request,response)=>{
//     response.status(200).json([{data:"List of departments"}])
// }

// exports.createDepartment=(request,response,next)=>{
//      let errors=   validationResult(request);
//      if(!errors.isEmpty())
//      {
//             let error=new Error();
//             error.status=422;
//             //Result bject--> embeded array()  --> errors array property 
//             error.message=errors.array().reduce((current,object)=>current+object.msg+" ","")
//             // for() ///intialization current=""
//             // {
//             //     current+object.msg
//             // }
//             throw error;
          
//      }
     
     

//     response.status(201).json({data:"added",BODY:request.body})

// }

// exports.updateDepartment=(request,response)=>{
//     response.status(200).json({data:"updated"})

// }

// exports.deleteDepartment=(request,response)=>{
// //query string --> request.query
// // response.status(200).json({data:"deleted",id:request.query})

// //URL parameres      
// // response.status(200).json({data:"deleted",id:request.params})

// }



const getRegisterView = (req, res) => {

    res.send("register")
}

const getLoginView = (req, res) => {

    res.send("login")
}

const createDepartment=(request,response,next)=>{
    let errors=   validationResult(request);
    if(!errors.isEmpty())
    {
           let error=new Error();
           error.status=422;
           //Result bject--> embeded array()  --> errors array property 
           error.message=errors.array().reduce((current,object)=>current+object.msg+" ","")
           // for() ///intialization current=""
           // {
           //     current+object.msg
           // }
           throw error;
         
    }
    
    

   response.status(201).json({data:"added",BODY:request.body})

}

module.exports =  {
    getRegisterView,
    getLoginView,
    createDepartment
};