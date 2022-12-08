const findTheOldest = function(people) {
    let age=Number.MIN_VALUE,max=1;
    for(let i=0;i<people.length;i++) {
        let age1=0
        if(people[i].yearOfDeath===undefined) {
            age1=2022-people[i].yearOfBirth;
        }
        else {
            age1=people[i].yearOfDeath-people[i].yearOfBirth;
        }
        if(age<age1) {
            max=i;
            age=age1;
        }
    }
    return people[max];
};

// Do not edit below this line
module.exports = findTheOldest;
