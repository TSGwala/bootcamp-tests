assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
assert.equal('R3.40', totalPhoneBill('call, sms'));
assert.equal('R1.30', totalPhoneBill('sms, sms'));

function totalPhoneBill(data) {
    // Split the input string into an array of individual items
    const items = data.split(', ');

    // Initialize variables to count calls and SMS messages
    let callCount = 0;
    let smsCount = 0;

    // Loop through each item and count calls and SMS messages
    for (let item of items) {
        if (item === 'call') {
            callCount++;
        } else if (item === 'sms') {
            smsCount++;
        }
    }

    // Calculate the total cost for calls and SMS messages
    const callCost = callCount * 2.75; // R2.75 per call
    const smsCost = smsCount * 0.65; // R0.65 per sms

    // Calculate the total bill
    const totalBill = callCost + smsCost;

    // Return the total bill rounded to two decimal places
    return 'R' + totalBill.toFixed(2);
}

// Test the function with an example input
console.log(totalPhoneBill('call, sms, call, sms, sms')); // Output: R7.45
