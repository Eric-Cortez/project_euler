// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.

// time complexity : 0(n)
// space complexity : 0(1)

const multiples = (limit) => {

    let sum = 0;
    for (let i = 0; i < limit; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i
        }
    }

    return sum;

}

console.log(multiples(10))


function sumMultiples(limit) {
    let sum = 0;

    for (let i = 3; i < limit; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }

    return sum;
}

console.log(sumMultiples(10));


let sumMultiplesRecurs = (limit, i = 0) => {
    let sum = 0
    if (i >= limit) return sum;

    if (i % 3 === 0 || i % 5 === 0) {
        sum += i
    }
    i++
    return sum + sumMultiplesRecurs(limit, i)

}

console.log(sumMultiplesRecurs(10))