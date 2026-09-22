export const personalInfo = {
  name: "Sumit Karki",
  title: "Software Engineering Student · Web Developer",
  tagline:
    "Building production web systems and applied machine learning that connect software to real-world infrastructure.",
  location: "Green Bay, WI",
  email: "sumitkarki49@gmail.com",
  phone: "(920) 461-6756",
  linkedin: "https://www.linkedin.com/in/sumit-karki-sk/",
  github: "https://github.com/sumitkarki07",
  website: "https://www.sumit-karki.com.np",
  profileImage: "/Image/Sumit.jpeg",
  aboutImage: "/Image/gdg-na-summit.jpg",
};

export const about = {
  paragraphs: [
    `I am a Software Engineering student at the <strong>University of Wisconsin–Green Bay</strong>, focused on full-stack development, applied AI, and research that moves from the lab into production systems.`,
    `As a <strong>Student Web Developer</strong> in UWGB’s Division of Information Technology, I maintain <strong>uwgb.edu</strong>, the university’s public website and CMS, with an emphasis on reliability, accessibility, and structured debugging across authentication, APIs, and content delivery.`,
    `My research includes <strong>computer-vision models for pavement distress assessment</strong>, published at <strong>ICMLA 2026</strong>, and data-driven HVAC analysis through the IEEE EPS program. I serve as <strong>Equity & Diversity Chair</strong> for the Student Government Association, <strong>Vice President of GDG on Campus</strong>, and help organize HackGB.`,
  ],
  stats: [
    { value: 3.82, decimals: 2, label: "GPA" },
    { value: "ICMLA", label: "2026 paper" },
    { value: 100, decimals: 0, suffix: "+", label: "GDG members" },
  ],
};

export const experience = [
  {
    title: "Student Web Developer",
    company: "UWGB Division of Information Technology",
    duration: "Apr 2026 – Present",
    summary: "Production work on uwgb.edu and the university CMS.",
    achievements: [
      "Develop and maintain uwgb.edu, the university’s public website, and supporting CMS platforms",
      "Improve reliability, accessibility, performance, and user experience on public-facing systems",
      "Troubleshoot authentication, APIs, content delivery, permissions, and networked services",
      "Ship features and configuration changes while resolving production defects with minimal disruption",
    ],
  },
  {
    title: "AI Developer & Research Intern",
    company: "IEEE EPS Program · Brown County, WI",
    duration: "Feb 2026 – July 2026",
    summary: "Digital twin workflow for HVAC systems using Honeywell telemetry.",
    achievements: [
      "Built a data-driven digital twin workflow for HVAC (AHU) systems in Brown County facilities",
      "Collected and organized real-time Honeywell telemetry: airflow, temperature, humidity, pressure, and particulates",
      "Cleaned time-series data in Python, handling missing values, inconsistent records, and abnormal sensor readings",
      "Evaluated Random Forest models to support anomaly detection and predictive-maintenance analysis",
    ],
  },
  {
    title: "Machine Learning Research Assistant",
    company: "UW–Green Bay AI Lab",
    duration: "Jan 2026 – May 2026",
    summary: "Computer-vision models for pixel-level pavement distress assessment.",
    achievements: [
      "Trained and compared computer-vision models to detect and classify pavement damage",
      "Managed 1,600+ labeled roadway images, resolving annotation, data-format, GPU, and evaluation issues",
      "Co-authored an ICMLA 2026 paper on pixel-level pavement-distress assessment using instance segmentation",
    ],
  },
  {
    title: "Computer Science Peer Tutor",
    company: "UWGB Learning Center",
    duration: "Sep 2025 – Present",
    summary: "Web programming, C, Java, and Python support for 30+ students weekly.",
    achievements: [
      "Tutor students in Web Programming, Computer Programming I (C and Java), and Python",
      "Support 30+ students weekly with concept review, debugging, and programming fundamentals",
      "Serve as an embedded tutor for Web Programming with 25+ students",
    ],
  },
];

