# Concept

### 버전관리
- 프로젝트 상태가 변경되는 정보를 알고 있다는 것. commit을 사용해서 버전이 달라지는 것을 관리

### git 초기화 (git initialize)
> `git init`
- 컴퓨터에 프로젝트를 git이 관리하는 프로젝트로 만드는 것.
- 처음 프로젝트 만들 때 단 한 번만 사용.

### commit
> `git commit -m "프로젝트 변경내용" `
- 현재 프로젝트 상태를 저장하는 것.
- 누가, 언제 commit 했는지의 정보와 프로젝트 변경 내용을 나타냄. 

### add(또는 staging)
> `git add . / git add 파일명 `
- commit에 반영할 파일을 선택하는 것.
- commit에 반영할지 안할지는 파일 단위로 선택할 수 있음.

### repo(repository)
- git으로 관리되는 프로젝트를 말함.
- 로컬 repo(local repository) : 내 컴퓨터에 저장되어 있는 리포지토리를 말함.
- 원격 repo(remote repository) : github 처럼 다른 곳에서 접속할 수 있는 공간에 저장되어 있는 것.

### Branch Tracking(추적)
- 로컬 repo와 원격 repo를 연결.

### push
> `git push -u origin main`
- 로컬 repo의 commit을 원격 repo 에 반영(push).
- 원격 repo 에 없는 즉, 새로운 commit 내역을 모두 원격 repo에 한 번에 반영.

### pull
- 원격 repo의 commit을 로컬 repo 로 반영(pull). 
- 로컬 repo에 없는 즉, 새로운 commit 내역을 모두 로컬 repo에 한 번에 반영.