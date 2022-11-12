const sumAll = function(from, to) {
    if ((from < 0) || (to < 0)) return 'ERROR';

    if (typeof(from) != 'number' || typeof(to) != 'number') return 'ERROR';

    let sum = 0;
    for (let add = Math.min(from, to); add <= Math.max(from, to); add++)
    {
        sum += add;
    } 
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
