// complete the function
function prime (num) {
  // code goes here
  return num <= 1 ? false : num % 2 == 0 && num > 2 ? false : num == 2 ? true : num % 1 == 0 ? true : false
 
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

