const add = function(a, b) {
  return a + b;	
};

const subtract = function(a, b) {
  return a - b;	
};

const sum = function(a) {
  if (a.length == 0) return 0
  return a.reduce((partialSum, a) => partialSum + a);
};

const multiply = function(a) {
  return a.reduce((partialProduct, a) => a * partialProduct);
};

const power = function(a, b) {
	return Math.pow(a,b);
};

const factorial = function(a) {
	let result = 1;
  for (let x = 1; x <= a; x++) {
    result *= x;
  }
  return result;
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
