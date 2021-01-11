const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

/////////////////
findKeyByValue = ( object, value ) => {
  for ( let key of Object.keys(object) ){
    //console.log(key);
    //console.log(object[key]);
    if ( object[key] === value) {
      return key;
    }
  }  
};

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
//// Object.keys()
// const obj = {
//   c: 'c',
//   a: 'a',
//   b: 'b'
// }
// Object.keys(obj) // ["c", "a", "b"]
