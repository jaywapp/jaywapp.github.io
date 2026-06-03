export type Locale = 'ko' | 'en';

export const experienceData = {
  ko: [
    {
      company: 'Smilegate RPG',
      role: 'Windows Client Software Developer',
      period: '2023.07 ~ 현재',
      description: 'C#, .NET 기반 Windows 클라이언트 소프트웨어 개발',
      current: true,
    },
    {
      company: 'Pentacube',
      role: 'Windows Client Software Developer',
      period: '2017.03 ~ 2023.06',
      description: 'C#, .NET 기반 EDA/PCB 설계 자동화 솔루션 개발 및 프로젝트 관리',
      current: false,
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
      company: 'Smilegate RPG',
      role: 'Windows Client Software Developer',
      period: '2023.07 ~ Present',
      description: 'Windows client software development with C# and .NET',
      current: true,
    },
    {
      company: 'Pentacube',
      role: 'Windows Client Software Developer',
      period: '2017.03 ~ 2023.06',
      description: 'EDA/PCB design automation solution development and project management with C# and .NET',
      current: false,
    },
    {
      company: 'DLAB',
      role: 'SW Education Curriculum Developer / Instructor',
      period: '2016.07 ~ 2016.12',
      description: 'Developed and taught software education curriculum for middle and high school students',
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
  ko: [
    {
      school: '아주대학교',
      major: '컴퓨터공학과',
      period: '2010.03 ~ 2017.02',
    },
  ],
  en: [
    {
      school: 'Ajou University',
      major: 'Computer Science',
      period: '2010.03 ~ 2017.02',
    },
  ],
};

export const skills = {
  major: ['C#', '.NET', 'WPF'],
  minor: ['React', 'JavaScript', 'Node.js'],
};

export const contacts = [
  {
    label: 'GitHub',
    href: 'https://github.com/jaywapp',
    icon: 'github',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/jaywapp16/',
    icon: 'linkedin',
  },
  {
    label: 'Blog',
    href: 'https://jaywapp.tistory.com/',
    icon: 'blog',
  },
  {
    label: 'Email',
    href: 'mailto:jaywapp16@gmail.com',
    icon: 'email',
  },
];
