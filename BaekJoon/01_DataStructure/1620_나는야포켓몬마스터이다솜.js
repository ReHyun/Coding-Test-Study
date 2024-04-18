// https://www.acmicpc.net/problem/1620
// 도감 수록 포켓몬 개수 : N
// 맞춰야하는 문제 개수 : M

//입력
let fs = require('fs');
let input = fs.readFileSync('예제.txt').toString().split('\n');

// 기본 세팅
let NM = input.splice(0, 1);
let [N, M] = NM[0].split(' ');
const 도감 = input.splice(0, N);
const quiz = input.splice(0, M);
const map = new Map();
const result = [];

function solution() {
  for (let i = 0; i < N; i++) {
    map[도감[i]] = i + 1;
  }
  quiz.forEach((quiz) => {
    isNaN(quiz) ? result.push(map[quiz]) : result.push(도감[Number(quiz) - 1]);
  });
}

solution();
console.log(result.join('\n'));
