
const findWaldo = function(names, found, num1) {
  names.forEach(function (name , num1){
    if (name === "Waldo") {
     found(num1);// execute callback
    }
  });
  return num1;
}


findWaldo(["Alice", "Bob", "Waldo", "Winston"], function(num1) {
  console.log("Found Waldo at index "+num1+"!");
});


