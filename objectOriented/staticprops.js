class User{
    constructor(username){
        this.username=username
    }

    logme(){
        console.log(`Username is ${this.username}`);
    }

    static createid(){
        return `123`
    }
}

const adarsh = new User("adarshgaurav")
// console.log(adarsh.createid());  // nhi chalega as createid static hai 


class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email=email

    }
}

const pen= new Teacher("iphone","pen@pencil.com")
pen.logme();
console.log(pen.createid());    // ye nhi run ho pega 