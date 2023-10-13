// const mynum=[1,2,3,4,5,6,7,8,9,10]

// const newnums=mynum.map((num)=>  num+10)

// console.log(newnums);



// chaining method (map k andar maps or filters)

// const newnums=mynum.map((num)=> num*10).map((num)=> num+1).filter((num) => num>=40);
// console.log(newnums);



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//REDUCE METHODS
// ESPECIALLY USED IN ONLINE SHOPPING 

const mynum=[1,2,3,4,5,6,7,8,9,10]

// const initialValue=0;
// const sum= mynum.reduce((accumulator,currentValue) => accumulator + currentValue,initialValue)

// console.log(sum);



// const mytotal= mynum.reduce(function(acc,currval){
//     return acc+currval;
// },0)

// console.log(mytotal);

// reduce using arrow function

const mytot=mynum.reduce( (acc,curr) =>acc+curr,0)
console.log(mytot);