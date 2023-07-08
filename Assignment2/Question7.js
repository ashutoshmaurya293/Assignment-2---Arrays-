var is_Monotonic = function(nums) {
    let increasing = true;
    let decreasing = true;
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] > nums[i + 1]) {
            increasing = false;
        }
        if (nums[i] < nums[i + 1]) {
            decreasing = false;
        }
    }
    return increasing || decreasing;
};

console.log(is_Monotonic([1,2,2,3])); // Output: true
