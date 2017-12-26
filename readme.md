

###Weekend Challenge 2

###

DOM Setup:
[X] - set up files and server
[X] - DOM input fields that take in 2 numerical values.
[X] - DOM Selector button for mathmatical operation.
[ ] - DOM output to show results of server calculations.
[ ] - DOM output field to show calculation history.

Client Side Input:
[ ] - logic to take in numberial values.
[ ] - logic to take in selected operator.
[ ] - Ajax POST call to server with above data input.*

Client Side Output:
[ ] - jQuery to append results to DOM.
[ ] - Ajax GET Call to fetch results.
[ ] - Ajax GET Call to fetch history.*


Server side:

[ ] - Ajax Get Listen to get POST inputs




The logic for the calculator needs to be implemented on the server. The client side will take in the values (in 2 input text fields) and the type of mathematical operation (selected using a button on the DOM). Each of the numerical values and type of mathematical operation will be bundled up in an object and then sent to the server via a POST. So when the object is sent, it should look something like this:

{
   x: 3,
   y: 4,
   type: "Add"
}
Once the server receives it, build out logic to compute the numbers in 1 of 4 different ways. The server should be able to handle Addition, Subtraction, Multiplication, and Division. Once the calculation is complete, it should be sent back down to the client side app where it should be displayed on the DOM.