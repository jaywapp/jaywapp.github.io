import type { Locale } from './content';

// Home page content. The resume facts stay in content.ts; this file holds what only the home page shows.

export interface WorkField {
  name: string;
  blurb: string;
  // Short names of the current employer's work in this field. Full titles and detail are on the resume.
  items: string[];
}

export interface MadeItem {
  name: string;
  line: string;
  // Link rule (owner's, 2026-11-14): a deployed project links to the finished thing,
  // a public project also links to GitHub, a private one gets a description only.
  live?: { label: string; href: string };
  repo?: string;
}

export interface MadeGroup {
  title: string;
  items: MadeItem[];
}

export interface HomeContent {
  name: string;
  role: string;
  slogan: string;
  intro: string[];
  workLead: string;
  fields: WorkField[];
  madeLead: string;
  madeGroups: MadeGroup[];
}

export const profile: Record<Locale, { name: string; role: string; summary: string }> = {
  ko: {
    name: '박준영',
    role: 'Developer Productivity & Tooling Engineer',
    summary:
      '개발 조직과 실무 사용자의 생산성을 높이는 도구와 시스템을 설계하고 구현합니다. 업무 흐름 안의 비효율을 찾아 도구, 자동화, 플랫폼으로 바꾸는 일을 9년 넘게 해 왔습니다.',
  },
  en: {
    name: 'Junyoung Park',
    role: 'Developer Productivity & Tooling Engineer',
    summary:
      "I design and build tools and systems that improve the productivity of engineering teams and end users. For 9+ years, I've been identifying inefficiencies in workflows and turning them into tools, automation, and platforms.",
  },
};

const site = (ko: boolean) => (ko ? '사이트' : 'Site');

