//------------task5 sort---------\\

var array = [];
for (i = 0 ; i < 3; i++){
var number = prompt ("enter your number");
array.push(number)}
array.sort();

    document.write(`your array = ${array} <br>
    sorted array = ${array.sort(function(a,b){

    return  a - b})} <br> 
    your descending array = 
    ${array.sort(function(x,y){

        return  x < y})} <br>
        
    `)