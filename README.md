# [wanted-pre-onboarding-fe]

이 레파지토리는 원티드 프리온보딩 프론트엔드 코스 사전 과제 실현 목적으로 만들어졌습니다. <br/><br/>
👉 <a href="https://github.com/walking-sunset/selection-task" target="_blank">선발 과제 링크</a>

<br/>

## 🚀 설치 및 실행
```zsh
$ npm install
$ npm start
```

<br/>

## 🎬 데모 영상 및 프로젝트 링크

1. 로그인 및 회원가입<br/><br/>
![login](https://user-images.githubusercontent.com/64053930/184637479-57fb7ed1-df4d-44dc-a1e3-0ee8334ae98e.gif)


2. 투두리스트(수정/삭제/완료)<br/><br/>
![todo](https://user-images.githubusercontent.com/64053930/184637729-e28970da-2b10-406e-9863-23f46c1780b6.gif)

3. 토큰 여부에 따른 리다이렉트<br/><br/>
![localStorage](https://user-images.githubusercontent.com/64053930/184640216-c6872ca6-f451-4c59-9b74-04ab2c0fbdc5.gif)

<br/>

## 💻 적용 기술

<img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=HTML5&logoColor=white"/> <img src="https://img.shields.io/badge/Scss-CC6699?style=flat&logo=Sass&logoColor=white"/> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=JavaScript&logoColor=white"/> <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white"/>

<br/>

## 📚 적용 라이브러리
React Router / Axios / Scss / React Icon

<br/>

## 📝 구현 기능
  - 로그인 / 회원가입
    - 이메일과 비밀번호의 유효성 검사기능을 구현
    - 로그인 성공 후 /todo 경로로 이동
    - 로그인 시 JWT 로컬 스토리지에 저장
    - 로그인 여부에 따른 리다이렉트 처리 구현
      - <b>토큰이 있는 상태로</b> ``/`` 페이지에 접속한다면 ``/todo`` 경로로 리다이렉트
      - <b>토큰이 없는 상태로</b> ``/todo``페이지에 접속한다면 ``/`` 경로로 리다이렉트
 
  - 투두리스트
    -  ``/todo``경로에 접속하면 투두 리스트의 목록이 나타나도록 구현
    - 투두 리스트의 내용과 완료 여부가 표시
    - 추가 버튼을 누르면 입력창의 내용이 새로운 투두 리스트로 추가
    - 개별 아이템 우측에 수정버튼이 존재하고 해당 버튼을 누르면 수정모드가 활성화되고 투두 리스트의 내용을 수정하도록 구현
    - 수정모드에서는 개별 아이템의 우측에 제출버튼과 취소버튼이 표시되며 해당 버튼을 통해서 수정 내용을 제출하거나 수정을 취소하도록 구현
    - 개별 아이템 우측에 삭제버튼이 존재하고 해당 버튼을 누르면 투두 리스트가 삭제되도록 구현
