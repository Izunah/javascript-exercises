const sumAll = function(num1, num2) {
    let sum = 0;
    let smallerNum = num1;
    let biggerNum = num2;


    if(num1 < 0 || num2 < 0 || typeof(num1) != "number" || typeof(num2) != "number")
    {
        return "ERROR";
    }

    if(num1 >= num2)
    {
        smallerNum = num2;
        biggerNum = num1;
    }

    for(let i = smallerNum; i <= biggerNum; i++)
    {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
