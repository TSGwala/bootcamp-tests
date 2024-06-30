assert.equal((new Date().getFullYear() - 1976), yearsAgo(1976))
assert.equal((new Date().getFullYear() - 2000), yearsAgo(2000));

function yearsAgo(year) {
    return new Date().getFullYear() - year;
}
console.log(yearsAgo(2020));