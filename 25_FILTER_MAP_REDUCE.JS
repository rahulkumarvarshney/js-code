const arr=[1,2,3,4,5,6,7,8,9,10]
// arr.forEach( (nums)=>{
//     if(nums>4)
//         {
//             arr.push(nums);
//             console.log(nums)
//         }
// })


// const ab=arr.filter( (nums) => nums>4 )
// console.log(ab)



// const ab=arr.filter( (nums) =>{
//     return nums>4
// })
// console.log(ab)


const books=[
    
        {title:'book one',genere: 'fiction', publish:1981,edition:2004},
        {title:'book two',genere: 'non-fiction', publish:1992,edition:2008},
        {title:'book three',genere: 'history', publish:1999,edition:2007},
        {title:'book four',genere: 'non-fiction', publish:1989,edition:2004},
        {title:'book five',genere: 'science', publish:2009,edition:2010},
        {title:'book six',genere: 'fiction', publish:1987,edition:2014},
        {title:'book seven',genere: 'history', publish:2006,edition:2010},
        {title:'book eight',genere: 'science', publish:2011,edition:1996},
        {title:'book nine',genere: 'fiction', publish:1981,edition:2004},
        {title:'book ten',genere: 'fiction', publish:1981,edition:2004},
        {title:'book eleven',genere: 'fiction', publish:1981,edition:2004}
]

// const userBooks=books.filter( (bk) => bk.genere==='history')
// console.log(userBooks)

// const editioBooks=books.filter( (bk) => bk.edition >=2000)
// console.log(editioBooks)

// const publishbooks=books.filter( (bk) =>{
//     return bk.publish >=1989
// })
// console.log(publishbooks)


// const publishbooks=books.filter( (bk) =>{
//     return bk.publish >=1989 && bk.genere==='history'
// })
// console.log(publishbooks)


// const mynumbers=[1,2,3,4,5,6,7,8,9,10]

// const my=mynumbers.map(  (num) => num * 10).map( (num) => num+1 ).filter( (num) => num>40)
// console.log(my)

//for each no return
//filter check the condition annd boundation and return
//map operation will be  performed and return
//in map chaning can be performed


const mynums=[1,2,3]
const cost=mynums.reduce( (acc,nums) =>{
    console.log(`accumlator is ${acc} and nums is ${nums}`)
    return acc+nums;
},0)
console.log(cost)


const shoppingcart=[

    {
        course:"js",
        price:999
    },
    {
        course:"python",
        price:1000
    },
    {
        course:"java",
        price:3000
    },
    {
        course:"mobile devolopment",
        price:4000
    }
]
const shopping=shoppingcart.reduce( (acc,item)=>{
    console.log(`accumlator is ${acc} and nums is ${item.price}`)
    return acc+item.price
},0)

console.log(shopping)


//for each no return
//filter check the condition annd boundation and return
//map operation will be  performed and return
//in map chaning can be performed
//reduce can perform can be accumlator that can store the inital price and real life can be example shopping cart price add
