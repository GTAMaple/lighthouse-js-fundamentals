
// If the number is a multiple of 3, print the string "Loopy" instead of the number.
// If the number is a multiple of 4, print the string "Lighthouse" instead of the number.
// If the number is a multiple of both 3 and 4, print the string "LoopyLighthouse" instead of the number.
for(let n = 100; n <= 200; n++){

  if((n%3 === 0) && (n%4 === 0)){
    console.log("Lighthouse");
  }else if( n%3 === 0){
    console.log("Loopy");
  }else if( n%4 === 0){
    console.log("Lighthouse");
  }
  
}