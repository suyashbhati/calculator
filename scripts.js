var currentinput='0';
const displayelement=document.getElementById("display");

function handlebuttonclick(event){
    const buttonvalue=event.target.innerText;

    if (buttonvalue=='='){
        calculate();
    }else if(buttonvalue==='c'){
        cleardisplay();
    }else{
        appendtodisplay(buttonvalue);
    }
}
function appendtodisplay(value){
    if (currentinput=='0'){
        currentinput=value;
    }else{
        currentinput+=value;
    }
    updatedisplay();
}
function updatedisplay(){
    displayelement.innerText=currentinput;
}
function cleardisplay(){
    currentinput='0';
    updatedisplay();
}
function calculate(){
    try{
        currentinput = eval(currentinput).toString();
        console.log(currentinput);
        updatedisplay();
    }catch(error){
        console.log(currentinput)
        currentinput='error';
        updatedisplay();
    }
}

