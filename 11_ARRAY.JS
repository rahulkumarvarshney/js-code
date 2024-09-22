const marvel_heros=["amit","sourav","rohit"];
const dc_heros=["sourav","gourav","mohan"];
// marvel_heros.push(dc_heros);
// console.log(marvel_heros[3][1])
// //concat
// const ab=marvel_heros.concat(dc_heros);
// console.log(ab)

// const all_new_heros=[...marvel_heros,...dc_heros];
// console.log(typeof all_new_heros)


const another_array=[1,2,3,[4,7,8],9,10,12,12,13,[3,4],8,8,8[9,0]];
const real=another_array.flat(Infinity);
console.log(real)

console.log(Array.from("rajkumar"))
