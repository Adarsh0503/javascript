// object literals


const user ={ // object literals 
    name:"adarsh",  // property
    id:123,               // property
    logginnumber:8,                 // property
    isSignedin: false   ,    // property


    getUserDetaild(){
        // console.log("got user details from database");   // method
        // console.log(`username is : ${this.name}`);
        // console.log(this);

    }


}

console.log(user.id);
// console.log(user.getUserDetaild());
console.log(this); // gets empty parenthesis mostly browser me window wale cheese aa jaati hia 



// constructor function 
// exapmle // const Date= new Date()

// const promiseOne= new Promise()

// constructor function 

function User(username,logginCount,islOggedIn){
    this.username=username       // left side variable and right side me value jo pass hui hai 
    this.logginCount=logginCount
    this.islOggedIn=islOggedIn



    this.greeting = function(){
        log("hehe")
    }

    // return this  // likho ya na likho ek brabar 
}

const userOne=new User("adarsh",14,true)
const userTwo= new User("gaurav",12,false)
// console.log(userOne); 
// console.log(userTwo);

console.log(userOne.constructor);   // khud ke baare me reference 
// ek method hota hai --> instanceof  


// blunder ho jaega agar new keyword nhi use kiya bhai userTwo override kr dega userOne ko 



// new ka use 
// //1st  new keyword ka use krte hi ek nya object ya instance  create hota hai
// 2nd step ek constructor function call hota  hai new keyword k karad
// 3rd this keyword aur arguments uske andar inject ho jata hai
// 4th mil jate hai functions k andar 