var integerArray = [1,2,3,4,5,6,7,8,9];
var stringArray = ['Harman','Pranav','Johan','Kaur','Mann'];
var mixedArray = [1,2,3,4,'Name', 'Pranav','33',45, 45.6];


// integerArray.forEach(x => {
//     console.log(x);
// });


debugger;

console.log(`Area of a triangle is: ${areaOfAnTriangle(23,12)}`);


   var  arrayLength = stringArray.length;
   console.log(stringArray.join(''));
   var joinedarray = "Harman Pranav Johan Kaur Mann";
   var splitAnString =joinedarray.split(" ");
   console.log(arrayLength);
   var name = 'Harman';
   console.log(name.length);

    // joined = arrayParam.join(''),
    // result = joined.length / arrayLength;
    // console.log("Average of an array of name is: ", Math.round(result));


    /**
     * This method accepts two parameter base and height to calculate an area of triangle
     * @param {*base in integer format} base 
     * @param {*height in integer format} height 
     * @returns area of an triangle
     */
    function areaOfAnTriangle(base, height) {
        return (0.5* base* height);
    }
