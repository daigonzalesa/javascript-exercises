const findTheOldest = function(people) {
    
    const getAge = (birth, death) => 
    {
        if (!death) 
        {
            death = new Date().getFullYear();
        }
        return death-birth;
    }

    let oldestGuy = people[0];

    for (const person of people) 
        {
        let currentAge = getAge (person.yearOfBirth,person.yearOfDeath);
        let oldestAge = getAge (oldestGuy.yearOfBirth,oldestGuy.yearOfDeath);
        
        if (currentAge>oldestAge) 
        {
            oldestGuy = person;
        }
    }

    return oldestGuy;

};

// Do not edit below this line
module.exports = findTheOldest;
