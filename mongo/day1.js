db.getCollection('instructors').find({})


// db.instructors.find({courses:{$exists:true},firstName:{$exists:true}},{firstName:1,courses:1})
//                 .forEach((doc) => {
//                          
//                           print(` ${doc.firstName}: ${doc.courses.length }`)
//        
//                 })


// db.instructors.find({firstName:{$exists:true},lastName:{$exists:true}},{firstName:1,lastName:1,age:1}).sort({firstName:1,lastName:-1})
//                 .forEach((doc) => {
//                          
//                           print(` FullName: ${doc.firstName} ${doc.lastName } , ${doc.age}`)
//        
//                 })


                
                
                
                
                
                
