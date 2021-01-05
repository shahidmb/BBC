 var num1 = prompt("Enter the First Number: ");
     num1 = Number(num1)
 var num2 = prompt("Enter the Second Number: "); 
     num2 = Number(num2);  
 var op = prompt("Enter Operation +,-,*,/ ");

 if(op === "+")
 {
     add1=num1+num2;
     document.write(num1+"+"+num2+" = "+add1)
}

if(op === "-")
 {
     add1=num1-num2;
     document.write(num1+"-"+num2+" = "+add1)
}
if(op === "*")
 {
     add1=num1*num2;
     document.write(num1+"*"+num2+" = "+add1)
}
if(op === "/")
 {
     add1=num1/num2;
     document.write(num1+"/"+num2+" = "+add1)
}
