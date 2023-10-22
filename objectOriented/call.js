function setUserName(username){
    // complex DB CALL
    this.username=username
}

function createUser(username,email,password){ 
    // setUserName(username)  // ye call ho nhi rha  sirf refer hua
    setUserName.call(username)  // run to hua but abhi bhi refernece dena padega
    setUserName.call(this,username) 

    this.email=email
    this.password=password
    
}

const adars= new createUser("adarsh","adarsh@fb.com","123")
console.log(adars);