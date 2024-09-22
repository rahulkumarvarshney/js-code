//const tinderuser=new Object()   //singleton object
// console.log(tinderuser)

// const obj={}   //nonsingleton object
// //console.log(obj)
// obj.id="123abc"
// obj.name="rahul"
// obj.isloggedin=false
// console.log(obj)

// const obj={
//     name:"rahul",
//     age:22,
//     objs:{
//         first:"sourav",
//         last:"gourav"
//     }
// }
// console.log(obj.name?.objs.first);

const obj1={1:"a",2:"b",3:"c"};
//const obj2={4:"d",5:"e"};
// const obj3=Object.assign({},obj1,obj2); //ek object ki value or dusreobject ki value ko third object me assign jarna
// // console.log(obj3)
// const obj3={...obj1,...obj2}
// console.log(obj3)
console.log(Object.keys(obj1));
console.log(Object.values(obj1))
// for(let i=1; i<=Object.keys(obj1); i++)
//     {
//         console.log(i)
//     }
console.log(Object.entries(obj1))
console.log(obj1.hasOwnProperty(1))



const obs={
    "full name":"rahul",
    name:"rahul"
}
console.log(obs["full name"])