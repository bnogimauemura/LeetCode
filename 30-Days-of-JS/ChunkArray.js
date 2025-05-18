const chunk = function(arr, size) {
    let result = [];
    if(arr.length === 0) return [];

    // Slice the array from i to i + size and push it into result
    for(let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size))
    }

    return result;
};