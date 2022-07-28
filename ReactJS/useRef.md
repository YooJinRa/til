# useRef

## 언제 사용하는 가?
### 📌 특정 DOM을 선택할 때
- 특정 엘리먼트의 크기를 가져와야 함
- 스크롤바 위치를 가져오거나 설정필요
- 포커스를 설정해줘야함
- Video.js, JWPlayer 같은 HTML5 Video 관련 라이브러리, 또는 D3, chart.js 같은 그래프 관련 라이브러리 등의 외부 라이브러리를 사용해야 할 때

### 📌 컨포넌트 안에서 조회 및 수정 할 수 있는 변수 관리할 때 (useRef로 관리해주는 변수는 값이 바뀌어도 컴포넌트 리랜더링 X)
- setTimeout, setInterval 을 통해서 만들어진 id
- 외부 라이브러리를 사용하여 생성된 인스턴스
- scroll 위치

-----

## 사용방법
- useRef( `.current의 기본 값` )
- 값을 수정하는 경우 .current의 값을 수정
- 값을 조회하는 경우 .current의 값을 조회


-----

## useRef의 특징
- 순수 자바스크립트 객체 생성
- .currnet 프로퍼티를 변경하는 것은 리랜더링이 되지 않음

-----
### **참고자료
- [리액트 공식문서 :: useRef](https://ko.reactjs.org/docs/hooks-reference.html#useref)
- [벨로퍼트 리액트 :: useRef](https://react.vlpt.us/basic/12-variable-with-useRef.html)