const gcdOfStrings = function(str1, str2) {
    // first check if the string have common divisor
    if(str1 + str2 !== str2 + str1) {
        return "";
    } 
    // helper function to calculate the GCD of the string length
    const gcd = (a, b) => {
      if(b === 0) {
        return a;
       } else {
        return gcd(b, a % b);
       }
    }
    
    // return substring based on GCD length
    return str1.substring(0, gcd(str1.length, str2.length))
};

//            EXAMPLE

// str1 = "ROCKETROCKETROCKET" 
// str2 = "ROCKETROCKET";

// str1.length = 18;
// str2.length = 12;

// gcd(18, 12)
// // b is not 0; so call gcd(12, 18 % 12)
// gcd(12, 6)
// // b is not 0, so call gcd(6, 12 % 6)
// gcd(6, 0)
// // b is 0, so return a = 6

// // So the gcd of 18 and 12 is 6;

// return str1.substring(0, 6);
// // return "ROCKET"