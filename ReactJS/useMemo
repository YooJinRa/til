# useMemo : component 성능 최적화(useMemo, useCallback)

## useMemo
- Memo = Memoization 메모이제이션
- 동일한 값을 리턴하는 함수를 반복적으로 호출해야 된다면, 맨 처음 값을 메모리에 저장해서 **_필요할 때마다_** 메모리에서 꺼내서 다시 사용하는 기법
- 자주 필요한 값을 캐싱을 해두어 값이 필요할 때마다 캐시에서 꺼내서 사용

## 언제 사용하는 가?
### 📌 component 성능 최적화
- 일반적으로 함수형 component의 렌더링 -> component 함수 호출 -> 함수가 호출될 때마다 모든 내부 변수 초기화
- useMemo 사용 :: 렌더링 -> component 함수호출, Memoization -> 렌더링 -> component 함수 호출, Memoize 된 값을 재사용

### 📌 동일한 값을 리턴하는 함수를 반복적으로 호출해야할 때

-----

## 사용방법
- useMemo(() => { `callback function` }, [ `dependency array` ])
- 배열의 요소의 값이 업데이트 될 때만 콜백함수를 다시 호출 -> Memoization된 값을 다시 업데이트해서 다시 Memoization 해줌

-----

### **참고자료
- [유튜브 별코딩 :: useMemo](https://youtu.be/e-CnI8Q5RY4)