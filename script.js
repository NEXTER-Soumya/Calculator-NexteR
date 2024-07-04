const display = document.getElementById('display');


function clearPreviousValue(){
    const currentValue = display.value;
    
    // Remove the last character from the input value
    const newValue = currentValue.slice(0, -1);
    
    // Set the new value back to the input element
    display.value = newValue;
}

function appendDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}
function calculate(){
    try{
        display.value = eval(display.value);
    }catch(error){
        display.value='Error';
    }
    
}