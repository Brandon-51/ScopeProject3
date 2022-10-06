/***********************************************************************
Write a function using fat arrow syntax, `arrowGetFullName(person)` that takes in
a person object and returns a string containing their full name.

Assign the below function to a variable using the const keyword. Using the const
keyword will allow any value assigned to that variable protection from being
reassigned within that scope.

Examples:


***********************************************************************/

// Your code here

const arrowGetFullName = (person) => {
  let name1 = person["firstName"];
  let name2 = person["lastName"];
  return name1 + " " + name2;
};

let p1 = { firstName: "John", lastName: "Doe" };
arrowGetFullName(p1); // => 'John Doe'
let p2 = { firstName: "Charlie", lastName: "Brown", age: 9 };
arrowGetFullName(p2); // => 'Charlie Brown'
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = arrowGetFullName;
} catch (e) {
  module.exports = null;
}
