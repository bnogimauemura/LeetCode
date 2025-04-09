const compose = function(functions) {
    
    return function(x) {
        let result = x;
        // start from the end;
        for(let i = functions.length - 1; i >= 0; i--) {
            // update the value of result;
            // (result) is necessary to access the value of x;
            result = functions[i](result);
        }
        return result;
    }
};
// instead of i++, in this case we should use i--
