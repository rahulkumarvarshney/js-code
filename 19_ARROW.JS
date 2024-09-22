// const user={
//     username:"rahulvarshney⬆",
//     age:22,
//     welecomeMessage:function()
//     {
//         console.log(`${this.username},welcome to website`)
//         console.log(this)
//     }
    
// }
// user.welecomeMessage();
// user.username="manishvarshney";
// user.welecomeMessage();

// function milk()
// {
//     const username="rahul"
//     console.log(this)
// }
// milk();
//function ke andar me this use nhi krr sakta ho only for use in objects 


// const chai=()=>{
//     const username="rahul";
//     //console.log(this.username)
// }
// chai();



//explicit return
// const add=(num1,num2) => {
//     return num1+num2
// }
// console.log(add(9,8))


//implicit returntype
// const add=(num1,num2) =>  num1+num2

// console.log(add(9,8))


const add=(num1) =>  ({num1:"hitesh"})

console.log(add("rahul"))




