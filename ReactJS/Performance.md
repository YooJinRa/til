# 성능최적화

로딩 성능 : 어떻게 빠르게 로딩할건지?
렌더링 성능: 어떻게 빠르게 렌더링 할건지?

tool : chrome Network, Performance, Audit(Light house), webpack-bundle-analyzer

### 이미지 사이즈 최적화(어떤 사이즈가 적합한지) : 로딩 성능 최적화

- 너비 기준으로 2배 정도 큰 사이즈를 활용하는게 적당함.

#### 이미지 줄이는 방법

- API로 받아오는 이미지의 경우 어떻게 줄이면 좋은가?
  - CDN(Contents Delivery Network) : 물리적 거리의 한계를 극복하기 위해 소비자와 가까운 곳에 컨텐츠 서버를 두는 기술
  - Image CDN(Image Processing CDN) :
    - http://cdn.image.com?src=[img src]&width=200&height=100
  - imgix.com : 직접 image CDN을 구축하는 방법도 있지만, solution을 사용해서 적용하는 방법도 있음.

### code split(코드 분할) : 로딩 성능 최적화

- 페이지별로 필요한 코드만 불러올 수 있도록 설정하면 좋을 것 같다!(코드 분리)
- 하나의 번들 파일을 페이지별로 쪼개서 페이지에서 필요한 모듈들만 불러온다!
- code splitting pattern : 페이지별로 분리, 모듈별로 분리 등
- code splitting: 코드를 분할하는 것!
  - 불필요한 코드 또는 중복되는 코드가 없이 적절한 사이즈의 코드가 적절한 타이밍에 로드 될 수 있도록 하는 것.
  - [코드분할 - React 공식문서](https://ko.legacy.reactjs.org/docs/code-splitting.html)
- code splitting을 설정하는 주체는 webpack! --> webpack에 설정을 해주어야 함 --> but! cra로 만들어진 프로젝트는 기본적으로 webpack 설정이 잘 되어 있음!(코드만 작성하면 code splitting이 잘 설정되도록 설정되어 있음)

### 텍스트 압축 : 로딩 성능 최적화

- Network 탭 -> headers -> Response Headers -> Content-Encoding 값에서 압축되어 있는 파일인지 확인 할 수 있음.
- GZIP, Deflate 보통 두 가지 방법으로 웹상에서 압축을 사용함
- 압축을 무분별하게 진행하면 오히려 성능이 떨어 질 수 있음
  - 어떤 파일을 압축해야 할까? file의 크기가 2kB 이상이 되면 encoding을 해서 전달하는 게 좋다!

### Bottleneck 코드 최적화(병목현상 코드들을 어떻게 찾아내고 해결할 수 있는 지) : 렌더링 성능 최적화

- [webpack-bundler-analyzer](https://www.npmjs.com/package/cra-bundle-analyzer)
  - 설치 : npm install cra-bundle-analyzer
  - 실행 : npx cra-bundle-analyzer
