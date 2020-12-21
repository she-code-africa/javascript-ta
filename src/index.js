// complete the function
function fibonacci(n) {
  const arr = [];

  for (let i = 0; i < n; i++) {
    if (i === 0 || i === 1) {
      arr[i] = i;
    } else {
      arr[i] = arr[i - 1] + arr[i - 2];
    }
  }

  return arr;
}

if (typeof require !== "undefined" && require.main === module) {
  if (process.argv.length <= 2) {
    throw Error("Require argument");
  }

  const n = process.argv[2];
  console.log(fibonacci(n));
}

module.exports = { fibonacci };
