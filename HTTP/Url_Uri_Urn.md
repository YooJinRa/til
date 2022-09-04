# URI vs URL vs URN
- URI는 식별하고, URL은 위치를 말함

<img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdtX6Er%2FbtqSPFIOWsr%2FV0t3Kfx3sIdq4Tpgm30C20%2Fimg.jpg" width="800px" />

## URI(Uniform Resource Identifier)
- URI는 특정 리소스를 식별하는 통합 자원 식별자(Uniform Resource Identifier)를 의미
- 웹 기술에서 사용하는 논리적 또는 물리적 리소스를 식별하는 고유한 문자열 시퀀스

-----

## URL(Uniform Resource Locator)
- URL은 흔히 웹 주소라고도 하며, 컴퓨터 네트워크 상에서 리소스가 어디 있는지 알려주기 위한 규약
- URI의 서브셋

-----

## URN(Uniform Resource Name)
- http와 같은 프로토콜을 제외
- 리소스의 name을 가리키는 데 사용
- 하나의 리소스엔 절대로 겹치는 URN이 있으면 안됨 => 불변이며, 유일
- 실제 자원을 찾기 위해서는 URN을 URL로 변환하여 이용

-----

## URI의 구조
```
// 일반적인 URI의 구조
scheme:[//[user[:password]@]host[:port]][/path][?query][#fragment]

```
- `scheme` : 사용할 프로토콜을 뜻하며 웹에서는 http 또는 https를 사용
- `user와 password` : (서버에 있는) 데이터에 접근하기 위한 사용자의 이름과 비밀번호
- `host와 port` : 접근할 대상(서버)의 호스트명과 포트번호
- `path` : 접근할 대상(서버)의 경로에 대한 상세 정보
- `query` : 접근할 대상에 전달하는 추가적인 정보 (파라미터)
- `fragment` : 메인 리소스 내에 존재하는 서브 리소스에 접근할 때 이를 식별하기 위한 정보

-----

#### 출처
- [tistory :: adore_voy](https://jae04099.tistory.com/entry/INTERNET-URL-URI-URN-%EC%B0%A8%EC%9D%B4)
- [velog :: @torang](https://velog.io/@torang/URL%EA%B3%BC-URI%EC%9D%98-%EC%B0%A8%EC%9D%B4%EC%A0%90)