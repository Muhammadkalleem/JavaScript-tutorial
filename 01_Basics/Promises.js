/*const PromiseOne=new Promise(function(resolve,reject){

    setTimeout(function(){

        console.log(" My first promise is complete ... ")
        resolve()

    },1000)

})

PromiseOne.then(function(){
    console.log(" Bye Bye .... ")
})


new Promise(function(resolve,reject){
      setTimeout(()=>{
        console.log(" this is my second promises ... ")
        resolve()

      },1000)
}).then(function(){
      console.log(" Bye Bye .... ")
})

*/


/*new Promise(function(resolve,reject){
    setTimeout(function(){
           let data={
             username:"Nadeem",
             email:"Nadeem12@gmail.com",
             password:"1234353"
           }
           console.log(" this is my third Promises")
        resolve(data)


    },1000)

}).then(function(user){
    console.log(  `my name is ${user.username} and email is ${user.email} and password is ${user.password}`)

})

*/
/*
new Promise( function(resolve,reject){

    let error=true
    if(error === true){
         resolve({username:"Saleem Malik" ,email:"Saleemmalik@12gmail.com"})
    }
    else{
        reject(" Error :Your async key is not generated ... ")

    }


}).then((user)=>{

    console.log(` Your name is ${user.username} and email is ${user.email}`)
    return user.username
    


}).then((userr)=>{
    console.log(userr)

      
}).catch((error)=>{
    console.log(error)

})

*/
/*

const PromiseFour=new Promise((resolve,reject)=>{

    let error=false;
    if(error == true){
         resolve({ username:"Arshad Hareem ", enail:"Arshad@12gmail.com"})
    }
    else{
         reject(" Error generate Sorry your name is not create ... ")
    }
        
})


PromiseFour.then((user)=>{

    console.log(` My name is ${user.username} and my email is ${user.enail}`)

}).catch((error)=>[
    console.log(error)

])
*/

// Another method to perform a promises and asyn wait 
/*
const PromiseFive = new Promise((resolve,reject)=>{

    setTimeout(()=>{

   let error=true;
    if(error == true){
         resolve({ username:"Naeem ", email:"Naeem@12gmail.com"})
    }
    else{
          reject(" Error Sorry Your name is not generated ... ")
    }


    },1000)





})

async function handlePromiseFive(){

    try{
         const respone=  await PromiseFive;
       //  const data = await respone.json()
         console.log(respone)


    }
    catch(error){
          console.log(error)
    }

}

handlePromiseFive()


*/


/*
async function fetchmethod(){

   try{
    const respone = await fetch(`https://jsonplaceholder.typicode.com/users/1
    `)

    const data = await respone.json()
    console.log(data)
   }
   catch(error){
    console.log(' Error',error)

   }
}
fetchmethod()

*/
// We easly deal by using .then method 

/*
fetch(`https://jsonplaceholder.typicode.com/users/1
`).then((response)=>{

    response.json();
    return response;

}).then((data)=>{
    console.log(data)

}).catch((error)=>{
    console.log(" Error is generated .. ..")

})

*/