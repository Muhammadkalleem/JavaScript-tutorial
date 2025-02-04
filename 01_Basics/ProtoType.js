/*let username="GreekyShows";

String.prototype.final=function(){
    console.log(` ${this}`)
    console.log(` this is my name ${this.username}`)
    console.log(` My  name lenght is ${this.trim().length}`)

}

username.final()
"Kaleem".final()*/


/*
let username="SaleemMalik"

const Teacher={
       videomaker:"Video making is skill everyone not make a video",
       age:45
}
const TeacherSupport={
      isavailable:true,
    //  __prototype__:username
      __prototype__:Teacher
}
//setprototype(Teacher,TeacherSupport)


console.log(TeacherSupport)*/






//Call in javaSCRIPT


function one(username){
    this.username=username;
    console.log(" i am your first function")

}

function two(name,email,password){

    one.call(this,name)
  //  this.nam=name,
    this.email=email,
    this.password=password
     
}

const a= new two(" Nadeem","Nadeem@12gmail.com",'1212133')


console.log(a)