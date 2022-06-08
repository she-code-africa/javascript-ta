// complete the function
function prime (num) {
  // code goes here
  if(num % 1 == 0) {
    return true
  }
  else{
    return false
  }
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
