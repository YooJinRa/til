# 문과 표현식

## 1. 값 value
- 값 value : 식(표현식 expression)이 평가 evaluate되어 생성된 결과
- 평가 evaluate : 식을 해석해서 값을 생성하거나 참조하는 것
- 변수 : 하나의 값을 저장하기 위해 확보한 메모리 공간 자체 또는 그 메모리 공간을 식별하기 위해 붙인 이름 ::: `변수에 할당되는 것은 값`

## 2. 리터럴 literal
- 리터럴 literal : 사람이 이해할 수 있는 문자 또는 약속된 기호를 사용해 값을 생성하는 표기법 notation
- 사람이 이해할 수 있는 문자(아라비아 숫자, 알파벳, 한글 등) 또는 미리 약속된 기호('', "", ., [], {}, // 등)로 표기한 코드
- 자바스크립트 엔진은 코드가 실행되는 시점인 런타임 runtime에 리터럴을 평가해 값을 생성
- 리터럴은 값을 생성하기 위해 미리 약속한 표기법
> 리터럴 <br />
> - 정수 리터럴, 부동소수점 리터럴, 2진수 리터럴, 8진수 리터럴, 16진수 리터럴, 문자열 리터럴, 불리언 리터럴, null 리터럴, undifined 리터럴, 객체 리터럴, 배열 리터럴, 함수 리터럴, 정규 표현식 리터럴

## 3. 표현식 expression
- 표현식 expression : 값으로 평가될 수 있는 문
- 표현식이 평가되면 새로운 값을 생성하거나 기존 값을 참조
- 리터럴도 값으로 평가되기 떄문에 리터럴도 표현식!
- 표현식은 리터럴, 식별자(변수, 함수 등의 이름), 연산자, 함수 호출 등의 조합으로 이루어져 있음
- 다양한 표현식이 있지만 값으로 평가된다는 점에 동일
- 표현식과 표현식이 평가된 값은 동등한 관계 '동치' `1 + 2 = 3`

## 4. 문 statement
- 문 statement : 프로그램을 구성하는 기본 단위이자 최초 시행 단위(== 명령문 : 문은 컴퓨터에 내리는 명령)
- 문의 집합으로 이루어진 것이 바로 프로그램 -> 문을 작성하고 순서에 맞게 나열하는 것이 프로그래밍
- 문은 여러 토큰으로 구성
> * 토큰 Token <br />
> 문법적인 의미를 가지며, 문법적으로 더 이상 나눌 수 없는 코드의 기본 요소를 의미 <br />
> ex) 키워드, 식별자, 연산자, 리터럴, 세미콜론, 마침표 등의 특수기호는 문법적인 의미를 가지며, 문법적으로 더 이상 나눌 수 없는 코드의 기본 요소이므로 모두 토큰 <br />
- 선언문 / 할당문 / 조건문 / 반복문 등으로 구분

## 5. 표현식인 문 vs 표현식이 아닌 문
- 표현식인 문 : 값으로 평가될 수 있는 문 (ex) 할당문)
- 표현식이 아닌 문 : 값으로 평가될 수 없는 문 (ex) 변수 선언 문)
> * 표현식인 문과 표현식이 아닌 문을 구별법 <br />
> - :::: 변수에 할당해 보는 것 <br />
> - 표현식인 문은 값으로 평가되므로 변수에 할당 할 수 있음 <br />
> - 표현식이 아닌 문은 값으로 평가될 수 없으므로 변수에 할당하면 에러 발생 <br />