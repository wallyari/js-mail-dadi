//Email

let listEmail=[
    "utenteuno@gmail.com",
    "utentedue@gmail.com",
    "utentetre@gmail.com",
    "utentequattro@gmail.com",
    "utentecinque@gmail.com",];
    
    let userMail = document.getElementById("email");
    let btnVerify = document.getElementById("my-btn");
    let message = document.getElementById("message");

    let success= false;
    
    btnVerify.addEventListener('click',function(){
        for(let i = 0; i < listEmail.length; i++){
    
            if(userMail.value == listEmail[i]){
                success= true;
           
            }
    
            console.log(message.innerText)
            
        }
        if(success==true){
            message.innerHTML = "Ci sei!";

        }
        else{
            message.innerHTML = "Non ci sei, riprova."

        }
    });

//Gioco dei Dadi 
let userDice = document.getElementById('my-dice-btn');

userDice.addEventListener('click', function(){
    let randomNum = Math.floor((Math.random()*6) +1);
    console.log(randomNum);
    document.getElementById('user-dice').innerHTML = randomNum;

    let computerDice = Math.floor((Math.random()*6) +1);
    document.getElementById('computer-dice').innerHTML = computerDice;

    if (randomNum > computerDice){
        document.getElementById('winner').innerHTML = "Hai vinto";
    } else {
        document.getElementById('winner').innerHTML = "Ha vinto il computer, ciaone.";
    }
});  