export const leadership = [
  {
    title: "Equity & Diversity Chair",
    organization: "Student Government Association – UW–Green Bay",
    duration: "Sep 2026 – Present",
    achievements: [
      "Represent student equity and diversity priorities in Student Government Association work",
      "Support inclusive campus initiatives and student advocacy through SGA",
    ],
  },
  {
    title: "Lead Hackathon Organizer",
    organization: "HackGB · GDG on Campus UW–Green Bay",
    duration: "Jul 2026 – Present",
    achievements: [
      "Lead operations for HackGB 2026, a student-led hackathon planned for October in Green Bay",
      "Coordinate developers, mentors, and partners across event operations and technical programming",
    ],
  },
  {
    title: "Vice President",
    organization: "GDG on Campus – UW–Green Bay",
    duration: "Nov 2025 – Present",
    achievements: [
      "Co-founded the official Google Developer Groups chapter on campus",
      "Grew membership to 100+ students within six months through outreach and events",
      "Represented the chapter at the GDG North America Summit, May 2026",
      "Helped the chapter earn Rising Student Organization of the Year",
    ],
  },
  {
    title: "Co-mentor",
    organization: "Uunchai · Team Anvaya",
    duration: "Jun 2026 – Aug 15, 2026",
    achievements: [
      "Mentored a team building Anvaya, a direct-to-retail agricultural marketplace for Nepal",
      "Supported product direction for a mobile-first PWA designed for low-bandwidth rural connectivity",
    ],
  },
  {
    title: "Treasurer",
    organization: "Nepalese Students’ Association – UW–Green Bay",
    duration: "Jul 2025 – Jul 2026",
    achievements: [
      "Managed event budgets, reimbursements, and financial reporting with university finance officers",
    ],
  },
  {
    title: "IT Head",
    organization: "CCRC IT Club",
    duration: "Jul 2021 – Jul 2023",
    achievements: [
      "Supported computers, projectors, and network setup for major college events",
      "Organized technical sessions and gaming events, including registration and infrastructure",
    ],
  },
];

export const projects = [
  {
    title: "Pixel-Level Pavement Distress Assessment",
    badge: "ICMLA 2026",
    featured: true,
    description:
      "Instance-segmentation system for automated roadway inspection. Mask R-CNN on the UWGB-StreetCrack dataset detects longitudinal, transverse, and alligator cracks plus potholes from vehicle-mounted smartphone imagery.",
    techStack: ["Python", "Mask R-CNN", "Detectron2", "YOLO", "Computer Vision"],
    venue: "ICMLA 2026",
    authors: "Dewick, Pyakurel, Yang, Karki, Choudhury, and Murshed",
    dataset: "UWGB-StreetCrack · 1,540 field images with polygon-level annotations",
    method:
      "Mask R-CNN with a ResNet-101 Feature Pyramid Network, trained on smartphone imagery collected from a moving vehicle and compared with YOLO-based detectors.",
    metrics: [
      { label: "Precision", value: 84.23 },
      { label: "Recall", value: 90.04 },
      { label: "F1 score", value: 87.04 },
    ],
    highlights: [
      "ResNet-101 FPN reached 84.23% precision, 90.04% recall, and 87.04% F1",
      "Predicted crack-area fraction 2.164% vs. 2.170% ground truth",
      "Processed 1,540 field images with polygon-level annotations",
      "Co-authored paper with UWGB faculty; featured by campus news",
    ],
    links: [
      { label: "Paper", href: "https://arxiv.org/html/2605.26095v2" },
      {
        label: "Campus feature",
        href: "https://blog.uwgb.edu/log/07/14/faculty-staff/students-and-faculty-publish-roadway-infrastructure-research-in-icmla-2026/",
      },
      { label: "PDF", href: "https://arxiv.org/pdf/2605.26095" },
    ],
  },
  {
    title: "PulseForge",
    badge: "NexHacks 2026",
    description:
      "Real-time research terminal for prediction markets, built in 24 hours at Carnegie Mellon. Combines live Polymarket order-book data, constraint analysis, and Gemini-assisted synthesis.",
    techStack: ["Next.js", "TypeScript", "Polymarket API", "Google Gemini"],
    highlights: [
      "Surfaces arbitrage-feasible outcome bundles and payoff dynamics",
      "Production-grade web interface for live market research",
    ],
    images: [
      {
        src: "/Image/nexhacks-team.jpg",
        alt: "Sumit Karki and teammates in NexHacks 2026 hoodies during the 24-hour build at Carnegie Mellon",
      },
      {
        src: "/Image/nexhacks-cmu.jpg",
        alt: "NexHacks 2026 team at the Carnegie Mellon University seal in Pittsburgh",
      },
    ],
    links: [
      { label: "Code", href: "https://github.com/sumitkarki07/Nexhack2026" },
    ],
  },
  {
    title: "Weather Event Planner",
    badge: "NASA Space Apps",
    description:
      "Location-based planning tool with live conditions, 7-day forecasts, and historical weather probability using NASA Earth data and Meteomatics.",
    techStack: ["Python", "Flask", "JavaScript", "Tailwind", "Leaflet.js"],
    highlights: [
      "Interactive global map search with Leaflet",
      "Caching reduced data retrieval time by about 40%",
    ],
    links: [
      { label: "Code", href: "https://github.com/sumitkarki07/weather-alert-system" },
    ],
  },
  {
    title: "Lost & Found System",
    badge: "Course Project",
    description:
      "Java desktop application for reporting and searching lost items, with a normalized MySQL schema and an admin workflow for managing records.",
    techStack: ["Java", "JavaFX", "MySQL", "Maven"],
    highlights: [
      "MVC architecture with secure handling of personal details",
      "CRUD operations and filtering across item records",
    ],
    links: [
      {
        label: "Code",
        href: "https://github.com/sumitkarki07/LostandFoundManagementSystem",
      },
    ],
  },
  {
    title: "SmartCrop CMS",
    badge: "DoIT tooling",
    description:
      "Local web utility that turns inconsistently sized source photos into exact CMS-ready assets. Face-aware cropping runs in the browser—no cloud image APIs.",
    techStack: ["Next.js", "TypeScript", "MediaPipe", "Tailwind CSS"],
    highlights: [
      "Face-aware presets for university CMS dimensions",
      "Local processing with WebP, JPEG, and PNG export",
    ],
    links: [
      { label: "Live demo", href: "https://my-smart-crop-app.vercel.app" },
      { label: "Code", href: "https://github.com/sumitkarki07/SmartCrop" },
    ],
  },
  {
    title: "Invoice Management",
    badge: "Full-stack",
    description:
      "Admin invoice and offer system with sequential numbering, PDF generation, and one-click conversion from offers to invoices.",
    techStack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    highlights: [
      "Secure admin authentication and client records",
      "Transaction-safe, gap-free document numbering",
    ],
    links: [{ label: "Code", href: "https://github.com/sumitkarki07/InvoiceManagement" }],
  },
];

