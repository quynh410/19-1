let sentence = "The quick brown fox jumped over the lazy dog";
let result = findLongestWordLength(sentence);

function findLongestWordLength(str) {

    let words = str.split(' ');

    words.sort(function(a, b) {
      return b.length - a.length;
    });
  
    let longestWord = words[0];
    let longestLength = longestWord.length;
  
    for (let i = 1; i < words.length; i++) {
      if (words[i].length === longestLength) {
        longestWord = words[i];
        break;
      }
    }
  
 
    return [longestWord, longestLength];
  }
  console.log(result);