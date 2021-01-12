let inputLabel = document.getElementById('inputLabel');
     
function pushBtn(obj) {
     
    const pressed = obj.innerHTML;
     
    if (pressed == '=') {
        inputLabel.innerHTML = eval(inputLabel.innerHTML);
         
    } else if (pressed == 'C') {
        inputLabel.innerHTML = '0';
         
    } else {
        if (inputLabel.innerHTML == '0') {
            inputLabel.innerHTML = pressed;
             
        } else {
            inputLabel.innerHTML += pressed;   
        }
    }
}
