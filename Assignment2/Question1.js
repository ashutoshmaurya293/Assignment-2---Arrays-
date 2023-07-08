const num = [1, 4, 3, 2];
const arrayPairSum = (num) => {
    num.sort((a,b) => a-b);
    let sum = 0;
    for(let i = 0; i < num.length; i += 2) {
        sum += Math.min(num[i], num[i + 1]);
    }
    return sum;
};

console.log(arrayPairSum(num)); // Output: 4
