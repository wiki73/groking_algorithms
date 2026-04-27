const XO = (string) => {
  res = 0;
  for (let i = 0; i < string.length; i++) {
    const element = string[i].toLocaleLowerCase();
    console.log(element)
    element === "o" && res++;
    element === "x" && res--;
  }
  if (res === 0) {
    return true;
  } else return false;
};

console.log(XO('ooxx'))
