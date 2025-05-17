const isEmpty = function(obj) {
    // .length is only usable for arrays 
    // so for us to be able to use with objects, we need to use Object.keys();
    // this will return an array of the own enumerable property names (keys) of the object (in this case, obj)
    if(Object.keys(obj).length === 0) {
        return true;
    }
    return false;
};