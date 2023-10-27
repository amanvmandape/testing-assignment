function factorial(numb) {
    let fact = 1

    while (numb > 1) {
        fact = fact * numb
        numb--
    }
    return fact
}

module.exports = factorial

