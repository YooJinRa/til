// 1부터 n까지 번호가 붙어있는 n명의 사람이 영어 끝말잇기를 하고 있습니다. 영어 끝말잇기는 다음과 같은 규칙으로 진행됩니다.

// 1번부터 번호 순서대로 한 사람씩 차례대로 단어를 말합니다.
// 마지막 사람이 단어를 말한 다음에는 다시 1번부터 시작합니다.
// 앞사람이 말한 단어의 마지막 문자로 시작하는 단어를 말해야 합니다.
// 이전에 등장했던 단어는 사용할 수 없습니다.
// 한 글자인 단어는 인정되지 않습니다.

function solution(n, words) {
  let box = [];
  for(let i = 0; i < words.length; i++){
    const prevLast = i === 0 ? null : words[i-1].charAt(words[i-1].length - 1);
    const curFirst = words[i].charAt(0);
    const answer = [(i+1) % n === 0 ? n : (i+1) % n, Math.ceil((i+1)/n)];
    
    // 마지막 글자와 안 맞는 단어 말한 경우
    if(i !== 0 && prevLast !== curFirst) {
        return answer;
    }
    
    // 같은 단어 말한 경우
    const newBox = box.filter((word) => word === words[i]);
    
    if(newBox.length > 0) {
        return answer;
    }
    box.push(words[i]);
  }
  return [0, 0];
}