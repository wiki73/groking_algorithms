function removeDuplicates(nums) {
    
  let k = 1;
  for (let i = 1; i < nums.length; i++) {
    console.log(`Итерация ${i}: сравниваю nums[${i}](${nums[i]}) и nums[${i-1}](${nums[i-1]})`);
    if (nums[i] !== nums[i-1]) {
      nums[k] = nums[i];
      console.log(`  -> Уникально! Записываю в nums[${k}]. Массив теперь: [${nums}]`);
      k++
    }
    
  }
  return k
};

// Проверка:
let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
let k = removeDuplicates(nums);
console.debug(k, nums.slice(0, k)); // 5 [0, 1, 2, 3, 4]