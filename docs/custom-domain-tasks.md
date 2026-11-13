# custom-domain — 작업

- orchestrator: Claude

| id | 작업 | owner | model | effort | depends_on | parallel_group | files | verification | status |
|---|---|---|---|---|---|---|---|---|---|
| T1 | CNAME 추가 및 배포 워크플로 cname 지정 | Claude | sonnet | low | - | A | `public/CNAME`, `.github/workflows/deploy.yml` | `out/CNAME` 확인 | done |
| T2 | 사이트 URL을 jaywapp.com으로 변경 | Claude | sonnet | low | - | A | `src/app/layout.tsx`, `src/app/[locale]/layout.tsx`, `src/app/page.tsx`, `public/sitemap.xml`, `public/robots.txt`, `README.md`, `tests/static-export.integration.cjs` | lint·build·테스트 8/8 통과 | done |
| T3 | DNS·GitHub Pages 설정 | 사용자 | - | - | T1 | - | - | 도메인 접속·HTTPS 확인 | done (2026-11-13 확인: apex A 4개, `www` CNAME, Pages cname·HTTPS 강제) |
| T4 | `gh-pages`에만 있던 Headcoach 페이지·`app-ads.txt`를 `public/`으로 편입하고 주소를 새 도메인으로 변경 | Claude | opus | low | T1 | B | `public/app-ads.txt`, `public/iam-headcoach/**`, `tests/static-export.integration.cjs` | 정적 export 테스트 | done |

- 변경량이 작아 서브에이전트 위임 없이 부모 세션에서 순차 처리했다.
- T4 배경: 배포가 `gh-pages` 전체를 `out/`으로 교체하므로, `main`에 없는 Headcoach 소개·개인정보처리방침·`app-ads.txt`는 다음 배포에서 삭제된다. `feat/headcoach-public-pages-20261015`를 병합해 `main`에서 관리한다.
