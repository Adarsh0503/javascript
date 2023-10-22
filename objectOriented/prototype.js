

// let myName="Adarsh     "
// // extra space htane 

// console.log((myName.trueLength));







// KAHANI
let myHeroes=["hulk","thor","loki"]

let heroPower={
    thor:"Hammer",
    hulk:"Smash",
    loki:"shaitaani",

    getLokiPower: function(){
        console.log(`loki power is  ${this.loki}`);
    }
}

Object.prototype.hitesh=function(){
    console.log(`Adarsh is present everywhere`);

}
// heroPower.hitesh()

myHeroes.hitesh()


Array.prototype.adarsh=function(){
    console.log("ADarsh array se bhi aa skta kya ");
}

myHeroes.adarsh()
// heroPower.adarsh()




//INHERITANCE
const user={
    username:"chai",
    email:"chaia@google.com"
}
const teacher={
    makeVideos:true

}

const teachingSupport={
    isavailable:false
}

const TAsupport={
    makeAssignment:'JS Assignment',
    fulltime: true,
    __proto__:teachingSupport
}
teacher.__prot__=user


// modern synatx
Object.setPrototypeOf(teachingSupport,teacher)


let otherUsername="AdarshGaurav      ";
String.prototype.trueLength =function(){
    console.log(`${this}`);
    console.log(`Tue length is ${this.trim().length}`);

}

otherUsername.trueLength()

"adarsh ".trueLength();
"icetea".trueLength();