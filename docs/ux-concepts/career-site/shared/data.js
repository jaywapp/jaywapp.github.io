// Content for the three concepts. Facts are copied from src/data/content.ts and messages/ko.json.
// `short` and `theme` are additions made for these drafts (see README "추가 필드 요구").
window.CAREER = {
  now: [2026, 11],
  profile: {
    name: '박준영',
    nameEn: 'Junyoung Park',
    role: 'Developer Productivity & Tooling Engineer',
    statement: '업무의 마찰을 시스템으로 해결합니다',
    summary:
      '개발 조직과 실무 사용자의 생산성을 높이는 도구와 시스템을 설계하고 구현합니다. 업무 흐름 안의 비효율을 찾아 도구, 자동화, 플랫폼으로 바꾸는 일을 9년 넘게 해 왔습니다.',
    about:
      '특정 도메인의 기능 개발자보다, 개발 조직과 실무 사용자의 생산성을 높이는 도구와 시스템을 만드는 엔지니어입니다. 전자 CAD/PCB 영역의 DRC 시스템부터 내부 CI/CD, AI 코드 리뷰 PoC, 온보딩 자동화까지, 실제 사용 흐름에 맞는 형태로 도구를 설계하고 운영할 수 있는 구조로 완성해 왔습니다.',
    facts: [
      { value: '9년+', label: '개발 경력' },
      { value: '70명', label: 'AI 도구 셀프서비스를 쓰는 조직' },
      { value: '550건+', label: 'AI로 만든 크래시 분석 데이터' },
    ],
  },
  themes: [
    { id: 'ai', name: 'AI·AX', blurb: 'AI 에이전트가 사내 시스템을 직접 다루게 하는 기반과 그 위에서 도는 도구' },
    { id: 'build', name: '빌드·배포', blurb: '흩어진 빌드와 배포를 하나의 체계로 묶는 일' },
    { id: 'tools', name: '업무 도구', blurb: '여러 도구를 오가는 비용을 줄이는 데스크톱, 웹, 플러그인 도구' },
    { id: 'ops', name: '운영·온보딩', blurb: '사람 손으로 하던 절차를 표준화하고 도구 상태를 추적하는 일' },
    { id: 'cad', name: 'CAD·검증', blurb: '전자 CAD/PCB 도면을 읽고 설계 규칙을 검증하는 시스템' },
  ],
  companies: [
    {
      id: 'smilegate',
      ref: 'U2',
      name: '스마일게이트',
      role: 'Developer Productivity & Tooling Engineer',
      start: [2023, 7],
      end: null,
      period: '2023.07 ~ 현재',
      description:
        '개발 조직의 생산성을 높이는 내부 도구, 빌드·배포 자동화, 온보딩 워크플로우, AI·AX 플랫폼 개발',
      projects: [
        // Added 2026-11-14 from the owner's message. Titles only until the owner writes the detail.
        { short: '작업 관리 솔루션', theme: 'tools', title: '작업 관리 솔루션(웹) 개편 및 운영', bullets: [] },
        { short: '대사 작업 툴', theme: 'tools', title: '대사 작업을 위한 툴 개발', bullets: [] },
        { short: 'Slack 알림 봇', theme: 'ops', title: 'Slack 봇을 통한 알림 체계 확립', bullets: [] },
        { short: 'AX 대시보드', theme: 'ai', title: 'AX Dashboard 구축', bullets: [
          '조직 내 AI·AX 도입 현황, 사용 통계 및 관련 정보를 제공하는 대시보드 개발',
          '분산된 AI 관련 지표와 자료를 시각화하여 활용 현황과 성과를 한눈에 파악할 수 있도록 구성',
        ] },
        { short: '통합 랜딩 페이지', theme: 'tools', title: '사내 솔루션 통합 랜딩 페이지 구축', bullets: [
          '조직에서 사용하는 여러 내부 솔루션을 한곳에서 탐색하고 접근할 수 있는 메인 랜딩 페이지 구축',
          '리버스 프록시를 적용해 개별 솔루션을 하나의 도메인 아래 통합하고 사용자 접근 경로 단순화',
        ] },
        { short: 'Excel 플러그인', theme: 'tools', title: 'VSTO 기반 Excel 데이터 편집 플러그인 개발', bullets: [
          'DevExpress SpreadsheetControl 기반의 독립형 데이터 편집 도구를 실제 Excel에서 동작하는 VSTO 플러그인으로 확장',
          'Excel의 친숙한 사용성을 유지하면서 입력 검증, 도메인 규칙 및 사내 데이터 연동 기능 제공',
        ] },
        { short: '통합 위젯', theme: 'tools', title: '업무 도구 통합 위젯 개발', bullets: [
          'Perforce, Hansoft, UnrealGameSync 등 사내 업무 도구를 연결하는 데스크톱 위젯 구현',
          '여러 도구에 분산된 주요 기능과 정보를 하나의 인터페이스로 통합해 반복 작업과 도구 전환 비용 감소',
        ] },
        { short: 'Cook 빌드 배포', theme: 'build', title: 'UnSync 기반 Cook 빌드 다운로드 체계 구축', bullets: [
          'Unreal Engine UnSync를 활용해 배포된 Cook 빌드 버전을 선택하고 다운로드할 수 있는 내부 체계 구축',
          '빌드 산출물의 배포·동기화 흐름을 표준화하여 개발팀의 빌드 접근성과 업무 효율 개선',
        ] },
        { short: '크래시 AI 분석', theme: 'ai', title: '크래시 AI 분석 시스템 구축', bullets: [
          'Claude API 기반 로컬 에이전트 서버를 구축하고 550건의 크래시 분석 데이터 생성 완료',
          '실 운영 과정에서 확인한 API 비용 최적화 과제를 바탕으로 MCP와 서브에이전트 레이어를 적용한 토큰 효율형 AI 파이프라인 설계',
        ] },
        { short: 'AX 인프라', theme: 'ai', title: '사내 AX(AI) 인프라 구성', bullets: [
          '사내 태스크 관리 시스템과 Perforce MCP를 직접 구성해 AI 에이전트가 내부 시스템과 직접 상호작용하는 인터페이스 구축',
          'Gitea 기반 내부 AI 도구 마켓플레이스 구성·배포로 70명 규모 조직에 AI 도구 셀프서비스 접근 체계 제공',
        ] },
        { short: 'CI/CD 파이프라인', theme: 'build', title: 'CI/CD 파이프라인 구축 및 운영 체계 개선', bullets: [
          '이전 부서: 조직 전반에 분산된 빌드 작업을 분석·재구성하여 TeamCity 기반 빌드 체인 체계화',
          '현재 부서: 운영 프로그램 배포 프로세스 전체를 처음부터 설계하고 자동화 배포 체계 구축',
        ] },
        { short: 'AI 코드 리뷰', theme: 'ai', title: 'AI 기반 코드 리뷰 PoC', bullets: [
          'OpenAI·Claude·Gemini 등 다중 AI 모델을 손쉽게 전환할 수 있는 코드 리뷰 애플리케이션 개발',
          'PoC 결과가 Perforce Swarm 코드 리뷰 도구 도입 의사결정의 실질적 근거 자료로 활용됨',
        ] },
        { short: '온보딩 자동화', theme: 'ops', title: 'Slack 기반 신규 입사자 온보딩 자동화', bullets: [
          'Slack Workflow와 사내 시스템을 연동해 신규 입사자 안내, 초기 개발 환경 구성 및 Perforce 계정 생성을 자동화',
          '담당자가 신규 입사자를 지정 채널에 초대하면 전체 온보딩 절차가 시작되는 단일 액션 워크플로우 구축',
          '수동으로 진행하던 계정·환경 설정 절차를 표준화하여 반복 작업과 설정 누락 가능성 감소',
        ] },
        { short: '내부 툴링', theme: 'tools', title: '내부 툴링 체계 구축', bullets: [
          'WPF 데스크톱 앱, CLI 도구, VSIX Extension 등 사용 맥락에 맞는 인터페이스로 툴 제공',
          '워크플로우 전반의 마찰을 줄여 개발 조직 생산성 향상에 기여',
        ] },
        { short: 'MCP 플러그인', theme: 'ai', title: 'Perforce·Hansoft MCP 플러그인 개발', bullets: [
          'Perforce 전 명령어를 지원하는 MCP 플러그인 개발로 AI 에이전트의 완전한 소스 관리 시스템 접근 가능',
          'Hansoft 기반 웹 솔루션 MCP 구성으로 AI가 작업 관리 데이터를 직접 조회·처리하는 인터페이스 구현',
          'Claude 기반 협업 환경에서 내부 시스템과 통합된 AI 워크플로우 지원',
        ] },
        { short: 'P4·Hansoft 연동', theme: 'tools', title: 'Perforce + Hansoft 연동 워크플로우 개선', bullets: [
          'Perforce(Helix Core) 기반 워크플로우 제어 도구 개발로 소스 관리 반복 작업 감소',
          'Hansoft 연동으로 작업 관리 시스템과 개발 흐름을 자연스럽게 연결',
        ] },
        { short: '로깅 인프라', theme: 'ops', title: '내부 도구 로깅·운영 인프라 구축', bullets: [
          '중앙 집중형 로깅 시스템을 설계·구축해 여러 내부 도구의 상태와 오류를 일관된 방식으로 추적',
          '분산된 도구의 운영 정보를 통합하여 장애 대응과 유지보수 기반 마련',
        ] },
      ],
    },
    {
      id: 'pentacube',
      ref: 'U1',
      name: '펜타큐브',
      role: 'Windows Client Software Developer',
      start: [2017, 3],
      end: [2023, 6],
      period: '2017.03 ~ 2023.06',
      description: '전자 CAD·PCB 도메인의 설계 규칙 검증 시스템과 제조 솔루션 개발, 플러그인 아키텍처 설계',
      projects: [
        { short: 'DRC 검증 시스템', theme: 'cad', title: 'CAD/PCB 데이터 처리 및 검증 시스템 (DRC)', bullets: [
          'ODB++, Gerber, Neutral 등 다양한 PCB 포맷을 처리하는 CAD 데이터 파이프라인 설계',
          '삼성전자 네트워크 사업부·SK하이닉스·현대모비스·현대자동차·경신 등 대형 고객사의 실 도면 기반 설계 검증 시스템 구축 및 납품',
          '네트워크 장비 수준의 대규모 PCB 도면을 포함한 다양한 규모의 도면 처리 가능한 범용 구조로 설계',
        ] },
        { short: 'SMT 제조 솔루션', theme: 'cad', title: 'SMT 제조 솔루션 아키텍처 설계 및 Tech Lead', bullets: [
          'IoC(Prism), MVVM, Facade 기반 컨트롤러 설계로 유지보수성·확장성 확보',
          '실 PCB 도면 기반의 사전 제조 검증 솔루션을 삼성전자·SK하이닉스 현장에 납품',
        ] },
        { short: '플러그인·라이선스', theme: 'cad', title: 'Plugin 및 License 시스템 구축', bullets: [
          'Reflection 기반 Plugin 구조로 고객별 기능 확장·분리 유연하게 관리',
          'FlexLM 기반 라이선스 체계 전환으로 Floating License 지원 및 운영 효율 개선',
        ] },
        { short: '고객사 기술 협업', theme: 'cad', title: '엔터프라이즈 고객 기술 협업 (SK hynix, 삼성전자)', bullets: [
          'SK hynix DFM Rule 개발 프로젝트 전 과정 주도 (요구사항 정리 → 설계 → 구현)',
          '사영 기하학 기반 알고리즘 설계로 CAD 배선 Coupling 검증 정확도 향상',
        ] },
      ],
    },
    {
      id: 'dlab',
      ref: 'R2',
      name: 'DLAB',
      role: 'SW 교육 커리큘럼 개발 / 강사',
      start: [2016, 7],
      end: [2016, 12],
      period: '2016.07 ~ 2016.12',
      description: '중·고등학생 대상 소프트웨어 교육 커리큘럼을 개발하고 수업 운영',
      projects: [],
    },
    {
      id: 'hospital',
      ref: 'R1',
      name: '아주대학교병원',
      role: '서버 운영',
      start: [2015, 6],
      end: [2016, 2],
      period: '2015.06 ~ 2016.02',
      description: '야간 서버 모니터링과 장애 대응을 포함한 전산 운영 업무 수행',
      projects: [],
    },
  ],
  education: [{ school: '아주대학교', major: '소프트웨어학과', period: '2010.03 ~ 2017.02' }],
  certifications: [{ name: '정보처리기사', type: '자격증' }],
  skills: { major: ['C#', '.NET', 'WPF'], minor: ['Perforce', 'TeamCity', 'React', 'JavaScript', 'Node.js'] },
  sideProjects: [
    { name: 'Claude Buffett', category: 'AI 자동화', highlight: '일간·주간·요청형 리포트 자동화',
      description: 'Claude를 활용해 종목 분석, 시장 동향, 포트폴리오 리뷰를 자동으로 작성하고 웹에서 탐색할 수 있게 만든 투자 분석 시스템입니다.',
      href: 'https://github.com/jaywapp/claude-buffett', tech: ['Claude', 'Python', 'GitHub Pages'] },
    { name: 'AI Debate', category: '에이전트 워크플로우', highlight: '멀티모델 토론·판정 기록 체계',
      description: 'Claude와 Codex가 멀티라운드로 논쟁하고, 독립된 판정자가 결론을 내리는 과정을 재사용 가능한 워크플로우로 구성했습니다.',
      href: 'https://github.com/jaywapp/ai-debate', tech: ['Claude', 'Codex', 'Markdown'] },
    { name: 'CardRadar', category: '모바일 앱', highlight: '19개 카드·8개 소비 카테고리 지원',
      description: '보유 카드와 결제 카테고리를 기준으로 혜택을 비교해, 결제 순간 가장 유리한 카드를 찾도록 돕는 모바일 앱입니다.',
      href: 'https://github.com/jaywapp/card-radar', tech: ['Flutter', 'Riverpod', 'Hive'] },
  ],
  links: [
    { icon: 'ph-github-logo', label: 'GitHub', value: 'github.com/jaywapp', href: 'https://github.com/jaywapp' },
    { icon: 'ph-linkedin-logo', label: 'LinkedIn', value: 'linkedin.com/in/jaywapp16', href: 'https://www.linkedin.com/in/jaywapp16/' },
    { icon: 'ph-book-open', label: '블로그', value: 'jaywapp.tistory.com', href: 'https://jaywapp.tistory.com/' },
    { icon: 'ph-envelope-simple', label: '이메일', value: 'jaywapp16@gmail.com', href: 'mailto:jaywapp16@gmail.com' },
  ],
};

// Helpers shared by the concepts.
window.CAREER.themeName = function (id) {
  const t = window.CAREER.themes.find((x) => x.id === id);
  return t ? t.name : '';
};
window.CAREER.allProjects = function () {
  const out = [];
  window.CAREER.companies.forEach((co) => {
    co.projects.forEach((p, i) => {
      out.push(Object.assign({}, p, { company: co, index: i, ref: co.ref + '-' + String(i + 1).padStart(2, '0') }));
    });
  });
  return out;
};
window.CAREER.esc = function (s) {
  return String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
};
