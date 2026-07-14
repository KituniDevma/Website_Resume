export const profile = {
  name: 'Kithuni Wickramasinghe',
  firstName: 'Kithuni',
  lastName: 'Wickramasinghe',
  fullName: 'Kithuni Devma Wickramasinghe',
  role: 'Generative AI Engineer · Data Science & Machine Learning',
  tagline:
    'Building intelligent systems at the intersection of research and engineering — from LLM evaluation to production AI workflows.',
  about:
    'I am a Generative AI Engineer passionate about data science, machine learning, and building intelligent systems that solve real-world problems. I focus on developing data-driven solutions and applying modern AI techniques to extract meaningful insights and improve decision-making. I enjoy working at the intersection of research and engineering, and I am constantly exploring new advancements in AI to build impactful solutions.',
  email: 'kithuniwickramasinghe@gmail.com',
  phone: '+94 76 615 4620',
  cvUrl: 'Kithuni_Devma_CV.pdf',
  socials: [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/kithuni-wickramasinghe',
    },
    {
      label: 'GitHub',
      href: 'https://github.com/KituniDevma',
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/kithu_d?igsh=N3ppYnRsNXdmNTVh&utm_source=qr',
    },
    {
      label: 'Threads',
      href: 'https://www.threads.net/@kithu_d',
    },
  ],
} as const

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Publications', href: '#publications' },
  { label: 'Contact', href: '#contact' },
] as const

export type AboutTabId =
  | 'experience'
  | 'education'
  | 'achievements'
  | 'courses'
  | 'technical'
  | 'skills'

export const aboutTabs: {
  id: AboutTabId
  label: string
  items: { title: string; detail?: string }[]
}[] = [
  {
    id: 'experience',
    label: 'Experience',
    items: [
      {
        title: 'Generative AI Engineer — Arcadea Group',
        detail:
          'Toronto, Ontario (Remote) · Apr 2026–present · Applied AI solutions, model-driven workflows, and automation for production products',
      },
      {
        title: 'Generative AI Engineer Intern — Arcadea Group',
        detail:
          'Toronto, Ontario (Remote) · Dec 2025–Apr 2026 · Generative AI engineering internship before transitioning to full-time',
      },
      {
        title: 'Teaching Assistant — University of Moratuwa',
        detail:
          'Dept. of Computer Science & Engineering · Jul 2025–Dec 2025 · Supported undergraduate teaching, guidance, and academic work',
      },
      {
        title: 'Data Science Intern — Octave (John Keells Holdings)',
        detail:
          'Dec 2024–Jun 2025 · ML for churn prediction, campaign optimization, drift analysis, and retention insights · Head of Interns',
      },
    ],
  },
  {
    id: 'education',
    label: 'Education',
    items: [
      {
        title: 'University of Moratuwa',
        detail:
          'BSc Eng (Hons), Data Science and Engineering · 2022–2026 · Current GPA: 3.71',
      },
      {
        title: 'De Mazenod College, Kandana',
        detail: 'GCE Advanced Level — Physical Science · 2018–2020 · 3 A’s',
      },
      {
        title: 'Ave Maria Convent, Negombo',
        detail: "GCE Ordinary Level (2017) · 9 A's",
      },
    ],
  },
  {
    id: 'achievements',
    label: 'Achievements',
    items: [
      {
        title: 'Brainstorm ’24',
        detail: 'Finalist (Top 10)',
      },
      {
        title: 'Idealize ’24',
        detail: 'Finalist',
      },
      {
        title: 'SLRC Robotic Challenge',
        detail: 'Finalist (Top 5)',
      },
      {
        title: 'Home Credit Kaggle Competition',
        detail: 'Ranked 280th',
      },
      {
        title: 'GCE A/L Physical Science (2020)',
        detail: '3 A’s · District Rank 28 · Island Rank 427',
      },
    ],
  },
  {
    id: 'courses',
    label: 'Courses',
    items: [
      {
        title: 'Machine Learning Specialization — DeepLearning.AI / Stanford',
        detail: 'Coursera',
      },
      {
        title: 'AWS Academy Graduate',
        detail: 'AWS Academy Machine Learning Foundations',
      },
      {
        title: 'Introduction to Machine Learning',
        detail: 'Kaggle',
      },
      {
        title: 'Intermediate Machine Learning',
        detail: 'Kaggle',
      },
    ],
  },
  {
    id: 'technical',
    label: 'Technical',
    items: [
      { title: 'Programming', detail: 'Python, Java, C++, RPAL, VHDL' },
      {
        title: 'Machine Learning',
        detail: 'Scikit-Learn, NumPy, Pandas, TensorFlow',
      },
      { title: 'Databases', detail: 'MySQL, MongoDB' },
      { title: 'Web & AI', detail: 'React, LangChain, HTML, CSS' },
      { title: 'Tools', detail: 'Git, VS Code' },
      { title: 'Systems', detail: 'Windows, Linux' },
    ],
  },
  {
    id: 'skills',
    label: 'Soft skills',
    items: [
      { title: 'Leadership' },
      { title: 'Presentation' },
      { title: 'Public speaking' },
      { title: 'Teamwork' },
      { title: 'Communication' },
    ],
  },
]

