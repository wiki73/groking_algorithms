function twoSum(nums, target) {
    var _a;
    var solutions = new Map();
    for (var i = 0; i < nums.length; i++) {
        if (!!solutions.size && solutions.get(target - nums[i]) !== undefined) {
            return [i, ((_a = solutions.get(target - nums[i])) !== null && _a !== void 0 ? _a : 0)];
        }
        solutions.set(nums[i], i);
    }
    return [];
}
