const descendingOrder = (number) => {
    return String(number).split('').map(Number).sort((a,b) => b - a)

}

console.log("🚀 ~ descendingOrder(42145):", descendingOrder(42145))
