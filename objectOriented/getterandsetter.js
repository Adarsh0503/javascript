class User{
    constructor(email,password){
        this.email=email,
        this.password=password
    }
    get email(){
        return `${this._email.toUpperCase()}`

    }
    set email(value){
    this._email=value;
    }

    get password(){
        return this._password.toUpperCase()
    }
        // agar get krna hai to set to hoga hi (ye hamesha saath me aaenge)
    set password(value){
        this._password=value
    }
}

const adarsh= new User("adarshgaurav@0709","123abshb")
console.log(adarsh.password);
console.log(adarsh.email);