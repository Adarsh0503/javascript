const User ={
    _email: 'adarshgaurav@gmail.com',  
    _password: "123adserags",




    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email=vale;

    }
}
const adarsh = Object.create(User)
console.log(adarsh.email);
