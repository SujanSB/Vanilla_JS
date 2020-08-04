let screen = document.getElementById("screen");
buttons =document.querySelectorAll("button");
let screenValue ="";
for(item of buttons){
    item.addEventListener('click', (e)=>{
        buttonText =e.target.innerText;
        console.log("buton text is",buttonText)

        if(buttonText=="x"){
            buttonText="*";
            screenValue +=buttonText;
            screen.value =screenValue;
        }
        else if(buttonText=="AC"){
            screenValue -=screenValue;
            screen.value =screenValue;
        }
        else if(buttonText=="="){
            screenValue=eval(screenValue);
            screen.value =screenValue;

        } else if(buttonText=="C"){
            screenValue =" ";
            screen.value =screenValue;
        }
        else if(buttonText=="<"){
            screenValue=buttonText;
            screen.value -= screenValue ;
            screen.value =screenValue;
        }
        else {
            screenValue += buttonText;
            screen.value =screenValue;

        }
    })
}