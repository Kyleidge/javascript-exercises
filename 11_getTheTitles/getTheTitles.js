const getTheTitles = function(books) {
    let out = [];
    books.forEach((book) => {
        out.push(book["title"]);
    })
    return out;
};

// Do not edit below this line
module.exports = getTheTitles;
