var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328')
assert.equal(regCount, 3);

var regCount = countRegNumber('CA 182736')
assert.equal(regCount, 1);


function countRegNumber(regNumbers) {
    // Split the input string into an array of registration numbers using the comma as the delimiter
    var regNum = regNumbers.split(',');

    // Return the length of the array, which represents the count of registration numbers
    return regNum.length;
}

// Test cases
console.log(countRegNumber('CA 182736,CY 523519,CJ 812328'));

console.log(countRegNumber('CA 42665, AA 12 RT GP'));
console.log(countRegNumber('CA 182736'));