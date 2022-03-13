//Two Sum

var twoSum = function(nums, target) {
    const indices = {};
    
    nums.forEach((item, i) => {
        indices[item] = i
    });
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target -nums[i];
        
        if (indices[complement] !== undefined && indices[complement] !== i) {
            return [i, indices[complement]]
        }
    }
};