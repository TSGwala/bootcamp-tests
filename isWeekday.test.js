assert.equal(isWeekday('Saturday'), false);
assert.equal(isWeekday('Sunday'), false);
assert.equal(isWeekday('Monday'), true);
assert.equal(isWeekday('Tuesday'), true);
assert.equal(isWeekday('Wednesday'), true);
assert.equal(isWeekday('Thursday'), true);
assert.equal(isWeekday('Friday'), true);

function isWeekday(day) {
    var Weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    return Weekdays.includes(day);
}
console.log(isWeekday('Saturday'));