// function sumToOne(n) {
//   let sum = 0;
//   for (let i = n; i >= 1; i--) {
//     sum += i;
//   }
//   return sum;
// }

// console.log(sumToOne(4));


// function sumToOne(n){
//   let sum = 0;
//   function ifIBiggerThanOne(i){
//     if ( i >= 1 ){
//       sum += i;
//       ifIBiggerThanOne( i-- );
//      }
//   }
//   ifIBiggerThanOne(n);
  
//  return sum;
// }

// console.log(sumToOne(4));

function sumToOne(n) {
  if (n === 1) {
    return 1;
  }

  return n + sumToOne(n - 1);
}

console.log(sumToOne(4));


// for (let number = 0; number <= 12; number += 2) {
//   console.log(number);
// }

// let number = 0;
// while (number <= 12) {
//   console.log(number);
//   number += 2;
// }

// function countEvenToTwelve(number) {
//   if (number <= 12) {
//     console.log(number);
//     countEvenToTwelve(number+2);
//   }
// }
// countEvenToTwelve(0);