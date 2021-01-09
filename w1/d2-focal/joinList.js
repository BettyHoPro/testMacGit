/*
 * Write a function that joins the contents of conceptList together
 * into one String, concepts, with each list item separated from
 * the previous by a comma.
 *
 * To implement this we'll create a joinList function which will take 
 * in any array of strings return a comma-separated string.
 *
 * Note: We can NOT use the built-in Array join function.
 */
const joinList = function (conceptList){
  let arrayText="";
 // **this is string
  
  /*
  not working:
  1.shift() to get rid off the first one in array
  2.turn array to string is not working as well:
  toString X
  3. requirement: cannot use join() as well
  4.
  */
  arrayText += conceptList[0]; // get the first one 
   if (!conceptList[0]){
     arrayText+="";
     
   }else{
     for ( let i= 1 ; i<conceptList.length; i++ ){
    arrayText += (", "+conceptList[i]);
    };
  let concepts=arrayText.toString();
   return concepts;
   }
}
// Test / Driver Code below...
const conceptList = ["gists", "types", "operators", "iteration", "problem solving"];
const concepts = joinList(conceptList);
console.log(`Today I learned about ${concepts}.`);
//Today I learned about gists, types, operators, iteration, problem solving.
test = joinList([]);
console.log(test);
