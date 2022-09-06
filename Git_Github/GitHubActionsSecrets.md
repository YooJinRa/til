# GitHub Action에서 Secrets를 통해 env파일 생성
- 소셜로그인을 서버와 연결시키는 과정에서 민감한 API 키를 숨겨서 GitAction을 통해 배포한 사이트에 적용해야 하는 상황이 발생하게 되어 알아보게 됨.

### 방법
#### 1. 빈 .env 파일 로컬에서 생성
- 기존에 local에서 개발하면서 사용하고 있었던 .env 파일은 .env.local 파일로 이름 변경

#### 2. .gitignore 파일 수정
- .env => .env.local

#### 3. @@@.yml 파일 내 env 설정 추가
```
name: Raidiho deploy

on:
  pull_request:
    branches:
      - deploy
    types: [closed]

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout source code.
        uses: actions/checkout@v2

      - name: Check Node v 
        run: node -v

      # 추가된 부분 시작 ====> Github Repository Secrets를 통해 환경 변수 파일을 생성
      - name: Generate Environment Variables File for Production
        run: |
          echo "REACT_APP_KAKAO_CLIENT_ID=$REACT_APP_KAKAO_CLIENT_ID" >> .env
          echo "REACT_APP_KAKAO_REDIRECT_URI=$REACT_APP_KAKAO_REDIRECT_URI" >> .env
        env:
          REACT_APP_KAKAO_CLIENT_ID: ${{ secrets.REACT_APP_KAKAO_CLIENT_ID }}
          REACT_APP_KAKAO_REDIRECT_URI: ${{ secrets.REACT_APP_KAKAO_REDIRECT_URI }}
      # <==== 추가된 부분 끝

      - name: Install Dependencies
        run: yarn install --frozen-lockfile

      - name: Build
        run: yarn build

      - name: Configure AWS Credentials
        uses: aws-actions/configure-aws-credentials@v1
        with:
          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: ${{ secrets.AWS_REGION }}

      - name: Deploy                
        env:
          AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
          AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
        run:
          aws s3 cp --recursive --region ap-northeast-2 build s3://raidho.site

      - name: Invalidate CloudFront Cache
        run: aws cloudfront create-invalidation --distribution-id ${{secrets.DEV_AWS_DISTRIBUTION_ID}} --paths "/*"
```

----

### 참고 자료
- [Developer Hyun github](https://ji5485.github.io/post/2021-06-26/create-env-with-github-actions-secrets/)