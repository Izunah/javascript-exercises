const removeFromArray = function(array, ...removeThis ) {
    let newArray = [];
    let addMe = true;

    for(let i = 0; i < array.length; i++)
    {
        addMe = true;
        for(let j = 0; j < removeThis.length; j++)
        {
            if(array[i] === removeThis[j])
            {
                addMe = false;
            }
        }

        if(addMe)
        {
            newArray.push(array[i]);
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
