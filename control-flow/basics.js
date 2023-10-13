// code hamesha pootra run nhi honz chaiye like
// agar hum login ho to koi code run hpo ya log out ho to  koi part of code
// yhi basically control flow


//1 IF

// if(condition){

// }


// operators 
// <
// >
// <=
// >=
// ==
// !=
// ===    also checks the typechecking   data type bhi check krta hai
// !==

// if(2=="2"){
//     console.log("executed");
// }
// if(2==="2"){
//     console.log("executed");
// }

// const temperature=45

// if(temperature<15){
//     console.log("Garmi kam hai");
// }else{
//     console.log("garmi jyada hai");
// }


// short hand notation
// const balance=1000

// // if(balance>500) console.log("test");   // ye nhi krna hai

// if(balance <500){
//         console.log("less than 500");
// } else if(balance<750){
//     console.log("less than 750");
// }else if(balance<900){
//     console.log("les than 900");
// }else{
//     console.log("more than 1000");
// }

const userLogedIn=  true;
const debitCard =true;
const loggedInfromgoogle=false;
const loggedInfromEmail=true;
if(userLogedIn && debitCard){
    console.log("Allowed hai");
}
if(loggedInfromgoogle || loggedInfromEmail){
    console.log("hehe shi hai");
}

