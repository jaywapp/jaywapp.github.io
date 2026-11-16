# 커리어 사이트 개편 구현: 설계

작성: 2026-11-16. 요구사항은 [분석](career-site-redesign-analysis.md)을 따른다.

## 구조

| 경로 | 파일 | 내용 |
|---|---|---|
| `/{locale}/` | `src/app/[locale]/page.tsx` | 홈. 명함(슬로건, 이름과 직무, 소개, 메뉴), 출근 후, 퇴근 후, 이력 |
| `/{locale}/resume/` | `src/app/[locale]/resume/page.tsx` | 이력서. 회사 4곳과 기술·학력·자격, 개인 프로젝트를 `<details>` 행으로 |
| 공통 | `src/app/metadata.ts` | 제목, 설명, canonical, hreflang, Open Graph |

## 데이터

- `src/data/content.ts`: 이력서의 사실(경력, 작업, 학력, 자격, 기술, 링크). 새 작업 3건을 제목만 추가했다.
- `src/data/home.ts`: 홈에만 쓰는 내용(슬로건, 소개, 분야 4개와 작업의 짧은 이름, 만든 것 13개). 이력서의 개인 프로젝트도 이 13개를 쓴다.
- `messages/*.json`: 버튼과 메뉴 같은 화면 문구.

분야별 짧은 이름은 `home.ts`에 따로 둔다. 이력서의 작업 제목과 자동으로 묶지 않았다. 작업을 추가하면 두 파일을 함께 고친다.

## 스타일

- `src/app/globals.css` 한 파일에 일반 CSS로 쓴다. 시안의 CSS를 그대로 옮기기 위해서다. Tailwind 지시문은 뺐다.
- 색은 종이, 잉크, 코발트 하나. `prefers-color-scheme`으로 다크를 바꾼다.
- 글꼴은 Pretendard 1.3.9(jsDelivr, 동적 서브셋). 아이콘은 이미 설치된 `lucide-react`의 `Plus` 하나만 쓴다.
- 모션은 행을 펼칠 때 더하기 기호가 도는 것과 링크 색 전환뿐이다. `prefers-reduced-motion`에서 꺼진다.

## 동작

- 홈은 서버 컴포넌트만 쓴다. 클라이언트 스크립트가 필요한 곳은 이력서의 "PDF로 저장" 버튼(`PrintButton`)뿐이다.
- 인쇄할 때 접힌 행을 모두 펼치고, 인쇄가 끝나면 다시 접는다.
- 밖으로 나가는 링크는 새 탭으로 연다(`ExtLink`). `jaywapp.com` 안의 링크와 메일 링크는 그대로 연다.

## 대안

- Tailwind 유틸리티로 다시 쓰기: 시안과 어긋날 위험이 있고 얻는 것이 적어 택하지 않았다.
- 이력서를 `/resume/`(언어 없음)에 두기: 기존 `/ko/`, `/en/` 구조와 hreflang을 깨서 택하지 않았다.

## 호환성

- `/ko/`, `/en/` 주소는 그대로다. 기존 앵커(`#about`, `#experience` 등)는 없어지고 `#work`, `#made`, `#career`가 생긴다.
- 사이트맵에 이력서 주소 2개를 더했다.

## 검증

- `npm run lint`, `npm run build`, `node --test tests/messages.test.cjs tests/static-export.integration.cjs`.
- 테스트는 홈의 섹션과 내부 링크, 이력서의 canonical과 행 6개, 문구에 줄표가 없는지를 본다.
- 빌드 결과를 로컬에서 열어 1440·390·320px, 라이트·다크를 본다.
