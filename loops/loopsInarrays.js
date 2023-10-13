// array and object specific loops
// for of loop

const arr=[1,2,3,4,5]

// for (const iterator of object) {
    
// }
for (const num of arr) {
    // console.log(num);
}

const greetings="Hello World"

for (const greet of greetings) {
    // console.log(greet);
}


// MAPS   holds unique values no repetion is allowed similarv to sets in c++

const map=new Map()
map.set('IN',"INDIA")
map.set('USA',"UNITED STATES")
map.set('FN',"FRANCE")

// console.log(map);

for (const [key,value] of map) {
    console.log(key);

    console.log(key,':-', value);
}


// for in on arrays

const myarr=[1,2,3,4,5,6,7]
for (const key in myarr) {
    console.log(key); // ye key print krta hai ie index print krta hai 
    console.log(myarr[key]);
}