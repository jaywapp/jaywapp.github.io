// Content for the home page drafts. Review bar labels first, then what the home page shows.
window.REVIEW_CONCEPTS = [
  { dir: 'concept-01', label: 'K 한 열' },
  { dir: 'concept-02', label: 'L 라벨' },
  { dir: 'concept-03', label: 'M 명함' },
];

window.HOME = {
  name: '박준영',
  role: 'Developer Productivity & Tooling Engineer',
  // The page title is the slogan, not the name (owner's call, 2026-11-14). From messages/ko.json hero.eyebrow.
  slogan: '업무의 마찰을 시스템으로 해결합니다',
  // Written for these drafts from facts already on the site. To be confirmed by the owner.
  intro: [
    '개발 조직이 덜 번거롭게 일하도록 도구를 만드는 엔지니어입니다. 지금은 스마일게이트에서 내부 도구와 AI·AX 플랫폼을 만듭니다.',
    '회사 밖에서는 Claude로 투자 리포트를 자동화하고, 축구·풋살 전술 앱을 만듭니다.',
  ],
  // Headcoach text comes from public/iam-headcoach/index.html, the rest from src/data/content.ts.
  made: [
    { name: '아이엠 헤드코치', kind: '앱', href: 'https://jaywapp.com/iam-headcoach/',
      line: '축구와 풋살의 선수 배치, 움직임 패턴, 전술 저장과 공유를 돕는 전술 도구' },
    { name: 'Claude Buffett', kind: 'AI 자동화', href: 'https://github.com/jaywapp/claude-buffett',
      line: '종목 분석, 시장 동향, 포트폴리오 리뷰를 Claude로 자동 작성하는 투자 분석 시스템' },
    { name: 'AI Debate', kind: '에이전트 워크플로우', href: 'https://github.com/jaywapp/ai-debate',
      line: 'Claude와 Codex가 여러 라운드로 논쟁하고 독립된 판정자가 결론을 내리는 워크플로우' },
    { name: 'CardRadar', kind: '모바일 앱', href: 'https://github.com/jaywapp/card-radar',
      line: '결제 순간 가장 유리한 카드를 찾도록 혜택을 비교하는 모바일 앱' },
  ],
  // Latest posts read from the blog feed on 2026-11-14.
  posts: [
    { title: '[API] 공공데이터 API 사용하기', date: '2023.03.08', href: 'https://jaywapp.tistory.com/42' },
    { title: '[React] github pages를 활용하여 React 프로젝트 배포하기', date: '2023.03.08', href: 'https://jaywapp.tistory.com/41' },
    { title: 'private, protected method 단위 테스트 코드 작성하기', date: '2023.02.07', href: 'https://jaywapp.tistory.com/39' },
    { title: 'Adonis UI 사용기', date: '2023.02.07', href: 'https://jaywapp.tistory.com/37' },
    { title: '[C#] DataGrid로 DataTable 출력시 일부 cell이 없어지는 경우', date: '2023.01.30', href: 'https://jaywapp.tistory.com/36' },
  ],
  blog: 'https://jaywapp.tistory.com/',
  career: [
    { period: '2023.07 ~ 현재', name: '스마일게이트', role: 'Developer Productivity & Tooling Engineer' },
    { period: '2017.03 ~ 2023.06', name: '펜타큐브', role: 'Windows Client Software Developer' },
  ],
  links: [
    { label: 'GitHub', value: 'github.com/jaywapp', href: 'https://github.com/jaywapp' },
    { label: 'LinkedIn', value: 'linkedin.com/in/jaywapp16', href: 'https://www.linkedin.com/in/jaywapp16/' },
    { label: '이메일', value: 'jaywapp16@gmail.com', href: 'mailto:jaywapp16@gmail.com' },
  ],
};

(function () {
  const H = window.HOME;
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const ext = (href) => (href.startsWith('mailto') ? '' : ' target="_blank" rel="noopener noreferrer"');
  H.esc = esc;
  H.madeItems = () =>
    H.made.map((m) => '<li><a href="' + m.href + '"' + ext(m.href) + '>' + esc(m.name) + '</a><span class="kind">' + esc(m.kind) + '</span>' +
      '<p>' + esc(m.line) + '</p></li>').join('');
  H.postItems = () =>
    H.posts.map((p) => '<li><a href="' + p.href + '"' + ext(p.href) + '>' + esc(p.title) + '</a><span class="date">' + esc(p.date) + '</span></li>').join('');
  H.careerItems = () =>
    H.career.map((c) => '<li><span class="date">' + esc(c.period) + '</span><strong>' + esc(c.name) + '</strong><span class="career-role">' + esc(c.role) + '</span></li>').join('');
  H.linkItems = () => H.links.map((l) => '<li><a href="' + l.href + '"' + ext(l.href) + '>' + esc(l.label) + '</a></li>').join('');
  H.introHtml = () => H.intro.map((p) => '<p>' + esc(p) + '</p>').join('');
  H.set = (id, html) => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = html;
  };
  H.fill = () => {
    H.set('slogan', esc(H.slogan));
    H.set('who', '<strong>' + esc(H.name) + '</strong>' + esc(H.role));
    H.set('intro', H.introHtml());
    H.set('made', H.madeItems());
    H.set('posts', H.postItems());
    H.set('career', H.careerItems());
    H.set('links', H.linkItems());
  };
})();
