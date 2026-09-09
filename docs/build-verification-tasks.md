# 정적 사이트 검증 작업

orchestrator: Codex

| 작업 | owner | model | effort | depends_on | parallel_group | verification | status |
|---|---|---|---|---|---|---|---|
| 원본 의존성 설치 및 계약 검증 | Codex | gpt-6-astra | high | 조사 | portfolio | npm ci, Node tests | complete |
| production export 및 페이지 검사 | Codex | gpt-6-astra | high | 설치 | portfolio | Next build, 언어별 출력 | complete |
| 결과 기록 및 게시 | Codex | gpt-6-astra | high | 검증 | portfolio | diff, 원격 SHA | in_progress |

같은 빌드 디렉터리를 사용하므로 순차 수행하며 다른 저장소는 독립 Codex 에이전트가 처리한다.

## 결과

- `npm ci --no-audit --no-fund`: 기존 lock 그대로 442개 설치. 버전/lock 변경 없음.
- `npm run build`: Next 14.2.35 production 빌드, 타입·lint, 6개 정적 페이지 생성 통과.
- `node --test tests/messages.test.cjs`: 기존 번역 계약 4개 통과.
- `node --test tests/static-export.integration.cjs`: 신규 4개 통과. 먼저 빌드해야 하며 한국어/영어 언어·canonical·섹션 이동 대상·실제 번들 파일, 루트 한국어 이동/대체 링크, 404 및 메타데이터 자산을 검증한다. URL 인코딩된 동적 경로는 실제 파일 경로로 디코딩한다.
- 실제 Chrome + `python -m http.server 4322 --bind 127.0.0.1 --directory out`: 루트→한국어, 영어 전환→한국어 복귀, 소개 링크→`/ko/#about` 이동 확인. 사용한 탭과 서버 종료.
- 제품 코드 변경 없음. 테스트와 기록만 추가했다. 모바일·모든 링크·외부 GitHub 활동 API 실패 및 404 화면의 최종 렌더는 별도 미검증이다. 404 HTML 본문과 자산은 파일 검사로 확인했다.
