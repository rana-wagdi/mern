db.employees.runCommand("collMod",{
    
    validator:{
         $jsonSchema:{
             bsonType:"object",
             required:["firstName"],
             additionalProperties:false,
             
             //optional
             properties:{
                 _id:{},
                 firstName:{bsonType:"string"},
                 age:{bsonType:"number",maximum:50, minimum:20},
                 address:{
                     bsonType:"object",
                     additionalProperties:false, 
                     properties:{
                         city:{enum:["mansoura", "cairo", "alex"]},
                         building:{bsonType:"number"}
                     }
                 }
                 
             }//properties
             
         }//jsonSchema
    }//validator
    
    
    
    
})









