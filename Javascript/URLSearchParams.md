# URLSearchParams

### 문제상황

- url의 아이디를 받아올 때 `split` 메소드를 활용하여 아이디 추출
  > ```
  > const id = Number(location.search.split("=")[1].split("&")[0]);
  > ```

### 문제해결

- 키의 위치가 아닌 url에서 id 값을 받아올 수 있게 URLSearchParams 사용
  > ```
  > const id = Number(new URLSearchParams(location.search).get("id"));
  > ```

---

- 참고자료 : https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
