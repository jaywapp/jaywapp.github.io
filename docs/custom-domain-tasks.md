# custom-domain — 작업

- orchestrator: Claude

| id | 작업 | owner | model | effort | depends_on | parallel_group | files | verification | status |
|---|---|---|---|---|---|---|---|---|---|
| T1 | CNAME 추가 및 배포 워크플로 cname 지정 | Claude | sonnet | low | - | A | `public/CNAME`, `.github/workflows/deploy.yml` | `out/CNAME` 확인 | done |
| T2 | 사이트 URL을 jaywapp.com으로 변경 | Claude | sonnet | low | - | A | `src/app/layout.tsx`, `src/app/[locale]/layout.tsx`, `src/app/page.tsx`, `public/sitemap.xml`, `public/robots.txt`, `README.md`, `tests/static-export.integration.cjs` | lint·build·테스트 8/8 통과 | done |
| T3 | DNS·GitHub Pages 설정 | 사용자 | - | - | T1 | - | - | 도메인 접속·HTTPS 확인 | pending |

- 변경량이 작아 서브에이전트 위임 없이 부모 세션에서 순차 처리했다.
