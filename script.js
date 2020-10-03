// defining the function - take an input, convert it to string and return the reversed string
function findLongestWordLength(str) {
    let words = str.split(' ');
    let maxLength = 0;
    for (let i=0; i < words.length; i++) {
      if (words[i].length > maxLength) {
        maxLength = words[i].length ;
      }
    }
    return maxLength;
  }
// add the value of the reversedString function to <p> tag
function returnLongest() {
    let str = document.getElementById("string").value;
    document.getElementById("longest-word").innerHTML = findLongestWordLength(str);
};