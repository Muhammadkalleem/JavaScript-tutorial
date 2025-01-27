// Filter function

/*const MyNums=[1,2,3,4,5,6,7,8,9,10]

const a=MyNums.filter((item)=>{
  //  console.log(item)
    return item;
      
})

console.log(a)

// it is used tp check the condition and return value in filter function


const number=[10,20,30,40,50,60,70,80,90,100]

const b=number.filter((nums)=>(nums>40))


console.log(b)

*/
/*

const oldarr =[12,13,14,15,16,17]
const newarr=[]

oldarr.forEach( (item)=>{

    if(item>14){
          newarr.push(item)

    }

})
console.log(newarr)
*/

// Filter Function
/*
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

//  const a=books.filter((bk)=>(bk.genre=="Science"))
//const userbooks=books.filter((bk)=>(bk.publish>2000))
//console.log(userbooks)
//  console.log(a);


const c=books.filter( (bk)=>(bk.publish>2000 ||
     bk.publish<=2010))

console.log(c)


*/



// Program 4


// Map function is used to add somedata in array 




//const Nums =ArrNum.map((num)=>(num+10))


/*const ArrNum=[2,3,4,5,6,7,8,9,10,11,12];
 ArrNum.forEach((item)=>{
        
        console.log(item)
        return item+10
})*/



/// this is called chaining function
/*
const MyNums=[1,2,3,4,5,6,7,8,9,10];

const newNums=MyNums.map((num)=>(num*10)).map((num)=>(num+1)).filter((num)=>(num>50))


console.log(newNums)

*/

/// Reduce Function 

/*const arr=[1,2,3,4]
let intialvalue=0;

let sumvalue=arr.reduce(
    (a,currentvalue)=>a+currentvalue,intialvalue
)
console.log(sumvalue)*/


/*
const arr=[1,2,3]
const sum=arr.reduce((acc,currval)=>{
      return acc+currval;

},0)

console.log(sum)


*/



//  make a program

const ShoppingCart=[
      {
           Course:"JS language",
           price:2000
      },
      {
        Course:"Python language",
        price:2000
   },
   {
    Course:"Data Science language",
    price:2000
},
]


const sum=ShoppingCart.reduce((acc,item)=>(acc+item.price),0)
console.log(sum)