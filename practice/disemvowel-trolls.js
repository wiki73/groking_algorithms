const disemvowelTrolls = (string) => {
    const glas = 'aeiou';
    let count = 0
    for (let i = 0; i < string.length; i++) {
        const element = string[i];
        if (glas.includes(element)) {
            count++;
        } 
    }
    return count;
}

console.log("🚀 ~ disemvowelTrolls('aaa'):", disemvowelTrolls('aaa'))
