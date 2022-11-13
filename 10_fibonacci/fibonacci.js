const fibonacci = function(number) {
    if (number < 0) return "OOPS";

    let last = 1;
    let current = 1;

    number = parseInt(number);

    if (number == 1) return last;
    if (number == 2) return current;

    for (let count = 3; count <= number; count++) {
        let oldLast = last;
        last = current;
        current = current + oldLast;
    }
    return current;
};

// Do not edit below this line
module.exports = fibonacci;
