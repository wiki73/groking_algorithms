function squareEveryDigit(num) {
  let finalNum = 0;
  let place = 1;

  while (num > 0) {
    let digit = num % 10;
    let squared = digit * digit;
    
    finalNum = squared * place + finalNum;
    
    place *= (squared < 10) ? 10 : 100;
    
    num = Math.floor(num / 10);
  }
  return finalNum;
}

console.log("🚀 ~ squareEveryDigit(9119):", squareEveryDigit(9119))
