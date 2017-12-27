let history = [];



function add(in1,in2){
    return in1 + in2;
}
function subtract(in1,in2){
    return (in1 - in2);
}
function divide(in1,in2){
    return in1 / in2;
}
function multiply(in1,in2){
    return in1 * in2;
}






let calculated = function(input){
    
    let in1 = Number(input.in1);
    let in2 = Number(input.in2);
    let operator = input.operator;
    let result = 0;

    if (operator === "+"){
        result = add(in1,in2);
    }
    if (operator === "-"){
        result = subtract(in1,in2);
    }
    if (operator ==="/"){
        result = divide(in1,in2);
    }
    if(operator === "*"){
        result = multiply(in1,in2);
    }
    function trackHistory(){
        history.push(in1 + ' ' + operator + ' ' + in2 + ' ' + '=' + ' ' + result );
        console.log(history);
    }//end trackHistory function
    trackHistory();
    

    return result;
}//end calculate function




module.exports = {
    calc: calculated,
    history: history
} 