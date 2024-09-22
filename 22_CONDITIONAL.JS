const userloggedin = true;
const debitcard = true;
const loggedinfromgoogle = true;
const loggedinfromemail = false;
if (userloggedin && debitcard) {
  console.log("allow buy to book");
} else if (loggedinfromemail || loggedinfromgoogle) {
  console.log("looged in sucssesfully");
}

//FALSY VALUES
//FALSE,0,-0,BigInt,0n,"",null,undefined,NaN
//truthy values
//"0",'false," ",[],{},function(){}

const useemail = [];
if (useemail.length == 0) {
  console.log("sucsessfully");
}
const gotit = {};
if (Object.keys(gotit).length == 0) {
  console.log("sucsessfully");
}
if ({}) {
  console.log("hii");
}
const arr = [];
if (arr) {
  console.log("jai ho");
}
const arb = " ";
if (arb) {
  console.log("jai hoo");
} else {
  console.log("ggg");
}

if (false == 0) {
  //true return karta ha
  console.log("chalo");
} else {
  console.log("guru");
}


//nulish coalescing operator(??): null undefined
let val1;
//val1=5 ?? 10
//val1=null??10
var1=undefined ?? 15 ??90
console.log(var1)