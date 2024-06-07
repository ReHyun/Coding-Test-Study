const fs = require('fs');
// const [n, ...arr] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [n, ...arr] = fs.readFileSync('예제.txt').toString().trim().split('\n');

let heap = [0];
let answer = [];

// const swap = (a, b) => {
//     temp = a;
//     a = b;
//     b = temp;
// }

const makeHeap = () => {
  let leng = heap.length;
  console.log(leng);
  let i = 1;
  while (i < leng - 1) {
    if (leng < 4) {
      if (heap[2] > heap[1]) {
        temp = heap[2];
        heap[2] = heap[1];
        heap[1] = temp;
      }
      return;
    }
    if (heap[i] < heap[2 * i]) {
      temp = heap[2 * i];
      heap[2 * i] = heap[i];
      heap[i] = temp;
      i = i * 2;
    } else if (heap[i] < heap[2 * i + 1]) {
      temp = heap[2 * i + 1];
      heap[2 * i + 1] = heap[i];
      heap[i] = temp;
      i = 2 * i + 1;
    }
  }
};

for (let i = 0; i < 7; i++) {
  if (arr[i] === '0') {
    if (heap.length == 1) {
      answer.push(0);
    } else {
      answer.push(heap[1]);
      heap[1] = heap.pop();
      makeHeap();
      console.log(`ater: ${heap}`);
      console.log('>>>>>>>>>>>>>>>');
    }
  } else {
    heap.unshift(Number(arr[i]));
    let temp = heap[1];
    heap[1] = heap[0];
    heap[0] = temp;
    console.log(`before: ${heap}`);
    makeHeap();
    console.log(`after: ${heap}`);
    console.log('>>>>>>>>>>>>>>>');
  }
}

console.log(`answer: ${answer}`);
