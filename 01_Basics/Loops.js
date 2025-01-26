// Here our loop sesssion start 
// for loop 

// Program 1
/*for(let i=1 ;i<=10;i++){
    console.log(` Number is ${i}`)
}
*/ 



// Program 2
/*let n=9;

for(let i=1;i<=10;i++){
     console.log(`${n} * ${i} = ${n*i}`)
}*/


// Program 3 
/*let myarray=["Nadeem","Saleem","Haider"]
for(let i=0;i<myarray.length;i++){
     const element = myarray[i]
     console.log(element)
}*/



// Program 4 
/*for(let i=1;i<=20;i++){
    if(i==7){
        console.log(` i is reach in 7 so please continue in program`)
        continue;
    }
    if(i==14){
        console.log(` i is reach in 14 so please stop in program`)
        break;

    }
    console.log(` ${i} value found`)
}
*/




// While loop 

/*let score=1;
while(score<=5){
      console.log(score)
      score++;
}
\
*/

/*
let arr=[1,2,3,4,5,6,7,8]
for(const num of arr){
     console.log(num)
}

*/
/*
let str="Hello world"
for(const st of str){
    if(st=== " "){
          console.log(" Space is generate ... ")
          break;
    }
    console.log(st);


}
*/



/// Mapping in loops 

/*
const map = new Map();
map.set("UE", "European union")
map.set("US","United state of America")
map.set("UK","United kingdom")

for(const [key,value] of map){
    console.log(key,":-" ,value)
}


*/


/*
user={
     name:"Kaleem burhan",
     age:22,
     location:"JBD"
}

for(const [key,value] in user){
       console.log(key,":-",value)
}

*/

/*
const info = {
       js:"Javascript",
       rb:"Rube",
       swift:" Low performace langauge"
}


for(const data in info){
      console.log(` ${data} it's stand for ${info[data]}`)
}

*/

/*
arr = ["Nadeem","Saleem","Ibrahim"];


for(const key in arr){
    console.log(` ${key} is stand for ${arr[key]}`)
}

*/


/*
const coding = ["Python","Java","Cpp","JS"]


coding.forEach((val)=>{
        console.log(val)
})

*/



const Mycoding =[
     {
            languageName:"JavaScript",
            languageFileName:"JS"

     },
     {
        languageName:"Python",
        languageFileName:"Used for gaming"
     },
     {
        languageName:"SQl",
        languageFileName:"Used for database"
     },
]

Mycoding.forEach((item)=>{

    console.log(item)
})