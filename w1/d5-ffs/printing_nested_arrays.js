const printItems = function(array) {
  for (let item of array) {
    if (Array.isArray(item)) {
      // for (let q of item ){
      //   console.log(q);
      // }
      printItems(item);
    } else {
      console.log(item);
    }
  }
}


const array = ["😎", [["💩", ["🤗"]], [[["😼"]], "😂"]]];

printItems(array);


