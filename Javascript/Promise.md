# 프로미스 Promise
- 프로미스는 자바스크립트 비동기 처리에 사용되는 객체.
  * 자바스크립트의 비동기 처리란 ‘특정 코드의 실행이 완료될 때까지 기다리지 않고 다음 코드를 먼저 수행하는 자바스크립트의 특성’

- 프로미스는 주로 서버에서 받아온 데이터를 화면에 표시할 때 사용.
- 일반적으로 웹 애플리케이션을 구현할 때 서버에서 데이터를 요청하고 받아오기 위해 아래와 같은 API를 사용.
  ```
  $.get('url 주소/products/1', function(response) {
    // ...
  });
  ```
- 위 API가 실행되면 서버에다가 ‘데이터 하나 보내주세요’ 라는 요청을 보냄.
- 여기서 데이터를 받아오기도 전에 마치 데이터를 다 받아온 것 마냥 화면에 데이터를 표시하려고 하면 오류가 발생하거나 빈 화면이 출력.
- 이와 같은 문제점을 해결하기 위한 방법 중 하나가 프로미스.

-----

### 프로미스 코드
```
function getData(callback) {
  // new Promise() 추가
  return new Promise(function(resolve, reject) {
    $.get('url 주소/products/1', function(response) {
      // 데이터를 받으면 resolve() 호출
      resolve(response);
    });
  });
}

// getData()의 실행이 끝나면 호출되는 then()
getData().then(function(tableData) {
  // resolve()의 결과 값이 여기로 전달됨
  console.log(tableData); // $.get()의 reponse 값이 tableData에 전달됨
});
```
- 콜백 함수로 처리하던 구조가 new Promise(), resolve(), then()와 같은 프로미스 API를 사용한 구조로 바뀜.

-----

### 프로미스의 3가지 상태(states)
- Pending(대기) : 비동기 처리 로직이 아직 완료되지 않은 상태
- Fulfilled(이행) : 비동기 처리가 완료되어 프로미스가 결과 값을 반환해준 상태
- Rejected(실패) : 비동기 처리가 실패하거나 오류가 발생한 상태


-----

### Promise Chaining (여러 개의 프로미스 연결하기)
- 프로미스의 또 다른 특징은 여러 개의 프로미스를 연결하여 사용할 수 있다는 점.
- 프로미스는 then() 메서드를 호출하고 나면 새로운 프로미스 객체가 반환 가능.

```
function getData() {
  return new Promise({
    // ...
  });
}

// then() 으로 여러 개의 프로미스를 연결한 형식
getData()
  .then(function(data) {
    // ...
  })
  .then(function() {
    // ...
  })
  .then(function() {
    // ...
  });
```
- 응용 
```
new Promise(function(resolve, reject){
  setTimeout(function() {
    resolve(1);
  }, 2000);
})
.then(function(result) {
  console.log(result); // 1
  return result + 10;
})
.then(function(result) {
  console.log(result); // 11
  return result + 20;
})
.then(function(result) {
  console.log(result); // 31
});
```

- 프로미스 객체를 하나 생성하고 setTimeout()을 이용해 2초 후에 resolve()를 호출 예제

  > - resolve()가 호출되면
  > - 프로미스가 대기(Pending)상태에서 이행(Fulfilled)상태로 넘어가기 때문에
  > - 첫 번째 .then()의 로직으로 넘어간다.
  > - 첫 번째 .then()에서는 이행된 결과 값 1을 받아서 10을 더한 후 그다음 .then() 으로 넘기고,
  > - 두 번째 .then()에서도 마찬가지로 바로 이전 프로미스의 결과 값 11을 받아서 20을 더하고 다음 .then()으로 넘겨준다.
  > - 그러면 마지막 .then()에서 최종 결과 값 31을 출력하게 된다.