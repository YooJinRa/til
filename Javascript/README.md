# Javascript
- ⏱ 2022.07.15 ~

## INDEX
- 📌 [Arrow Function 화살표 함수](https://github.com/YooJinRa/til/blob/main/Javascript/ArrowFunction.md)
- 📌 [Statement&Expression 문&표현식](https://github.com/YooJinRa/til/blob/main/Javascript/Statement.md)
- 📌 [Variable 변수](https://github.com/YooJinRa/til/blob/main/Javascript/Variable.md)




-----
## 데이터 타입 data type
- 자바스크립트의 모든 값은 데이터 타입을 가짐
- 자바스크립트(ES6)는 7개의 데이터 타입을 제공
- primitive type(원시타입)과 object/reference type(객체타입)으로 분류
- primitive type(변경 불가능)
> - 숫자타입 number : 숫자, 정수와 실수 구분없이 하나의 숫자 타입만 존재 <br />
> - 문자열 타입 string : 문자열 <br />
> - 불리언 타입 boolean : 논리적 참 true과 거짓 false <br />
> - undefined 타입 : var 키워드로 선언된 변수에 암묵적으로 할당되는 값 <br />
> - null 타입 : 값이 없다는 것을 의도적으로 명시할 때 사용하는 값 <br />
> - 심벌 타입 symbol : ES6에서 추가된 7번쨰 타입, 다른 값과 절대 중복되지 않는 유일무이한 값

- reference type(변경 가능)
> - 객체
> - 함수
> - 배열

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
    // 결과 : '*****'
```


-----
### 배열 Array
- 배열 : 여러 개의 값을 순차적으로 나열한 자료구조
- 요소 element : 배열이 가지고 있는 값
- 원시값은 물론 객체, 함수, 배열 등 자바스크립트에서 값으로 인정하는 모든 것은 배열의 요소가 될 수 있음
- 배열의 요소는 0이상의 정수인 index를 가짐
- 배열의 요소의 개수, 즉 배열의 길이를 나타내는 length 프로퍼티를 가짐
- 일반 객체와 배열을 구분하는 가장 명확한 차이는 `값의 순서`와 `length프로퍼티` -> 인덱스로 표현된ㄴ 값의 순서와 length 프로퍼티를 갖는 배열은 반복문을 통해 순차적으로 값에 접근하기 적합한 자료구조

#### 배열의 장점
- 처음부터 순차적으로 요소에 접근 가능
- 마지막부터 요소에 접근할 수 있음
- 특정 위치부터 순차적으로 요소에 접근 할 수 있음
- -> 배열이 값의 순서와 length프로퍼티를 갖기 때문에 가능
<br />

> cf) 자료구조에서 말하는 배열은 동일한 크기의 메모리 공간에 비틈없이 연속적으로 나열한 자료구조를 말함. 배열의 요소는 하나의 데이터 타입으로 통일되어 있으며, 서로 연속적으로 인접해 있음 :::: 밀집배열 dense array <br />
> 자바스크립트의 배열은 자료구조에서 말하는 일반적인 의미의 배열과 다름. 배열 요소를 위한 각각의 메모리 공간은 동일한 크기를 갖지 않아도 되며, 연속적으로 이어져 있지 않을 수도 있음. 배열의 요소가 연속적으로 이어져 있지 않는 배열 :::: 희소배열 sparce array <br />
> ====> 자바스크립트 배열은 일반적인 배열의 동작을 흉내 낸 특수한 객체 <br />

#### Array.prrototype.includes
- 배열 내에 특정요소가 포함되어 있는 지 확인하여 true 또는 false를 반환함

#### Array.prototype.filter
- 자신이 호출한 배열의 모든 요소를 순회하면서 인수로 전달받은 콜백 함수를 반복 호출
- 콜백 함수의 반환값이 true인 요소들만 구성된 새로운 배열을 반환(원본 배열은 변경되지 않음)
- 자신이 호출한 배열에서 필터링 조건을 만족하는 특정요소만 추출하여 새로운 배열을 만들고 싶을 때 사용

#### Array.prototype.reduce
- 자신을 호출한 배열을 몯은 요소를 순회하며 인수로 전달받은 콜백함수를 반복호출
- 콜백함수의 반환값을 다음 순회 시에 콜백함수의 첫 번째 인수로 전달하면서 콜백 함수를 호출하여 하나의 결과값을 만들어 반환(원본 배열은 변경되지 않음)
- reduce(콜백함수, 초기값) 
- 콜백함수에는 4개의 인수가 있음
> 1) 초기값 또는 콜백 함수의 이전 반환값 <br />
> 2) reduce 메서드를 호출한 배열의 요소값 <br />
> 3) reduce 메서드를 호출한 배열의 인덱스 <br />
> 4) reduce 메서드를 호출한 배열 자체 <br />
