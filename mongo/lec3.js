// db.getCollection('students').find({"addresses.city":"alex"}, {"addresses.city":1})

// db.getCollection('students').find({})


// db.students.find({},{department:1, firstName:1, lastName:1})
// 
//     .forEach((doc)=>{
//         
//         
//     let departmentname =    db.departments.findOne({_id:doc.department}).name 
//             
//         print(`${doc.firstName} ${departmentname} `)
//     
//     
//     })


// let departments = db.departments.find({},{name:1}).toArray()

db.students.find({},{department:1, firstName:1,_id:1})


                .forEach((doc)=>{
                    
                    departmentName = departments.find((obj)=>{
                        return obj._id == doc.department
                        
                    })
                    
                    
                    print(` ${doc.firstName} ${departmentName.name}  `)
                    
                })
 



















