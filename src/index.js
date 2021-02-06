// complete the function
function palindrom(str) {
  let reply;
  let len = Math.trunc(str.length / 2);
  for (let i = 0; i < len; i++) {
    if (str[i] === str[str.length - i - 1]) {
      reply = `${str} is a palindrome`;
    } else {
      reply = `${str} is not a palindrome`;
    }
  }

  return reply;
}

function solution(arg) {
  return palindrom(arg);
}

if (typeof require !== "undefined" && require.main === module) {
  if (process.argv.length <= 2) {
    throw Error("Require argument");
  }

  const arg = process.argv[2];
  console.log(solution(arg));
}

module.exports = { solution };
