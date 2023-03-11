const reverseString = function(string) {
    let reversed = "";
    let char = "";
    let pos = 0;
    
    for(let i = 1; i <= string.length; i++)
    {
        pos = string.length - i;
        char = string.charAt(pos);
        reversed += char;
    }

    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
