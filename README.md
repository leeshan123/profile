# 이승환 | Java·Spring Developer

> 문제를 끝까지 파고들고, 배운 것을 코드로 남기는 개발자입니다.

[Portfolio](https://leeshan123.github.io/profile/) · [Email](mailto:leeshan123@Naver.com) · [Blog](https://velog.io/@leeshan123/posts) · [GitHub](https://github.com/leeshan123)

## 1. About Me

안녕하세요. Java와 Spring을 중심으로 웹 서비스를 개발하고 운영해 온 이승환입니다.

저는 기능이 동작하는 데서 멈추지 않고 서비스가 왜 느리고 왜 실패하는지 이해하려고 합니다. 로그와 요청 흐름으로 원인을 좁히고, 개선은 수치로 확인하며, 새로 배운 내용은 작은 코드로 다시 만들어 봅니다.

| 구분 | 내용 |
| --- | --- |
| 이름 | 이승환 |
| Email | [leeshan123@Naver.com](mailto:leeshan123@Naver.com) |
| Blog | [velog.io/@leeshan123](https://velog.io/@leeshan123/posts) |
| GitHub | [github.com/leeshan123](https://github.com/leeshan123) |
| Portfolio | [leeshan123.github.io/profile](https://leeshan123.github.io/profile/) |

## 2. Experience in Numbers

| 숫자 | 경험 |
| --- | --- |
| `3.5초 → 2.2초` | 온통청년 메인페이지의 최대 로딩 시간을 약 `37%` 줄였습니다. |
| `약 20만 건` | 영화 약 `13만 건`과 영화인 약 `7만 건`을 수집해 자체 DB를 구축했습니다. |
| `4개` | 개인·실무 프로젝트에서 기능 개발과 서비스 운영을 경험했습니다. |
| `3+1개` | 정기 스터디 3개와 업무 기반 개인 학습을 이어가고 있습니다. |

## 3. Project Experience

### 3.1. 안성포털

대민 포털을 유지보수하고 고도화하며 데이터 무결성, 외부 연계, 보안 문제를 다뤘습니다.

- 배리어프리 시설 정보의 사용자·관리자 화면과 Excel 관리 기능을 구현했습니다.
- Excel 전체 재등록 방식을 기존 데이터와 비교한 변경 항목만 반영하도록 개선해 기존 콘텐츠를 보존했습니다.
- 외부 연계 오류를 요청 구간별로 나누어 확인하고 담당자와 공유할 수 있는 근거를 정리했습니다.
- 웹 에디터의 정상 서식은 유지하면서 게시판 유형에 맞게 입력·출력 검증을 강화했습니다.

`Java` `Spring` `MyBatis` `Oracle` `JavaScript` `Excel`

### 3.2. 온통청년

공공정보 플랫폼을 운영하며 성능 병목, 외부 인증 의존성, 분산 환경의 로그인 상태를 개선했습니다.

- 사용하지 않는 프론트엔드 자원과 불필요한 조회, 반복되는 동기 호출을 찾아 줄였습니다.
- 메인페이지의 최대 로딩 시간을 3.5초에서 2.2초로 줄여 약 37% 개선했습니다.
- 다중 인스턴스에서 로그인 상태가 일치하지 않는 원인을 분석하고 공유 저장소 기반으로 개선했습니다.
- 외부 연계 장애의 영향 범위를 나누어 확인하고 서비스 연속성 확보에 기여했습니다.
- 병목과 부하를 다이어그램과 비유로 설명해 기획자·PM과 구현 방향을 조율했습니다.

`Java` `Spring` `Redis` `SQL` `HTTP API` `JavaScript`

### 3.3. 영화의봄

**개인 팀 프로젝트 · 4인**

역할: **팀장**

`2024.03 — 2024.05`

영화 데이터와 커뮤니티 기능을 제공하는 플랫폼을 만들었습니다.

- KOBIS에서 영화 약 13만 건과 영화인 약 7만 건을 수집해 자체 DB를 구축하고 TMDB 정보와 조합했습니다.
- 데이터 수집·가공·저장 흐름을 설계하고 측정 결과와 다이어그램으로 팀의 기술 방향을 조율했습니다.
- 관객 수 놀이터 게시판 CRUD, 검색 쿼리 개선, 관리자 AJAX 조회를 구현했습니다.
- Google 로그인과 회원 통계 기능을 구현했습니다.

`Java` `Spring` `MyBatis` `MariaDB` `Gson` `AJAX`

### 3.4. 본인확인지원포털

관련 담당자들과 배포 조건을 조율하고, 포트 포워딩 방식으로 사이트를 배포했습니다.

- 협업 과정에서 필요한 배포 범위와 확인 항목을 정리했습니다.
- 사이트 공개 후 접속과 주요 화면 동작을 함께 확인했습니다.

`Collaboration` `Port Forwarding` `Deployment`

## 4. Public Learning Labs

실무에서 생긴 궁금증을 업무 소스나 실제 사용자 데이터 없이 일반화해 다시 구현한 저장소입니다.

| 프로젝트 | 확인한 질문 |
| --- | --- |
| [HTTP Response Contract Lab](https://github.com/leeshan123/http-response-contract-lab) | HTTP Status와 본문 코드는 어떤 책임을 가져야 하는가? |
| [Excel Architecture Lab](https://github.com/leeshan123/excel-architecture-lab) | 하드코딩된 Excel 업로드·다운로드를 공통 처리와 업무별 로직으로 어떻게 분리하는가? |
| [Client IP Infrastructure Lab](https://github.com/leeshan123/client-ip-infrastructure-lab) | Reverse Proxy 환경에서 전달 헤더를 어디까지 신뢰할 수 있는가? |
| [HTTP Message Lab](https://github.com/leeshan123/http-message-lab) | 원시 HTTP 메시지를 객체로 모델링하면 무엇이 달라지는가? |
| [Hierarchical Menu Lab](https://github.com/leeshan123/hierarchical-menu-lab) | 계층형 메뉴의 저장 모델과 화면 모델은 어떻게 분리하는가? |
| [Frontend Basics Labs](https://github.com/leeshan123/frontend-basics-labs) | 프레임워크 없이 의미 구조와 반응형 화면을 어떻게 만드는가? |

## 5. Learning System

- **운영체제 스터디** · `2025.03 — 2025.05`

  주 1회 발표와 토론으로 프로세스, 메모리, 동시성을 서버 운영 관점과 연결했습니다.

- **알고리즘 스터디** · `2025.06 — 2025.12`

  Java 문제 풀이와 코드 리뷰로 복잡도, 가독성, 대안 로직을 비교했습니다.

- **HTTP 스터디와 구현 실습** · `진행 중`

  매주 교재 2장씩 학습·발표하고, 개념을 확인할 수 있는 실습 코드를 구현합니다.

- **업무 기반 개인 학습** · `상시 진행`

  궁금했던 동작과 개선 아이디어를 업무 소스 없이 다시 만들어 비교·검증합니다.

## 6. Skills

| 영역 | 사용 기술 |
| --- | --- |
| Backend | Java, Spring, Spring Boot |
| Data | Oracle, MariaDB, SQL, Redis |
| Frontend | HTML, CSS, JavaScript, Thymeleaf, JSP |
| Infrastructure | Nginx, Tomcat, Reverse Proxy, Docker, GitHub Actions |
