# 클래스 Class

## 배경

- 자바스크립트는 프로토타입 기반 객체지향 언어(클래스가 필요없는 객체지향 프로그래밍 언어)
  - ES5에서는 클래스 없이도 생성자 함수와 프로타입을 통해 객체 지향 언어의 상속을 구현할 수 있었음
  - 그러나, 클래스 기반 언어에 익숙한 프로그래머들은 프로토타입 기반 프로그래밍 방식에 혼란을 느낄 수 있었음

## 정의

- Class "특별한 함수"입니다. 함수를 함수 표현식과 함수 선언으로 정의할 수 있듯이 class 문법도 class 표현식 and class 선언 두 가지 방법을 제공
  - Class 선언 : Class를 정의하는 한 가지 방법은 class 선언을 이용 -> class를 선언하기 위해서는 클래스의 이름과 함께 class 키워드를 사용
    - Hoisting : 함수 선언과 클래스 선언의 중요한 차이점은 함수의 경우 정의하기 하기 전에 호출할 수 있지만, 클래스는 반드시 정의한 뒤에 사용할 수 있다는 점
  - Class 표현식 : Class 표현식은 이름을 가질 수도 있고, 갖지 않을 수도 있음 -> 이름을 가진 class 표현식의 이름은 클래스 body의 local scope에 한해 유효

## 방법

- Class body : 중괄호 {} 로 묶여 있는 안쪽 부분으로 메서드나 constructor와 같은 class 멤버를 정의할 곳
- Strick mode : 클래스의 본문(body)은 strict mode에서 실행
- Constructor : class 로 생성된 객체를 생성하고 초기화하기 위한 특수한 메서드
  - 클래스 안에 한 개만 존재 가능
  - constructor는 부모 클래스의 constructor를 호출하기 위해 super 키워드를 사용 가능
- static : 클래스를 위한 정적(static) 메서드를 정의
  - 정적 메서드 : 어플리케이션(application)을 위한 유틸리티(utility) 함수를 생성하는 데 주로 사용
- Private : 클래스 내부에서만 읽고 쓰기가 가능
- extends를 통해 클래스 상속 가능
- super를 통해 상위 클래스 호출 : 객체의 부모가 가지고 있는 메서드를 호출하기 위해 사용

---

## 참고 자료

- [MDN Classes](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Classes)
- [모던 자바스크립트](https://ko.javascript.info/class#ref-2685)
