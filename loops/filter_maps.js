// const coding=["c++","c","Python","Javascript","Java"]

// const values= coding.forEach((item)=>{
//     // console.log(item);
//     return item;
// })
// console.log(values);


// filter me callbackk me consition dete hai


const mynums=[1,2,3,4,5,6,7,8,9,10]
// const ans=mynums.filter( (num)=> {
//    return num>4                                        //{ } return likhna padega in case of {} warna empty array
// })

// const ans=mynums.filter( (num)=> num>4)
// console.log(ans);

// using for each for above case

const newNums=[]
mynums.forEach( (num)=>{
    if(num>4)
    newNums.push(num);
})

console.log(newNums);


const orderInfo=[
    {cname: "Adarsh",
    cid:1,
    cadd: "delhi",
    contact:12345,
    gender:"male",
    fav:"indian"
},
    {cname: "Ankita",
    cid:2,
    cadd: "kanpur",
    contact:134567,
    gender:"female",
    fav:"italian"},
    {cname: "Shaad",
    cid:3,
    cadd: "Nashik",
    contact:12345908,
    gender:"male",
    fav:"mughlai"},
    {cname: "Saakshi",
    cid:4,
    cadd: "kolkata",
    contact:1234512345,
    gender:"female",
    fav:"bengali"},
    {cname: "Apporva",
    cid:5,
    cadd: "delhi",
    contact:123458567,
    gender:"female",
    fav:"indian"}
]

let customerDetails=orderInfo.filter((cu)=> cu.gender==="male")


customerDetails=orderInfo.filter((cu)=> cu.gender==="female")

console.log(customerDetails);