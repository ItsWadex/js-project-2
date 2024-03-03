function reverseString(str) {
  return str.split("").reverse().join("")
}
console.log(reverseString("hello"))

function countCharacters(str) {
  return str.length
}
console.log(countCharacters("hello"))

function capitalizeWords(sentence) {
    let capitalized = ''
    let capitalizeNext = true
    for (let i = 0; i < sentence.length; i++) {
        if (capitalizeNext && sentence[i] !== ' ') {
            capitalized += sentence[i].toUpperCase()
            capitalizeNext = false;
        } else {
            capitalized += sentence[i]
        }
        if (sentence[i] === ' ') {
            capitalizeNext = true
        }
    }
    return capitalized
}

console.log(capitalizeWords("hello world"))

function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max;
}

function findMin(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]
        }
    }
    return min;
}
console.log(findMax([3, 5, 2, 8, 1]))
console.log(findMin([3, 5, 2, 8, 1]))

function sumArray(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}
console.log(sumArray([1, 2, 3, 4, 5]))

function filterArray(arr, condition) {
    const filtered = []
    for (let i = 0; i < arr.length; i++) {
        if (condition(arr[i])) {
            filtered.push(arr[i])
        }
    }
    return filtered
}
console.log(filterArray([1, 2, 3, 4, 5], n % 2 === 0))

function factorial(n) {
    let result = 1
    for (let i = 2; i <= n; i++) {
        result *= i
    }
    return result
}
console.log(factorial(5))

function isPrime(n) {
    if (n <= 1) return false
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false
    }
    return true
}
console.log(isPrime(7))
console.log(isPrime(10))

function fibonacci(n) {
    const sequence = [0, 1]
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2])
    }
    return sequence
}

console.log(fibonacci(5))



