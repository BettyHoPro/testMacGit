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
//////////// this /////////
 takeUntil = (array, callback) => {
  const result = [];
  for (let qInArr of array) {
    if ( callback(qInArr)) {
      return result;
    } else {
      result.push(qInArr);
    }
  }
  return result;
}

//expected input
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
//[ 1, 2, 5, 7, 2 ]

console.log('---');


const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
//[ 'I\'ve', 'been', 'to', 'Hollywood' ]