const max_profit = (prises) => {
    let minNum  = prises[0];
    let maxNum  = prises[0];
    for (let i = 1; i < prises.length; i++) {
        let element = prises[i]
        if (element > maxNum) {
            maxNum = element
        }
        if (element < minNum) {
            minNum = element
        }
    }
    return maxNum - minNum
}

console.log(max_profit([7, 1, 5, 3, 6, 4]))