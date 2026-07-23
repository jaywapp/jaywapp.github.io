import { Github, Linkedin, Mail, BookOpen, type LucideIcon } from 'lucide-react';

export type Locale = 'ko' | 'en';

export interface Project {
  title: string;
  bullets: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string;
  current: boolean;
  projects?: Project[];
}

export interface FeaturedProject {
  name: string;
  category: string;
  description: string;
  highlight: string;
  href: string;
  technologies: string[];
}

export const experienceData: Record<Locale, ExperienceItem[]> = {
  ko: [
    {
      company: '스마일게이트',
      role: 'Developer Productivity & Tooling Engineer',
      period: '2023.07 ~ 현재',
      description:
        '개발 조직의 생산성을 높이는 내부 도구, 빌드·배포 자동화, 온보딩 워크플로우 및 AI·AX 플랫폼 개발',
      current: true,
      projects: [
        {
          title: '크래시 AI 분석 시스템 구축 (진행 중)',
          bullets: [
            'Claude API 기반 로컬 에이전트 서버를 구축·운영 중이며 현재 550건의 크래시 분석 데이터 생성 완료',
            '실 운영 과정에서 API 비용 최적화 필요성을 경험하고, MCP 활용과 서브에이전트 레이어 도입으로 토큰 효율을 고려한 AI 파이프라인 구조 설계',
          ],
        },
        {
          title: '사내 AX(AI) 인프라 구성',
          bullets: [
            '사내 태스크 관리 시스템과 Perforce MCP를 직접 구성해 AI 에이전트가 내부 시스템과 직접 상호작용하는 인터페이스 구축',
            'Gitea 기반 내부 AI 도구 마켓플레이스 구성·배포로 70명 규모 조직에 AI 도구 셀프서비스 접근 체계 제공',
          ],
        },
        {
          title: 'VSTO 기반 Excel 데이터 편집 플러그인 개발',
          bullets: [
            'DevExpress SpreadsheetControl 기반의 독립형 데이터 편집 도구를 실제 Excel에서 동작하는 VSTO 플러그인으로 확장',
            'Excel의 친숙한 사용성을 유지하면서 입력 검증, 도메인 규칙 및 사내 데이터 연동 기능 제공',
          ],
        },
        {
          title: 'CI/CD 파이프라인 구축 및 운영 체계 개선',
          bullets: [
            '이전 부서: 조직 전반에 분산된 빌드 작업을 분석·재구성하여 TeamCity 기반 빌드 체인 체계화',
            '현재 부서: 운영 프로그램 배포 프로세스 전체를 처음부터 설계하고 자동화 배포 체계 구축',
          ],
        },
        {
          title: 'AI 기반 코드 리뷰 PoC',
          bullets: [
            'OpenAI·Claude·Gemini 등 다중 AI 모델을 손쉽게 전환할 수 있는 코드 리뷰 애플리케이션 개발',
            'PoC 결과가 Perforce Swarm 코드 리뷰 도구 도입 의사결정의 실질적 근거 자료로 활용됨',
          ],
        },
        {
          title: 'Slack 기반 신규 입사자 온보딩 자동화',
          bullets: [
            'Slack Workflow와 사내 시스템을 연동해 신규 입사자 안내, 초기 개발 환경 구성 및 Perforce 계정 생성을 자동화',
            '담당자가 신규 입사자를 지정 채널에 초대하면 전체 온보딩 절차가 시작되는 단일 액션 워크플로우 구축',
            '수동으로 진행하던 계정·환경 설정 절차를 표준화하여 반복 작업과 설정 누락 가능성 감소',
          ],
        },
        {
          title: '내부 툴링 체계 구축',
          bullets: [
            'WPF 데스크톱 앱, CLI 도구, VSIX Extension 등 사용 맥락에 맞는 인터페이스로 툴 제공',
            '워크플로우 전반의 마찰을 줄여 개발 조직 생산성 향상에 기여',
          ],
        },
        {
          title: '업무 도구 통합 위젯 개발',
          bullets: [
            'Perforce, Hansoft, UnrealGameSync 등 사내 업무 도구를 연결하는 데스크톱 위젯 구현',
            '여러 도구에 분산된 주요 기능과 정보를 하나의 인터페이스로 통합해 반복 작업과 도구 전환 비용 감소',
          ],
        },
        {
          title: 'Perforce·Hansoft MCP 플러그인 개발',
          bullets: [
            'Perforce 전 명령어를 지원하는 MCP 플러그인 개발로 AI 에이전트의 완전한 소스 관리 시스템 접근 가능',
            'Hansoft 기반 웹 솔루션 MCP 구성으로 AI가 작업 관리 데이터를 직접 조회·처리하는 인터페이스 구현',
            'Claude 기반 협업 환경에서 내부 시스템과 통합된 AI 워크플로우 지원',
          ],
        },
        {
          title: 'UnSync 기반 Cook 빌드 다운로드 체계 구축',
          bullets: [
            'Unreal Engine UnSync를 활용해 배포된 Cook 빌드 버전을 선택하고 다운로드할 수 있는 내부 체계 구축',
            '빌드 산출물의 배포·동기화 흐름을 표준화하여 개발팀의 빌드 접근성과 업무 효율 개선',
          ],
        },
        {
          title: 'Perforce + Hansoft 연동 워크플로우 개선',
          bullets: [
            'Perforce(Helix Core) 기반 워크플로우 제어 도구 개발로 소스 관리 반복 작업 감소',
            'Hansoft 연동으로 작업 관리 시스템과 개발 흐름을 자연스럽게 연결',
          ],
        },
        {
          title: '사내 솔루션 통합 랜딩 페이지 구축',
          bullets: [
            '조직에서 사용하는 여러 내부 솔루션을 한곳에서 탐색하고 접근할 수 있는 메인 랜딩 페이지 구축',
            '리버스 프록시를 적용해 개별 솔루션을 하나의 도메인 아래 통합하고 사용자 접근 경로 단순화',
          ],
        },
        {
          title: 'AX Dashboard 구축',
          bullets: [
            '조직 내 AI·AX 도입 현황, 사용 통계 및 관련 정보를 제공하는 대시보드 개발',
            '분산된 AI 관련 지표와 자료를 시각화하여 활용 현황과 성과를 한눈에 파악할 수 있도록 구성',
          ],
        },
        {
          title: '내부 도구 로깅·운영 인프라 구축',
          bullets: [
            '중앙 집중형 로깅 시스템을 설계·구축해 여러 내부 도구의 상태와 오류를 일관된 방식으로 추적',
            '분산된 도구의 운영 정보를 통합하여 장애 대응과 유지보수 기반 마련',
          ],
        },
      ],
    },
    {
      company: '펜타큐브',
      role: 'Windows Client Software Developer',
      period: '2017.03 ~ 2023.06',
      description:
        '전자 CAD·PCB 도메인의 설계 규칙 검증 시스템과 제조 솔루션 개발, 플러그인 아키텍처 설계',
      current: false,
      projects: [
        {
          title: 'CAD/PCB 데이터 처리 및 검증 시스템 (DRC)',
          bullets: [
            'ODB++, Gerber, Neutral 등 다양한 PCB 포맷을 처리하는 CAD 데이터 파이프라인 설계',
            '삼성전자 네트워크 사업부·SK하이닉스·현대모비스·현대자동차·경신 등 대형 고객사의 실 도면 기반 설계 검증 시스템 구축 및 납품',
            '네트워크 장비 수준의 대규모 PCB 도면을 포함한 다양한 규모의 도면 처리 가능한 범용 구조로 설계',
          ],
        },
        {
          title: 'SMT 제조 솔루션 아키텍처 설계 및 Tech Lead',
          bullets: [
            'IoC(Prism), MVVM, Facade 기반 컨트롤러 설계로 유지보수성·확장성 확보',
            '실 PCB 도면 기반의 사전 제조 검증 솔루션을 삼성전자·SK하이닉스 현장에 납품',
          ],
        },
        {
          title: 'Plugin 및 License 시스템 구축',
          bullets: [
            'Reflection 기반 Plugin 구조로 고객별 기능 확장·분리 유연하게 관리',
            'FlexLM 기반 라이선스 체계 전환으로 Floating License 지원 및 운영 효율 개선',
          ],
        },
        {
          title: '엔터프라이즈 고객 기술 협업 (SK hynix, 삼성전자)',
          bullets: [
            'SK hynix DFM Rule 개발 프로젝트 전 과정 주도 (요구사항 정리 → 설계 → 구현)',
            '사영 기하학 기반 알고리즘 설계로 CAD 배선 Coupling 검증 정확도 향상',
          ],
        },
      ],
    },
    {
      company: 'DLAB',
      role: 'SW 교육 커리큘럼 개발 / 강사',
      period: '2016.07 ~ 2016.12',
      description: '중·고등학생 대상 소프트웨어 교육 커리큘럼을 개발하고 수업 운영',
      current: false,
    },
    {
      company: '아주대학교병원',
      role: '서버 운영',
      period: '2015.06 ~ 2016.02',
      description: '야간 서버 모니터링과 장애 대응을 포함한 전산 운영 업무 수행',
      current: false,
    },
  ],
  en: [
    {
      company: 'Smilegate',
      role: 'Developer Productivity & Tooling Engineer',
      period: '2023.07 ~ Present',
      description:
        'Internal tooling, build and deployment automation, onboarding workflows, and AI/AX platforms that improve engineering productivity',
      current: true,
      projects: [
        {
          title: 'Crash AI Analysis System (In Progress)',
          bullets: [
            'Building and operating a local Claude agent server; generated 550+ crash analysis records to date',
            'Identified API cost inefficiencies during production and redesigned the pipeline with MCP integration and sub-agent layering for token-efficient execution',
          ],
        },
        {
          title: 'Internal AX (AI Transformation) Infrastructure',
          bullets: [
            'Built internal task management and Perforce MCP integrations, enabling AI agents to interact directly with internal systems',
            'Deployed a Gitea-based internal AI tool marketplace serving 70 engineers with a self-service AI tooling platform',
          ],
        },
        {
          title: 'VSTO-based Excel Data Editing Plugin',
          bullets: [
            'Extended a standalone DevExpress SpreadsheetControl-based editor into a VSTO plugin that runs directly in Excel',
            'Preserved the familiar Excel experience while adding input validation, domain rules, and internal data integration',
          ],
        },
        {
          title: 'CI/CD Pipeline & Deployment Automation',
          bullets: [
            'Previous team: Analyzed and restructured scattered build jobs across the org into an organized TeamCity build chain',
            'Current team: Designed and built the entire operational program deployment process from scratch, automating end-to-end delivery',
          ],
        },
        {
          title: 'AI-based Code Review PoC',
          bullets: [
            'Developed a multi-model code review app supporting OpenAI, Claude, and Gemini with easy model switching',
            'PoC findings served as concrete evidence in the decision to adopt Perforce Swarm as the team\'s code review tool',
          ],
        },
        {
          title: 'Slack-based New Hire Onboarding Automation',
          bullets: [
            'Integrated Slack Workflow with internal systems to automate new-hire guidance, initial development environment setup, and Perforce account provisioning',
            'Built a single-action workflow that starts the entire onboarding process when a new employee is invited to a designated Slack channel',
            'Standardized previously manual account and environment setup, reducing repetitive work and setup omissions',
          ],
        },
        {
          title: 'Internal Tooling System',
          bullets: [
            'Delivered tools as WPF desktop apps, CLI tools, and VSIX extensions based on usage context',
            'Reduced friction across workflows, contributing to organizational productivity gains',
          ],
        },
        {
          title: 'Integrated Workflow Widget',
          bullets: [
            'Built a desktop widget connecting internal tools including Perforce, Hansoft, and UnrealGameSync',
            'Unified key actions and information from separate tools in one interface, reducing repetitive work and context switching',
          ],
        },
        {
          title: 'Perforce & Hansoft MCP Plugin Development',
          bullets: [
            'Built a full-coverage Perforce MCP plugin supporting all P4 commands, giving AI agents complete access to source control',
            'Implemented Hansoft web solution MCP integration enabling AI to directly query and process task management data',
            'Supports AI-integrated workflows in Claude co-work environments with full internal system connectivity',
          ],
        },
        {
          title: 'UnSync-based Cook Build Download System',
          bullets: [
            'Built an internal system using Unreal Engine UnSync for selecting and downloading deployed Cook build versions',
            'Standardized build artifact distribution and synchronization, improving build accessibility and team efficiency',
          ],
        },
        {
          title: 'Perforce + Hansoft Workflow Integration',
          bullets: [
            'Developed Perforce(Helix Core) workflow control tool to reduce repetitive source management tasks',
            'Integrated Hansoft to connect task management with actual development flow',
          ],
        },
        {
          title: 'Internal Solutions Landing Page',
          bullets: [
            'Built a central landing page for discovering and accessing internal solutions across the organization',
            'Used a reverse proxy to consolidate separate solutions under a single domain and simplify access paths',
          ],
        },
        {
          title: 'AX Dashboard',
          bullets: [
            'Developed a dashboard presenting organizational AI/AX adoption, usage statistics, and related information',
            'Visualized distributed AI metrics and resources so adoption and outcomes could be understood at a glance',
          ],
        },
        {
          title: 'Internal Tool Logging & Operations Infrastructure',
          bullets: [
            'Designed and built centralized logging to track status and errors consistently across internal tools',
            'Consolidated operational information from distributed tools to support incident response and maintenance',
          ],
        },
      ],
    },
    {
      company: 'Pentacube',
      role: 'Windows Client Software Developer',
      period: '2017.03 ~ 2023.06',
      description:
        'Design rule verification systems, manufacturing solutions, and plugin architecture for the EDA/PCB domain',
      current: false,
      projects: [
        {
          title: 'CAD/PCB Data Processing & Validation System (DRC)',
          bullets: [
            'Designed a CAD data pipeline handling ODB++, Gerber, and Neutral PCB formats',
            'Built and delivered design rule verification systems for Samsung Electronics Network Division, SK hynix, Hyundai Mobis, Hyundai Motor, and Kyungshin',
            'Architected for scale — handling complex network equipment PCB designs across a broad range of customer domains',
          ],
        },
        {
          title: 'SMT Manufacturing Solution Architecture & Tech Lead',
          bullets: [
            'Led architecture using IoC(Prism), MVVM, and Facade patterns for maintainability and extensibility',
            'Delivered a real PCB design-based pre-manufacturing verification solution deployed at Samsung Electronics and SK hynix',
          ],
        },
        {
          title: 'Plugin & License System',
          bullets: [
            'Built Reflection-based Plugin architecture for flexible per-customer feature management',
            'Migrated to FlexLM licensing for Floating License support and improved operational efficiency',
          ],
        },
        {
          title: 'Enterprise Client Technical Collaboration (SK hynix, Samsung)',
          bullets: [
            'Led full cycle of SK hynix DFM Rule project: requirements → design → implementation',
            'Designed projective geometry-based algorithm to improve CAD wire coupling verification accuracy',
          ],
        },
      ],
    },
    {
      company: 'DLAB',
      role: 'SW Education Curriculum Developer / Instructor',
      period: '2016.07 ~ 2016.12',
      description: 'Developed software curricula and taught middle and high school students',
      current: false,
    },
    {
      company: 'Ajou University Hospital',
      role: 'Server Operator',
      period: '2015.06 ~ 2016.02',
      description: 'Handled overnight server monitoring, incident response, and IT operations',
      current: false,
    },
  ],
};

