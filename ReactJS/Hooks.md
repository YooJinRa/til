### About Hook!

- Function형 컴포넌트가 Class형 컴포넌트의 기능을 사용할 수 있도록 해주는 기능
- Class형 컴포넌트에서만 쓸 수 있었던 **state와 life cycle을 Function형 컴포넌트에서도 사용 가능**

### Why!

- hook을 사용해 함수형 컴포넌트에서도 state와 생명주기를 다룰 수 있기에 **클래스형 컴포넌트에서만 가능하던 상태관리를 더 손쉽게 할 수 있어 필요**
- 함수형 컴포넌트들은 기본적으로 리렌더링이 될때, **함수 안에 작성된 모든 코드가 다시 실행
- 클래스형 컴포넌트들은 method의 개념 → 리렌더링이 되더라도 render() 를 제외한 나머지 method 및 state는 그대로 보존
- 함수형 컴포넌트들이 기존에 가지고 있던 상태(state)를 전혀 관리(기억)할 수 없게 만듦 ::: 함수형 컨포넌트 === Stateless Component
- 함수내에 써져 있는 모든 코드 및 변수를 기억할 수 없다는 의미이며, 함수형 컴포넌트가 리렌더링될때 무조건 새롭게 선언 & 초기화 & 메모리에 할당
- Hook의 등장으로, 브라우저에 메모리를 할당 함으로써, **함수형 컴포넌트가 상태(state)를 가질 수 있게 한 것**
- (공식문서) Hook 만든 이유!
- 컨포넌트 사이에서 상태 로직 재사용 어려움 ::: render props, HOC
- 복잡한 (클래스형) 컨포넌트들은 이해하기 어려움 ::: 각종 생명주기 함수
- 클래스 자체 개념 이해하기 어려움 ::: this 등

### Rules!

- 최상위에서만 Hook 호출
- React 함수(컴포넌트)의 최상위에서만 Hook을 호출 할 것
- 반복문, 조건문, 중첩된 함수등에서 호출 X
- **React 함수에서만 Hook을 호출
-** Custom Hook에서는 호출 가능
- 일반적인 Javascript 함수에서는 호출 X
- Hook을 만들때 앞에 use 붙이기
- 한눈에 보아도 Hook 규칙이 적용되는지를 파악할 수 있기 때문 (공식 문서)
- **React는 Hook 호출되는 순서에 의존
-** 한 컴포넌트에서 여러개의 hook이 사용되는 경우, **hook은 위에서부터 아래로 순서에 맞게 동작**

```
function Form() {
  // 1. name이라는 state 변수를 사용하세요.
  const [name, setName] = useState('Mary');

  // 2. Effect를 사용해 폼 데이터를 저장하세요.
  useEffect(function persistForm() {
    localStorage.setItem('formData', name);
  });

  // 3. surname이라는 state 변수를 사용하세요.
  const [surname, setSurname] = useState('Poppins');

  // 4. Effect를 사용해서 제목을 업데이트합니다.
  useEffect(function updateTitle() {
    document.title = name + ' ' + surname;
  });

  // ...
}

// ------------
// 첫 번째 렌더링
// ------------
useState('Mary')           // 1. 'Mary'라는 name state 변수를 선언합니다.
useEffect(persistForm)     // 2. 폼 데이터를 저장하기 위한 effect를 추가합니다.
useState('Poppins')        // 3. 'Poppins'라는 surname state 변수를 선언합니다.
useEffect(updateTitle)     // 4. 제목을 업데이트하기 위한 effect를 추가합니다.

// -------------
// 두 번째 렌더링
// -------------
useState('Mary')           // 1. name state 변수를 읽습니다.(인자는 무시됩니다)
useEffect(persistForm)     // 2. 폼 데이터를 저장하기 위한 effect가 대체됩니다.
useState('Poppins')        // 3. surname state 변수를 읽습니다.(인자는 무시됩니다)
useEffect(updateTitle)     // 4. 제목을 업데이트하기 위한 effect가 대체됩니다.

```

