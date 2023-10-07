// array
// array in javascript can be resizable and  can be mixed of datatypes
// associative nhi hote 
// copy operations me ye shallow copy create krte hai (same reference me ie original copy me change hota hai)


// const simpleArray=[0,1,2,3,4]
const myarray=[0,1,2,3,4,false,"adarsh"]
// console.log(myarray.length)
// const myheroes=["heman","shaktiman"]
// console.log(myheroes);
// const myarrtwo = new Array(1,2,3,4)

// array methods
// myarray.push(4); // pushes the elemnt at last index
// myarray.push("hi");
// myarray.pop(); 
// console.log(myarray) 

// myarray.unshift(0)  // array k start me inserrt hua but bad practice
// console.log(myarray) 

// myarray.shift()  // removes eleemnt fromstarting index
// console.log(myarray)


// console.log(myarray.indexOf(2));
// console.log(myarray.indexOf(90));
// console.log(myarray.includes(9));

// const newarr= myarray.join()
// console.log(myarray);
// console.log(typeof(newarr));



// slice or splice
console.log("A",myarray)
const mynew1=myarray.slice(1,3) // 1 SE 3 (INCLUDE 1 BUT NOT 3)

console.log(mynew1);
console.log("B",myarray)
const mynew2=myarray.splice(1,3) // 
console.log("C",myarray)
console.log(mynew2);

// JAB SLICE USE KRTE HAI TO NO CHANGES IN ARRAY BUT JAB HUM 
// SPLICE USE KRTE HAI TO ARRAY ME CHANGES HOTE HAI