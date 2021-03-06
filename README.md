# Dotmind

달랩 10주 프로젝트였지만 잊혀졌다가 😭 부활중 😇

도트를 좋아해서 언젠가 만들어보고 싶었다. (친구들과 즐기기용)

https://dot-mind.herokuapp.com/

## Key Concept

**도트버전** 캐치마인드

### 페이지 구성

- [x] 로비
- [ ] 로그인 화면
- [ ] 혼자 그리기
- [ ] 같이 그리기

### 주요 기능

- [x] 그림
  - [x] 그리기
    - [x] 단순 그리기 기능
      - [x] 색칠하기
      - [x] 지우기
    - [x] 소켓 통신 연결
  - [x] 그림 다운로드
- [ ] 게임
  - [ ] 문제 맞추기
    - [ ] 문제 출력
    - [ ] 정답 처리
- [ ] 채팅하기
  - [x] 현재 구분없이 다수 채팅
- [ ] 회원가입

---

## 기술 스택

### Front-end

- Vue.js
  - Vue Router
    - 페이지 이동
- SCSS
  - 스타일 상속 관계를 가독성 높게 작성하기 위해 사용
- NES.CSS
  - 필요한 도트 디자인을 빨리 구현하기 위해 사용
- Socket.io-client
  - 클라이언트 실시간 통신 (채팅, 그림 그리기)

### Back-end

- Server
  - Express.js
    - CRUD API 서버 구현
  - Socket.io
    - 서버 실시간 통신 (채팅, 그림 그리기)

### Testing

- Jest, Vue-test-utils
  - 주요 로직 테스트 코드 작성 (현재 canvas와 pallete 컴포넌트만 일부 작성)
