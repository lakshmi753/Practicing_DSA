const n = 10;
const sum = (n*n + n)/2;// n(n+1)/2---> sum of first "n" numbers.
console.log(n, sum);
//O(1).........

// we can also proceed with "for" loop.................

const n1 = 10;

const seriesSum = function(n){

    let sum1 = 0;

for(let i=1; i<=n; i++){
    sum1 = sum1 + i;
}
  return sum1;
}

console.log(n1, seriesSum(n1));
//O(n)................