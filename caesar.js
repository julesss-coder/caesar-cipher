const caesar = function(string, shift) {
  let solved = "";
  let asciiNum;
  // Loop through string and convert each character into ASCII-number
  for(let i = 0; i < string.length; i++) {
    asciiNum = string[i].charCodeAt();
    // Case A: Uppercase letters
    if((asciiNum + shift) > 90) {
      // Shift is split into two parts. The first part goes to the end of the 
      // alphabet, the second on starts again at its beginning. 
        let shiftFirstPart = 90 - asciiNum;
        let shiftSecondPart = shift - shiftFirstPart;
        solved += String.fromCharCode(65 + shiftSecondPart);
    // Case B: Lowercase letters
      } else if((asciiNum + shift) > 122) {
      // Shift is split again, like above
          let shiftFirstPart = 122 - asciiNum;
          let shiftSecondPart = shift - shiftFirstPart;
          solved += String.fromCharCode(97 + shiftSecondPart);
      } else {
    // Case C: The character is a special character, not a letter
        solved += string[i];
      }
      return solved;
    }
}

module.exports = caesar
