// const arr=[1,2,3,4,5]
// for (const val of arr) {
//     console.log(val)
// }
// const str="greetings";
// for (const itr of str) {
//     if(itr=="r")
//         {
//             console.log("detcted r")
//             continue

//         }
//     console.log(itr)
// }

//maps

const map = new Map();
map.set("IN", "INDIA");
map.set("fr", "france");
map.set("IN", "India");
// for (const [key,value] of map) {
//     console.log(key,value)
// }

// const obj={
//     name:"rahul",
//     age:22
// }
// for (const key in obj) {

//         console.log(key,obj[key])
//     }
for (const key in map) {
  console.log(key);
}

 const coading=["js","ruby","java","python",".net"]
// coading.forEach((val)=>{
//     console.log(val)
// })
// coading.forEach(function(val){
//     console.log(val)
// })

// function printme(item)
// {
//     console.log(item)
// }
// coading.forEach(printme)


// coading.forEach((val,index,arr)=>{
//     console.log(val,arr,index)
// })


//callback function ka namer nhi hota haa 



const mycoading=[
    {
        languagename:"javascript",
        languagefilename:"javascript"
    },
    {
        languagename:"javat",
        languagefilename:"java"
    },
    {
        languagename:"python",
        languagefilename:"py"
    }
]
mycoading.forEach((val)=>{
    console.log(val.languagename)
})
