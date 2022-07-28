# useEffect : 컨포넌트 렌더링 컨트롤!!!

## 언제 사용하는 가?
### 📌 Mount 화면에 첫 렌더링 될 떄 특정 작업을 처리
### 📌 Update 다시 렌더링 될 떄 특정 작업을 처리
### 📌 Unmount 화면에서 사라질 때 특정 작업을 처리

-----

## 사용방법
- useEffect(() => { `callback function` }, [ `dependency array` ]);

### 📌 렌더링 될 때마다 실행
- useEffect(() => {  });

### 📌 첫 렌더링 될 때 실행
- useEffect(() => {  }, [  ]);

### 📌 화면에서 사라질 때 (Clean up)
- useEffect(() => { return () => {  정리 함수 } }, [  ]);

-----

### **참고자료
- [유튜브 별코딩 :: useEffect](https://youtu.be/kyodvzc5GHU)