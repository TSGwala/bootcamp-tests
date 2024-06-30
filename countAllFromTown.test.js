var fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');
//fromStellies should contains
assert.equal(fromStellies, 3)

var fromKuilsriver = countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CL 341','CF');
//fromStellies should contains
assert.equal(fromKuilsriver, 1)

function countAllFromTown(regNumString, townStartString) {
    // Split the input string by commas to get individual registration numbers
    const regNumbers = regNumString.split(',');
    let count = 0; // Initialize a counter for the registration numbers from the specified town

    // Loop through each registration number
    for (let reg of regNumbers) {
        // Trim any spaces around the registration number
        if (reg.trim().startsWith(townStartString)) {
            count++; // Increment the count if the registration number starts with the specified town code
        }
    }

    // Return the total count of registration numbers from the specified town
    return count;
}

// Example usage
console.log(countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL')); 
console.log(countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CL 341','CF')); 
