function dnaStrand(dna) {
  let res = "";
  for (let index = 0; index < dna.length; index++) {
    const element = dna[index];
    
    if (element === "A") {
      res += "T";
    } else if (element === "T") {
      res += "A";
    } else if (element === "C") {
      res += "G";
    } else if (element === "G") {
      res += "C";
    } else {
      res += element; 
    }
  }
  return res;
}

console.log(dnaStrand("TAACG")); // Выведет: "ATTGC"
