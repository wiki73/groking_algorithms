const highestAndLowest = (string) => {
    let nums = string.split(' ').map(Number);
    let max = nums[0];
    let min = nums[0];
    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        if (element > max) {
            max = element
        }
        if (element < min) {
            min = element
        }
        
    }
    return `${max} ${min}`
}


console.log(`🚀 ~ highestAndLowest("1 9 3 4 -5"):`, highestAndLowest("1 9 3 4 -5"))
