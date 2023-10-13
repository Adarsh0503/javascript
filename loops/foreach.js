const grils=["ankita","apoorva","anshika","sanjana"]

// grils.forEach(function (val){
//     console.log(val);
// })

// arrow function

// grils.forEach((val)=>{
//     console.log(val);
// })


// function printme(item){
//     console.log(item);
// }

// grils.forEach(printme)

// grils.forEach((item,index,arr)=> {
//     console.log(item,index,arr);
// })


// [{},{},{},{}]

const mycoding=[
    {
        langName:"javascript",
        langfile:"js"
    },
    {
        langName:"cplusplus",
        langfile:"cpp"
    },
    {
        langName:"python",
        langfile:"py"
    }
]

mycoding.forEach( (item)=>{
    console.log(item.langName);
})