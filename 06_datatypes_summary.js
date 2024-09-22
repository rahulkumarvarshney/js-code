//# primitive datatypes
//7 types :String,number,boolean,null,undefined,symbol,bigint

//reference type(non-primitive-dtatatype)=>arrays,object,functions



//************************************************************
 //stack(primitive type),heap(non-primitive)

//  let myname="monstermv4";

//  let anothername=myname;
//  console.log(anothername);

//  anothername="rahul";
//  console.log(myname);
//  console.log(anothername);

//stack me copy create hoti ha
let obj={
    name:"rahul",
    age:32,
    phone_numb:987456,
}
console.log(obj);
console.log(obj.name);
console.log(obj["name"]);
let obj1=obj;
obj1.name="raghav";
console.log(obj1);
console.log(obj)