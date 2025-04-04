const reverseVowels = function(s) {
    let vowels = "aeiouAEIOU";
    let separateStr = s.split("");
    let separateStrVowels = [];

    for(let char of separateStr) {
        if(vowels.includes(char)) {
            separateStrVowels.push(char);
        }
    }

    separateStrVowels.reverse();

    let vowelIndex = 0;
    for(let i = 0; i < separateStr.length; i++) {
        if(vowels.includes(separateStr[i])) {
            // we get the index of the original str and compare with the one reversed
            // i is not the same as vowelIndex, but they both move in a structured way to ensure vowels are replaced in order.
            separateStr[i] = separateStrVowels[vowelIndex];
            vowelIndex ++; // move to the next vowel of the reversed one
        }
    }

    return separateStr.join("");
};
// 1st get all vowels from the string
// 2nd reverse them
// 3rd return with the remain consonants