console.log("calculator");
let buttons = document.querySelectorAll('button');
let screen = document.getElementById('screen');
let screenValue='';
let pi='3.142';
console.log(buttons);
for (let item of buttons) {
    item.addEventListener('click',(e)=>{
        buttonText = e.target.innerText;
        // console.log(buttonText);
        if(buttonText=='x'){
            buttonText='*';
           screen.value+=buttonText;
           screenValue=screen.value;
        //    console.log(screenValue);
        }else if(buttonText=='C'){
            screenValue="";
            screen.value=screenValue;
        }else if(buttonText=='='){
            screenValue=screen.value
            console.log(screenValue);
            screen.value=eval(screenValue);
        }else if(buttonText=='sq'){
            screenValue=screen.value;
            // console.log(screenValue);
            let num=screenValue;
            let result=num*num;
            screenValue=String(result);
            screen.value=screenValue;
        }else if(buttonText=='pi'){
            screenValue+=pi;
            console.log(screenValue);
            screen.value=screenValue
        } else{
            screen.value+=buttonText;
           screenValue=screen.value;
        }
    });
}