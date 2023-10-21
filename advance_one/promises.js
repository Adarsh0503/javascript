// <!-- promise ka simple matlab ye hai ki jo bhi task ya operations use 
// diya hai hmne wo abhi k abhi queueme me lag k complete nhi hiaga

// wo queuee me lag to jaenge but execute nhi
//  -->
// <!-- 
//  operations can include ->> jeha time lage 
// ex file accessing 
// ex kbhi kbhi database ko request 
// ex cryptography me bhi  -->

// <!-- to in that case promise lgao -> future me complete hota hai task
//  -->

//  <!-- 3 states of promises  are there-->
//  <!-- 1 ->pending
//  2  ->fulfilled
//  3 -> rejected -->

// fetch('https://adarsh.com').then().catch().finally()

// promise bnane k tareeke
//  A promise is an object 
// creation of promise
const promiseOne= new Promise(function(resolve, reject){
    // do an async task
    //DB calls , cryptography tasks, network related callss
    setTimeout(function(){
        console.log("async task complete");
        resolve()
    }, 1000)
    
})

// consuming created promise

promiseOne.then(function(){
    console.log("Promise consumed");
})






new Promise(function(resolve, reject) {
    setTimeout(function(){
        console.log('Asynch task 2');
        resolve();
    },   1000)
}).then(function(){
    console.log('Asynch 2 resolved ');
})


 const promise3= new Promise(function(resolve, reject ){
    // passing data from newtork
    setTimeout(function(){
        resolve({userName: 'Adarh', email:'adarshgaurao@gamil.com',})
    }, 1000)
 })

 promise3.then(function(user){
    console.log(user);
 })




 const promise4= new Promise(function(resolve, reject){
    setTimeout( function(){
        let error=true
        if(!error){
            resolve({username:"adarsh", password:"123jdwhhd"})
        }else{
            // yeha rejection ka kaam ataa hai 
            reject('error: something went wrong')
        }
    } ,2000)
 })

promise4
.then((user)=>{
    console.log(user)
    return user.username
 })
 .then((myUsername)=>{
    console.log(myUsername);
 })
 .catch(function(eroor){
    console.log(eroor);
 })
 .finally(()=> console.log("finally the promise is either resolved or rejected "))





 const promise5= new Promise(function(resolve, reject){
    // 
    setTimeout( function(){
        let error=true
        if(!error){
            resolve({username:"javascript", password:"123"})
        }else{
            // yeha rejection ka kaam ataa hai 
            reject('error: Js went wrong')
        }
    } ,2000)
 })



 // method 2
//  async function consumePromiseFive(){
//      try {
//         const response = await consumePromiseFive
//      console.log(response);
//      } catch (error) {
//         console.log(error);
//      }
//  }
//  consumePromiseFive();


//////////////////////////////////////////////////////////////////////////////////

//  async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         // console.log(response);
//     const data = await response.json()
//     console.log(data);
//     } catch (error) {
//         console.log("error is: " , error);
//     }
//  }

//  getAllUsers()

///////////////////////////////////////////////////////////////////////////////////////

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);

})
.catch((error)=>{
    console.log(error);
})