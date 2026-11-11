# custom-domain — 설계

- `public/CNAME`에 `jaywapp.com`을 추가해 export 결과에 포함한다.
- `deploy.yml`의 `cname`을 `jaywapp.com`으로 지정해 `gh-pages` 브랜치의 CNAME이 유지되게 한다.
- `metadataBase`, `sitemap.xml`, `robots.txt`, 루트 리디렉션 링크, README, canonical 테스트를 `https://jaywapp.com`으로 변경한다.
- 사용자 DNS 설정: apex A 레코드 `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`(선택: AAAA `2606:50c0:8000::153`~`8003::153`), `www` CNAME → `jaywapp.github.io`.
- GitHub Settings → Pages → Custom domain `jaywapp.com` 확인 후 DNS 검증이 끝나면 Enforce HTTPS 활성화. 계정 Settings → Pages에서 도메인 verify 권장(도메인 탈취 방지).
- 호환성: `jaywapp.github.io` 접속은 GitHub Pages가 새 도메인으로 리디렉션한다.
- 검증: `npm run lint`, `npm run build`, `node --test tests/*.cjs`, `out/CNAME` 확인.
