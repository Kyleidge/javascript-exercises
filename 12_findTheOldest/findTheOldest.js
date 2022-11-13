const findTheOldest = function(people) {
    let oldest = {};
    let oldestAge = 0;

    people.forEach((person) => {
        if (person.yearOfDeath == null) person.yearOfDeath = 2022;
        let age = person.yearOfDeath - person.yearOfBirth;
        if (age > oldestAge) {
            oldest = person;
            oldestAge = age;
        }
    })
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
