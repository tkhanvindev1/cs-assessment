//https://docs.google.com/document/d/1TTvp0zsmxlrG5h1zkaP8iG5dFIfhoPOHmVQ6_UocvBQ/edit?usp=sharing


const sumZero = (arrList) => {
  let sum = 0
  arrList.forEach(num => sum += num)
  if(sum === 0){
  return true
}else{
  return false
}
}
   
sumZero([6,2,3,-2,5]) // O(n) 



function hasUniqueChars(str) {

    let word = {};

    for (let i = 0; i < str.length; ++i) {
      let letters = str[i];
      if (word[letters]) return false;
      word[letters] = true;
    }
    return true;
  }

  console.log(hasUniqueChars("Moonday")); //  O(n) depends how big is a string it's loop over each element of the passing value so time increases if passing value is increases. 

const isPangram = (string) => {
    let lowerCased = string.toLowerCase();
    for (let letters of 'abcdefghijklmnopqrstuvwxyz') {
        if (!lowerCased.includes(letters)) {
            return false;
         }
      }
     return true;
    }
console.log(isPangram("I like cats, but not mice")) // O(n^2)



const findLongestWord = (arr) => {
    let word = "";
    for (let i = 0; i < arr.length; i++) {
      if (word.length < arr[i].length) {
        word = arr[i];
      }
    }
    return word;
  }
  
console.log(findLongestWord((["hi", "hello"]))) //0(n)