export type Project = {
  title: string
  description: string
  image?: string
  href?: string
  tags: string[]
}

export const projects: Project[] = [
  {
    title: 'Evaluating contextual understanding of LLMs using Knowledge graphs',
    description:
      'Entity-linking and relation-extraction pipeline that converts LLM outputs into knowledge graphs for triplet comparison and semantic consistency analysis.',
    image: 'project-llm-kg.webp',
    href: 'https://github.com/aaivu/knowledge-xtraction',
    tags: ['LLM', 'Knowledge graphs', 'NLP'],
  },
  {
    title: 'Solar Energy Forecasting Web App',
    description:
      'Forecasting dashboard using PatchTST and neural network models for solar-energy time-series analysis. Built with React, Django, MongoDB, TensorFlow, and Scikit-Learn.',
    image: 'project-5.webp',
    href: 'https://github.com/KituniDevma/Solar-Energy-Forecasting-Web-Application',
    tags: ['ML', 'Time series', 'Full stack'],
  },
  {
    title: 'ParkEase',
    description:
      'OpenCV-based vehicle detection and parking-slot availability monitoring for a camera-based smart parking system.',
    image: 'project-parkease.webp',
    href: 'https://github.com/KituniDevma/parking_web_application',
    tags: ['Computer vision', 'OpenCV'],
  },
  {
    title: 'HRMaster Web Application',
    description:
      'Human Resource Management System tailored to streamline employee data management within a company.',
    image: 'project-1.webp',
    href: 'https://github.com/KituniDevma/HRMastery',
    tags: ['React', 'Node.js', 'MySQL'],
  },
  {
    title: 'QuickCare Mobile App',
    description:
      'Mobile app for first aid assistance with real-time guidance and emergency help options.',
    image: 'project-4.webp',
    href: 'https://github.com/Quick-Care-App/QuickCare-Mobile-App',
    tags: ['Mobile', 'Health'],
  },
  {
    title: 'RPAL Interpreter',
    description:
      'Interpreter for the functional programming language RPAL with lexical analysis, parsing, and CSE-machine evaluation.',
    image: 'project-3.webp',
    href: 'https://github.com/KituniDevma/Compiler',
    tags: ['Compilers', 'Java'],
  },
]

export const publications = [
  {
    title: 'Evaluation of Contextual Understanding in Large Language Models',
    venue: 'ICML 2026 — GlobalSouthML (Short paper)',
    date: 'June 2026',
    authors:
      'Mamta Nallaretnam, Subavarshana Arumugam, Kithuni Wickramasinghe, Chamath Gunapala, Uthayasanker Thayasivam, Kamal Premaratne, Pragatheeswaran Vipulanandan',
    description:
      'A knowledge graph–based evaluation framework introducing S3KG, a hybrid structural–semantic similarity measure, with a diagnostic framework for categorizing reasoning errors in LLM responses.',
    href: 'https://icml.cc/virtual/2026/78308',
  },
]

export const contactFormEndpoint =
  'https://script.google.com/macros/s/AKfycbxgaGZwvC2v8OZognuu0nG2B6cI1RBdsuZinq3pr6PQk7halcRyP24ZpUn5qC45HtCF/exec'
