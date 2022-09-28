// 75

// Simple, remove the spaces from the string, then return the resultant string.

function noSpace(x) {
    let newStr = []
    for (i = 0; i <= x.length; i++) {
        if (x[i] !== ' ') {
            newStr.push(x[i])
        }
    }
    return newStr.join('')
}