function solution(participant, completion) {
  var answer = '';
  participant.sort();  // participant 알파벳 순으로 정렬
  completion.sort();   // completion 알파벳 순으로 정렬
  
  // participant와 completion을 서로 비교
  // -> 서로 정렬을 했기에 -> 값이 다르면 탈락자 발생
  for(let i=0; i<participant.length; i++){ 
      if(participant[i] !== completion[i]){
          answer = participant[i];
          break;
      }
  }
  return answer;
}