function madeGroups(locale: Locale): MadeGroup[] {
  const ko = locale === 'ko';
  return [
    {
      title: ko ? '서비스와 앱' : 'Services and apps',
      items: [
        {
          name: ko ? '아이엠 헤드코치' : 'I am Headcoach',
          live: { label: ko ? '소개 페이지' : 'About page', href: 'https://jaywapp.com/iam-headcoach/' },
          repo: 'https://github.com/jaywapp/squad-maker',
          line: ko
            ? '축구와 풋살의 선수 배치, 움직임 패턴, 전술 저장과 공유를 돕는 전술 도구'
            : 'A tactics tool for football and futsal: player placement, movement patterns, saving and sharing tactics',
        },
        {
          name: ko ? '팀프레드' : 'Teampread',
          live: { label: site(ko), href: 'https://teampread.com/' },
          line: ko
            ? '모임 회비, 장부, 출석을 Google 스프레드시트 위에서 관리하는 웹 앱'
            : 'A web app that manages club dues, ledgers, and attendance on top of Google Sheets',
        },
        {
          name: ko ? '이지스쿼드' : 'Easy Squad',
          live: { label: site(ko), href: 'https://easy-squad.vercel.app/' },
          line: ko
            ? 'FC Online에서 컨셉과 예산·급여 조건을 넣으면 AI가 선발 11명을 구성하는 웹 앱'
            : 'A web app where AI builds a starting eleven for FC Online from a concept, budget, and salary cap',
        },
        {
          name: ko ? '스뽀쓰-맨' : 'Sports-Man',
          live: { label: site(ko), href: 'https://sports-man-khaki.vercel.app/' },
          line: ko
            ? 'V리그와 K리그의 경기 일정, 사전 예측, 결과와 예측 성적을 보여 주는 웹앱'
            : 'A web app showing V-League and K League schedules, pre-match predictions, results, and prediction records',
        },
        {
          name: 'Marvelog',
          live: { label: site(ko), href: 'https://marvelog.vercel.app/' },
          line: ko
            ? '마블 영상물의 감상 상태를 가입 없이 기록하고 정주행 진행률을 확인하는 웹 앱'
            : 'A web app for tracking which Marvel titles you have watched, with no sign-up',
        },
        {
          name: ko ? '내새끼달력' : 'Baby Calendar',
          live: { label: site(ko), href: 'https://baby-calendar-ashy.vercel.app/' },
          line: ko
            ? '임신 준비부터 육아까지 아기의 일정을 한눈에 관리하는 웹 서비스'
            : 'A web service for keeping a baby’s schedule in one place, from planning a pregnancy through parenting',
        },
        {
          name: ko ? '경충FC' : 'Gyungchung FC',
          live: { label: site(ko), href: 'https://gyungchung.vercel.app/' },
          line: ko
            ? '축구 클럽 경충FC의 운영을 위한 웹과 모바일 앱'
            : 'Web and mobile apps for running the football club Gyungchung FC',
        },
        {
          name: 'CardRadar',
          repo: 'https://github.com/jaywapp/card-radar',
          line: ko
            ? '결제 순간 가장 유리한 카드를 찾도록 혜택을 비교하는 모바일 앱'
            : 'A mobile app that compares card benefits to find the best card at checkout',
        },
      ],
    },
    {
      title: ko ? '개발자 도구와 AI' : 'Developer tools and AI',
      items: [
        {
          name: 'cc-jsonl-monitor',
          live: {
            label: ko ? 'Chrome 웹 스토어' : 'Chrome Web Store',
            href: 'https://chromewebstore.google.com/detail/cc-jsonl-monitor/kmmfkpamdjpeadbbbgdefmdhahlefjin',
          },
          repo: 'https://github.com/jaywapp/cc-jsonl-monitor',
          line: ko
            ? 'Claude Code 세션 로그를 탐색하는 로컬 우선 Chrome 확장'
            : 'A local-first Chrome extension for browsing Claude Code session logs',
        },
        {
          name: 'key-man',
          live: { label: ko ? '다운로드' : 'Download', href: 'https://github.com/jaywapp/key-man/releases' },
          repo: 'https://github.com/jaywapp/key-man',
          line: ko
            ? 'GUI, CLI, MCP 연동을 갖춘 Windows용 로컬 API 키 관리 도구'
            : 'A local API key manager for Windows with a GUI, a CLI, and MCP integration',
        },
        {
          name: 'p4-harness',
          repo: 'https://github.com/jaywapp/p4-harness',
          line: ko
            ? 'Claude Code와 Codex가 함께 쓰는 Perforce 워크플로 하네스'
            : 'A Perforce workflow harness shared by Claude Code and Codex',
        },
        {
          name: 'Task Token Meter',
          repo: 'https://github.com/jaywapp/task-token-meter',
          line: ko
            ? 'Claude Code와 Codex CLI에서 작업 하나가 쓴 토큰을 알려 주는 Windows CLI'
            : 'A Windows CLI that reports the tokens a single task used in Claude Code and Codex CLI',
        },
        {
          name: 'AI Debate',
          repo: 'https://github.com/jaywapp/ai-debate',
          line: ko
            ? 'Claude와 Codex가 여러 라운드로 논쟁하고 독립된 판정자가 결론을 내리는 워크플로우'
            : 'A workflow where Claude and Codex debate over several rounds and an independent judge decides',
        },
      ],
    },
  ];
}

