  db.workers.runCommand("collMod",{
  
  validator:{
         $jsonSchema:{
             bsonType:"object",
            
             additionalProperties:false,
              required:[ "firstName", "lastName","salary","age"],
             
             //optional
             properties:{
                 _id:{},
                 firstName:{bsonType:"string"},
                  lastName:{bsonType:"string"},
                 age:{bsonType:"number",maximum:45, minimum:25},
                 salary:{bsonType:"number",minimum:3500},
                 address:{
                     bsonType:"object",
                     additionalProperties:false, 
                     properties:{
                         city:{enum:["mansoura", "cairo", "alex"]},
                         building:{bsonType:"number"}
                     }
                 
                 },
                 courses:{
                     bsonType:["array"],
//                      required:[uniqueItems],
                       items: {
                        type: "string"
                            },
                       uniqueItems: true,
                       minItems: 1,
                       
                     
                 }
                 
             }//properties
             
         }//jsonSchema
    }//validator
    
    
    
    
})