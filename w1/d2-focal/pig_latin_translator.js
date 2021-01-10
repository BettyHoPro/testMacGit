var originalWords = process.argv.slice(2);
var pigLatinWords = [];

for (var i = 0; i < originalWords.length; i++) {
  //console.log(translateToPigLatin(originalWords[i]), i);
  pigLatinWords.push(translateToPigLatin(originalWords[i]));
  //pigLatinWords.
  //console.log(pigLatinWords);
 
}

console.log(pigLatinWords.join(' '));

function translateToPigLatin(word) {
  //return word.slice(2, word.length) + word[0] + "ay";
  //console.log(word);
  return word.slice(1, word.length) + word[0] + "ay";

}
//// last three letters

// process.argv
//===pig latin is silly
//igpay atinlay siay illysay
//[1][2][0]ay

//==gpay tinlay iay llysay
//gp      tinl   i    lly
//[1]     [1]    [1]  [1] ----> need the [1]