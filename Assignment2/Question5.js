const maximum_Product = function(nums) {
    nums.sort((a, b) => a - b);
    const n = nums.length;
    const product1 = nums[n - 1] * nums[n - 2] * nums[n - 3];
    const product2 = nums[0] * nums[1] * nums[n - 1];
    return Math.max(product1, product2);
};

console.log(maximum_Product([1,2,3])); // Output: 6
