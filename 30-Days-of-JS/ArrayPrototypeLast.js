/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function() {
    if(this.length === 0) return -1;
    // get the element at the last index of this array.
    return this[this.length - 1];
};