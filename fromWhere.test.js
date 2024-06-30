assert.equal(fromWhere('CY 567489'), 'Bellville');
assert.equal(fromWhere('CJ 343502'), 'Paarl');
assert.equal(fromWhere('CA 987504'), 'Cape Town');
assert.equal(fromWhere('ZN 568593'), 'Some other place!');


if (regNum == 'CY 567489') {
    return 'Bellville';
}
else if (regNum == 'CJ 343502') {
    return 'Paarl';
}
else if (regNum == 'CA 987504') {
    return 'Cape Town';
}
else if (regNum == 'ZN 568593') {
    return 'Some other place!';
}
else {
    return 'Invalid';
}


