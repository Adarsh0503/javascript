const username= "adarsh@ai.com"

if(username){
    console.log("Got username");
}else{
    console.log("dont have yusername")
}

const username2= ""

if(username2){
    console.log("Got username");
}else{
    console.log("dont have yusername")
}


// yeha pe truthy values kaam me aati hai

// falsy values

// false, 0, -0, BigInt 0n, Null, undefined, Nan, "" 

//  truthy values
//  true, "0", 'false', " ", [], {}, function(){} 


const username3=[]

if(username3.length===0){
    console.log("array is empty");
}

const username4= {}

if(Object.keys(username4).length===0){
    console.log("object is empty");
}


// false==0 {true}
// false==''{true}
// 0=='' {true}


// Nullish Coalescing operator (??)  : null/ undeined


let val1;
// val1=5 ?? 10  op=5

// val1=null??10 // op=10

// val1 = undefined?? 15  op =15

// val1= null??10??20 // 10 assign ho jaega 


console.log(val1);




// ternary operator
// syntax

// condition ? true : false

const ice=100

ice<=80 ? console.log("sasti hai"):console.log("mehengi hai");