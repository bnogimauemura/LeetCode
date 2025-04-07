// should solve it without the built-in Array.filter method.

const filter = function(arr, fn) {
    let result = [];

    for(let i = 0; i < arr.length; i++) {
        if(fn(arr[i], i)) {
            result.push(arr[i]);
        }
    }
    return result;
};