const palindromes = function (str) {
    let clearedString = str.replace(/[^a-zA-Z]/g, '').toLowerCase();
    console.log(clearedString);
    return reverseString(clearedString) == clearedString;
};

const reverseString = function(string) {
    return string.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
