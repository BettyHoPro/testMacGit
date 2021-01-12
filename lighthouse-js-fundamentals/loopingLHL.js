for ( var x = 100 ; x <= 200 ; x++ ){
  var b3 = x % 3 === 0 ;
  var b4 = x % 4 === 0 ;
  if ( b3 && !b4 ){
    console.log( "Loopy" );
  } else if ( !b3 && b4){
    console.log( "Lighthouse" );
  } else if ( b3 & b4 ){
    console.log( "LoopyLighthouse");
  } else {
    console.log( x );
 }
}