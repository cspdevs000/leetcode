function maxSubArray(nums) {
    let currentMax = nums[0];
    let newMax = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        newMax = Math.max(nums[i], newMax + nums[i]);
        currentMax = Math.max(newMax, currentMax);
    }
    return currentMax;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
console.log(maxSubArray([1]));
console.log(maxSubArray([5,4,-1,7,8]));