const reverseWords = function(s) {
    // 1st we remove the spaces from start and end;
    let trimStr = s.trim();

    // We split the words by spaces, if we get more than one space, should return (""), 
    // for this reason the filter is important, we gonna take out everything that is "empty"
    let removeDoubleSpaces = trimStr.split(' ').filter(word => word.length > 0);

    // reverse the order
    let reversedStr = removeDoubleSpaces.reverse();

    // return all together with a single space between words;
    return reversedStr.join(' ');
    
};
// remove the space from the start and end if exist;
// if theres two spaces between strings, remove one;
// reverse the order of the string of words;


// EXAMPLE ABOUT THE DOUBLE SPACE
// let str = "hello   world"
// let result = str.trim().split(' ');
// console.log(result) === ["hello", "", "", "world"];
// since the "" is not higher than 0, will be removed