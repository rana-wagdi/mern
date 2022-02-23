// db.getCollection('instructors').find({})

db.instructors.aggregate([

{$match: {age:{$gt:20}}}
,{$group:{_id:"$age", total:{$sum:1}}}



])