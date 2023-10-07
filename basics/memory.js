// primitive and non primitive  data types

// memeory
// stack ->primitive  ->copy milta hai oroginal me change nhi hota
// heap  -> non primitive  ->reference pass hota hai , actual me changes hote hai
 
let myNmae="adarsh-gauarv"
// this will stored in stack

let myotherNmae=myNmae
myotherNmae="gaurav-adarsh"
console.log(myNmae);
console.log(myotherNmae);
// this shows pass by copy ->original value doesnt changed


let user={
    id:1,
    name:"adarsh",
    age:12

}
let user2=user
user2.age=38
console.log(user)
console.log(user2)

// here the original value is changed as pass by refrence hota hai
