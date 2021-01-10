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
 
  /*
  not working:
  1.shift() to get rid off the first one in array
  2.turn array to string is not working as well:
  toString X
  3. requirement: cannot use join() as well
  4.
  */
  ///

  //the third one
  //for loop  inside has another if condition 
  let concepts = '' ;
  for (let q = 0; q < conceptList.length; q ++ ){
    let textArr = conceptList[q];
    if (  q !== 0 ){
      concepts += ", " + textArr.toString();
    }else{
      concepts += textArr.toString();
    } 
  }
  return concepts;
  
  // //3 one fix
  // let text1=' ';
  // if (conceptList[0]==="undefined"){  
  //   //console.log(conceptList[0]); 
  //    text1=conceptList.toString();
  //    //concepts=' ';

  // }else{
  //   text1 += conceptList[0]; 
  //   for ( let i= 1 ; i<conceptList.length; i++ ){
  //     text1 += (", "+conceptList[i]);
      
  //   };
  // //let concepts=arrayText.toString();
  //  return text1;
  // }


  // //2 one fix
  // let concepts='';
  // let arrayText="";//this is string
  // arrayText += conceptList[0]; // get the first one 
  // if (!conceptList[0]){
  //    arrayText+="";
  //    concepts=arrayText.toString();
     
  // }else{
  //   for ( let i= 1 ; i<conceptList.length; i++ ){
  //   concepts=arrayText + (", "+conceptList[i]);
  //   };
  // //let concepts=arrayText.toString();
  // return concepts;
  // }

  //second one --->undefined, empty array
  // let arrayText="";//this is string
  // arrayText += conceptList[0]; // get the first one 
  // if (!conceptList[0]){
  //    arrayText+="";
     
  // }else{
  //   for ( let i= 1 ; i<conceptList.length; i++ ){
  //   arrayText += (", "+conceptList[i]);
  //   };
  // let concepts=arrayText.toString();
  // return concepts;
  // }
}
// Test / Driver Code below...
const conceptList = ["gists", "types", "operators", "iteration", "problem solving"];
const concepts = joinList(conceptList);
console.log(`Today I learned about ${concepts}.`);
//Today I learned about gists, types, operators, iteration, problem solving.

