// 짝지어 제거하기는, 알파벳 소문자로 이루어진 문자열을 가지고 시작합니다. 
// 먼저 문자열에서 같은 알파벳이 2개 붙어 있는 짝을 찾습니다. 
// 그다음, 그 둘을 제거한 뒤, 앞뒤로 문자열을 이어 붙입니다. 
// 이 과정을 반복해서 문자열을 모두 제거한다면 짝지어 제거하기가 종료됩니다. 
// 문자열 S가 주어졌을 때, 짝지어 제거하기를 성공적으로 수행할 수 있는지 
// 반환하는 함수를 완성해 주세요. 
// 성공적으로 수행할 수 있으면 1을, 아닐 경우 0을 리턴해주면 됩니다.

function solution(s) {
  const stack = [];
  for(let i = 0; i < s.length; i++ ){
    if( !stack.length || stack[stack.length-1] !== s[i] ){ // stack 길이 0 || stack에 있는 요소와 s 현재 요소가 같지 않으면
        stack.push(s[i]); // stack에 넣기
    } else {
        stack.pop(); // stack에 빼기
    }
  }

return stack.length ? 0 : 1; // stack 길이가 1이면, 0을 반환 아니면 1을 반환
}