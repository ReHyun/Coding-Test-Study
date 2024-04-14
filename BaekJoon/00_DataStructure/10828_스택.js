// 실버4
let fs = require('fs');
let input = fs.readFileSync('10828_스택예제.txt').toString().split('\n');

const stack = [];
const answer = [];

function sol(input) {
  switch (input) {
    case 'top':
      if (stack.length == 0) {
        return -1;
      } else {
        return stack[stack.length - 1];
      }
      break;
    case 'size':
      return stack.length;
      break;
    case 'pop':
      if (stack.length == 0) {
        return -1;
      } else {
        return stack.pop();
      }
      break;
    case 'empty':
      if (stack.length == 0) {
        return 1;
      } else {
        return 0;
      }
      break;
    default:
      const num = input.substring(4);
      stack.push(Number(num));
      break;
  }
}

for (let i = 1; i < input.length; i++) {
  answer.push(sol(input[i]));
}

const realAnswer = answer.filter((answer) => answer !== undefined);

console.log(realAnswer.join('\n'));
