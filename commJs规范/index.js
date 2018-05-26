function isNumber (n) {
    return typeof n === 'number'
}

module.exports = {
    sum: function(a, b) {
        if(isNumber(a) && isNumber(b)) {
            return a + b
        } else {
            return NaN
        }
    }
}