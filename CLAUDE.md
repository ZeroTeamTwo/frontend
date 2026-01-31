# CLAUDE.md

그레이픽(GrayPick) - AI 기반 법안 큐레이션 서비스 프론트엔드

## 기술 스택

- Next.js 15.2.8 (App Router, Turbopack) + React 19 + TypeScript
- Tailwind CSS 4 + Framer Motion
- TanStack React Query
- Storybook + Vitest + Playwright
- Husky + lint-staged + Prettier + ESLint

## 명령어

```bash
npm run dev            # 개발 서버 (Turbopack)
npm run build          # 프로덕션 빌드
npm run lint           # ESLint
npm run storybook      # 스토리북 실행 (포트 6006)
npm run build-storybook # 스토리북 빌드
```

## 프로젝트 구조

간소화된 FSD(Feature-Sliced Design) 아키텍처 사용. 하위 레이어에서 상위 레이어 import 금지, 동일 레이어 간 import 허용.

```
src/
  app/           # Next.js 페이지 (routes)
  features/      # feature 단위 컴포넌트
    auth/        # 인증
    bill/        # 법안 목록
    bill-detail/ # 법안 상세
    home/        # 홈
    layout/      # 레이아웃 (Header 등)
    search/      # 검색
    onboarding/  # 온보딩
    mypage/      # 마이페이지
    profile/     # 프로필
    policy/      # 정책
    admin/       # 관리자
  shared/        # 공용 레이어
    api/         # API 호출
    components/  # 공용 컴포넌트 (스토리 포함)
    const/       # 상수
    hooks/       # 공용 훅
    icon/        # 아이콘
    types/       # 공용 타입
    util/        # 유틸리티
    skeletons/   # 스켈레톤 UI
  static/        # 정적 파일
  stories/       # 스토리북 MDX
```

## 네이밍 컨벤션

| 대상             | 규칙               | 예시           |
| ---------------- | ------------------ | -------------- |
| 폴더             | 케밥 케이스        | `user-profile` |
| tsx 컴포넌트     | 파스칼 케이스      | `Header.tsx`   |
| 파일             | 카멜 케이스        | `useLogin.ts`  |
| 변수/함수        | 카멜 케이스        | `userProfile`  |
| boolean 변수     | is/has/can 접두사  | `isLoading`    |
| 상수             | 스크리밍 스네이크  | `USER_PROFILE` |
| 타입             | 파스칼 케이스      | `ProfileProps` |
| 배열 변수        | List 접미사        | `userList`     |
| 이벤트 핸들러    | handle 접두사      | `handleLogin`  |

**축약어:** btn, img, inp, nav, sec, bg, num, msg, clr, prop, param, config, info, fg, tmp, err

## 개발 규칙

- Prettier: printWidth 150, tabWidth 2, singleQuote, useTabs
- lint-staged: commit 시 prettier + eslint 자동 실행
- 지엽적 상수/타입은 컴포넌트 내부, 공용은 shared 또는 feature의 hooks/types 폴더에서 관리
- 공용 컴포넌트는 스토리 작성 필수

## Git 워크플로우

- `main` - 실 서비스 브랜치
- `develop` - 신규 개발 병합 브랜치
- `tt-*` - 지라 이슈 번호 기반 기능 브랜치 → develop에 병합
- `hotfix` - 긴급 수정 → main 병합

**커밋 컨벤션:**
- `feat:` 기능 추가
- `fix:` 리팩토링 및 기능 수정
- `bug:` 버그 픽스
- `remove:` 파일 삭제
- `docs:` 문서/주석
- `test:` 테스트 코드
- `ci/cd:` 파이프라인
- `dep:` 의존성 추가
- `hotfix:` 배포 오류 핫픽스

## Claude 작업 규칙

### 작업 로그

작업 시작 전 `docs/work-logs/`에 로그 파일을 생성하고 진행.

**작업 로그 생성 시점:**
- 명확한 작업 요청 ("OOO 기능 추가해줘") → 즉시 생성
- 질문/디버깅으로 시작하는 경우 → 원인 분석 후 코드 수정 시작 직전에 생성

**파일명:** `YYYY-MM-DD-작업명.md`

### 작업 시작 전

1. `docs/work-logs/YYYY-MM-DD-작업명.md` 파일 생성
2. 목표, 예상 단계 작성
3. 진행하면서 상태 업데이트

### 작업 중단 시

- "중단 시 이어서 할 작업" 섹션에 다음 단계 기록
- 상태를 "중단"으로 변경

### 작업 재개 시

- 작업 로그 파일 읽고 이어서 진행
- 새 날짜 섹션 추가하여 진행 상황 기록
