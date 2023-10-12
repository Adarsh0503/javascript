// function myfunction(){
// console.log("adarsh" );
// }
// //  syntax

// myfunction() // execution
// myfunction  // reference 


// function add(num1, num2){  // yeha parameters
    
//     console.log(num1+num2);
// }

// // add(2,3) // yeha arguments
// // add(2,"3")
// // add(2,"a")

// const result= add(2,3);

// console.log("result", result);






function add(num1, num2){  // yeha parameters
    
    // // console.log(num1+num2);
    // let result =num1+num2;
    // return result
    // or

    return num1+num2
}

const result= add(2,3);
// console.log("result", result);


function loginusermessage(username){
    // if(username=== undefined){
    //     console.log("please enter username")
    //     return 
    // }else{
    // return  `${username} just logged in `
    // }
    if(!username){
        console.log("please enter username")
        return 
    }else{
    return  `${username} just logged in `
    }
}
// console.log(loginusermessage("adarsh")); /// yeha log kr rhe kyumki function is returning
console.log(loginusermessage()); // undefined aata hai

// we can give default values as well 
function loginusermessagetwo(username='sam'){
  
    if(!username){
        console.log("please enter username")
        return 
    }else{
    return  `${username} just logged in `
    }
}
console.log(loginusermessagetwo()); // undefined aata hai
