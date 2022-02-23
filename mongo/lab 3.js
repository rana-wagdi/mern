db.getCollection('employee').find({})





// let department = db.department.find({},{department_description:1}).toArray()

// db.employee.find({},{full_name:1, department_id:1})
// 
// 
//                 .forEach((doc)=>{
//                     
//                          
//     let departmentname =    db.department.findOne({department_id:doc.department_id}).department_description
//                     
//                     print(` ${doc.full_name} ${departmentname}  `)
//                     
//                 })
//  
// 

// db.employee.find({full_name:{$exists:true},salary:{$exists:true}},{full_name:1, position_id:1, salary:1})
// 
// 
//                 .forEach((doc)=>{
//                     
//                          
//     let departmentposition =    db.position.findOne({position_id:doc.position_id})
//     
//     if( departmentposition.position_title = "VP Country Manager"){
//         
//                     
//                     print(` ${doc.full_name} ${doc.salary} ${departmentposition.position_title}  `)
//                 }
//                     
//                 })
////////////////////////////////////////////////////////////
// 

// db.employee.find({},{full_name:1, employee_id:1})
// 
// 
//                 .forEach((doc)=>{
//                     
//                          
//     let departmentproduct =    db.product.findOne({product_id:doc.employee_id})
//     
//     if( departmentproduct.brand_name = "Washington"){
//         
//                     
//                     print(` ${doc.full_name} ${departmentproduct.brand_name}  `)
//                 }
// //                     
//                 })


// db.employee.find({},{full_name:1, employee_id:1})
// 
// 
//                 .forEach((doc)=>{
//                     
//                          
//     let departmentregion =    db.region.findOne({region_id:doc.employee_id}).sales_region
//     
// 
//                     
//                     print(` ${doc.full_name} regin: ${departmentregion} `)
//                 
//              })
                
                /////////////////////////////////////////////////////////////////////////////
                
 db.customer.find({},{fullname:1, "address.customer_region_id":1})


                .forEach((doc)=>{                 
    let customerregion = db.region.findOne({region_id:doc.address.customer_region_id})
                    print(` ${doc.fullname} region: ${customerregion.sales_region}`)
             })
             
             
             
                ////////////////////////////////////////////////////////////
             
             
             
             
    
                
                
                
















