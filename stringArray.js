console.log("");
console.log("___________________Question Number 2________________________");
 
 //Declaring a string Array
let names= ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
console.log("Array: ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];")

/*Calling method to calculate an average of string array */
calculateAverageOfNames(names);

/*Calling method to concatinate names separtaed by spaces from string array */
conacatNamesArray(names);

/*adding the length of each name to the nameLengths array. */
console.log("___________________Question Number 5________________________");
console.log("Array: ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];")
console.log(countNameLength(names));

/*calculating the sum of all the elements in the array. */
console.log("___________________Question Number 6________________________");
console.log("Array: ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];")
sumOfAnArrayNameLength();

console.log("");
console.log("___________________Question Number 7________________________");
/* Printing n times word */
console.log(printntimes('harman',10));

console.log("");
console.log("___________________Question Number 8________________________");
/* Printing n times word */
console.log(printFullName('Harman', 'Kaur'));

console.log("");
console.log("___________________Question Number 9________________________");
/* Printing sum of an Array is greater or lesser 100 */
sumOfAnArray();

console.log("");
console.log("___________________Question Number 10________________________");
/* Printing average of all array elements in an array */
let arrayVal = [120, 34, 45, 3, 2, 3, 4, 5, 56, 87];
// Reusing method from Script.js to calculate an average as they have same logic for calcuatin an average
// Implementing DRY (Donot repeat yourself) principle.
calculateAverageAge(arrayVal);


console.log("");
console.log("___________________Question Number 11________________________");
/* Printing average of all array elements in an array */
let array1 = [120, 34, 45, 3, 2, 3, 4, 5, 56, 87];
let array2 = [20,35,32,14,35,65,76];

console.log("Array 1 : [120, 34, 45, 3, 2, 3, 4, 5, 56, 87]");
console.log("Array 2 : [20,35,32,14,35,65,76]")
calculateAverageFromtwoArrays(array1,array2);

console.log("");
console.log("___________________Question Number 12________________________");
/* Calling method willBuyDrink which takes two argument boolean and float value */

// Use this variables for the condition hot 
// let isHotOutside = true;
// let moneyInPocket = 15.3;

let isHotOutside = false;
let moneyInPocket = 10.2;

console.log("IsHotOutside: ", isHotOutside);
console.log("MoneyInPocket: ", moneyInPocket);
willBuyDrink(isHotOutside, moneyInPocket);

console.log("");
console.log("___________________Question Number 13________________________");
/* Function for calculator */
Calculator();


//#region All Methods Definition

/**2a. Calculating an average of string names
 * 
 * @param {*} arrayParam 
 */
function calculateAverageOfNames(arrayParam) {
    arrayLength = arrayParam.length,
    joined = arrayParam.join(''),
    result = joined.length / arrayLength;
    console.log("Average of an array of name is: ", Math.round(result));
}

/**
 * 2b.Using a loop to iterate through the array again and concatenate all the names together, separated by spaces. 
 * @param {*} arrayParam 
 */
function conacatNamesArray(arrayParam) {
    var resultString = ""; // result variable
    //iterate each item of array
    for (var i = 0; i < arrayParam.length; i++) 
    resultString += arrayParam[i] + " ";

    console.log(resultString);
}

/**
 * Method for counting name length of string per array 
 * @param {*} array 
 * @returns 
 */
function countNameLength(array){
    const resultArray = array.map((element) => {
        return element.length;
     });
     return resultArray;
}

/**To find a sum of a name array converted into length of a name */
function sumOfAnArrayNameLength() {
    var arrayValue = countNameLength(names);
    let result = arrayValue.reduce((a, b) => {
        return a + b;
      });
    
    console.log("Sum of an arrray length is : ", result)
}

/**
 * function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times
 * @param {*} word 
 * @param {*} n 
 */
function printntimes(word,n){
    if (n > 0){
        return word.repeat(n);
    } else {
        return "";
    }
}

/**
 * method that returns full Name by concatinating it
 * @param {*firstname as string params} firstName 
 * @param {*lastname as string params} lastName 
 */
function printFullName(firstName, lastName) {
    return firstName + " " + lastName;
}


/**
 * Method To find a sum of an array 
 */
function sumOfAnArray() {
    // Replace this with arrayValueForLesThanHundred.reduce to print greater than 100
   // let arrayValueForGreaterThanHundred = [120, 34, 45, 3, 2, 3, 4, 5, 56, 87];
    let arrayValueForLesThanHundred = [1,2,3,5,6,7,8,];
    let result = arrayValueForLesThanHundred.reduce((a, b) => {
        return a + b;
      });
    
    if(result > 100) {
        console.log("Array Value: [120, 34, 45, 3, 2, 3, 4, 5, 56, 87]");
        console.log("Sum of an array is greater than 100");
        return true;
    } else {
        console.log("Array Value: [1,2,3,5,6,7,8]");
        console.log("Sum of an array is lesser than 100");
        return false;
    }
}

/**
 * function that takes two arrays of numbers and returns true 
 * if the average of the elements in the first array is greater than the average of the elements in the second array
 * @param {*Takes an array as first param} array1 
 * @param {*Takes an array as second param} array2 
 */
function calculateAverageFromtwoArrays(array1,array2) {
    var total = 0;
    var count = 0;
    var total1 = 0;
    var count1 = 0;

    array1.forEach(function(item, index) {
        total += item;
        count++;
    });
   
    var avgOfArr1 = Math.round(total/count);
    console.log("Average of Array 1: ", avgOfArr1);
  
    array2.forEach(function(item, index) {
        total1 += item;
        count1++;
    });
   
    var avgOfArr2 = Math.round(total1/count1);
    console.log("Average of Array 2: ",avgOfArr2);

    if(avgOfArr1 > avgOfArr2){
        console.log('Average of the elements in first array is greater than second array');
    } else {
        console.log('Average of the elements in first array is lesser than second array');
    }
}

/**
 * Using ternary operator to find that isHotOutside is true or false and moneyInPocket is greater then 10.4
 * @param {*boolean value as first parameter} isHotOutside 
 * @param {*float value as second parameter} moneyInPocket 
 */
function willBuyDrink(isHotOutside, moneyInPocket) {
    (isHotOutside && moneyInPocket > 10.50) ?   
    console.log("It's hot outside \nYour money in pocket is greater than: 10.4"):
    console.log("It's chilly outside \nYour money in pocket is lesser than :  10.4") ;
}


/**
 * Custom function to create calculator with all operators
 */
 function Calculator() {
    // program for a simple calculator

// take the operator input
const operator = prompt('Enter operator ( either +, -, * or / ): ');

// take the operand input
const number1 = parseFloat(prompt('Enter first number: '));
const number2 = parseFloat(prompt('Enter second number: '));

let result;

// using if...else if... else
if (operator == '+') {
    result = number1 + number2;
}
else if (operator == '-') {
    result = number1 - number2;
}
else if (operator == '*') {
    result = number1 * number2;
}
else {
    result = number1 / number2;
}
console.log('Result');
// display the result
console.log(`${number1} ${operator} ${number2} = ${result}`);
}


//#endregion

