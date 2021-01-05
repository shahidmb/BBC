 var  sub1 =prompt("Enter Subject1 number: ");
      sub1 = Number(sub1) 
 var  sub2 =prompt("Enter Subject2 number: ");
      sub2 = Number(sub2)
 var  sub3 =prompt("Enter Subject2 number: ");
      sub3 = Number(sub3)
var  obtain = (sub1+sub2+sub3);
var  total_marks=300;
document.write("Total Marks : "+total_marks+"<br/>");
document.write("Marks Obtain : "+obtain+"<br/>");
var percen = ((obtain/total_marks)*100);
    percen=percen.toFixed(2)
document.write("Percentage : "+percen+"<br/>")
if (percen >= 80){
document.write("Grade: A-1 <br/>"+"Remarks: Excellent");

}

if((percen >= 70.0)&&(percen <=79.99))
{document.write("Grade: A <br/>"+"Remarks: Good");
}

if((percen >= 60.0)&&(percen <=69.99))
{document.write("Grade: B <br/>"+"Remarks: You need to improve");
}
if((percen <=60))
{document.write("Grade : Fail <br/>"+"Remarks: Sorry");
}