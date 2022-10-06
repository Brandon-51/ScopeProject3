/***********************************************************************
Write a function named: interrupter(interruptingWord). The interrupter function will
accept a word and return a function. When the function returned by interrupter
is invoked with a string the string will be returned with "interruptions".

Look below to see how this function is invoked:


***********************************************************************/

// Your code here
function interrupter(interruptingWord) {
  return function (sentence) {
    arr = sentence.split(" ");
    return arr.join(" " + interruptingWord + " ");
    //return words.join(' ' + )
  };
}

let rudePerson = interrupter("what"); // => returns a function
console.log(rudePerson("how are you")); // prints "how what are what you"
console.log(rudePerson("I like pie")); // prints "I what like what pie"

let rudePerson2 = interrupter("yo"); // => returns a function
console.log(rudePerson2("I love dogs")); // prints "I yo love yo dogs"

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = interrupter;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
