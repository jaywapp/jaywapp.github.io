# 커리어 사이트 개편 구현: 작업

orchestrator: Claude. 모든 작업의 owner는 Claude다. 파일이 서로 얽혀 있어 순차로 했다(병렬 그룹 없음).

| ID | 작업 | model | effort | depends_on | parallel_group | files | verification | status |
|---|---|---|---|---|---|---|---|---|
| T1 | 데이터 정리와 새 작업 3건 추가 | fable | medium | - | - | `src/data/content.ts`, `src/data/home.ts`, `messages/*.json` | 메시지 테스트 | done |
| T2 | 홈과 이력서 페이지, 스타일 | fable | high | T1 | - | `src/app/**`, `src/components/**`, `public/smilegate-logo-*.svg` | lint, build | done |
| T3 | 테스트와 사이트맵 | fable | medium | T2 | - | `tests/static-export.integration.cjs`, `public/sitemap.xml` | 테스트 11개 통과 | done |
| T4 | 화면 확인 | fable | medium | T3 | - | - | 아래 결과 | done |
| T5 | 분리된 리뷰 | opus | high | T4 | - | - | Critical·High 없음. 인쇄 목록 덮어쓰기, 로고 중복 내려받기, 홈 footer 위치, 인쇄 시 링크 주소, 테스트 공백 2건을 고쳤다. `summary` 안의 h2가 일부 스크린 리더의 제목 목록에서 빠질 수 있다는 지적은 실기기 확인이 필요해 남겼다 | done |

모델 선택 이유: 세션 모델(Fable)이 시안을 만든 맥락을 갖고 있어 구현을 직접 했다. 리뷰만 작성자와 분리했다.

## 검증 결과 (2026-11-16)

- lint 통과, build 통과(정적 페이지 8개), 테스트 11개 통과.
- 홈(한국어·영어)과 이력서(한국어·영어)를 1440·390·320px, 라이트·다크로 열었다. 가로 넘침 0, 콘솔 오류 0, Pretendard 적용.
- 확인하지 못한 것: 스크린 리더 낭독, 실기기, 실제 프린터 출력.
