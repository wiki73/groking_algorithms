const mumbler = (string) => {
    let res = '';
    for (let i = 0; i < string.length; i++) {
        const element = string[i];
        res += element.toLocaleUpperCase() + element.toLocaleLowerCase().repeat(i)
        if (i != string.length-1) {
            res+= '-'
        }
    }
    return res
}

console.log(mumbler('RqaEzty'))