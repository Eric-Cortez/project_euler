// Each new term in the Fibonacci sequence is generated by adding the previous two terms.By starting with 1 and 2, the first 10 terms will be:

// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even - valued terms.

let evenFibonacci = (num1, num2, sum) => {
    if (num1 + num2 > 4000000) return sum;

    let added = num1 + num2

    if (added % 2 === 0) {
        sum += added
    }

    return evenFibonacci(num2, added, sum)

}

console.log(evenFibonacci(1, 1, 0))

function fibonacciSum(limit) {
    let prev = 1;
    let curr = 2;
    let sum = 0;

    while (curr <= limit) {
        if (curr % 2 === 0) {
            sum += curr;
        }
        const next = prev + curr;
        prev = curr;
        curr = next;
    }

    return sum;
}

console.log(fibonacciSum(4000000));