
//a.
 var a = 4;
if (++a === 5) {
alert("given condition for variable a is true");
}
//output:  given condition for variable a is true

//b.
 var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
//output: 

//c.
 var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
//Out Put: condition 2 is true
//Out Put:  condition 4 is true  

//d.
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
//Out Put: The cost equals

//e. 
if (true){
alert("True");
}
if (false){
alert("False");
}
//Out Put:  true

//f. 
if("car" < "cat"){
alert("car is smaller than cat");
}
//Out Put:  car is smaller than cat






