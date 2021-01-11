//const args = process.argv.slice(2);
/*
let sumnum = 0;
for (let j = 2; j < process.argv.length; j++) {
  sumnum += parseInt(process.argv[j]);
}
console.log(sumnum);
*/
let sumnum = 0;
let sum = function() {
  for (let j = 2; j < process.argv.length; j++) {
    sumnum += parseInt(process.argv[j]);
  }
  return sumnum;
};
console.log(sum());