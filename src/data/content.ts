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
          title: '사내 AX(AI) 인프라 구성',
          bullets: [
            '사내 AI 전환(AX) 이니셔티브를 위한 내부 AI 인프라 설계 및 구성',
            '개발 조직이 AI 도구를 실무에 접목할 수 있는 기반 환경 마련',
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
            'TeamCity 기반 CI/CD 파이프라인 구축, 빌드·배포 반복 과정 자동화',
            '재현 가능하고 신뢰할 수 있는 배포 흐름 구성으로 수작업 의존도 제거',
          ],
        },
        {
          title: 'AI 기반 코드 리뷰 PoC',
          bullets: [
            '멀티 모델 선택이 가능한 AI 코드 리뷰 시스템 PoC 개발',
            '실무 생산성 향상에 유의미한 방식 검토 및 내부 AI 접목 가능성 검증',
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
            'ODB++, Gerber, Neutral 등 다양한 포맷을 처리하는 CAD 데이터 파이프라인 설계',
            '복잡한 설계 검증 문제를 소프트웨어로 구조화하고 후속 검증·활용까지 가능한 구조 구현',
          ],
        },
        {
          title: 'SMT 제조 솔루션 아키텍처 설계 및 Tech Lead',
          bullets: [
            'IoC(Prism), MVVM, Facade 기반 컨트롤러 설계로 유지보수성·확장성 확보',
            '삼성전자 네트워크·무선·가전 사업부 실사용 솔루션 개발 주도',
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
          title: 'Internal AX (AI Transformation) Infrastructure',
          bullets: [
            'Designing and building internal AI infrastructure for the company-wide AX initiative',
            'Creating a foundation that enables the engineering org to integrate AI tools into real workflows',
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
            'Built and operated TeamCity-based CI/CD pipeline, automating build and deployment cycles',
            'Eliminated manual dependencies with reproducible, reliable deployment flows',
          ],
        },
        {
          title: 'AI-based Code Review PoC',
          bullets: [
            'Developed a multi-model AI code review system PoC',
            'Validated practical productivity improvement of AI integration in internal dev processes',
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
            'Designed CAD data pipeline handling ODB++, Gerber, Neutral formats',
            'Structured complex design verification problems into maintainable software with downstream usability',
          ],
        },
        {
          title: 'SMT Manufacturing Solution Architecture & Tech Lead',
          bullets: [
            'Applied IoC(Prism), MVVM, Facade patterns for maintainability and scalability',
            'Led development of solutions used in Samsung Electronics Network, Wireless, and Home Appliance divisions',
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
