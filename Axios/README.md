# Axios
## 1. Axios란?
- Axios는 브라우저, Node.js를 위한 Promise API를 활용하는 HTTP 비동기 통신 라이브러리
- 쉽게 말해서 백엔드랑 프론트엔드랑 통신을 쉽게하기 위해 Ajax와 더불어 사용
- 이미 자바스크립트에는 fetch api가 있지만, 프레임워크에서 ajax를 구현할땐 axios를 쓰는 편

-----

## 2. Axios 특징
- 운영 환경에 따라 브라우저의 XMLHttpRequest 객체 또는 Node.js의 http api 사용
- Promise(ES6) API 사용
- 요청과 응답 데이터의 변형
- HTTP 요청 취소
- HTTP 요청과 응답을 JSON 형태로 자동 변경

-----

### 3. Axios vs fetch

| axios | fetch |
| ----- | ----- |
| 써드파티 라이브러리로 설치가 필요 | 현대 브라우저에 빌트인이라 설치 필요 없음 |
| XSRF 보호 | 별도 보호 없음 |
| data 속성을 사용 | body 속성을 사용 |
| data는 object를 포함 | body는 문자열화 |
| status가 200이고 statusText가 ‘OK’이면 성공 | 응답객체가 ok 속성을 포함하면 성공 |
| 자동으로 JSON데이터 형식으로 변환 | .json()메서드를 사용 |
| 요청을 취소할 수 있고 타임아웃을 걸 수 있음 | 해당 기능 존재 하지않음 |
| HTTP 요청을 가로챌수 있음 | 기본적으로 제공하지 않음 |
| download진행에 대해 기본적인 지원을 함 | 지원하지 않음 |
| 좀더 많은 브라우저에 지원됨 | Chrome 42+, Firefox 39+, Edge 14+, and Safari 10.1+이상에 지원 |

#### ::: 간단하게 사용할때는 fetch를 쓰고, 이외의 확장성을 염두해봤을 땐 axios를 쓰면 좋다

-----

### 4. Axios 요청(request) 파라미터 옵션
- method : 요청방식. (get이 디폴트)
- url : 서버 주소
- baseURL : url을 상대경로로 쓸대 url 맨 앞에 붙는 주소.
  * 예를들어, url이 /post 이고 baseURL이 https://some-domain.com/api/ 이면,https://some-domain.com/api/post로 요청 가게 됨
- headers : 요청 헤더
- data : 요청 방식이 'PUT', 'POST', 'PATCH' 해당하는 경우 body에 보내는 데이터
- params : URL 파라미터 ( ?key=value 로 요청하는 url get방식을 객체로 표현한 것)
- timeout : 요청 timeout이 발동 되기 전 milliseconds의 시간을 요청. timeout 보다 요청이 길어진다면, 요청은 취소되게 된다.
- responseType : 서버가 응답해주는 데이터의 타입 지정 (arraybuffer, documetn, json, text, stream, blob)
- responseEncoding : 디코딩 응답에 사용하기 위한 인코딩 (utf-8)
- transformRequest : 서버에 전달되기 전에 요청 데이터를 바꿀 수 있다.
  * 요청 방식 'PUT', 'POST', 'PATCH', 'DELETE' 에 해당하는 경우에 이용 가능
  * 배열의 마지막 함수는 string 또는 Buffer, 또는 ArrayBuffer를 반환합
  * header 객체를 수정 가능
- transformResponse : 응답 데이터가 만들어지기 전에 변환 가능
- withCredentials : cross-site access-control 요청을 허용 유무. 이를 true로 하면 cross-origin으로 쿠키값을 전달 가능
- auth : HTTP의 기본 인증에 사용. auth를 통해서 HTTP의 기본 인증이 구성이 가능
- maxContentLength: http 응답 내용의 max 사이즈를 지정하도록 하는 옵션
- validateStatus : HTTP응답 상태 코드에 대해 promise의 반환 값이 resolve 또는 reject 할지 지정하도록 하는 옵션
- maxRedirects : node.js에서 사용되는 리다이렉트 최대치를 지정
- httpAgent /  httpsAgent : node.js에서 http나 https를 요청을 할때 사용자 정의 agent를 정의하는 옵션 
- proxy : proxy서버의 hostname과 port를 정의하는 옵션
- cancelToken : 요청을 취소하는데 사용되어 지는 취소토큰을 명시

-----

### 5. Axios 단축 메소드와 언제 사용하는 지
- GET : axios.get(url[, config])
  * 단순 데이터(페이지 요청, 지정된 요청) 요청을 수행할 경우
  * 파라미터 데이터를 포함시키는 경우 (사용자 번호에 따른 조회)

- POST : axios.post(url, data[, config])
  * 데이터를 Message Body에 포함시켜 보냄

- PUT : axios.put(url, data[, config])
  * REST 기반 API 프로그램에서 데이터베이스에 저장되어 있는 내용을 갱신(수정)하는 목적으로 사용

- DELETE : axios.delete(url[, config])
  * 일반적으로 Body가 비어있음
  * REST 기반 API 프로그램에서 데이터베이스에 저장되어 있는 내용을 삭제하는 목적으로 사용
  * query나 params가 많아져서 헤더에 많은 정보를 담을 수 없을 때 두 번째 인자에 data를 추가해줄 수 있음



-----

- 출처: [👨‍💻 Dev Scroll:티스토리](https://inpa.tistory.com/entry/AXIOS-📚-설치-사용)