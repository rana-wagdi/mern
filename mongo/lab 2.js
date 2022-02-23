// db.instructors.find()

// 1-Delete instructor with firstname “ebtesam” and has only 5courses in courses array

// db.instructors.deleteMany({firstName:"ebtesam"}, {courses:{$size:5}})


/////////////////////////
// 2-Add active property to all instructors and set its value to true.

// db.instructors.updateMany(
//             //update
//             {},
//             {
//                 $set:{"active":true}
//             },
//             {
//                  upsert:true 
//             }
// 
// )
//////////////////////////////////////////
// 3-Change “EF” course to “jquery” for “mazen mohammed” instructor (without knowingEF Index)
// db.instructors.updateOne(
//             //update
//             {
//                 firstName: "mazen",
//                 lastName: "mohammed",
//                 courses:"EF"
//                 
//                 },
//             {
//                  $set:{"courses.$":"jquery"}
//             },
//             {
//                  upsert:true 
//             }
// 
// )

// 4-Add jquery course for “noha hesham”.

// db.instructors.updateOne(
//             //update
//             {
//                 firstName: "noha",
//                 lastName: "hesham",
//                 
//                 },
//             {
//                  $push:{"courses":"jquery"}
//             },
//             {
//                  upsert:true 
//             }
// 
// )

// 5-Remove courses property for “ahmed mohammed ” instructor


// db.instructors.updateOne(
//             //update
//             {
//                 firstName: "ahmed",
//                 lastName: "mohammed",
//                 
//                 },
//             {
//                  $unset:{courses:1}
//             },
//             {
//                  upsert:true 
//             }
// 
// )
// 
// 6-Decrease salary by 500 for all instructors that has only 3 courses in their list ($inc)
// db.instructors.updateMany(
//             //update
//             {
//                 courses:{$size:3}
//                 },
//             {
//                 $inc:{salary:500}
//             },
//             {
//                  upsert:true 
//             }
// 
// )

// 7-Rename address fieldfor all instructors to fullAddress.

// db.instructors.updateMany(
//             //update
//             {},
//             {
//                 $rename: {"address":"fullAddress"}
//             },
//             {
//                  
//             }
// 
// )

// 8-Change street number for noha hesham to 20


db.instructors.updateOne(
            //update
            {
                firstName: "noha",
                lastName: "hesham",
                
                },
            {
                 $set:{"fullAddress.street":20}
            },
            {
                 upsert:true 
            }

)





