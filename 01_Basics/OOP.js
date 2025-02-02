

//   We call many objects values
function Myfunction(name,age,password,email){
    this.username=name;
    this.userage=age;
    this.userpassword=password
    this.useremail=email

}

// here new create a empty object 

const onedata= new Myfunction("Haji","21","HAji342","Haji@12gmail.com",)
const twodata = new Myfunction("Haider","45","Haider657","Haider@77gmail.com")


console.log(onedata)
console.log(twodata)