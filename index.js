let digits = [
  [" _ ", "| |", "|_|"],
  ["  ", " |", " |"],
  [" _ "," _|","|_ "],
  [" _ ", " _|", " _|"],
  ["   ", "|_|", "  |"],
  [" _ ", "|_ ", " _|"],
  [" _ ", "|_ ", "|_|"],
  [" _ ", "  |", "  |"],
  [" _ ", "|_|", "|_|"],
  [" _ ", "|_|", " _|"],
 ]
  
   function displayLCD(number){
     let chaine = number.toString();
     for(let i=0;i<3;i++){
      let str="" ;

         for(let j=0;j<chaine.length;j++){
   str+= digits[parseInt(chaine[j])][i];
         }
         console.log(str)
     }
 }
 //exemple our input number is num
 let number = 1234567890;
 displayLCD(number)