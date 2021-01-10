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
/////////// func /////////
middle = ( array ) => { 
  let arrMiddle = [ ];
  let midNum = array.length/2;
  let midNumOdd=Math.floor(midNum);
  
  if ( array.length <= 2 ) {  
    arrMiddle=[];
  }else if ( array.length % 2 === 1 ){
   arrMiddle.push(array[midNumOdd]);
  }else{
   arrMiddle.push(array[midNum-1]);
   arrMiddle.push(array[midNum]);
  }
  return arrMiddle;
}



//////// test code //////
//For arrays with one or two elements, there is no middle. Return an empty array.
console.log(middle([1])) // => []
console.log(middle([1, 2])) // => []
//For arrays with odd number of elements, an array containing a single middle element should be returned.
console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]
//For arrays with an even number of elements, an array containing the two elements in the middle should be returned
console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]