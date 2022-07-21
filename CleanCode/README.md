# Clean Code
- 📌 클린코드의 가장 중요한 요소 중 하나는 가독성이라고 볼 수 있다. 즉, **_모든 팀원이 이해(understandability)하기 쉽도록 작성된 코드_** 이다.


## _Clean Code 5 Tips_ ❗

### 1. 검색이 가능한 이름 사용하기.
- ex) 하루가 총 몇 초인지 요구하는 함수가 있다면? <br />
- `setInterval( eatKimchi, 86400 )` → <br />
- `const SECONDS_IN_A_DAY = 86400; setInterval( eatKimchi, SECONDS_IN_A_DAY );`<br />

### 2. 함수명은 반드시 동사로 써라.
- ex) `function usereData(){ ... }` → `funcion loadUserData(){ ... }`<br />

### 3. Argument는 3개 이하로 사용.
- 많은 Argument를 사용해야 한다면 1개의 Configuration Object를 보내는 것을 추천<br />

### 4. Boolean 값을 인수로 함수에 보내는 것을 최대한 방지하자. 
- 필요한 경우 함수를 분리

### 5. 짧은 변수명이나 축약어 쓰는 것을 피하자.
- ex) `u` → `user` / `e` → `email`<br />