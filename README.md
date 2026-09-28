# 플로우업(FLOWUP) 사용 매뉴얼

이젠아카데미(EZEN Academy)의 학습운영시스템 **플로우업(FLOWUP)** 사용 매뉴얼입니다.  
관리자·강사·훈련생 3종 대상자별 매뉴얼과, 다우오피스 헬프센터 스타일의 퀵 가이드를 함께 제공합니다.

> 문서 버전: **v0.9 (골격)** · 화면 캡처 삽입 대기 상태  
> 내부 업무용 · 대외비

---

## 🗂️ 구성

본 저장소는 두 가지 스타일의 매뉴얼을 함께 담고 있습니다.

### 1. 원본 매뉴얼 (`/manuals`)
공식 문서 톤의 풀 매뉴얼입니다. 각 화면 캡처 삽입 위치가 점선 박스로 표시되어 있습니다.

| 대상 | 파일 | 설명 |
| --- | --- | --- |
| 관리자 | [`manuals/admin.html`](manuals/admin.html) | 교육과정·훈련생·강사·클래스룸·콘텐츠·TODO 등 시스템 전반 운영 |
| 강사 | [`manuals/instructor.html`](manuals/instructor.html) | 담당 과정 클래스룸 운영, 수업자료·공지·커뮤니티·콘텐츠 등록 |
| 훈련생 | [`manuals/student.html`](manuals/student.html) | 수강 과정 학습 참여, 공지 확인, 자료 열람, 커뮤니티 활동 |

### 2. 헬프센터 퀵 가이드 (`/daou`)
다우오피스 헬프센터 스타일로 제작한 초기 설정 퀵 가이드입니다.

| 대상 | 파일 | 설명 |
| --- | --- | --- |
| 헬프센터 홈 | [`daou/index.html`](daou/index.html) | 3종 가이드 진입 페이지 |
| 관리자 | [`daou/admin.html`](daou/admin.html) | 관리자 초기 설정 6단계 |
| 강사 | [`daou/instructor.html`](daou/instructor.html) | 강사 초기 설정 5단계 |
| 훈련생 | [`daou/student.html`](daou/student.html) | 훈련생 초기 설정 5단계 |

### 3. 진입 페이지
- [`index.html`](index.html) — 원본 매뉴얼 3종 진입 페이지

### 4. GitBook 문서 (`/docs`)
원본 매뉴얼을 Markdown으로 변환한 GitBook용 문서입니다. 장(chapter)별 파일로 나뉘어 있으며, `docs/SUMMARY.md`가 목차 역할을 합니다.

---

## 📘 GitBook 연동 방법

1. [GitBook](https://www.gitbook.com) 로그인 → **New space** 생성
2. Space 설정에서 **Integrations → GitHub Sync** 선택
3. 이 저장소와 `main` 브랜치를 연결
4. 동기화 방향: **GitHub → GitBook** 선택
5. 루트의 `.gitbook.yaml`이 `docs/` 폴더를 자동으로 인식합니다

이후 GitHub에 Markdown을 수정·푸시하면 GitBook에 자동 반영됩니다.  
캡처 이미지는 `docs/.gitbook/assets/`에 넣고 [매뉴얼 확정 절차](docs/guide-to-v1.md)를 참고해 교체하세요.

---

## 📁 폴더 구조

```
.
├── index.html              # 원본 매뉴얼 진입 페이지
├── manuals/                # 원본 매뉴얼 (관리자·강사·훈련생)
├── daou/                   # 헬프센터 스타일 퀵 가이드
├── .gitbook.yaml           # GitBook 설정 (docs/ 를 루트로 지정)
├── docs/                   # GitBook용 Markdown 문서
│   ├── README.md           # GitBook 첫 페이지
│   ├── SUMMARY.md          # GitBook 목차
│   ├── admin/ instructor/ student/   # 장별 .md
│   └── .gitbook/assets/    # 캡처 이미지 저장 위치
├── assets/                 # 공통 CSS·JS
│   ├── style.css           # 원본 매뉴얼 스타일
│   ├── daou-style.css      # 헬프센터 스타일
│   └── toc.js              # 목차 스크립트
└── screenshots/            # 참조용 화면 캡처
```

---

## 🚀 사용 방법

### 로컬에서 열람
저장소를 클론한 후 `index.html`을 브라우저에서 바로 열면 됩니다.

```bash
git clone https://github.com/<your-org>/flowup-manual.git
cd flowup-manual
open index.html          # macOS
# 또는 start index.html  # Windows
```

### 로컬 서버로 실행 (권장)
상대 경로 링크가 안정적으로 동작합니다.

```bash
# Python 3
python -m http.server 8000

# Node.js (npx)
npx serve .
```

브라우저에서 `http://localhost:8000` 접속.

### GitHub Pages로 배포
1. 저장소의 **Settings → Pages** 진입
2. **Source**: `Deploy from a branch`
3. **Branch**: `main` / `root` 선택 후 **Save**
4. 발급된 URL(`https://<your-org>.github.io/flowup-manual/`)로 접속

---

## ✏️ 매뉴얼 확정 절차 (v0.9 → v1.0)

1. 담당자가 관리자 사이트(`admin.ezengn.flowup.co.kr`)에 로그인하여, 매뉴얼에 표시된 각 화면(그림 번호별)을 순서대로 캡처합니다.
2. 캡처 이미지에 **빨간 박스·파란 박스·번호 표시**를 편집하고, 학생명·연락처·이메일 등 **개인정보는 모자이크** 처리합니다.
3. 매뉴얼의 `[그림 X-X 삽입 위치]` 자리에 이미지를 배치하고, 각 화면 아래의 **진행 순서·주의사항**을 실제 화면 기준으로 보완합니다.
4. 최종 검토 후 `v1.0`으로 확정 커밋합니다.

---

## ⚠️ 주의사항

- 본 문서는 **플로우업 관리자 시스템의 실제 화면**을 기준으로 작성됩니다.
- 시스템 업데이트 또는 사용자 권한에 따라 메뉴와 기능이 다르게 표시될 수 있습니다.
- 저장소는 **내부 업무용**이며, 외부 공개 시 개인정보 및 시스템 URL 노출에 유의해 주세요.

---

## 📝 문서 이력

| 버전 | 일자 | 내용 |
| --- | --- | --- |
| v0.9 | 2026-09 | 매뉴얼 골격 · 화면 캡처 삽입 위치 표시 |
| v1.0 | 예정 | 실제 화면 캡처 삽입 및 절차 보완 완료 |

---

© 2026 EZEN Academy · 이젠아카데미
