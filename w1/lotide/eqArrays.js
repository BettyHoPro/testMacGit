const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};
// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

/// ///////////////////////////
const eqArrays = function (arr1, arr2){
  if ( arr1.length === arr2.length ){
   return true;
   for (let q=0 ; q< arr1.length; q++){
      if ( arr1[q] === arr2[q]){
        return true;
      }
    }
  }
  return false;
}

// // //console.log(arr1 === arr2 );
// console.log(arr1);

//==== test like this === //////
// eqArrays([1, 2, 3], [1, 2, 3]) // => true
// eqArrays([1, 2, 3], [3, 2, 1]) // => false

// eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
// eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false
//assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
//assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"], true);
//assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3], false);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);