var tree = "";
const xmasTree =()=>{
  for(a=1;a<=15;a++){
    tree = "";
    for(b=a;b<15;b++){
      tree += " ";}
    for(c=0;c<(a*2)-1;c++){
      tree += "+";}
    console.log(tree);
  }
}
xmasTree();
console.log("世上最美麗的大阿姨 聖誕快樂！");


