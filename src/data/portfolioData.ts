import { Project, SkillCategory, EducationInfo, SocialContact } from '../types';

export const personalInfo = {
  name: 'Apoorva',
  initials: 'AP',
  title: 'CS Student • REVA Univ',
  currentSemester: '3rd Sem @ REVA University',
  edition: 'Portfolio / 2025',
  headline: 'B.Tech CS Student, REVA University — 3rd Semester — exploring full-stack development & embedded systems.',
  summary: 'CS student interested in systems programming, embedded devices, and product building, currently planning a project called WriteHub.',
  focusArea: 'Systems & IoT',
  cgpa: '8.85 CGPA',
  university: 'REVA University',
  location: 'Bengaluru, Karnataka, India',
  email: 'apoorvaumesh23@gmail.com',
  githubUser: 'apoorva',
  githubUrl: 'https://github.com/apoorva',
  linkedinUrl: 'https://linkedin.com/in/apoorva',
  leetcodeUrl: 'https://leetcode.com',
};

export const projectsData: Project[] = [
  {
    id: 'writehub',
    title: 'WriteHub (Planned)',
    category: 'PLANNED PROJECT',
    typeBadge: 'Blueprint',
    subtitle: 'Academic Peer-to-Peer Help Platform (In Planning Phase)',
    description: 'A peer-to-peer academic help platform connecting students with verified tutors, featuring an intelligent matching engine, verification system, real-time messaging, and transparent ratings.',
    tags: ['Matching Engine', 'Verified Tutors', 'In-app Messaging', 'Peer Ratings'],
    demoType: 'blueprint',
    blueprintDetails: {
      overview: 'WriteHub aims to bridge the gap between students seeking academic guidance and high-achieving peer tutors across university departments. Built with low-latency communication and verifiable academic reputation.',
      architecture: [
        'Client Tier: React + Tailwind responsive web app and mobile PWA client.',
        'Gateway & Real-Time Engine: Node.js WebSocket service with Redis pub/sub for concurrent student chats.',
        'Matching Algorithmic Core: Bipartite matching with cosine similarity weighting on subject needs, availability windows, and verified course grades.',
        'Data Tier: PostgreSQL for transactional user records, audit logs, and escrowed session ratings.'
      ],
      modules: [
        {
          name: 'Subject-Weighted Matching Engine',
          desc: 'Finds optimal tutors based on course syllabus alignment, past GPA in the target subject, and real-time availability.'
        },
        {
          name: 'University Verification System',
          desc: 'Institutional email validation and grade card token verification ensuring authentic student tutor credentials.'
        },
        {
          name: 'Live Chat & Whiteboard Sync',
          desc: 'Real-time peer-to-peer communication with Markdown math notation and collaborative problem solving.'
        },
        {
          name: 'Transparent Review & Escrow Ledger',
          desc: 'Double-blind feedback loop maintaining high academic integrity and tutor accountability.'
        }
      ],
      techStack: ['TypeScript', 'Node.js', 'PostgreSQL', 'WebSockets', 'Tailwind CSS', 'Redis']
    }
  },
  {
    id: 'graphics-editor',
    title: '2D Graphics Editor',
    category: 'SYSTEMS SOFTWARE',
    icon: 'draw',
    subtitle: 'Systems & Graphics in C',
    description: 'A 2D graphics editor built in C with custom rendering pipelines, rasterization tools, and shape manipulation.',
    tags: ['C Programming', 'Graphics Pipeline', 'Systems Programming', 'GitHub'],
    githubUrl: 'https://github.com/apoorva',
    demoType: 'graphics-editor',
    blueprintDetails: {
      overview: 'Engineered from scratch in C without heavy graphics engines. Implements standard framebuffer manipulation, Bresenham line rasterization, Midpoint circle drawing, flood-fill algorithm, and raw pixel output.',
      architecture: [
        'Framebuffer Memory Buffer: Direct pointer arithmetic on an allocated 1D array representing 2D color coordinates (ARGB8888).',
        'Rasterization Module: Integer-only arithmetic algorithms to eliminate floating-point calculation bottlenecks.',
        'Canvas Transformations: Matrix coordinate transformations for rotation, scaling, and canvas clipping.'
      ],
      modules: [
        {
          name: 'Bresenham Line Generation',
          desc: 'Efficient incremental error algorithm for rasterizing straight lines between arbitrary coordinates.'
        },
        {
          name: 'Midpoint Circle & Arc Rasterizer',
          desc: 'Eight-way symmetric pixel plotting for mathematically smooth circle and curve generation.'
        },
        {
          name: 'Interactive Shape Selection & Fill',
          desc: 'Queue-based flood-fill algorithm with color threshold boundary detection.'
        }
      ],
      techStack: ['C99', 'Systems Programming', 'Algorithms', 'Makefile', 'Linux']
    }
  },
  {
    id: 'iot-smart-monitor',
    title: 'IoT Environmental Telemetry Node',
    category: 'HARDWARE & IOT',
    icon: 'cpu',
    subtitle: 'Embedded Sensing with NodeMCU & Blynk',
    description: 'Microcontroller telemetry station transmitting real-time ambient metrics, sensor anomaly triggers, and cloud synchronization.',
    tags: ['Arduino/NodeMCU', 'ESP8266', 'IoT & Blynk', 'C++ / Wiring'],
    githubUrl: 'https://github.com/apoorva',
    demoType: 'iot-simulator'
  }
];

