function mulByFive(num){
    return num*5

}


// function bhi object jaise
mulByFive.power=2;
// console.log(mulByFive(5));
// console.log(mulByFive.power);
// console.log(mulByFive.prototype);



function createUser(username, score){
    this.username=username
    this.score=score

}

createUser.prototype.increment=function(){
    this.score++;
}

createUser.prototype.printMe= function(){
    console.log(`price  is ${this.score}`);  // jisne score pucha use btao )this use krte hai 
}
const chai = new createUser("chai", 25)
const tea= new createUser("tea",125)


// chai.printMe()
// tea.printMe()
 
// console.log(chai.increment())