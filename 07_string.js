let a="rahul"
console.log(`hello dear ${a}`);
const str=new String("rahul-vs");
console.log(str[0]);
console.log(str.__proto__);

console.log(str.charAt(3));
console.log(str.toUpperCase());
console.log(str.indexOf('t'));
console.log(str.valueOf(a));
console.log(str.length);
const nes=str.substring(0,4);
console.log(nes);
const anotherstring=str.slice(-6,4);
console.log(anotherstring);
const tri="    rahul    ";
console.log(tri);
console.log(tri.trim());
const mail="manishvarshney9368@gmail.com";
console.log(mail.replace("9368","--"));
console.log(mail.includes("--"));
console.log(mail.split('-'));