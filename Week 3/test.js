<script>

// part 1

let a = function(){

console.log("I'm a function which is called from inside another function");

};

let b = function(callback){

console.log("I'm the function that calls another function");
callback();

}

b(a);



// part 2
let motherArray=[3,4,5,6,7,8,9,10];

function myCall(startIndex, stopIndex, threeCallback, fiveCallback) {
    let myFirstArray=[];
    let mySecondArray=[];


    for (i = 0, len = motherArray.length; i < len; i++) {
        mySecondArray = motherArray.push(i % 3);
        myFirstArray = motherArray.push(i % 5);
  }
  return mySecondArray;
}
   


console.log(myCall(3, 10, "sayThree", "sayFive"));

 


// part 3 

/* part 3.1 a FOR loop */

function repeatStringNumTimes(str, num) {
  
  for (var i = 0 ; i < 3 ; i+=1){
    
   return str.repeat(num);
  }
  if (num < 0){
    return "";
  }
}
console.log(repeatStringNumTimes("abc", 3));

/* part 3.2 a WHILE loop */

function repeatStringNumTimes(str, num) {
  var repeatedString= "";
 while(num > 0){

   repeatedString += str ;
   num --;
}

  return repeatedString;
}

repeatStringNumTimes("abc", 3);


/* part 3.2 a DO WHILE loop */

function repeatStringNumTimes(str, num) {
  if (num < 0){
    return "";
  }
  var i = 0;
  do {
    
   return str.repeat(num);
  }
  while (i < 3);
  
  
}
console.log(repeatStringNumTimes("abc", 3));


/* Another way */


function repeatStringNumTimes(str, num) {
  
 if(num>0){
    return str.repeat(num);
  }
  return "";

  
}

repeatStringNumTimes("abc", 3);


// part 4 

var MotorBike = function() {
 this.engines=1;
 this.wheels=2;
 this.seats=3;
};


// part 5


function multiplyAll(arr) {
  var product = 1;
  
  for (var i=0;  i < arr.length; i++) {
  for (var j=0; j < arr[i].length; j++) {

    console.log(product *= arr[i][j]);
 
}
}
  
  return product;
}

multiplyAll([[1,2],[3,4],[5,6,7]]);

// part 6

/* We can access any nested array by using bracket notation like in the example below*/

var ThreeDimentionsArray = [ [3,1] , [3,6] , [8,7] ]

console.log(ThreeDimentionsArray[1][0]); // outputs: 3
console.log(ThreeDimentionsArray[2][1]); // outputs: 7
console.log(ThreeDimentionsArray[0][1]); // outputs: 1

/* the same is applied on multidimensional arrays 

console.log([k][d][s]);
console.log([k][d][s][f]); 

*/


// part 7

/* this is an number which is passed by value */
let x = 9; 
function f1(val) { 
    val = val+1; 
    return val;
}
f1(x);
console.log(x);


/* this is an objects which is passed by reference */
let y = { x: 9 };
function f2(val) {
    val.x = val.x + 1;
    return val;
}
f2(y);
console.log(y);




</script>