// complete the function
function prime(num) {
  // code goes here
  if (num <= 1) return false; 
  if (num % 2 == 0 && num > 2) return false; 
  const s = Math.sqrt(num); // 
  for (let i = 3; i <= s; i += 2) {
    
    if (num % i === 0) return false; 
  }
  return true;
}

function solution(arg) {
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
