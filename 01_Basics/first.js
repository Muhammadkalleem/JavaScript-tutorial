/*console.log("hello");

   // how to combine two strings in array

let myarr=["Nadeem","Saleem","Waqas"];
let youarr=["Haider","Aqib","Mubeen"];
let a=myarr.concat(youarr);

console.log(a)
// Push method 
 myarr.push('Ibrahim')
 console.log(myarr)


 let Manyarr =[1,2,3,[10,11,12,["Ali","Aqib","Sofhan",[4,5,6,7]]]]
 Manyarr.flat();
 console.log(Manyarr);*/



 //  First program Objects 
/*
    const Mysym = Symbol("Keyone");
    const Studentdata={
           name:"Rashid ALi khan ",
           email:"Rashid32@gmail.com",
           age:23,
           location:"KPK Peshwar",
           [Mysym]:"Keytwo"

    }

 /* console.log(Studentdata);

  // ways object declare 
  console.log(Studentdata["name"])
  console.log(Studentdata.location)

  // change the object value:
  Studentdata.email="NewRahid123@google.com"
  console.log(Studentdata);
  Object.freeze(Studentdata) // now we never change the value because its freeze

  Studentdata.email="HaiderAlikhan23@google.com" // this is not work yet 
  console.log(Studentdata["email"])


 
  Studentdata.firstgreeting=function(){
       console.log("Hello my dear JS user ")
  }

 // capslock press for backtricks
Studentdata.Secondgrreting=function(){
    console.log(`Hello, my JS user ${this.name}`);

}

console.log(Studentdata.firstgreeting());
console.log(Studentdata.Secondgrreting())


*/

// Seocnd Program object 

// 

/*const obj1 ={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

const obj3={...obj1,...obj2}
console.log(obj3);
*/


const tinder={}

tinder.name="Saleem",
tinder.email="Saleem@gmail.com",
tinder.login="hwell"


//console.log(Object.keys(tinder))
//console.log(Object.values(tinder))
//console.log(" Combination of both key and values")
//console.log(Object.entries(tinder))



const userid=[
    {
        name:"Aslam ",
        age:21,
        location:"Lahore"

    },
    {
        name:"Tayyab",
        age:89,
        location:"Gujrat"

    }
]

console.log(userid[0].location)
