// // test the join()
// let test = [ "cocacola", "bbt", "ice cream"];
// let jRe=test.join();
// console.log(jRe);

// example //
// For example, the following is a sample output of the program.

// > node dice-roller.js 3
// Rolled 3 dice: 2, 6, 5

// join();    //process.argv //Math.random
//" Rolled "+process.argv+" dice:"
// array ---> join()--->string with "," in sutible order
// arr.length(process.argv-1)

// // get the formal num
// console.log(Math.floor((Math.random()*10))); ----> V
// console.log((Math.random()*10));

// arr.push()

//////final fix///
let arrDice= [];
// let cmlNum = process.argv;

const diceR = function(){
  let rnNum;
  for (let q=0; q < process.argv[2] ; q++ ){
    rnNum=Math.floor(Math.random()*10);
    arrDice.unshift(rnNum); 
  }
  return "Rolled "+ process.argv[2] +" dice: " + arrDice.join(", ") ;
};
console.log(diceR());



// /// start code /////
// let arrDice= [];
// let cmlNum = process.argv;
// //console.log(Math.floor(Math.random()*10));
// const diceR = function(){
//   let rnNum;
//   for (let q=0; q < cmlNum ; q++ ){
//     rnNum=Math.floor(Math.random()*10);
//     arrDice.unshift(rnNum);
    
//     //console.log(rnNum);
//   }
//   return "Rolled "+ cmlNum +" dice: " + arrDice.join(", ") ;
// };
// //diceR();
// //let fin= arrDice.join();
// console.log(diceR());


// /////// function test /////
// let arrDice= [ 1,5,2];
// const diceR =  function(){
//   for (let q=0; q< 3 ; q++ ){
    
//     //arrDice=arrDice.unshift(Math.floor((Math.random()*10)));
//     arrDice=arrDice.unshift(q);
//     console.log(q);
//   }
//   return arrDice;
// };
// //diceR();
// //let fin= arrDice.join();
// console.log(diceR());
// // diceR(process.argv);
// // console.log(diceR(process.argv));

/////////////---------///////////////
// /// test out if the process.argv works
// let sumnum = 0;
// let sum = function() {
//   for (let j = 2; j < process.argv.length; j++) {
//     sumnum += parseInt(process.argv[j]);
//   }
//   return sumnum;
// };
// console.log(sum());