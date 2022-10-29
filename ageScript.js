 //Declaring an int Array
 console.log("___________________Question Number 1________________________");
 let ages = [120, 34, 45, 3, 2, 3, 4, 5, 56, 87];
 console.log("array before pushing new value: [120, 34, 45, 3, 2, 3, 4, 5, 56, 87]");

 /*Calculating average age before pushign new item to an array */
 calculateAverageAge(ages);

  /*Calculating difference of first element and last element before pushign new item to an array */
console.log("Difference of array's before pushing new element: ", findDifference(ages));

 /*1b.  Pushing new item to the declared array */
 ages.push(90)
 
 console.log("array after pushing new value: [120, 34, 45, 3, 2, 3, 4, 5, 56, 87, 90]");
 /*Calculating average age after pushing new item to an array */
 calculateAverageAge(ages);

  /*Calculating difference of first element and last element after pushing new item to an array */
  console.log("Difference of array's after pushing new element: ", findDifference(ages));

/* creating function for finding first and last element from an array this metthod is dynamic which 
which will pick last and first element dynamiclly after pushing new element from array */
function findDifference(array) {
     // Storing the first item and second in a variable
     let [firstEl, lastEl] = ages.filter((item, i)=> (i == 0) || (i == ages.length -1 ));
  
 // Printing output to screen
 console.log("first element is "+ firstEl);
 console.log("last element is "+ lastEl);
 return firstEl-lastEl;
}

// 1c.	Using a loop to iterate through the array and calculating the average age. 
function calculateAverageAge(array) {
    var total = 0;
    var count = 0;

    array.forEach(function(item, index) {
        total += item;
        count++;
    });
    
    /*Calculating an average age in roudned format */
    console.log("Average age is : ", Math.round(total/count));
    return total / count;
}
