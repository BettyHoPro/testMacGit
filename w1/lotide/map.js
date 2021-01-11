// //
// const lighthouses = ["Gibraltar Point", "Peggy's Point", "Cove Island", "Discovery Island", "Cape Scott", "Point Clark", "Kincardine"];

// let lengthmap=lighthouses.map(x=>x.length);

// console.log(lengthmap);

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

map =(array, callback) => {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
console.log(results1);
//console.log(word[0]);

assertArraysEqual(map(words, word => word[0]), [ 'u', 'c', 't', 'r', 't' ]);
assertArraysEqual(map(words, word => word[02]), [89]);
assertArraysEqual(map(words, word => word[02]), [02]);
assertArraysEqual(map(words, word => word[0]), ["Lighthouse Labs"]);
