// 실버4 : 큐2
// https://www.acmicpc.net/problem/18258

let fs = require('fs');
let input = fs.readFileSync('18258_큐2예제.txt').toString().split('\n');

const queue = [];
const result = [];
let front = 0;
let back = 0;

function solution(input) {
  for (let i = 1; i < input.length; i++) {
    let [command, number] = input[i].split(' ');
    switch (command) {
      case 'push':
        queue[back++] = +number;
        break;
      case 'pop':
        back - front === 0 ? result.push(-1) : result.push(queue[front++]);
        break;
      case 'size':
        result.push(back - front);
        break;
      case 'empty':
        back - front === 0 ? result.push(1) : result.push(0);
        break;
      case 'front':
        back - front === 0 ? result.push(-1) : result.push(queue[front]);
        break;
      case 'back':
        back - front === 0 ? result.push(-1) : result.push(queue[back - 1]);
        break;
    }
  }
}

//결과 도출
solution(input);
console.log(result.join('\n'));