export const homeContent: Record<Locale, HomeContent> = {
  ko: {
    name: profile.ko.name,
    role: profile.ko.role,
    // The page title is the slogan, not the name (owner's call, 2026-11-14).
    slogan: '업무의 마찰을 시스템으로 해결합니다',
    intro: [
      '개발 조직이 덜 번거롭게 일하도록 도구를 만드는 엔지니어입니다.',
      '출근 후에는 게임 개발 조직의 내부 도구와 AI·AX 플랫폼을, 퇴근 후에는 축구·풋살 전술 앱과 모임 장부 서비스, Claude Code용 도구를 만듭니다.',
    ],
    // No employer name in the text (owner's call, 2026-11-14). The employer shows as a logo under the fields.
    workLead:
      '게임 개발 조직의 생산성을 높이는 내부 도구, 빌드·배포 자동화, 온보딩 워크플로우, AI·AX 플랫폼을 만듭니다.',
    fields: [
      {
        name: 'AI·AX',
        blurb: 'AI 에이전트가 사내 시스템을 직접 다루게 하는 기반과 그 위에서 도는 도구',
        items: ['AX 대시보드', '크래시 AI 분석', 'AX 인프라', 'AI 코드 리뷰', 'MCP 플러그인'],
      },
      {
        name: '빌드·배포',
        blurb: '흩어진 빌드와 배포를 하나의 체계로 묶는 일',
        items: ['Cook 빌드 배포', 'CI/CD 파이프라인'],
      },
      {
        name: '업무 도구',
        blurb: '여러 도구를 오가는 비용을 줄이는 데스크톱, 웹, 플러그인 도구',
        items: [
          '작업 관리 솔루션',
          '대사 작업 툴',
          '통합 랜딩 페이지',
          'Excel 플러그인',
          '통합 위젯',
          '내부 툴링',
          'P4·Hansoft 연동',
        ],
      },
      {
        name: '운영·온보딩',
        blurb: '사람 손으로 하던 절차를 표준화하고 도구 상태를 추적하는 일',
        items: ['Slack 알림 봇', '온보딩 자동화', '로깅 인프라'],
      },
    ],
    madeLead: '내가 쓰고 싶은 서비스와 일할 때 필요한 도구를 직접 만듭니다.',
    madeGroups: madeGroups('ko'),
  },
  en: {
    name: profile.en.name,
    role: profile.en.role,
    slogan: 'Turning workflow friction into systems',
    intro: [
      'I am an engineer who builds tools so engineering teams can work with less friction.',
      'At work I build internal tools and AI/AX platforms for a game development organization. After work I build football and futsal tactics apps, a club ledger service, and tools for Claude Code.',
    ],
    workLead:
      'I build internal tools, build and deployment automation, onboarding workflows, and AI/AX platforms that raise the productivity of a game development organization.',
    fields: [
      {
        name: 'AI/AX',
        blurb: 'The foundation that lets AI agents work with internal systems directly, and the tools that run on it',
        items: ['AX dashboard', 'Crash AI analysis', 'AX infrastructure', 'AI code review', 'MCP plugins'],
      },
      {
        name: 'Build and deploy',
        blurb: 'Bringing scattered builds and deployments into one system',
        items: ['Cook build distribution', 'CI/CD pipeline'],
      },
      {
        name: 'Work tools',
        blurb: 'Desktop, web, and plugin tools that cut the cost of switching between tools',
        items: [
          'Task management solution',
          'Dialogue script tooling',
          'Unified landing page',
          'Excel plugin',
          'Integrated widget',
          'Internal tooling',
          'P4 and Hansoft integration',
        ],
      },
      {
        name: 'Ops and onboarding',
        blurb: 'Standardizing manual procedures and tracking the state of tools',
        items: ['Slack notification bot', 'Onboarding automation', 'Logging infrastructure'],
      },
    ],
    madeLead: 'I build the services I want to use and the tools I need for work.',
    madeGroups: madeGroups('en'),
  },
};

// Latest posts read from the blog feed on 2026-11-14. The blog is written in Korean.
export const posts = [
  { title: '[API] 공공데이터 API 사용하기', date: '2023.03.08', href: 'https://jaywapp.tistory.com/42' },
  {
    title: '[React] github pages를 활용하여 React 프로젝트 배포하기',
    date: '2023.03.08',
    href: 'https://jaywapp.tistory.com/41',
  },
  {
    title: 'private, protected method 단위 테스트 코드 작성하기',
    date: '2023.02.07',
    href: 'https://jaywapp.tistory.com/39',
  },
  { title: 'Adonis UI 사용기', date: '2023.02.07', href: 'https://jaywapp.tistory.com/37' },
  {
    title: '[C#] DataGrid로 DataTable 출력시 일부 cell이 없어지는 경우',
    date: '2023.01.30',
    href: 'https://jaywapp.tistory.com/36',
  },
];

export const blogUrl = 'https://jaywapp.tistory.com/';
