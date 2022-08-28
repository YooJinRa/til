# GitHub Actions
## GitHub Actions 란?
- 코드 저장소(repository)로 유명한 GitHub에서 제공하는 CI(Continuous Integration, 지속 통합)와 CD(Continuous Deployment, 지속 배포)를 위한 서비스
- GitHub에서 코드를 관리하고 있는 소프트웨어 프로젝트에서 사용할 수 있으며 개인은 누구나 GitHub에서 코드 저장소를 무료로 만들 수 있기 때문에 다른 CI/CD 서비스 대비 진입장벽이 낮은 편
- 자동으로 코드 저장소에서 어떤 이벤트(event)가 발생했을 때 특정 작업이 일어나게 하거나 주기적으로 어떤 작업들을 반복해서 실행시킬 수도 있음
- GitHub Actions는 기존 CI/CD 서비스 대비 간편한 설정과 높은 접근성으로 특히 개발자들 사이에서 많은 호응을 얻고 있음

-----

## GitHub Actions 핵심개념
### Workflows
- GitHub Actions에서 가장 상위 개념인 워크플로우(Workflow, 작업 흐름)
- 자동화해 놓은 작업 과정
- 워크플로우는 코드 저장소 내에서 .github/workflows 폴더 아래에 위치한 YAML 파일로 설정하며, 하나의 코드 저장소에는 여러 개의 워크플로우, 즉 여러 개의 YAML 파일을 생성할 수 있음.
- YAML 파일에는 크게 2가지를 정의 필요
  * on 속성을 통해서 해당 워크플로우가 언제 실행되는지를 정의
  * jobs 속성을 통해서 해당 워크플로우가 구체적으로 어떤 일을 해야하는지 명시

-----

### On :: 워크플로우가 언제 실행되는지를 정의
- 예시
  * 코드 저장소의 main 브랜치에 push 이벤트가 발생할 때 마다 워크플로우를 실행하려면?
  ```
  # .github/workflows/example.yml
  on:
    push:
      branches:
        - main

  jobs:
  # ...(생략)...
  ```

  * 매일 자정에 워크플로우를 실행하려면?
  ```
  # .github/workflows/example.yml
  on:
    schedule:
    - cron: "0 0 * * *"

  jobs:
    # ...(생략)...
  ```

-----

### Jobs :: 워크플로우가 구체적으로 어떤 일을 해야하는지 명시
- GitHub Actions에서 작업(Job)이란 독립된 가상 머신(machine) 또는 컨테이너(container)에서 돌아가는 하나의 처리 단위를 의미
- 하나의 워크플로우는 여러 개의 작업으로 구성되며 적어도 하나의 작업은 있어야 함
- 모든 작업은 기본적으로 동시에 실행되며 필요 시 작업 간에 의존 관계를 설정하여 작업이 실행되는 순서를 제어할 수도 있음
- 작업은 워크플로우 YAML 파일 내에서 jobs 속성을 사용하며 작업 식별자(ID)와 작업 세부 내용 간의 맵핑(mapping) 형태로 명시
- 예시
  * `job1`, `job2`, `job3` 이라는 작업 ID를 가진 3개의 작업을 추가하려면?

  ```
  # .github/workflows/example.yml
  # ...(생략)...

  jobs:
    job1:
      # job1에 대한 세부 내용
    job2:
      # job2에 대한 세부 내용
    job3:
      # job3에 대한 세부 내용
  ```

- 작업의 세부 내용으로는 여러 가지 내용을 명시 가능 => runs-on 속성을 통해 해당 리눅스나 윈도우즈와 같은 실행 환경을 지정
- 예시
  * 가장 널리 사용되는 우분투의 최신 실행 환경에서 해당 작업을 실행하고 싶다면?

  ```
  # .github/workflows/example.yml
  # ...(생략)...

  jobs:
    job1:
      runs-on: ubuntu-latest
      steps:
        # ...(생략)...
  ```

-----

### Steps :: 작업 순서를 정의하는 것
- GitHub Actions에서는 각 작업(job)이 하나 이상의 단계(step)로 모델링
- 작업 단계는 단순한 커맨드(command)나 스크립트(script)가 될 수도 있고 다음 섹션에서 자세히 설명할 액션(action)이라고 하는 좀 더 복잡한 명령일 수도 있음.
- 커맨드나 스크립트를 실행할 때는 run 속성을 사용하며, 액션을 사용할 때는 uses 속성을 사용
- 예시
  * 자바스크립트 프로젝트에서 테스트를 돌리려면 코드 저장소에 코드를 작업 실행 환경으로 내려 받고, 패키지를 설치한 후, 테스트 스크립트를 실행해야할텐데요. 이 3단계의 작업은 아래와 같이 steps 속성을 통해서 명시될 수 있을 것

  ```
  # .github/workflows/example.yml
  # ...(생략)...

  jobs:
    job1:
      runs-on: ubuntu-latest
      steps:
        - uses: actions/checkout@v3
        - run: npm install
        - run: npm test
  ```
##### _** YAML 문법에서 시퀀스(sequence) 타입을 사용하기 때문에 각 단계 앞에 반드시 -를 붙여줘야 함 **_

-----

### Actions :: 빈번하게 필요한 반복 단계를 재사용하기 용이하도록 제공되는 일종의 작업 공유 메커니즘
- GitHub Actions에서 빈번하게 필요한 반복 단계를 재사용하기 용이하도록 제공되는 일종의 작업 공유 메커니즘
- 하나의 코드 저장소 범위 내에서 여러 워크플로우 간에서 공유를 할 수 있을 뿐만 아니라, 공개 코드 저장소를 통해 액션을 공유하면 GitHub 상의 모든 코드 저장소에서 사용이 가능

-----

### Summary
- 워크플로우(workflow)는 자동화 시켜놓은 작업 과정을 뜻하며 YAML 파일을 통해 어떤 작업(job)들이 언제 실행되야 하는지를 설정
- 각 워크플로우는 독립된 환경에서 실행되는 작업(job)이 적어도 한 개 이상으로 구성되며, 각 작업에는 작업 ID가 부여되고 세부 내용(실행 환경, 작업 단계 등)이 명시
- 하나의 작업은 보통 순차적으로 수행되는 여러 개의 단계(step)로 정의되며, 각 단계는 단순한 커맨드(command)일 수도 있고 추상화된 액션(action)일 수도 있음

-----
* 출처 : [DaleSeo 블로그](https://www.daleseo.com/github-actions-basics/)