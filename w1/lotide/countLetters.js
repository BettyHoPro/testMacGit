const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

//////////// this time 
// string ---> replace：Format Ob items

countLetters = (string) => {
  string = string.replace(/\s+/g, '');
  let obBox = {}
  for (let item of string) {
    obBox[item] ?  ( obBox[item] += 1 ): ( obBox[item] = 1 ) ;
  }
  return obBox;
};

console.log(countLetters('LHL'));
console.log(countLetters("lighthouse in the house"));




