// jab bhi shopping cart bnaoege in  future to  weha user items addd kiye hi jata hai to hme
// ye nhi pta ki kitne items abhi aaenge list me

function calculateCartPrice(num){
    return num;
}

// console.log(calculateCartPrice(4));

// console.log(calculateCartPrice(53,223,233)); // yeha pr sirf 1st itme consider ho rha
// // to is matter ko solve krne k liye REST OPERATOR

// // REST OPERATOR
function calculateCartPrice2(...num){  // REST OPERATOR(...)
    return num;
}

// console.log(calculateCartPrice2(244));

// console.log(calculateCartPrice2(253,223,233)); // yeha pr sirf 1st itme consider ho rha
// // to is matter ko solve krne k liye REST OPERATOR

// IF
function calculateCartPrice3(val1, val2, ...num){  // REST OPERATOR(...)
    return num;
}

// console.log(calculateCartPrice3(253,223,233,654,8,90));

const user={
    userName:"Adarsh",
    id:123,
    age:19,
    price: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.userName} and price is ${anyobject.price}`);
}

// handleObject(user);  // method1
// handleObject(   // method 2
//     {
//         userName:"adarshgaurav",
//         price: 128292
//     }
// )

// passing arrays to functions
const mynewArray=[200,20,9800,300]

function handleArray(getArray){

    return getArray[3];
}

// console.log(handleArray(mynewArray));  // method 1


// console.log(handleArray([100,200,300,800,978,393]));  // method 2





////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//scope

// global scope
// let a=10
// const b=20
// var c =30

// console.log(a);
// console.log(b);
// console.log(c);


if(true){
    // local scope
    let a=10
    const b=20
    var c =30
}
// console.log(a);  
// console.log(b);
// console.log(c); // sirf yhi print hoga as its var



// NESTED SCOPE

function one(){
    const Username="adarsh"
    function two(){
        const website="github"
        console.log(Username);
    }
    // console.log(website);
    two()
}
one()


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function addone(value){
    return value+1;
}

console.log(addone(9));



const addTwo= function(num){
    return num+2;
}


console.log(addTwo(7));

