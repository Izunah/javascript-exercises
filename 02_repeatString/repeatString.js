const repeatString = function(string, repeatAmount) {
    if(repeatAmount >= 0)
    {
        return string.repeat(repeatAmount);
    }
    else
    {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = repeatString;
