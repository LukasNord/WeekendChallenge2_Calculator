console.log('js');


$(document).ready(startUp);

function startUp() {
    
    $('#submit').on('click', fetchInput);


}

function fetchInput(){
    class Inputs{
        constructor(in1,in2,operator){
            this.in1 = in1,
            this.in2 = in2,
            this.operator = operator
        }//end constructor
    }//end Inputs class

let input = new Inputs( $('#input1').val(), $('#input2').val(), $('#selector option:selected').text() );
    
console.log('inputs are: ', input);
}// end fetchInput function