// db.instructors.find()
db.instructors.updateOne(
        //condition
        {
            firstName:"Ra",
//             salary: {$type:"number"}
//             courses:"ESNext"
            
        }
        ,
        //update
        {
//             $set:{lastName:"wagdi", age:40, gender:"F"}
//             unset
//             $unset:{lastName:"wagdi"}
//             renam
//             $rename: {"address":"fullAddress"}
//             inc or dec salary
//             $inc:{salary:700}
            
            ///embeded object --> address
//             $set:{"address.city":"Alex"}
//             unset el object kolo
//             $unset:{"address":"Alex"}
//           $set:{"courses.0":"ESNext"},
//              $unset:{"es6":"t"}
//             $set:{"courses.$":"es6"}
            
//             $push:{"courses":"GraphQl"}
//             $addToSet:{courses:"GraphQl"}// 34shan mnkrrhash
            
          
            // to push more than one/////
//               $push:{"courses":{$each:["x","y"]}}
                    //controll position
//                     $push:{"courses":{$each:["z","k"], $position:1}}

//                     $pop:{courses:1}//awel el array
//                     $pop:{courses:-1}//a5er el array
                            
//                        $pull:{courses:"k"}// beshell element

                           
            
        }
        ,
        //options
        {
            upsert:true   //low msh mogod yd5ol 3ady
            }



)
        















