// 가장 쉽게 생각해낸 코드
// 결과 : 시간초과
let fs = require('fs');
let input = fs.readFileSync('예제.txt').toString().split('\n');

// solution
let [N, M] = input[0].split(' ');
N = +N;
M = +M;
const nString = input.splice(1, N);
const mString = input.splice(1, M);
const result = {};
let count = 0;

function solution() {
  nString.forEach((el) => {
    result[el] = true;
  });
  mString.forEach((el) => {
    if (result[el]) {
      count++;
    }
  });
  return count;
}

console.log(solution(input));
