function maxSubArray(nums) {
    let currentMax = nums[0];
    let newMax = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        newMax = Math.max(nums[i], newMax + nums[i]);
        currentMax = Math.max(newMax, currentMax);
    }
    return currentMax;
};