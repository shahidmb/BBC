 var Gn = prompt("Guess The Secret Number: ");
     Gn = Number(Gn);
 var sn1 = 8;
 var sn2= sn1+1;
 if (sn1 == Gn)
 {
      document.write("Bingo! Corrent answer")
 } 
 if (sn2 == Gn)
 {
      document.write("Close enough to the correct answer")
 }
