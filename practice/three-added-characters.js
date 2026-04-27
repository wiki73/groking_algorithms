const ThreeAddedCharacters = (str1, str2) => {
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] !== str2[i]) {
            return str2[i]
        }
        
    }
    return str2[str2.length-1]
}


console.log("🚀 ~ ThreeAddedCharacters('hello', 'aaahello'):", ThreeAddedCharacters('hello', 'aaahello'))
console.log("🚀 ~ ThreeAddedCharacters('abcde', '2db2a2ec'):", ThreeAddedCharacters('abcde', '2db2a2ec'))
