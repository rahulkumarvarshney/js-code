const myarr=new Array(1,2,3,4);
console.log(myarr.push(6))
console.log(myarr)
//pop()
console.log(myarr.unshift(9)) //array ke start me add krta ha 
console.log(myarr)
myarr.shift();
console.log(myarr)
myarr.shift()
console.log(myarr)


//console.log(myarr.includes(6))
console.log(myarr.indexOf(4))  //return the element in index
const newarr=myarr.join();

// console.log(typeof console.log(typeof myarr)
// newarr)


//slice,splice
console.log("A",myarr);
const mun1=myarr.slice(1,3);
console.log(mun1)
const mun2=myarr.splice(1,3);
console.log(mun2)