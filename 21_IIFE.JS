//IMMEDIATLY Invoked Function Expression
//GLOBAL SCOPE KE PROBLEM KE SOLUTION REDUCE KARNE KE LIYE USE HOTA HA IIFE LIKE VARIABLSE
 
 (function add(num1,num2)
 {
    //NAMED IIFE
    console.log(num1+num2)
 })(10,20);

 ((NAME) => {
    //UNNAMMED IFFE
    console.log(`HELLO,GOT IT ${NAME}`)
 })("RAHUL")