const sumAll = function(a,b) {
    const larger = Math.max(a,b);
    const smaller = Math.min(a,b);
    let sumA=0;
    for (let i=smaller; i<=larger; i++) {
        sumA+=i;
    }
    return sumA;

};

// Do not edit below this line
module.exports = sumAll;
