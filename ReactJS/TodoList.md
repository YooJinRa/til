- 2022.07.25 기술매니저님께서 말씀해주신 내용 바탕으로 공부해야하는 내용 정리
- 구두로만 말씀하신 내용이 키워드에 추가되어 있음

# 공부 키워드
- [ ] Virtual DOM
- [ ] 컴포넌트 ⭐⭐⭐
- [ ] state ⭐⭐⭐
- [ ] 렌더링
- [ ] redux (state와 차이 : 둘 다 상태관리 담당) ⭐⭐⭐
- [ ] 라이프 사이클 메서드
- [ ] this 바인딩
- [X] useEffect ⭐⭐⭐
- [X] useRef
- [ ] dependency array
- [ ] 리팩토링 ⭐
- [ ] 구조분해할당
- [X] useMemo : 성능 최적화와 관련
- [ ] useCallback : 성능 최적화와 관련
- [ ] router ⭐⭐⭐

# React Todo List

## 📝 '왜' 사용하는 건지?
### 📌 React를 사용하는 이유
- SPA 라이브러리/프레임워크 중 가장 많이 사용 <https://npmtrends.com/angular-vs-react-vs-vue>
- 버전 업데이트가 빠르고, docs가 잘되어 있고, 커뮤니티가 큼
- `Virtual DOM` 을 사용하여 DOM방식이 효율정
- `컴포넌트` 기반 => 재사용, 유지보수에 용이

### 📌 State를 사용하는 이유
- 상태는 컴포넌트의 변경 가능한 데이터 저장소
- `State` 는 리액트 `렌더링` 가 밀접한 관계가 있음 => 상태관리의 중요성
- State는 리액트가 리렌더링을 할지 말지 알려주는 것
- 리액트 상태관리 대표적인 라이브러리 : `redux`

### 📌 Hook를 사용하는 이유
- <https://ko.reactjs.org/docs/hooks-overview.html>
- class형 컴포넌트를 안쓰면서 `라이프 사이클 메서드` 사용이 가능
- effect 함수만 보더라도 훨씬 사용이 더 간단하고 중복로직 줄일 수 있음 => 가독성
- `this 바인딩` 해줄 필요가 없음

### 📌 라이프사이클(클래스형 vs 함수형)
#### 클레스형 컴포넌트의 라이프 사이클 메서드
- <https://ko.reactjs.org/docs/state-and-lifecycle.html>
- <https://react.vlpt.us/basic/25-lifecycle.html>

#### 함수형 컴포넌트의 useEffect
- <https://ko.reactjs.org/docs/hooks-effect.html>

```
// - 컴포넌트 생성
useEffect(()=>{
  // dependency array에 아무 변수도 넣지 않으면  componentDidMount역할을 함
}.[]);

// - 컴포넌트 업데이트
useEffect(()=>{
  // updateState가 업데이트 되면 리렌더링 됨 =   componentDidMount역할을 함
}.[updateState]);

// - 컴포넌트 사라짐
useEffect(()=>{

  return () => {
    // cleanup function이라고도 함 = ComponentWillUnmout
  }
}.[]);
```

-----

## 📝 프로젝트 만들기 전 준비
### 📌 리액트 기본 폴더 구조
- node_modules : 프로젝트에 대한 라이브러리가 설치되어 있는 곳. 건드리지 말것(건드리거나 꼬였다면 삭제하고 다시 npm install하기)
- public : 정적 파일을 담는 곳. 사용자가 직접 웹 브라우저에서 보게 되는 html이나 image가 담김
- src : 우리의 코드가 들어가는 곳. 이 안에서 App.js를 비롯한 page, component 폴더를 생성해서 작업
- package-json : 설치한 라이브러리 버전 등을 확인할 수 있음. 패키지를 일괄적으로 관리하는 곳
- README.md : 프로젝트 설명을 작성하는 곳

### 📌 내가 맡은 기획 점검
- 1. 내가 맡은 기획의 UI를 점검
- 2. 무엇을 만들어야 하는 지 고민
- 3. 어떻게 만들어야 할 지 고민
- 4. 뭐 부터 만들어야 할 지 고민

### 📌 폴더 구조 로직 짜기
#### components
- 페이지 안에 들어가는 작은 요소들, 이 안에서도 폴더(기능)로 나눔
- 포스트(게시판관련), user(사용자관련), layout(전체적인 크기) 등

#### pages
- 실제로 보이는 1개의 페이지

#### header/footer
- header
- footer

### 📌 프로젝트 제작 순서(이 부분은 정해진건 없어서 참고만!)
- 1. 로직짜기(어떻게 할지 구상)
- 2. 폴더 구조 짜기(어려우면 넘어가기)
- 3. UI 제작(1,2번 모르겠다 싶으면 UI만들면서 어떻게 할지 고민)
- 4. 기능 추가(버튼 이벤트 연결, api연결(or mock data짜기) :: 목업데이타 만들 수 있는 홈페이지 추천 <https://designer.mocky.io/>
- 5. 기능 테스트
- 6. `성능 최적화` (렌더링 줄이기)
- 7. 코드 `리팩토링` (함수화, custom, hooks, 주석달기 등)

