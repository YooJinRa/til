# Javascript
- 2022.07.15 ~

## 데이터 타입 data type
- 자바스크립트의 모든 값은 데이터 타입을 가짐
- 자바스크립트(ES6)는 7개의 데이터 타입을 제공
- primitive type(원시타입)과 object/reference type(객체타입)으로 분류
- primitive type(변경 불가능)
> 숫자타입 number : 숫자, 정수와 실수 구분없이 하나의 숫자 타입만 존재
> 문자열 타입 string : 문자열
> 불리언 타입 boolean : 논리적 참 true과 거짓 false
> undefined 타입 : var 키워드로 선언된 변수에 암묵적으로 할당되는 값
> null 타입 : 값이 없다는 것을 의도적으로 명시할 때 사용하는 값
> 심벌 타입 symbol : ES6에서 추가된 7번쨰 타입, 다른 값과 절대 중복되지 않는 유일무이한 값

- reference type(변경 가능)
> 객체
> 함수
> 배열

### 문자열 타입 string
- 텍스트 데이터를 나타내는 데 사용
- 표기 방법 : 작은 따옴표, 큰 따옴표, 백틱으로 텍스트를 감싸서 표현
 

#### string.length
- 문자열의 길이를 반환하는 속성

#### string.substr(start, length)
- 파라미터로 입력받은 start index부터 length길이 만큼 string이 잘라내어 반환하는 함수
- 첫 번째 글자의 index는 0

#### string.substring(start, end-1)
- substr()함수와 같이 특정 문자열을 잘라내어 반환
- substr()와 다른 점은 매개변수로 잘라내고 싶은 문자열의 start index와 last index를 전달
- 첫 번째 글자의 index는 0

#### string.slice(start, end)
- 파라미터로 자를 문자열의 start index와 end index를 전달

#### string.repeat(반복count)
- 주어진 문자열을 옵션의 count만큼 반복하여 붙인 다음에 새로운 문자열로 반환하는 함수
```
const str = '*'
console.log(str.repeat(5))

// 결과 : *****
```
