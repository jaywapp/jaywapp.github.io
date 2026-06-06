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

export const experienceData: Record<Locale, ExperienceItem[]> = {
  ko: [
    {
      company: '스마일게이트',
      role: 'Windows Client Software Developer',
      period: '2023.07 ~ 현재',
      description: '개발자 생산성 향상을 위한 내부 도구 및 워크플로우 시스템 개발',
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
          title: 'Excel 유사 데이터 편집 도구 개발',
          bullets: [
            'DevExpress SpreadsheetControl을 활용해 Excel과 유사한 UX의 데이터 편집 도구 개발',
            '현업 사용자의 학습 비용을 낮추면서 입력 규칙과 도메인 로직을 체계적으로 제어',
            '복잡한 데이터를 다루는 업무에서 생산성과 사용성을 동시에 확보',
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
          title: '온보딩·로깅·운영 공통 인프라 구축',
          bullets: [
            '설치 마법사 형태의 온보딩 자동화 도구로 신규 구성원 환경 세팅 부담 제거',
            '중앙 집중형 로깅 시스템 설계·구축으로 내부 도구 생태계 운영 체계화',
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
          title: '조직 내 업무용 위젯 개발',
          bullets: [
            '개발 조직 구성원의 반복 업무를 줄이기 위한 사내 전용 위젯 개발',
            '실제 업무 흐름에 맞는 인터페이스로 접근성과 활용도를 높임',
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
          title: 'UnSync 기반 사내 Cook 빌드·배포 체계 구성',
          bullets: [
            'Unreal Engine UnSync를 활용해 사내 Cook 빌드 배포 파이프라인 구성',
            '빌드 산출물의 효율적인 동기화·배포 흐름을 자동화하여 팀 생산성 향상',
          ],
        },
        {
          title: 'Perforce + Hansoft 연동 워크플로우 개선',
          bullets: [
            'Perforce(Helix Core) 기반 워크플로우 제어 도구 개발로 소스 관리 반복 작업 감소',
            'Hansoft 연동으로 작업 관리 시스템과 개발 흐름을 자연스럽게 연결',
          ],
        },
      ],
    },
    {
      company: '펜타큐브',
      role: 'Windows Client Software Developer',
      period: '2017.03 ~ 2023.06',
      description: '전자 CAD/PCB 영역 DRC 시스템, 제조 솔루션, Plugin 아키텍처 개발',
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
      description: '중고등학생 대상 소프트웨어 교육 커리큘럼 개발 및 강의',
      current: false,
    },
    {
      company: '아주대학교병원',
      role: '서버 운영',
      period: '2015.06 ~ 2016.02',
      description: '야간 서버 운영 및 O/A 업무',
      current: false,
    },
  ],
  en: [
    {
      company: 'Smilegate',
      role: 'Windows Client Software Developer',
      period: '2023.07 ~ Present',
      description: 'Internal tooling and workflow systems to enhance developer productivity',
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
          title: 'Excel-like Data Editing Tool',
          bullets: [
            'Built an Excel-like data editing tool using DevExpress SpreadsheetControl',
            'Reduced learning curve for end users while enforcing domain logic and input rules internally',
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
          title: 'Onboarding, Logging & Operations Infrastructure',
          bullets: [
            'Built wizard-based onboarding automation to eliminate dev environment setup burden',
            'Designed centralized logging system to systematize internal tool ecosystem operations',
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
          title: 'Internal Work Widgets',
          bullets: [
            'Developed internal widgets to reduce repetitive tasks for engineering team members',
            'Improved accessibility and adoption by fitting naturally into existing work patterns',
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
          title: 'UnSync-based Cook Build & Deploy Pipeline',
          bullets: [
            'Designed and built an internal Cook build distribution pipeline using Unreal Engine UnSync',
            'Automated build artifact sync and deployment flow, improving team productivity',
          ],
        },
        {
          title: 'Perforce + Hansoft Workflow Integration',
          bullets: [
            'Developed Perforce(Helix Core) workflow control tool to reduce repetitive source management tasks',
            'Integrated Hansoft to connect task management with actual development flow',
          ],
        },
      ],
    },
    {
      company: 'Pentacube',
      role: 'Windows Client Software Developer',
      period: '2017.03 ~ 2023.06',
      description: 'DRC systems, manufacturing solutions, and Plugin architecture for EDA/PCB domain',
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
      description: 'Developed and taught software curriculum for middle and high school students',
      current: false,
    },
    {
      company: 'Ajou University Hospital',
      role: 'Server Operator',
      period: '2015.06 ~ 2016.02',
      description: 'Night server operations and O/A work',
      current: false,
    },
  ],
};

export const educationData = {
  ko: [{ school: '아주대학교', major: '소프트웨어학과', period: '2010.03 ~ 2017.02' }],
  en: [{ school: 'Ajou University', major: 'Software Engineering', period: '2010.03 ~ 2017.02' }],
};

export const certifications = {
  ko: [{ name: '정보처리기사', type: '자격증' }],
  en: [{ name: 'Engineer Information Processing', type: 'Certificate' }],
};

export const skills = {
  major: ['C#', '.NET', 'WPF'],
  minor: ['Perforce', 'TeamCity', 'React', 'JavaScript', 'Node.js'],
};

export const contacts = [
  { label: 'GitHub', href: 'https://github.com/jaywapp', icon: 'github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jaywapp16/', icon: 'linkedin' },
  { label: 'Blog', href: 'https://jaywapp.tistory.com/', icon: 'blog' },
  { label: 'Email', href: 'mailto:jaywapp16@gmail.com', icon: 'email' },
];
