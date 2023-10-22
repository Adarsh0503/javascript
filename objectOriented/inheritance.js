class User {
    constructor(username){
        this.username=username
    }

    logme(){
        console.log(`Username  is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email, password){
        super(username)
        this.email=email
        this.password=password
    }

    addcourses(){
        console.log(`new course was added by ${this.username}`);
    }
}


const user1= new Teacher("alka bajpai"," alkaHell@gmail.com", "peetosabko")

console.log(user1);
user1.addcourses();
user1.logme()
const user2= new User("Gauri")
user2.logme();


console.log(user1 instanceof User);