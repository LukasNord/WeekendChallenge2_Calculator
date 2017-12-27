console.log('js');


$(document).ready(startUp);

function startUp() {
    
    $('#submit').on('click', fetchInput);

}//end startUp function
class Inputs{
    constructor(in1,in2,operator){
        this.in1 = in1,
        this.in2 = in2,
        this.operator = operator
    }//end constructor
}//end Inputs class

function fetchInput(){
    
    let input = new Inputs( $('#input1').val(), $('#input2').val(), $('#selector option:selected').val() );
     
    $.ajax({
        method: 'POST',
        url: '/calculate',
        data: input,
        success: function(response){
           
            $('#output').val('');
            appendHistory(response);
            appendResult(response);
        }
    });//end ajax POST

}// end fetchInput function

function appendHistory(response){
    let history = response.history;
    
    let i = history.length-1;
    
    $('#history').prepend('<p>'+ history[i] + '<p>');
}//end appendHistory

function appendResult(response){
    $('#output').text(response.result);
}//end appendResult