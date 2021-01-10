const eqArrays = function (arr1, arr2){
  if ( arr1.length !== arr2.length ){
    return false;
  } else {
    for (let q=0 ; q< arr1.length; q++){
      if ( arr1[q] !== arr2[q]) {
        return false ;
      }
    }
    return true;
  }
}

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Array Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Array Assertion Failed: ${arr1} !== ${arr2}`);
  }
};
/////////////////

without = (source, itemsToRemove) => {
  let answer = []
  for (let a = 0; a < source.length; a++) {
    let add = true;
    for (let w = 0; w < itemsToRemove.length; w++) {
     ( source[a] === itemsToRemove[w] ) && (add = false ); // if condition
    }
    add && ( answer.push(source[a]));
  }
  return answer;
};

///////////// from Compass

//--- without function: (  source array ,  itemsToRemove array ) ===> source arr[q] not in itemsToRemove arr
without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]


const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

//// test outcome
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]) 
assertArraysEqual(without([ "1" , 2, 4 ], [ "1","4" ]), [ 2,4 ]) 
assertArraysEqual(without([1, 2, 3], [ 3, 7 ]), [1, 2 ]) 