export const skills = {
  languages: {
    title: "Languages",
    icon: "FaCode",
    items: [
      { name: "Python" },
      { name: "Java" },
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "SQL" },
      { name: "HTML" },
      { name: "CSS" },
    ],
  },
  backend: {
    title: "Backend & APIs",
    icon: "FaLayerGroup",
    items: [
      { name: "FastAPI" },
      { name: "Flask" },
      { name: "Spring Boot" },
      { name: "REST APIs" },
      { name: "MySQL" },
      { name: "Supabase" },
      { name: "JSON" },
    ],
  },
  aiml: {
    title: "AI & Machine Learning",
    icon: "FaBrain",
    items: [
      { name: "scikit-learn" },
      { name: "Random Forest" },
      { name: "YOLO" },
      { name: "CSPDarknet53" },
      { name: "Mask R-CNN" },
      { name: "Detectron2" },
      { name: "Anomaly detection" },
      { name: "LLM APIs" },
      { name: "RAG" },
      { name: "LangChain" },
    ],
  },
  tools: {
    title: "Tools & Platforms",
    icon: "FaTools",
    items: [
      { name: "Git & GitHub" },
      { name: "Next.js" },
      { name: "React" },
      { name: "Docker" },
      { name: "AWS" },
      { name: "Linux" },
      { name: "Postman" },
      { name: "Jira" },
    ],
  },
  databases: {
    title: "Data & Systems",
    icon: "FaDatabase",
    items: [
      { name: "Time-series data" },
      { name: "Vector databases" },
      { name: "Relational design" },
      { name: "Kafka" },
      { name: "Digital twins" },
    ],
  },
};

export const awards = [
  {
    title: "ICMLA 2026 Publication",
    description: "Pixel-Level Pavement Distress Assessment Using Instance Segmentation",
    icon: "FaBookOpen",
  },
  {
    title: "AITP Sherry Anklam Memorial Award",
    description: "$1,000 scholarship · July 2026",
    icon: "FaMedal",
  },
  {
    title: "Phoenix Scholar Award",
    description: "University of Wisconsin–Green Bay",
    icon: "FaTrophy",
  },
  {
    title: "Dean’s List",
    description: "3 semesters · UW–Green Bay",
    icon: "FaStar",
  },
  {
    title: "Galactic Problem Solver",
    description: "NASA International Space Apps Challenge",
    icon: "FaRocket",
  },
  {
    title: "Rising Student Organization of the Year",
    description: "GDG on Campus – UW–Green Bay",
    icon: "FaHandshake",
  },
];

export const education = {
  degree: "Bachelor of Science in Software Engineering",
  school: "University of Wisconsin–Green Bay",
  location: "Green Bay, WI",
  graduation: "Expected May 2028",
  gpa: "3.82 / 4.00",
  achievements: [
    "Dean’s List (3 semesters)",
    "Phoenix Scholar Award",
    "AITP Sherry Anklam Memorial Award",
  ],
};
