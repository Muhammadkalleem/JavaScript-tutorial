/*console.log("Hello my javascript functions")

function Myname(){
     console.log("Come to my office Mr Azad")
};

console.log("this is my first function ");
Myname();

// ways to perform function method
function addtwonumbers(number1,number2){
    console.log(number1+number2);

}
console.log("this is my first way perform function ");
addtwonumbers(5,5)


function addtwo(number1,number2){
     let result=number1+number2;
     console.log(result);
     return result;
}
console.log("this is my second way perform function ");
const result = addtwo(6,5)
console.log(result);


function addtwo(number1,number2){
     return number1+number2;
}
console.log("this is my third way perform function ");
const rr=console.log(addtwo(6,6))



function Username(username){
       if(!username){
             console.log("enter your name:")
       }
      console.log(`${username}` , "Please loggin your data")
}
console.log("this is my naming  function perform ");

Username()*/



/*function addtotalcart(...num){
    let sum=0;
    for( let n of num)
    {
        sum=sum+n;
    }
 
    console.log(sum)
     return num;
}

console.log(" this is ny first addCart value");
//console.log(addtotalcart(100,300,500))

*/

// how objects declare 

/*username={
      name:"Adil khan ",
      age:34,
      location:"Sargodha"
}

function user(anyobject){
      console.log(` Your name is ${anyobject.name} and your age is ${anyobject.age}  and city is ${anyobject.location}`)
}




user({
    name:"Haider",
    age:12,
    city:"Multan"
})*/



// how to handle the array 


/*const arrayvalue=[8,9,10,11,12]

function myarray(array){

    return array[3]
}

console.log(myarray(arrayvalue))


console.log(myarray[1,2,3,4])

*/

// Arrow function delcare this is not proper work 
/*
const user = {

    username:"Hitesh",
    price:999,
    wellcomeMessage:function(){
        console.log(` ${this.username}, welcome to my website `)
    }


}

user.wellcomeMessage();

*/

/*

const user={
      name:"Badar Khan ",
      age:34,
      location:"Gujrat"
}

function data(userasign){
    console.log(` ${userasign.name} is my name and my age is ${userasign.age} and my location is ${userasign.location}`)

}


data(user)
*/



// immediatelty invoked function
/*
(function chai(){
      console.log(" My chai is prepare ...")
})();

((name)=>{

    console.log(` My name is ${name}`)

})("Nadeem")




*/

/*
function totalcartprice(...num){

     let sum=0;
     for(n of num)
     {
         sum=sum+n;
        
     }
     console.log(num)
     console.log(sum)
}


totalcartprice(20,90,90,300)

*/


let month="December";
switch(month){
     case "Jan":
         console.log("This is first month ")
         break;
      case "Feb":
         console.log("This is first month ")
         break;
         case "March":
         console.log("This is first month ")
         break;
         case "April":
         console.log("This is first month ")
         break;
         case "December":
         console.log("This is December month ")
         break;
         default:
            console.log("End no month exist")   
}















