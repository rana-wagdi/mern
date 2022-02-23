db.instructors.find()
db.instructors.find({firstName:"mazen"})
// db.instructors.find({salary:{$gt:400}})
// db.instructors.find({salary:{$gt:400}},{firstName:1, salary:1})
// db.instructors.find({age:{$gt:20,$lt:25}})
db.instructors.find({"address.city":"mansoura",$or:[{"address.street":10},{"address.street":14}]},{firstName:1,address:1,salary:1})

















