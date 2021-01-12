const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

const eqArrays = function (arr1, arr2){
  // console.log(arr1);
  // console.log(arr2);

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
////// this ///////
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

// Array
const eqObjects = function(object1, object2) {
  let key1 = Object.keys(object1);
  let key2 = Object.keys(object2);
  if ( key1.length !== key2.length ) {
    return false;
  }
  // console.log(key1);
  // console.log(key2);
  for ( let key of key1 ){
    let kInOb1 = object1[key];
    let kInOb2 = object2[key];
    if (Array.isArray(kInOb1)) {
      if (!Array.isArray(kInOb2 ) ) {
        return false;
      } else if (!eqArrays(kInOb1, kInOb2)) {
        return false;
      }
    } else if (kInOb1 !== kInOb2) {
      return false;
    }
  }
  return true;
};



const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };


assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);
assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(cd, cd2), false);