export const educationData = {
  ko: [{ school: '아주대학교', major: '소프트웨어학과', period: '2010.03 ~ 2017.02' }],
  en: [{ school: 'Ajou University', major: 'Software Engineering', period: '2010.03 ~ 2017.02' }],
};

export const featuredProjects: Record<Locale, FeaturedProject[]> = {
  ko: [
    {
      name: 'Claude Buffett',
      category: 'AI Automation',
      description:
        'Claude를 활용해 종목 분석, 시장 동향, 포트폴리오 리뷰를 자동으로 작성하고 웹에서 탐색할 수 있게 만든 투자 분석 시스템입니다.',
      highlight: '일간·주간·요청형 리포트 자동화',
      href: 'https://github.com/jaywapp/claude-buffett',
      technologies: ['Claude', 'Python', 'GitHub Pages'],
    },
    {
      name: 'AI Debate',
      category: 'Agent Workflow',
      description:
        'Claude와 Codex가 멀티라운드로 논쟁하고, 독립된 판정자가 결론을 내리는 과정을 재사용 가능한 워크플로우로 구성했습니다.',
      highlight: '멀티모델 토론·판정 기록 체계',
      href: 'https://github.com/jaywapp/ai-debate',
      technologies: ['Claude', 'Codex', 'Markdown'],
    },
    {
      name: 'CardRadar',
      category: 'Mobile Product',
      description:
        '보유 카드와 결제 카테고리를 기준으로 혜택을 비교해, 결제 순간 가장 유리한 카드를 찾도록 돕는 모바일 앱입니다.',
      highlight: '19개 카드·8개 소비 카테고리 지원',
      href: 'https://github.com/jaywapp/card-radar',
      technologies: ['Flutter', 'Riverpod', 'Hive'],
    },
  ],
  en: [
    {
      name: 'Claude Buffett',
      category: 'AI Automation',
      description:
        'An investment research system that uses Claude to generate stock analysis, market briefs, and portfolio reviews with a web-based report viewer.',
      highlight: 'Automated daily, weekly, and on-demand reports',
      href: 'https://github.com/jaywapp/claude-buffett',
      technologies: ['Claude', 'Python', 'GitHub Pages'],
    },
    {
      name: 'AI Debate',
      category: 'Agent Workflow',
      description:
        'A reusable workflow where Claude and Codex debate across multiple rounds and an independent judge delivers a structured verdict.',
      highlight: 'Multi-model debate and evaluation records',
      href: 'https://github.com/jaywapp/ai-debate',
      technologies: ['Claude', 'Codex', 'Markdown'],
    },
    {
      name: 'CardRadar',
      category: 'Mobile Product',
      description:
        'A mobile app that compares benefits across a user\'s cards and spending category to recommend the best card at checkout.',
      highlight: '19 cards across 8 spending categories',
      href: 'https://github.com/jaywapp/card-radar',
      technologies: ['Flutter', 'Riverpod', 'Hive'],
    },
  ],
};

export const certifications = {
  ko: [{ name: '정보처리기사', type: '자격증' }],
  en: [{ name: 'Engineer Information Processing', type: 'Certificate' }],
};

export const skills = {
  major: ['C#', '.NET', 'WPF'],
  minor: ['Perforce', 'TeamCity', 'React', 'JavaScript', 'Node.js'],
};

export interface SocialLink {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string;
}

export const socialLinks: SocialLink[] = [
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/jaywapp',
    href: 'https://github.com/jaywapp',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/jaywapp16',
    href: 'https://www.linkedin.com/in/jaywapp16/',
  },
  {
    icon: BookOpen,
    label: 'Blog',
    value: 'jaywapp.tistory.com',
    href: 'https://jaywapp.tistory.com/',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'jaywapp16@gmail.com',
    href: 'mailto:jaywapp16@gmail.com',
  },
];
