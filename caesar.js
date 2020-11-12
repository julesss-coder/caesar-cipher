const caesar = function(string, shift) {
     // Kann man die Buchstaben eines Strings über i ansteuern? Ja, kann man!!
  let solved = "";
  let asciiNum;
  // Durch String loopen und jeden Charakter in ASCII-Zahl verwandeln
  for(let i = 0; i < string.length; i++) {
    asciiNum = string[i].charCodeAt();
    // FALL A: GROSSBUCHSTABEN
    if((asciiNum + shift) > 90) {
      // Shift wird in zwei Teile aufgeteilt. Der erste führt bis zum ENde des Alfabets, der zweite beginnt wieder vorne
        let shiftFirstPart = 90 - asciiNum;
        let shiftSecondPart = shift - shiftFirstPart;
        solved += String.fromCharCode(65 + shiftSecondPart);
      // beginne wieder bei A
      } else if((asciiNum + shift) > 122) {
        // Shift wird in zwei Teile aufgeteilt. Der erste führt bis zum ENde des Alfabets, der zweite beginnt wieder vorne
          let shiftFirstPart = 122 - asciiNum;
          let shiftSecondPart = shift - shiftFirstPart;
          solved += String.fromCharCode(97 + shiftSecondPart);
        // beginne wieder bei A
      } else {
        // Fall 5: Charakter ist Sonderzeichen oder Leerzeichen
        solved += string[i];
      }
      return solved;
    }
}
  // // Fall 1: Charakter ist ASCII zwischen 65 und 90
  //   if (asciiNum >= 65 && asciiNum <= 90) {
  // // ASCII + 13 und in Buchstaben umwandeln
  //     solved += String.fromCharCode(asciiNum + shift);
  // // // Fall 2: Charakter ist ASCII über 78
  // //   } else if (asciiNum >= 78 && asciiNum <= 90) {
  // //     solved += String.fromCharCode(asciiNum - shift);
  // // Fall 2: Charakter ist Kleinbuchstabe, d.h. ASCII
  //   } else if(asciiNum >= 97 && asciiNum <= 122) {
  //       solved += String.fromCharCode(asciiNum + shift);
  //   // } else if(asciiNum >= 110 && asciiNum <= 122) {
  //   //     solved += String.fromCharCode(asciiNum - shift); 
    
// Wenn der Shift über das Ende des Alphabets hinausgeht, soll das Zählen bei A/a wieder anfangen
  // zwei getrennte Fälle je nach Gross- oder Kleinbuchstaben
  // Fall 1: Wenn ASCII > 90 dh Z
  // if((asciiNum + shift) > 90) {
  // // Shift wird in zwei Teile aufgeteilt. Der erste führt bis zum ENde des Alfabets, der zweite beginnt wieder vorne
  //   let shiftFirstPart = 90 - asciiNum;
  //   let shiftSecondPart = shift - shiftFirstPart;
  //   solved += String.fromCharCode(65 + shiftSecondPart);
  // // beginne wieder bei A
  // }

// // Kleinbuchstaben
// if((asciiNum + shift) > 122) {
//   // Shift wird in zwei Teile aufgeteilt. Der erste führt bis zum ENde des Alfabets, der zweite beginnt wieder vorne
//     let shiftFirstPart = 122 - asciiNum;
//     let shiftSecondPart = shift - shiftFirstPart;
//     solved += String.fromCharCode(97 + shiftSecondPart);
//   // beginne wieder bei A
//   }
module.exports = caesar
