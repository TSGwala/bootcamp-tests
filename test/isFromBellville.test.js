assert.equal(isFromBellville('CY 123'), true);
assert.equal(isFromBellville('CJ 123'), false);
function isFromBellville(regNum) {
    return regNum.startsWith("CY");
}
console.log(isFromBellville("CY 123"))