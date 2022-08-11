## TDZ(Temporal Dead Zone)

- 일시적 사각지대.
- let과 const도 호이스팅이 되지만, 변수가 선언되기 전 호출되면 ReferenceError가 발생.
- 호이스팅(끌어올리기) 후 초기화 단계에서 메모리 공간을 확보하는데 선언을 호이스팅해도 초기화 전 까지 메모리 공간이 없기때문에 변수를 참조할 수 없음.

### 변수 선언의 3단계
- 1. 선언 단계(Declaration phase) : 변수를 실행 컨텍스트의 변수 객체에 등록하는 단계
- 2. 초기화 단계(Initialization phase) : 변수 객체에 등록되어 있는 변수를 위하여 메모리를 할당하는 단계 
  - 변수는 undefined로 초기화
- 3. 할당 단계(Assignment phase) : 변수에 실제로 값이 할당되는 단계 (undefined → 특정한 값)

