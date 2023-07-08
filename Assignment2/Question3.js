const find_LHS = function(nums) {
    let map = new Map();
    let max = 0;
    for (let num of nums) {
        if (map.has(num)) {
            map.set(num, map.get(num) + 1);
        } else {
            map.set(num, 1);
        }
        if (map.has(num + 1)) {
            max = Math.max(max, map.get(num) + map.get(num + 1));
        }
        if (map.has(num - 1)) {
            max = Math.max(max, map.get(num) + map.get(num - 1));
        }
    }
    return max;
};

console.log(find_LHS([1,3,2,2,5,2,3,7])); // Output: 5
