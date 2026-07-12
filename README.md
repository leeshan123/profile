# 이승환 | 개발자 포트폴리오

> 장애의 원인을 끝까지 추적하고, 배운 것을 동작하는 코드로 증명하는 Java·Spring 개발자 이승환을 소개하는 포트폴리오입니다.

[포트폴리오 페이지](https://leeshan123.github.io/profile/) · [GitHub 프로필](https://github.com/leeshan123)

## 이 페이지를 만든 이유

기술 이름을 나열하는 대신 어떤 문제를 발견했고, 어디까지 원인을 추적했으며, 결과를 어떻게 확인했는지를 보여주기 위해 만들었습니다.

실무 경험은 공개 가능한 범위에서 `문제 → 판단 → 구현 → 결과`로 정리하고, 업무 중 생긴 궁금증을 합성 데이터로 다시 구현한 학습 저장소를 함께 연결했습니다. 이를 통해 다음과 같은 개발 방식을 보여주는 것이 목적입니다.

1. 로그와 요청 흐름을 따라 현상을 작게 분해합니다.
2. 느낌이 아니라 전후 수치로 개선을 확인합니다.
3. 이해가 부족한 기술은 독립된 프로젝트로 다시 구현합니다.
4. 기술적 제약을 비개발 직군도 이해할 수 있는 언어로 설명합니다.

## 한눈에 보는 내용

| 구분 | 내용 | 기준 |
| --- | --- | --- |
| 로딩 시간 | 최대 `3.5초 → 2.2초`, 약 `37%` 개선 | 한 공공정보 플랫폼의 메인페이지 |
| 데이터 경험 | 약 `20만 건` 수집 | 한 공개 영화 API에서 영화 13만 건·영화인 7만 건을 수집하고 별도 API 정보와 비교·조합 |
| 프로젝트 경험 | `4개` | 영화 데이터, 공공정보 서비스, 지자체 포털, 인증 연계 배포 경험 |
| 지속 학습 | `3+1개` 활동 | 정기 스터디 3개와 업무 기반 상시 개인 학습 프로젝트 |
| 공개 학습 프로젝트 | `6개` | 실제 업무 소스 없이 일반화한 문제와 합성 데이터로 구현 |

각 숫자는 서로 다른 경험의 결과입니다. 서로 관련 없는 데이터 규모와 로딩 시간을 하나의 성과처럼 합치지 않았으며, 서비스 전체나 현재 운영 환경을 대표하는 값으로 사용하지 않습니다.

## 페이지 구성

- **Impact**: 출처와 맥락이 있는 핵심 수치
- **Experience**: 기관명을 제거한 운영·성능·데이터·배포 경험
- **Public Learning Labs**: 공개 가능한 코드로 다시 검증한 6개 프로젝트
- **Learning System**: 문서화, 발표, 구현으로 이어지는 학습 방식
- **Capabilities**: Backend, Data, Operations, Web UI 역량
- **About & Contact**: 개발자로서의 태도와 공개 GitHub 채널

## 콘텐츠 기준

포트폴리오의 경력 내용은 개인 Notion에서 제목이 정확히 `이력서`인 문서의 4개 프로젝트와 `스터디 및 개인공부` 영역만을 기준으로 재구성했습니다. 공개 페이지에서는 이를 영화 데이터 팀 프로젝트, 대국민 공공정보 플랫폼, 지자체 대민 포털, 공공 인증 연계 서비스로 일반화했습니다.

원문에서 기간과 인원이 확정되지 않은 항목은 임의로 채우지 않았습니다. 프로젝트명은 공개 페이지에서 기관과 서비스를 직접 식별하지 않도록 일반화했지만, 담당 역할·주요 수행 업무·핵심 성과의 의미는 유지했습니다.

## 연결된 학습 프로젝트

| 프로젝트 | 확인한 질문 |
| --- | --- |
| [HTTP Response Contract Lab](https://github.com/leeshan123/http-response-contract-lab) | Body-Code와 HTTP Status 계약은 호출자와 관측성에 어떤 차이를 만드는가? |
| [Excel Architecture Lab](https://github.com/leeshan123/excel-architecture-lab) | 위치 기반 처리와 Schema 기반 구조는 확장성·검증에서 어떻게 다른가? |
| [Client IP Infrastructure Lab](https://github.com/leeshan123/client-ip-infrastructure-lab) | Reverse Proxy 환경에서 전달 헤더를 어디까지 신뢰해야 하는가? |
| [HTTP Message Lab](https://github.com/leeshan123/http-message-lab) | 원시 HTTP 메시지를 객체로 다루면 어떤 설계상의 이점이 생기는가? |
| [Hierarchical Menu Lab](https://github.com/leeshan123/hierarchical-menu-lab) | 계층형 데이터를 parentId, prefix, tree로 표현하면 어떤 차이가 있는가? |
| [Frontend Basics Labs](https://github.com/leeshan123/frontend-basics-labs) | 프레임워크 없이 의미 구조와 반응형 레이아웃을 어떻게 구성하는가? |

## 공개 정보 원칙

이 저장소는 공개 포트폴리오이므로 다음 내용을 의도적으로 제외하거나 일반화했습니다.

- 생년월일, 전화번호, 상세주소 등 불필요한 개인정보
- 고객사·기관·서비스를 직접 식별할 수 있는 이름
- IP, 포트, 내부 경로, 서버 수량, DNS·hosts 값, 상세 네트워크 구성
- 장애 발생 일시, 우회 경로, 인증 처리 순서 등 악용될 수 있는 운영 세부사항
- 실제 로그, DB 구조, SQL 결과, 사용자 데이터와 운영 설정
- 외부 협업사의 소스, 설계서, 배포 산출물
- 공개 API 원본 데이터, API Key와 제3자 이미지

성과는 공개 가능한 문제·본인의 역할·검증 결과만 남겼습니다. 인프라 경험은 제품이나 기관의 실제 구조가 아니라 일반화된 기술 역량 수준으로 설명합니다.

또한 출처를 확인할 수 없던 기존 Hero 이미지를 제거했습니다. 현재 페이지는 외부 이미지·폰트·JavaScript 라이브러리 없이 HTML, CSS, JavaScript만으로 구성됩니다.

## 기술 구성

- Semantic HTML5
- Responsive CSS Grid / Flexbox
- Vanilla JavaScript
- Intersection Observer
- GitHub Actions & GitHub Pages

접근성을 위해 본문 바로가기, 의미 있는 제목 계층, 키보드 포커스, 현재 섹션 표시, `prefers-reduced-motion`, 인쇄 스타일을 적용했습니다.

## 프로젝트 구조

```text
profile/
├── .github/workflows/pages.yml  # main 반영 시 GitHub Pages 배포
├── .gitignore
├── index.html                   # 포트폴리오 콘텐츠와 시맨틱 구조
├── styles.css                   # 디자인 시스템, 반응형·인쇄 스타일
├── script.js                    # 헤더, 섹션 표시, 점진적 노출
└── README.md
```

## 로컬 실행

별도 빌드나 의존성이 필요하지 않습니다.

```bash
python3 -m http.server 8000
```

브라우저에서 `http://localhost:8000`을 엽니다.

## 검증 체크리스트

- `320px`, `375px`, `768px`, `1024px`, `1440px` 화면에서 레이아웃 확인
- 키보드만으로 본문 바로가기, 내비게이션, 프로젝트 링크 탐색
- 브라우저 200% 확대와 `prefers-reduced-motion` 환경 확인
- 인쇄 미리보기에서 연락처·경력·프로젝트 가독성 확인
- GitHub 프로필과 6개 공개 프로젝트 링크 확인
- placeholder, 개인정보, 내부 식별자와 상세 인프라 정보 재검색

```bash
node --check script.js
git diff --check
```

## 배포

`.github/workflows/pages.yml`이 `main` 브랜치 반영을 감지하면 정적 파일을 GitHub Pages로 배포합니다. 기능 변경은 별도 브랜치와 Pull Request에서 검토한 뒤 `main`에 병합하는 방식을 사용합니다.
