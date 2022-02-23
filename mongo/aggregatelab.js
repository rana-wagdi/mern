db.product.aggregate([
{$match:{$or:[{brand_name:"Blue Label"},{brand_name:"King"},{brand_name:"Washington"}]}}
,{$group:{_id:{BrandName:"$brand_name", productName:"$product_name"}}}
,{$project:{_id:0, BrandName:"$_id.BrandName", productName:"$_id.productName"}}
,{$sort: {BrandName:1,productName:1}}
])