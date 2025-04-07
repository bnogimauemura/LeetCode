// should solve it without using the built-in Array.reduce method

const reduce = function(nums, fn, init) {
    let startValue = init;
    for(let i = 0; i < nums.length; i++) {
        startValue = fn(startValue, nums[i]);
    }

    return startValue;
};