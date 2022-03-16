// BDD: behaviour test driven

//1- arrange

let c = new Calculator

//acting

let actual = c.Add(2,3)
let expected =5

//assert :make sure btakked en el function bta3tna sha8la mazbot
if(expected == actual)
console.log("%c Success", 'background-color:green;color:white')
else
console.log("%c Fail", 'background-color:red;color:white')
