// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the
//  6th prime is 13.

// What is the 10 001st prime number ?


function isPrime1(number) {

    for( let i = 2; i < number; i++){
        if (number % i === 0) return false; 
    }
    return true
}

function numberPrime1(limit) {

    let count = 0; 
    let i = 2; // always start at 2 with prime 

    while(true){
        if (isPrime1(i)){
            count++
        } 
        if (count === limit) {
            return i
        }
        i++
    }
    

}

function numberPrime(limit) {
    let primes = [];
    let count = 0;
    let i = 2; // always start at 2 with prime 

    while (count < limit) {
        if (isPrime(i, primes)) {
            primes.push(i);
            count++;
        }
        i++;
    }

    return primes[limit - 1];
}

function isPrime(number, primes) {
    let maxCheck = Math.sqrt(number);
    for (let i = 0; primes[i] <= maxCheck; i++) {
        if (number % primes[i] === 0) {
            return false;
        }
    }
    return true;
}



// Benchmark 

const startTime = performance.now() || Date.now();
console.log(numberPrime(20000))
const endTime = performance.now() || Date.now();


const elapsedTime = endTime - startTime;
console.log(`GPT Time taken: ${elapsedTime}ms`);

const startTime1 = performance.now() || Date.now();
console.log(numberPrime1(20000))
const endTime1 = performance.now() || Date.now();


const elapsedTime1 = endTime1 - startTime;
console.log(`Time taken: ${elapsedTime1}ms`);