// complete the function
let isPrime = true
function prime (num) {
  // code goes here
    if (num==1 || num == 2 || num ==3){
        return `${num} is prime`
    }
    
    for (let a=2; a < num; a++){
    if(num%a==0){
        isPrime =false;
    }
    if(isPrime){
        return `${num} is a prime number`
    }
    else{
        return `${num} is not a prime number`
    }
}
console.log(prime(7))
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
