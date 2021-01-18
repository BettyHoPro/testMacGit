const nameInverter = function(name) {
  // let typeName = typeof name;
  // let first-name = "";
  // let last-name = "";
  // let key = " ";
  // for (let i of name){
  //   if ( i !== key ){
  //     if(IsNullOrEmpty(name)) {
  //       return name;
  //     };

  //     if (typeName === "string" ) {
  //       return name.trim();
  //     };

  //   }
  //   if (i === key){
  //     const words = name.split(' ');
  //     first-name = words[0];
  //     lastname = words[1];
  //   }
  if (typeof name === "undefined") {
    return;
  }
  const localName = name.trim().split('.');
  let toBeConvertedName;
  let honorific;
  
  if (typeof name === "string") {
    if (localName.length === 2) {
      honorific = localName[0];
      toBeConvertedName = localName[1];
    } else {
      toBeConvertedName = localName[0];
    }
    return `${honorific ? `${honorific.trim()}. ` : ''}${toBeConvertedName.split(' ').length === 1 ? '' : toBeConvertedName.split(' ').map(x=>x.trim()).reverse().join(', ')}`;
  }
};

// nameInverter('first-name last-name')
// nameInverter('Dr. ')
// nameInverter('Dr. first')
// nameInverter('Dr. first-name last-name')
// nameInverter(' Dr. first-name last-name')



module.exports = nameInverter;