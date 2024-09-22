// // 



// for (let y=0; y<=10; y++)
//     {
//         console.log(`outer lopp value ${y}\t`)
//         for(let x=0; x<=10; x++)
//             {
//                // console.log(`inner loop value${x} and inner loop ${x}`)
//             //    console.log(y+"*"+x+"="+y*x)
//             console.log(`the table is:${y}*${x}=${y*x}`)
//             }
//     }

let myarray=["flash","batman","superman"]
for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    console.log(element)
    
}

//brak
//continue

// for (let index = 1; index <= 20; index++) {
//     if(index==5)
//         {
//             console.log(`detected 5`)
//             break;
//         }
//     console.log(`value of i is: ${index}`)
    
// }

for (let index = 1; index <= 20; index++) {
    if(index==5)
        {
            console.log(`detected 5`)
            continue;
        }
    console.log(`value of i is: ${index}`)
    
}