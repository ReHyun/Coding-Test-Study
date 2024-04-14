let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
const line = [];
for (let i = 1; i < input.length; i++) {
  line.push(input[i].toString().split(''));
}

// solution
const stack = [];

function solution(input) {
  for (let i = 0; i < input.length; i++) {
    stack.push(input[i]);
  }
  if(stack.length==0)return true;
  let left = 0;
  let right = 0;
  let result = undefined;
  let realFalse = undefined;
  for (let i = 0; i < input.length; i++) {
    const now = stack.pop();
    switch (now) {
      case '(':
        if (left >= right) {
          realFalse = false;
          result = false;
        } else if (left < right) {
          result = true;
        }
        left++;
        break;
      case ')':
        if (left < right) {
          result = true;
        } else if (left == right) {
          result = true;
        }
        right++;
        break;
      default:
        break;
    }

    if (stack.length === 0 && left !== right) {
      result = false;
    }
    //console.log('left:', left, 'right:', right);
  }
  if (realFalse === false) {
    return 'NO';
  }
  return result ? 'YES' : 'NO';
}


// 출력
const arr = [];
for (let i = 0; i < line.length; i++) {
  let res = solution(line[i]);
  if(res !== true)
    arr.push(res);
}
console.log(arr.join('\n'));