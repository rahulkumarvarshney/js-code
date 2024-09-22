//singleton
//object literals
//Object.create
//const mysymb=symbol("key1");
const jsuser={
    name:"rahul",
    "first names":"varshney",
    //[mysymb]:"mykey1",
    age:12,
    locatiom:"jaipur",
    email:"manishvars67@gmail.com"
   
}
// jsuser.email="rahul@123";
// console.log(jsuser["name"])
// console.log(jsuser["first names"])
// console.log(jsuser.email)
// Object.freeze(jsuser);
// jsuser.email="manish@123";
// console.log(jsuser.email)
// //console.log(jsuser[mysymb])
// console.log(jsuser)




jsuser.greeeting=function()
{
    console.log("hello greetings");
}
jsuser.greeetings=function()
{
    console.log(`hello greetings ${this.name}`);
    console.log(`hello greetings ${this.email}`);
    console.log(`hello greetings ${jsuser["first names"]}`);
}
//console.log(jsuser.greeeting)
console.log(jsuser.greeeting())
console.log(jsuser.greeetings())