// single line comment

/* 
   multi line comment
   second line of comment
   third line of comment
*/

// Variable declaration
var name = 'John Doe';  // Var can be redeclared and updated
let age = 30;           // let can be updated but not redeclared
const isStudent = true; // const cannot be updated or redeclared

// Printing to console
console.log('Welcome to JavaScript!');
console.log('Hello, '+ name);
console.log('Age: '+ age);
console.log('Is Student: '+ isStudent);

// Data types
let string = 'This is a string';
let integer = 12345.67890;
let boolean = false;
let undefinedVale = undefined;
let nullValue = null;

// Assignment operators
let x = 5;
x += 10; // Addition assignment
x -= 3;  // Subtraction assignment
x *= 2;  // Multiplication assignement
x /= 4;  // Division assignment
x %= 3;  // Modulus assignment
x ++;    // Increment assignment
x --;    // Decrement assignment

// Comparison operators
let a = 10;
let b = 20;

console.log(a == b);  // Equal to, returns false
console.log(a != b);  // Not equal to, returns true
console.log(a === b); // Strict equal to (check both value and types), returns false
console.log(a !== b); // Strict not equal to (check both value and types), returns true
console.log(a > b);   // Greater than, returns false
console.log(a < b);   // Less than, returns true
console.log(a >= b);  // Greater than or equal to, returns false
console.log(a <= b);  // Less than or equal to, returns true

// Logical operators
let c = true;
let d = false;

console.log(c && d); // Logical AND, true if both operands are true, else false, returns false
console.log(c || d); // Logical OR, true if at least one operand is true, else false, returns true
console.log(!c);     // Logical NOT, true if the operand is false, and false if the operand is true, returns false
