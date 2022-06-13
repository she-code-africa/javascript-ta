// complete the function
function prime (num) {
  let temp = 0;
for (let i = 2; i <= num / 2; i++) {
  // check if num is divisible by any number.
  if (num % i == 0) {
    temp++;
  }
}

// check for the value of temp and num.

// return temp && num != 1
//   ? console.log(`${num} is prime`)
//   : console.log(`${num} is not prime`);
return console.log("hi")
}

function solution (arg) {
  return prime(arg);
}

if (typeof require !== "undefined" && require.main === module) {
  if (process.argv.length <= 2) {
    throw Error("Require argument");
  }

  const arg = process.argv[2];
  console.log(solution(arg));
}

module.exports = { solution };
