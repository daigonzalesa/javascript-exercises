const palindromes = function (string) {

    const alphanumerics = "abcdefghijklmnopqrstuvwxyz0123456789";
    
    let cleanArray = string
    .toLowerCase()
    .split("")
    .filter(letter => alphanumerics.includes(letter));
    
    let reverseArray=[...cleanArray].reverse();

    return cleanArray.join("") === reverseArray.join("");
};

// Do not edit below this line
module.exports = palindromes;
