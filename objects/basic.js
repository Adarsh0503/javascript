// most Important topic
// yeha key pair se khelete hai
//objects  can be declared by two means 
// as literals -> singleton nhi bnta
//  as constructors -> hamesha singleton bnata hai
// singleton (apni trah ka ek object)

// Object.create


// declaring symbol

const mysym=Symbol("key1")

// object literals


const Jsuser={
    name:"adarsh",
    age:18,
    locatiion:"delhi",
    email:"adarshkudhwkwsndklwfk^#",
    isLoggedin:false,
    logginActivity:["monday","tuesday","sunday"],
    "gender kya hai ":"Male",
    [mysym]:"key1"
}

// access kaise kre objects ko

// console.log(Jsuser.name);  //old tarika
// console.log(Jsuser["gender kya hai "]); // aise hi use kr skte
// console.log(Jsuser["email"]);  // new tarika
// console.log(Jsuser.mysym);
// console.log(Jsuser[mysym]);



//change objects value;

// Jsuser.email="adarsh@gmail.com"
// console.log(Jsuser);
// Object.freeze(Jsuser)

// Jsuser.email="adarsh@facebook.com"
// console.log(Jsuser);

// adding functions to objcts

Jsuser.greeting = function(){
    console.log("hello adarsh keep it up");
   
}



// Jsuser.greetingtwo = function(){
//     // console.log("hello adarsh keep it up");
//     /// string manipulation // backticks ka use
//     console.log(`hello Js user,${this.name}`);
// }

// console.log(Jsuser.greeting());
//  console.log(Jsuser.greetingtwo());  //    unndefined 







/////////////////////////////////////////////////////////////////////////////////////////
//part 2

// objects with help of contructor

// const tinderUser=new Object() // singleton obkect

const tinderUser={} /// non singleton 


tinderUser.id="1234abc"
tinderUser.name="adddu"
tinderUser.islOggedin=false

// console.log(tinderUser);

const regularUser={
    email: "adarsh@gmail.com",
    fullname:{
        userFullname:{
            fname:"adarsh",
            lname:"gautav"
        }
    }
}
console.log(regularUser.fullname);
console.log(regularUser.fullname.userFullname.fname);

// objects merge krna

const obj1={
    1:"a",
    2:"b"
}

const obj2={
    3:"c",
    4:"d"
}

// const obj3 ={obj1,obj2}  not recomnded ganda tarika
//   Object.assign({},target,source)
// const obj3= Object.assign({},obj1,obj2)
// console.log(obj3);

const obj3= {...obj1,...obj2}  // spread opeartor
console.log(obj3);


// jab database se value aati hai to

const users=[
    {
        id:1,
        email:"adarsh@gnail.com"
    },
    {
        id:2,
        email:"adarsh@gnail.com"
    },
    {
        id:3,
        email:"adarsh@gnail.com"
    },
    {
        id:4,
        email:"adarsh@gnail.com"
    }
]

console.log(users[1].id)
console.log(tinderUser);

console.log(Object.keys(tinderUser)); // reruns array 
console.log(Object.values(tinderUser)); // reruns array 
console.log(Object.entries(tinderUser)); // reruns array of array 


console.log(tinderUser.hasOwnProperty('islOggedin'));