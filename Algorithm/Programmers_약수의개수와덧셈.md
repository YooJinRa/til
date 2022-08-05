# 약수의 개수와 덧셈
## 문제설명
- 두 정수 left와 right가 매개변수로 주어집니다. left부터 right까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고, 약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.

### 제한사항
- 1 ≤ left ≤ right ≤ 1,000

### 입출력 예
| left	| right	| result |
|-----|-----|-----|
| 13	| 17	| 43 |
| 24	| 27	| 52 |

## 문제풀이
- version 1.
```
function solution(left, right) {
    let answer = [];
    for(let num = left; num<=right; num++) {
        // 각각의 i의 약수를 구하기
        let divisor = []
        for(let divNum=1; divNum<=num; divNum++) {
            num%divNum === 0 && divisor.push(divNum);
        }
        console.log(divisor); // 각각의 약수 확인
        // 각각의 i의 약수의 개수가 짝수면 true, 홀수면 false
        // i가 짝수면 그대로, 홀수면 - 붙여서 배열에 넣기
        divisor.length%2 === 0 ? answer.push(num) : answer.push(-num);
    }
    console.log(answer);
    // reducer로 각각의 요소 합계 구해서 return
    return answer.reduce((arr, cul) => arr+cul);
}
```

- Version 2.
```
function solution(left, right) {
    let sum = 0;
    for(let num = left; num<=right; num++) {
        let divCount = 0;
        for(let divNum=1; divNum<=num; divNum++) {
            num%divNum === 0 && (divCount += 1);
        }
        divCount%2 === 0 ? sum += num : sum += -num;
    }
    return sum;
}
```