assert.equal(transportFee('morning'), 'R20');

assert.equal(transportFee('afternoon'), 'R10');

assert.equal(transportFee('nightshift'), 'free', 'for night shift return free');



if (time == 'morning') {
    return 'R20';
}
else if (time == 'afternoon') {
    return 'R10';
}
else if (time == 'nightshift') {
    return 'free';
}
else {
    return 'invalid';
}

console.log(transportFee('afternoon'));