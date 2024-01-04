const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(obj) {
  let sum = 0;
  for(val in obj)
  {
    if(Number.isInteger(obj[val]))
      sum += obj[val];
  }
  return sum;
};

const multiply = function(obj) {
  let sum = 1;
  for(val in obj)
  {
    if(Number.isInteger(obj[val]))
      sum *= obj[val];
  }
  return sum;
};

const power = function(a, b) {
  return Math.pow(a, b);
};

const factorial = function(val) {
  let factor = 1;
  for(let i = 0; i < val; i++)
  {
    factor = (val - i) * factor;
  }
  return factor;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
