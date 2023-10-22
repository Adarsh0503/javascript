const descriptor= Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descriptor);  // gives description about 


const chai ={
    name: "ginger tea",
    price: 230,
    isAvailable:true
}

console.log(chai);

console.log(Object.getOwnPropertyDescriptor(chai,"name"));

// mai objects k andar apne property define bhi kr skte


Object.defineProperty(chai,"name", {
    writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(chai,"name"));
