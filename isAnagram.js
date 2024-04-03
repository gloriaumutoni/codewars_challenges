/* 
An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise. 
*/ 

function isAnagram(test, original){
    let newTest=test.toLowerCase().split('').sort();
    let newOriginal=original.toLowerCase().split('').sort();
   console.log(newTest.join('')==newOriginal.join(''));
  };
  isAnagram("foefet","toffee")
  isAnagram("Buckethead","DeathCubeK")
  isAnagram("bumble","dumble")