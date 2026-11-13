// Content for the home page drafts. Review bar labels first, then what the home page shows.
window.REVIEW_CONCEPTS = [
  { dir: 'concept-01', label: 'K 한 열' },
  { dir: 'concept-02', label: 'L 라벨' },
  { dir: 'concept-03', label: 'M 명함' },
];

window.HOME = {
  name: '박준영',
  // Candidate English title (2026-11-14): the owner prefers DX and wants the game development context in it.
  role: 'Developer Experience Engineer, Game Development',
  // The page title is the slogan, not the name (owner's call, 2026-11-14). From messages/ko.json hero.eyebrow.
  slogan: '업무의 마찰을 시스템으로 해결합니다',
  // Written for these drafts from facts already on the site. To be confirmed by the owner.
  intro: [
    '개발 조직이 덜 번거롭게 일하도록 도구를 만드는 엔지니어입니다.',
    '출근 후에는 게임 개발 조직의 내부 도구와 AI·AX 플랫폼을, 퇴근 후에는 축구·풋살 전술 앱과 모임 장부 서비스, Claude Code용 도구를 만듭니다.',
  ],
  // Picked by the owner on 2026-11-14. Link rule (owner's): a deployed project links to the finished thing,
  // a public project also links to GitHub, a private one gets a description only.
  // One-line descriptions come from each project's README or store listing.
  made: [
    { group: 'service', name: '아이엠 헤드코치', live: { label: '소개 페이지', href: 'https://jaywapp.com/iam-headcoach/' }, repo: 'https://github.com/jaywapp/squad-maker',
      line: '축구와 풋살의 선수 배치, 움직임 패턴, 전술 저장과 공유를 돕는 전술 도구' },
    { group: 'service', name: '팀프레드', live: { label: '사이트', href: 'https://teampread.com/' },
      line: '모임 회비, 장부, 출석을 Google 스프레드시트 위에서 관리하는 웹 앱' },
    { group: 'service', name: '이지스쿼드', live: { label: '사이트', href: 'https://easy-squad.vercel.app/' },
      line: 'FC Online에서 컨셉과 예산·급여 조건을 넣으면 AI가 선발 11명을 구성하는 웹 앱' },
    { group: 'service', name: '스뽀쓰-맨', live: { label: '사이트', href: 'https://sports-man-khaki.vercel.app/' },
      line: 'V리그와 K리그의 경기 일정, 사전 예측, 결과와 예측 성적을 보여 주는 웹앱' },
    { group: 'service', name: 'Marvelog', live: { label: '사이트', href: 'https://marvelog.vercel.app/' },
      line: '마블 영상물의 감상 상태를 가입 없이 기록하고 정주행 진행률을 확인하는 웹 앱' },
    { group: 'service', name: '내새끼달력', live: { label: '사이트', href: 'https://baby-calendar-ashy.vercel.app/' },
      line: '임신 준비부터 육아까지 아기의 일정을 한눈에 관리하는 웹 서비스' },
    { group: 'service', name: '경충FC', live: { label: '사이트', href: 'https://gyungchung.vercel.app/' },
      line: '축구 클럽 경충FC의 운영을 위한 웹과 모바일 앱' },
    { group: 'service', name: 'CardRadar', repo: 'https://github.com/jaywapp/card-radar',
      line: '결제 순간 가장 유리한 카드를 찾도록 혜택을 비교하는 모바일 앱' },
    { group: 'tool', name: 'cc-jsonl-monitor', live: { label: 'Chrome 웹 스토어', href: 'https://chromewebstore.google.com/detail/cc-jsonl-monitor/kmmfkpamdjpeadbbbgdefmdhahlefjin' }, repo: 'https://github.com/jaywapp/cc-jsonl-monitor',
      line: 'Claude Code 세션 로그를 탐색하는 로컬 우선 Chrome 확장' },
    { group: 'tool', name: 'key-man', live: { label: '다운로드', href: 'https://github.com/jaywapp/key-man/releases' }, repo: 'https://github.com/jaywapp/key-man',
      line: 'GUI, CLI, MCP 연동을 갖춘 Windows용 로컬 API 키 관리 도구' },
    { group: 'tool', name: 'p4-harness', repo: 'https://github.com/jaywapp/p4-harness',
      line: 'Claude Code와 Codex가 함께 쓰는 Perforce 워크플로 하네스' },
    { group: 'tool', name: 'Task Token Meter', repo: 'https://github.com/jaywapp/task-token-meter',
      line: 'Claude Code와 Codex CLI에서 작업 하나가 쓴 토큰을 알려 주는 Windows CLI' },
    { group: 'tool', name: 'AI Debate', repo: 'https://github.com/jaywapp/ai-debate',
      line: 'Claude와 Codex가 여러 라운드로 논쟁하고 독립된 판정자가 결론을 내리는 워크플로우' },
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
  // The name links to the finished thing when there is one, otherwise to GitHub, otherwise nowhere.
  H.madeItems = (group) =>
    H.made
      .filter((m) => !group || m.group === group)
      .map((m) => {
        const main = m.live ? m.live.href : m.repo;
        const name = main ? '<a class="made-name" href="' + main + '"' + ext(main) + '>' + esc(m.name) + '</a>' : '<span class="made-name">' + esc(m.name) + '</span>';
        const links = [];
        if (m.live) links.push('<a href="' + m.live.href + '"' + ext(m.live.href) + '>' + esc(m.live.label) + '</a>');
        if (m.repo) links.push('<a href="' + m.repo + '"' + ext(m.repo) + '>GitHub</a>');
        return '<li>' + name + '<p>' + esc(m.line) + '</p>' + (links.length ? '<p class="made-links">' + links.join('') + '</p>' : '') + '</li>';
      })
      .join('');
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
    H.set('made-service', H.madeItems('service'));
    H.set('made-tool', H.madeItems('tool'));
    H.set('posts', H.postItems());
    H.set('career', H.careerItems());
    H.set('links', H.linkItems());
  };
})();
