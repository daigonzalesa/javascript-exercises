const fibonacci = function(number) {

    number = Number(number);
    if (number <0) return "OOPS";
    

    let fiboArray = [0,1];

    for (let i=1; i<number; i++) 
    {
        let fibo = fiboArray[i-1] + fiboArray[i];
        fiboArray.push(fibo)
    }
    return fiboArray[number];
};

// Do not edit below this line
module.exports = fibonacci;