- [공식문서](https://ko.reactjs.org/docs/hooks-rules.html)

### Hooks

1. useState (동적 상태 관리)
2. useEffect (side effect 수행 -mount/unmount/update)
    
    **When!**
    
    - **Mount 화면에 첫 렌더링 될 때 특정 작업을 처리**
    - **Update 다시 렌더링 될 때 특정 작업을 처리**
    - **Unmount 화면에서 사라질 때 특정 작업을 처리**
    
    **How!**
    
    ```
    useEffect(() => { callback function }, [ dependency array ]);
    
    // 렌더링 될 때마다 실행
    useEffect(() => { });
    
    // 첫 렌더링 될 때 실행
    useEffect(() => { }, [ ]);
    
    // 화면에서 사라질 때 (Clean up)
    useEffect(() => { return () => { 정리 함수 } }, [ ]);
    ```
    
3. useContext (컴포넌트를 중첩하지 않고도 전역 값 쉽게 관리)
4. useReducer (복잡한 컴포넌트들의 state를 관리 -분리)
5. useCallback (특정 함수 재사용)
    
    **What!**
    
    - 메모이제이션 된 콜백 반환
    
    **When!**
    
    - 불필요한 렌더링을 방지하기 위해 참조의 동일성에 의존적인 최적화된 자식 컴포넌트에 콜백을 전달할 때 유용
    
    **How!**
    
    ```
    // 사용방법
    useCallback(fn, deps)은 useMemo(() => fn, deps)
    
    const memoizedCallback = useCallback(
      () => {
        doSomething(a, b);
      },
      [a, b],
    );
    ```
    
6. useMemo (연산한 값 재사용)
    
    **What!**
    
    - Memo = Memoization 메모이제이션
    - 동일한 값을 리턴하는 함수를 반복적으로 호출해야 된다면, 맨 처음 값을 메모리에 저장해서 ***필요할 때마다*** 메모리에서 꺼내서 다시 사용하는 기법
    - 자주 필요한 값을 캐싱을 해두어 값이 필요할 때마다 캐시에서 꺼내서 사용
    
    **When!**
    
    - 컨포넌트 성능 최적화
    - 일반적으로 함수형 component의 렌더링 -> component 함수 호출 -> 함수가 호출될 때마다 모든 내부 변수 초기화
    - useMemo 사용 :: 렌더링 -> component 함수호출, Memoization -> 렌더링 -> component 함수 호출, Memoize 된 값을 재사용
    - 동일한 값을 리턴하는 함수를 반복적으로 호출해야 할 때
    
    **How!**
    
    - useMemo(() => { `callback function` }, [ `dependency array` ])
    - 배열의 요소의 값이 업데이트 될 때만 콜백함수를 다시 호출 -> Memoization된 값을 다시 업데이트해서 다시 Memoization 해줌
    
7. useRef (DOM선택, 컴포넌트 안에서 조회/수정할 수 있는 변수 관리)
    
    **Point!**
    
    - 순수 자바스크립트 객체 생성
    - .currnet 프로퍼티를 변경하는 것은 리렌더링이 되지 않음
    
    **When**!
    
    - ****특정 DOM을 선택할 때
    -**** 특정 엘리먼트의 크기를 가져와야 함
    - 스크롤바 위치를 가져오거나 설정필요
    - 포커스를 설정해줘야함
    - Video.js, JWPlayer 같은 HTML5 Video 관련 라이브러리, 또는 D3, chart.js 같은 그래프 관련 라이브러리 등의 외부 라이브러리를 사용해야 할 때
    - ****컨포넌트 안에서 조회 및 수정 할 수 있는 변수 관리할 때 (useRef로 관리해주는 변수는 값이 바뀌어도 컴포넌트 리랜더링 X)
    -**** setTimeout, setInterval 을 통해서 만들어진 id
    - 외부 라이브러리를 사용하여 생성된 인스턴스
    - scroll 위치
    
    **How!**
    
    ```
    useRef( .current의 기본 값 )
    // 값을 수정하는 경우 .current의 값을 수정
    // 값을 조회하는 경우 .current의 값을 조회
    ```
    
8. useImperativeHandle
9. useLayoutEffect
10. useDebugValue