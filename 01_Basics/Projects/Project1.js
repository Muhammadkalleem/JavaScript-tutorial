const buttoms = document.querySelectorAll(".buttom")

const body=document.querySelector("body")



buttoms.forEach((buttom)=>{

    console.log(buttom)

    buttom.addEventListener('click',function (e){
        if(e.target.id === 'grey')
        {
                body.style.backgroundColor=e.target.id
        }

        else if(e.target.id=='green'){
              body.style.backgroundColor=e.target.id
        }

        else if(e.target.id=='pink'){
             body.style.backgroundColor=e.target.id
        }
        else if(e.target.id=='white'){
            body.style.backgroundColor=e.target.id
      }

    })



})