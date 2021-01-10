// Copy the waldo searching code above into the JS file
// Run it via terminal to make sure that it is working as expected
// Modify the actionWhenFound function to let it receive and use the index
// Modify the findWaldo function so that it passes the index array to the callback

//==== output===////
// Modify the callback function in the previous example so that it accepts a single argument index and logs it. The problem should therefore output something like "Found Waldo at index 2!".


// The second argument/parameter is expected to be a (callback) function
const findWaldo = function(names, found, num1) {

  // /// for loop type /////
  // for (let i = 0; i < names.length; i++) {
  //   let name = names[i];
  //   if (name === "Waldo") {
  //    let num1=i;
  //    //console.log("num" + num1);
  //    found(num1);// execute callback
  //   }
  // }

  ///// forEach type /////
  names.forEach(function (name , num1){
    if (name === "Waldo") {
     found(num1);// execute callback
    }
  });
  return num1;
}

// const actionWhenFound = function(num1) {
//   console.log("Found Waldo at index "+num1+"!");
// }

findWaldo(["Alice", "Bob", "Waldo", "Winston"], function(num1) {
  console.log("Found Waldo at index "+num1+"!");
});


