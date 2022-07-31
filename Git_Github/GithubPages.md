# Github Pages
- Github 저장소의 내용을 웹페이지로 만들어 주는 서비스
- Github에 자신의 웹 프로젝트를 업로드하면 Github에서 호스팅을 해줌
- public 프로젝트에 대해서만 무료로 웹 사이트를 구축 가능

## Github Pages Publishing
### Yarn
#### 1. gh-pages 패키지 다운로드 (Terminal)
```yarn add gh-pages --dev```

#### 2. package.json 파일 수정
- homepage 추가 <br />
```"homepage" : "https://[user_name].github.io/[repository_name]"```

- scripts에 속성 추가(deploy)<br />
```
"predeploy": "yarn build",
"deploy": "gh-pages -d build"
```

### 3. 배포하기 (Terminal)
```yarn deploy```

### 4. 완료
- 터미널에 'published'라는 문구 보이면 완료

-----

## Trouble Shooting!
### Github Pages 업로드 시 빈 화면만 보이는 경우
- 증상
  * 설정한 홈페이지를 들어가보았을 때, 빈 화면만 보임
  * 터미널 내에서 로컬 작업파일을 확인 했을 때, localhost:3000/폴더명 으로 확인 됨

- 원인
  * React package 중 Router가 설치되어 있으면 문제가 발생할 수 있음

- 해결방법
  * 라우터에 속성 추가 : basename -> 기본 URL을 설정해주는 속성<br />
  ```<BrowserRouter basename={process.env.PUBLIC_URL}>```