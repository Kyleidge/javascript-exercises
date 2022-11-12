const repeatString = function(string, repeat) {
    if (repeat < 0) return 'ERROR';
    let out = '';
    for (let i = 0; i < repeat; i++) {
        out = out + string;
    }
    return out;
};

// Do not edit below this line
module.exports = repeatString;