export const educationData: EducationInfo = {
  degree: 'B.Tech, Computer Science & Engineering',
  institution: 'REVA University',
  semester: '3rd Semester',
  cgpa: '8.85',
  scale: '10',
  standing: 'Top Tier Standing',
  track: 'HONORS TRACK',
  semesters: [
    {
      sem: 'Semester 1',
      gpa: '8.92',
      status: 'completed',
      courses: [
        'Engineering Mathematics I (Calculus & Linear Algebra)',
        'Problem Solving using C Programming',
        'Engineering Physics for Computer Science',
        'Basic Electrical & Electronics Engineering',
        'C Programming Laboratory'
      ]
    },
    {
      sem: 'Semester 2',
      gpa: '8.78',
      status: 'completed',
      courses: [
        'Engineering Mathematics II (Differential Equations & Vector Calculus)',
        'Advanced C Programming & Modular Architecture',
        'Digital Logic & System Design',
        'Engineering Chemistry & Environmental Science',
        'Digital Electronics Hardware Lab'
      ]
    },
    {
      sem: 'Semester 3 (Current)',
      gpa: '8.85 (Aggregate)',
      status: 'current',
      courses: [
        'Data Structures & Algorithms (Trees, Graphs, Sorting)',
        'Object-Oriented Programming with Java',
        'Discrete Mathematical Structures & Graph Theory',
        'Computer Organization and Architecture',
        'Microcontrollers & Embedded Hardware Workshop'
      ]
    }
  ]
};

export const skillsData: SkillCategory[] = [
  {
    id: 'languages-core',
    title: 'Languages & Core CS',
    itemCount: '04 items',
    skills: [
      {
        name: 'C',
        level: 'Advanced',
        details: 'Low-level systems programming, pointer arithmetic, memory management, data structures from scratch.',
        projects: ['2D Graphics Editor', 'Custom Memory Allocator']
      },
      {
        name: 'Java',
        level: 'Intermediate',
        details: 'Object-oriented patterns, collections framework, exception handling, algorithmic problem solving.',
        projects: ['LeetCode Problem Solving', 'Academic Mini-projects']
      },
      {
        name: 'HTML/CSS/JS',
        level: 'Proficient',
        details: 'Modern semantic markup, responsive design, DOM manipulation, asynchronous JavaScript.',
        projects: ['WriteHub Client', 'Personal Portfolio']
      },
      {
        name: 'DSA',
        level: 'Advanced',
        details: 'Arrays, linked lists, stacks, queues, binary trees, graphs, sorting, searching, dynamic programming basics.',
        projects: ['LeetCode Daily Practice', 'Graphics Rasterization Algorithms']
      }
    ]
  },
  {
    id: 'databases-tools',
    title: 'Databases & Tools',
    itemCount: '04 items',
    skills: [
      {
        name: 'SQL',
        level: 'Intermediate',
        details: 'DDL, DML, multi-table joins, subqueries, group by aggregations, constraints.',
        projects: ['WriteHub Database Schema', 'Academic DBMS Project']
      },
      {
        name: 'DBMS',
        level: 'Intermediate',
        details: 'Relational schema design, normalization (1NF through BCNF), ACID transactions, ER modeling.',
        projects: ['Coursework & Schema Modeling']
      },
      {
        name: 'Git',
        level: 'Proficient',
        details: 'Commit history hygiene, branching, feature merges, merge conflict resolution, detached HEAD recovery.',
        projects: ['Daily Git CLI workflow']
      },
      {
        name: 'GitHub',
        level: 'Proficient',
        details: 'Pull requests, code reviews, issue tracking, markdown documentation, project releases.',
        projects: ['Open source repositories & project showcases']
      }
    ]
  },
  {
    id: 'hardware-iot',
    title: 'Hardware & IoT',
    itemCount: '02 items',
    skills: [
      {
        name: 'Arduino/NodeMCU',
        level: 'Hands-on',
        details: 'ESP8266 Wi-Fi microcontroller, GPIO interfacing, analog-to-digital converters, I2C/SPI sensors.',
        projects: ['Environmental Telemetry Node', 'Embedded Lab Sensors']
      },
      {
        name: 'IoT & Blynk',
        level: 'Hands-on',
        details: 'Blynk IoT Cloud integration, webhook triggers, virtual pins, sensor telemetry dashboards.',
        projects: ['Real-time sensor monitoring station']
      }
    ]
  }
];

export const competitiveProgramming = {
  platform: 'LeetCode',
  badge: 'LC',
  subtitle: 'Active Problem Solver',
  description: 'Algorithm practice, problem solving, data structures in C and Java.',
  stats: {
    solvedCount: '150+',
    focus: 'Arrays, Strings, Linked Lists, Trees',
    contestRating: 'Active'
  },
  profileUrl: 'https://leetcode.com'
};

export const contactLinks: SocialContact[] = [
  {
    label: 'Version Control',
    sublabel: 'GitHub /apoorva',
    value: 'https://github.com/apoorva',
    href: 'https://github.com/apoorva',
    iconName: 'github',
    type: 'external'
  },
  {
    label: 'Professional Network',
    sublabel: 'LinkedIn /in/apoorva',
    value: 'https://linkedin.com/in/apoorva',
    href: 'https://linkedin.com/in/apoorva',
    iconName: 'linkedin',
    type: 'external'
  },
  {
    label: 'Direct Inquiry',
    sublabel: 'Get in touch via Email',
    value: 'apoorvaumesh23@gmail.com',
    href: 'mailto:apoorvaumesh23@gmail.com',
    iconName: 'mail',
    type: 'email'
  }
];
