
let listEmail=[
    "utenteuno@gmail.com",
    "utentedue@gmail.com",
    "utentetre@gmail.com",
    "utentequattro@gmail.com",
    "utentecinque@gmail.com",];
    
    let userMail = document.getElementById("email");
    let btnVerify = document.getElementById("my-btn");
    let message = document.getElementById("message");
    
    btnVerify.addEventListener('click',function(){
        for(let i = 0; i < listEmail.length; i++){
    
            if(userMail.value == listEmail[i]){
            message.innerHTML = "Ci sei!";
            i= listEmail.length;
        }
    
            else{
                message.innerHTML = "Non ci sei, riprova."
            }
            console.log(message.innerText)
            
        }
    });

   