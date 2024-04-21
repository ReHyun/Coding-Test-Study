function solution(nums) {
  var answer = 0;
  const setArr = new Set(nums);
  const arr = Array.from(setArr);
  const max = nums.length / 2;
  if (arr.length > max) {
    answer = max;
  } else {
    answer = arr.length;
  }

  return answer;
}
