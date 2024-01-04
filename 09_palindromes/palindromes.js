const palindromes = function (string) {
    let removePunctuation = string.replace(/[^\w\']/g, "").toLowerCase();
    let reverseString = removePunctuation.split("").reverse().join("");
    return reverseString == removePunctuation;
};

// Do not edit below this line
module.exports = palindromes;
