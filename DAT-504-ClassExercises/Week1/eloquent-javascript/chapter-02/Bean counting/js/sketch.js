let countedChar = 0;
let userString = prompt('Enter a word');
let userCharCount = prompt('What letter would you like me to count?');

document.getElementById("myID").innerHTML = `The total number of, (${userCharCount}'s), in your word, (${userString}), is ${countChar(userString, userCharCount)} `;
console.log(countChar(userString, userCharCount)/2);

function countChar(myString, char){
  for(let x = 0; x < myString.length; x++){
    if(myString[x] == char){
      countedChar += 1;
    }
  }
  return countedChar;
}
