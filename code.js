// Q1. Write a program to find all pairs of an integer array whose sum is equal to a given number?

var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var num = 10;

var arrayPairs = [];

for (var i = 0; i < arr1.length; i++) {
  for (var j = 0; j < arr1.length; j++) {
    if (arr1[i] + arr1[j] == num) {
      arrayPairs.push([arr1[i], arr1[j]]);
    }
  }
}

console.log(arrayPairs);

//Q2. Write a program to reverse an array in place? In place means you cannot create a new array. You have to update the original array.

function reverseArray(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    
    const temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;

    
    left++;
    right--;
  }
}

const arr = [2,5,8,9,0];
reverseArray(arr);
console.log(arr); 


//Q3. Write a program to check if two strings are a rotation of each other?

function checkingRotations(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  var concatenatedStr = str1 + str1;

  if (concatenatedStr.includes(str2)) {
    return true;
  }
  return false;
}
var str1 = "venkatesh";
var str2 = "teshvenka";
var result = checkingRotations(str1, str2);
console.log(result);

//Q4. Write a program to print the first non-repeated character from a string?

var inputString = "helloworld";
var foundNonRepeating = false;

for (var i = 0; i < inputString.length; i++) {
  var count = 0;
  for (var j = 0; j < inputString.length; j++) {
    if (inputString.charAt(i) == inputString.charAt(j)) {
      count++;
    }
  }
  if (count == 1) {
    console.log("First non-repeating character:", inputString.charAt(i));
    foundNonRepeating = true;
    break;
  }
}

if (!foundNonRepeating) {
  console.log("Every character is repeating in the string");
}

//Q5. Read about the Tower of Hanoi algorithm. Write a program to implement it.

function towerOfHanoi(n, source, auxiliary, destination) {
  if (n === 1) {
    console.log(`Move disk 1 from ${source} to ${destination}`);
    return;
  }
  towerOfHanoi(n - 1, source, destination, auxiliary);

  console.log(`Move disk ${n} from ${source} to ${destination}`);

  towerOfHanoi(n - 1, auxiliary, source, destination);
}

var numDisks = 3;
var source = "X";
var auxiliary = "Y";
var destination = "Z";

console.log(`Tower of Hanoi with ${numDisks} disks:`);
towerOfHanoi(numDisks, source, auxiliary, destination);

//Q6. Read about infix, prefix, and postfix expressions. Write a program to convert postfix to prefix expression.

function postfixToPrefix(postfixExpression) {
  var stackOfOperator = [];
  var stackOfValues = [];
  var operators = "+-*/";

  for (var i = 0; i < postfixExpression.length; i++) {
    if (operators.includes(postfixExpression.charAt(i))) {
      stackOfOperator.push(postfixExpression.charAt(i));
    } else {
      stackOfValues.push(postfixExpression.charAt(i));
    }
  }
  return stackOfOperator + stackOfValues;
}

var postfixExpression = "568*287/68+5-";
var prefixExpression = postfixToPrefix(postfixExpression);
var prefixExpression = prefixExpression.split(",").join("");
console.log("Prefix Expression:", prefixExpression);

//Q7. Write a program to convert prefix expression to infix expression.

function isOperator(char) {
  return "+-*/".includes(char);
}

function prefixToInfix(prefixExpression2) {
  const stack = [];
  const operators = "+-*/";

  for (let i = prefixExpression2.length - 1; i >= 0; i--) {
    const char = prefixExpression2[i];

    if (!isOperator(char)) {
      stack.push(char);
    } else {
      const operand1 = stack.pop();
      const operand2 = stack.pop();

      const newExpression = `(${operand1}${char}${operand2})`;

      stack.push(newExpression);
    }
  }

  return stack.pop();
}

const prefixExpression2 = "*+23/45";
const infixExpression = prefixToInfix(prefixExpression2);
console.log("Infix Expression:", infixExpression);

// Q8. Write a program to check if all the brackets are closed in a given code snippet.

var expression = "[()]{}([]";
var openingArr = [];
for (var i = 0; i < expression.length; i++) {
  if (
    expression.charAt(i) == "{" ||
    expression.charAt(i) == "(" ||
    expression.charAt(i) == "["
  ) {
    openingArr.push(expression.charAt(i));
  } else {
    if (openingArr.length == 0) {
      console.log("Not Balanced");
      break;
    } else {
      var popedItem = openingArr.pop();
      if (
        (popedItem == "(" && expression.charAt(i) == ")") ||
        (popedItem == "{" && expression.charAt(i) == "}") ||
        (popedItem == "[" && expression.charAt(i) == "]")
      ) {
      } else {
        console.log("Not Balanced");
        break;
      }
    }
  }
  if (i == expression.length - 1) {
    if (openingArr.length == 0) {
      console.log("Balanced");
    } else {
      console.log("Not Balanced");
    }
  }
}

//Q9. Write a program to reverse a stack.

class Stack1 {
  constructor() {
    this.items = [];
    this.length = 0;
    this.insert = function (value) {
      this.items[this.length] = value;
      this.length += 1;
    };
    this.popping = function () {
      this.length -= 1;
      return this.items.pop();
    };
    this.reverse = function () {
      var reversedStack = [];
      var length = this.length;
      for (var i = 0; i < length; i++) {
        var poppedItem = this.popping();
        reversedStack.push(poppedItem);
      }
      this.items = reversedStack;
    };
  }
}

var stack1 = new Stack1();

stack1.insert(10);
stack1.insert(20);
stack1.insert(30);
stack1.insert(40);

stack1.reverse();
console.log(stack1.items);

//Q10. Write a program to find the smallest number using a stack.

class Stack {
  constructor() {
    this.items = [];
    this.minStack = [];
  }
  push(item) {
    this.items.push(item);
    if (
      this.minStack.length === 0 ||
      item <= this.minStack[this.minStack.length - 1]
    ) {
      this.minStack.push(item);
    }
  }
  pop() {
    if (this.isEmpty()) {
      return null;
    }
    var poppedItem = this.items.pop();
    if (poppedItem === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop();
    }
    return poppedItem;
  }
  isEmpty() {
    return this.items.length === 0;
  }
  getMin() {
    if (this.minStack.length === 0) {
      return null;
    }
    return this.minStack[this.minStack.length - 1];
  }
}

var myStack = new Stack();
myStack.push(5);
myStack.push(2);
myStack.push(3);
myStack.push(1);
myStack.push(4);

console.log("Minimum element in the stack:", myStack.getMin());

  
  