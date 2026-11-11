# custom-domain — 분석

- 요청: `https://jaywapp.github.io`에 구매한 `jaywapp.com` 도메인을 연결한다.
- 현재 상태: Next.js 정적 export(`out/`)를 `peaceiris/actions-gh-pages`로 `gh-pages` 브랜치에 배포한다. `deploy.yml`의 `cname: ''` 때문에 배포마다 CNAME이 비워지고, `metadataBase`·sitemap·robots·canonical이 `jaywapp.github.io`로 고정돼 있다.
- 가정: 기본 도메인은 apex `jaywapp.com`, `www.jaywapp.com`은 GitHub Pages가 apex로 리디렉션한다. 호스팅은 기존 GitHub Pages를 유지한다(Vercel 이전은 범위 밖). 정적 페이지라 Supabase 불필요.
- 범위: 저장소 설정·URL 변경. 비범위: DNS 레코드 설정, GitHub 저장소 Settings 변경(사용자 작업).
- 완료 기준: 빌드 결과에 `out/CNAME`=`jaywapp.com`, canonical/sitemap/robots가 새 도메인, lint·build·테스트 통과.
