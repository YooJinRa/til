# 문자열 타입 string
- 텍스트 데이터를 나타내는 데 사용
- 표기 방법 : 작은 따옴표, 큰 따옴표, 백틱으로 텍스트를 감싸서 표현

## 1. 문자열 타입에 관한 메소드

### string.length
- 문자열의 길이를 반환하는 속성

### string.substr(start, length)
- 파라미터로 입력받은 start index부터 length길이 만큼 string이 잘라내어 반환하는 함수
- 첫 번째 글자의 index는 0

### string.substring(start, end-1)
- substr()함수와 같이 특정 문자열을 잘라내어 반환
- substr()와 다른 점은 매개변수로 잘라내고 싶은 문자열의 start index와 last index를 전달
- 첫 번째 글자의 index는 0

### string.slice(start, end)
- 파라미터로 자를 문자열의 start index와 end index를 전달

### string.repeat(반복count)
- 주어진 문자열을 옵션의 count만큼 반복하여 붙인 다음에 새로운 문자열로 반환하는 함수

```
    const str = '*'
    console.log(str.repeat(5))
    // 결과 : '*****'
```