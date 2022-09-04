# Http vs Https

## HTTP (HyperText Tranfer Protocol)
- WWW상에서 정보를 주고 받는 프로토콜
- 클라이언트인 웹브라우저가 서버에 HTTP를 통해 웹페이지나 이미지 정보를 요청하면 서버는 이 요청에 응답하여 요구하는 정보를 제공
- HTTP 는 웹브라우저(Client)와 서버(Server)간의 웹페이지같은 자원을 주고 받을 때 쓰는 통신 규약
- http는 텍스트 교환
- html페이지도 텍스트. 바이너리 데이터로 되어있는 것도 아니고 단순 텍스트를 주고 받기 때문에 누군가 네트워크에서 신호를 가로채어 본다면 내용이 노출 => 보안상의 문제를 해결해주는 프로토콜이 HTTPS

-----

## HTTPS (HyperText Transfer Protocol over Secure Socket Layer)
- HTTPS는 인터넷 상에서 정보를 암호화하는 SSL(Secure Socket Layer)프로토콜을 이용하여 웹브라우저(클라이언트)와 서버가 데이터를 주고 받는 통신 규약
- HTTPS는 http 메세지(text)를 암호화하는 것
- HTTPS 프로토콜은 SSL(보안 소켓 계층)을 사용함으로써 이 문제를 해결
  * SSL : 서버와 브라우저 사이에 안전하게 암호화된 연결을 만들 수 있게 도와주고, 서버 브라우저가 민감한 정보를 주고받을 때 이것이 도난당하는 것을 막아줌
- HTTPS의 S가 Secure Socket, 보안 통신망을 말함

-----

### 출처
- [tistory :: 기본기를 쌓는 정아마추어 코딩블로그](https://jeong-pro.tistory.com/89)
- [wishket :: HTTP vs HTTPS 차이, 알면 사이트의 레벨이 보인다.](https://blog.wishket.com/http-vs-https-%EC%B0%A8%EC%9D%B4-%EC%95%8C%EB%A9%B4-%EC%82%AC%EC%9D%B4%ED%8A%B8%EC%9D%98-%EB%A0%88%EB%B2%A8%EC%9D%B4-%EB%B3%B4%EC%9D%B8%EB%8B%A4/)