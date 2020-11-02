module.exports = { fibonacci }


const n = (process.argv[2])
console.log(fibonacci(n))


// complete the function
function fibonacci(n) {
    const arr = []

    for (let i = 0; i < n; i++) {
        if (i === 0 || i === 1) {
            arr[i] = i
        } else {
            arr[i] = arr[i - 1] + arr[i - 2]
        }
    }

    return arr
}
