const name="adarsh"+"gaurav"   // concatenation
console.log(name)
const repocount=10

console.log(name.length);

//modern syntax
console.log('Hello my name is ${name} and my repo count is ${repocount} ');


// other syntax

const myNewName= new String('adarsh');

// string is an object not an array

console.log(myNewName[0])

console.log(myNewName.__proto_);

console.log(myNewName.toUpperCase());
console.log(myNewName.charAt(3));

console.log(myNewName.indexOf('s'));


// breaking or sanitising strings

console.log(myNewName.substring(0,3));


const anotherString= myNewName.slice(-2,2);
console.log(anotherString);





// various other functions

