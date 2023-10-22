

class User {
    constructor(userName, email, password){   // constructor call ota hai jaise hi class start 
        this.userName=userName
        this.email=email
        this.password=password
    }


    encryptPassword(){
        return `${this.password}abcd`
    }

    chengeusername(){
        return `${this.userName.toUpperCase()}`
    }
}

const userone= new User("adarsh","adarsh@gnail.com","123")
console.log(userone.encryptPassword())
console.log(userone.chengeusername())

// behind the scenes
function user(userName, email, password){
    this.userName=userName
        this.email=email
        this.password=password
}

user.prototype.encryptPassword= function(){
    return `${this.password}abcd`
}
user.prototype.chengeusername=function(){
    return `${this.userName.toUpperCase()}`
}

const usertwo= new User("gaurika","gauri@gnail.com","4321")

console.log(usertwo.encryptPassword());
console.log(usertwo.chengeusername());