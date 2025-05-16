var once = function(fn) {
    let called = false;        // starts as false; meaning fn has not ben called

    return function(...args){
        if(!called) {          // check if fn has NOT been called
            called = true;     // if run the code, called will be defined as true;
            return fn(...args) // execute fn, but only once
        }
        return undefined;      // skip the other if exist
    }
};

// Input: fn = (a,b,c) => (a * b * c), calls = [[5,7,4],[2,3,6],[4,6,8]]
// Output: [{"calls":1,"value":140}]
// Explanation:
// const onceFn = once(fn);
// onceFn(5, 7, 4); // 140
// onceFn(2, 3, 6); // undefined, fn was not called
// onceFn(4, 6, 8); // undefined, fn was not called