let score="hirte"

console.log(typeof(score));

let valueInNumber =Number(score); // guarantee ki score ab number ki form me hai

console.log(typeof(valueInNumber));

console.log(valueInNumber)  // Nan (not a number)-?special type


//conversions rules
// number can be easily converted to number
// "33abc" -> NaN
// true -> 1
// false->0

let isloggedIn= 1
let booleanIsLoggedIn= Boolean(isloggedIn)

console.log(typeof(sloggedIn))
console.log(typeof(booleanIsLoggedIn))

// 1-> true  & 0->false
// ""->false
// "adarsh"->true