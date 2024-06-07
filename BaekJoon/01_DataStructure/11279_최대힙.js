let fs = require('fs');
let input = fs.readFileSync('예제.txt').toString().split('\n');
const inputNum = input.map((v) => {
  return +v;
});

const result = [];
inputNum.splice(0, 1);
// console.log(inputNum); // test

class Heap {
  constructor() {
    this.heap = [];
  }
  getHeap() {
    return this.heap;
  }

  getMax() {
    return this.heap[1] ? this.heap[1] : 0;
  }

  getSize() {
    return this.heap.length > 1 ? this.heap.length - 1 : null;
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  push(value) {
    if (this.heap.length < 1) {
      this.heap[1] = value;
    } else {
      this.heap.push(value);
    }
    let curIdx = this.heap.length - 1;
    let parIdx = Math.floor(curIdx / 2);

    // 부모노드 > 자식노드이면 멈춤
    while (curIdx > 1 && this.heap[parIdx] < this.heap[curIdx]) {
      this.swap(parIdx, curIdx);
      curIdx = parIdx;
      parIdx = Math.floor(curIdx / 2);
    }
  }

  pop() {
    const max = this.heap[1];
    if (this.heap.length > 2) {
      this.heap[1] = this.heap.pop();
    } else {
      this.heap = [null];
    }
    let curIdx = 1;
    let leftIdx = curIdx * 2;
    let rightIdx = curIdx * 2 + 1;

    // 왼쪽 자식이 없다 -> 루트 노드만 있다 -> 루트 리턴
    if (!this.heap[leftIdx]) {
      return max;
    }

    // 오른쪽 자식이 없다 -> 루트 노드와 왼쪽 자식만 있다 -> 두개만 비교해서 리턴
    if (!this.heap[rightIdx]) {
      if (this.heap[leftIdx] > this.heap[curIdx]) {
        this.swap(leftIdx, curIdx);
      }
      return max;
    }

    // 왼쪽 오른쪽 자식이 모두 있는 경우
    while (this.heap[leftIdx] > this.heap[curIdx] || this.heap[rightIdx] > this.heap[curIdx]) {
      const maxIdx = this.heap[leftIdx] > this.heap[rightIdx] ? leftIdx : rightIdx;
      this.swap(maxIdx, curIdx);
      curIdx = maxIdx;
      leftIdx = curIdx * 2;
      rightIdx = curIdx * 2 + 1;
    }

    return max;
  }
}

let 최대힙 = new Heap();

inputNum.forEach((value, index) => {
  if (value === 0) {
    result.push(최대힙.getMax());
    최대힙.pop();
  } else {
    최대힙.push(value);
  }
  console.log(최대힙.getHeap());
});

console.log(result.join('\n'));
