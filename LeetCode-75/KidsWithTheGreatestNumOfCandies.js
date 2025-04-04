const kidsWithCandies = function(candies, extraCandies) {
    let highestNum = Math.max(...candies);
    let result = [];
    
    for(let i = 0; i < candies.length; i++) {
        if(candies[i] + extraCandies >= highestNum) {
            result.push(true);
        } else {
            result.push(false);
        }
    }
    return result;
};