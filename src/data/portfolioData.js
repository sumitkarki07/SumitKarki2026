// Portfolio Data for Sumit Karki

export const personalInfo = {
  name: "Sumit Karki",
  title: "Software Engineering Student",
  tagline: "Building impactful solutions with modern technologies, from NASA weather systems to distributed microservices",
  location: "Green Bay, WI",
  email: "sumitkarki49@gmail.com",
  phone: "(920) 461-6756",
  linkedin: "https://linkedin.com/in/sumit-karki-sk",
  github: "https://github.com/sumitkarki07",
  website: "https://www.sumit-karki.com.np",
  profileImage: "/Image/Sumit.jpeg"
};

export const about = {
  paragraphs: [
    `I am a Software Engineering student at the <strong>University of Wisconsin–Green Bay</strong> with strong experience in <strong>full-stack development</strong>, <strong>backend engineering</strong>, tutoring, and leadership. I have worked with frameworks such as Flask, Spring Boot, JavaFX, and Tailwind CSS.`,
    `I enjoy building impactful software—from <strong>real-time weather analysis systems using NASA data</strong> to desktop applications and distributed systems simulations.`,
    `I serve as a <strong>Computer Science Peer Tutor</strong> and <strong>Vice-President of GDG on Campus</strong>, where I help students learn programming concepts, organize technical events, and build community around modern technologies.`
  ],
  stats: [
    { value: "3.8+", label: "GPA" },
    { value: "30+", label: "Students Tutored" },
    { value: "6+", label: "Major Projects" }
  ]
};

export const experience = [
  {
    title: "Computer Science Peer Tutor",
    company: "UWGB Learning Center",
    duration: "Sept 2025 – Present",
    color: "cyan",
    achievements: [
      "Tutor 30+ students weekly in Python, Java, JavaScript",
      "Serve as embedded tutor for Web Programming (JavaScript) with 25+ students",
      "Increased student comprehension by 25% through hands-on examples",
      "Help students improve exam scores by 15–20% on average",
      "Explain data structures, algorithms, and coding best practices"
    ]
  }
];

export const leadership = [
  {
    title: "Vice-President",
    organization: "GDG on Campus – UW–Green Bay",
    duration: "Nov 2025 – Present",
    color: "cyan",
    achievements: [
      "Co-founded and launched official GDG chapter",
      "Recruited 50+ members and built organizational structure",
      "Organizing workshops on Android, Firebase, AI/ML, Google Cloud"
    ]
  },
  {
    title: "IT Head",
    organization: "CCRC IT Club",
    duration: "Jul 2022 – Aug 2023",
    color: "purple",
    achievements: [
      "Managed IT infrastructure for 10+ major college events",
      "Set up computers, projectors, audio/visual systems",
      "Resolved hardware/software issues for 50+ users",
      "Organized 5+ gaming events and esports competitions"
    ]
  }
];

export const projects = [
  {
    title: "Weather Event Planner",
    badge: "NASA Winner",
    badgeColor: "yellow",
    description: "Full-stack application providing real-time weather & 7-day forecasts using NASA Earth data and Meteomatics API.",
    techStack: ["Python", "Flask", "JavaScript", "Tailwind", "Leaflet.js"],
    highlights: [
      "Integrated NASA Earth data + Meteomatics API",
      "40% reduction in data retrieval with caching",
      "Processed 1000+ data points per location"
    ],
    github: "https://github.com/sumitkarki07",
    accentColor: "cyan"
  },
  {
    title: "Transaction System",
    badge: "JPMorgan",
    badgeColor: "blue",
    description: "Event-driven transaction processing system using Kafka consumers and REST APIs with microservice architecture.",
    techStack: ["Java", "Spring Boot", "Kafka", "REST APIs", "Hibernate"],
    highlights: [
      "Built event-driven system using Kafka",
      "Integrated ORM with JPA/Hibernate",
      "Clean microservice architecture"
    ],
    github: "https://github.com/sumitkarki07",
    accentColor: "blue"
  },
  {
    title: "Lost & Found System",
    badge: "Team",
    badgeColor: "purple",
    description: "Full-stack desktop application using JavaFX MVC architecture with normalized MySQL database design.",
    techStack: ["Java", "JavaFX", "MySQL", "Maven"],
    highlights: [
      "MVC architecture with normalized schema",
      "CRUD operations + advanced filtering",
      "Managed 500+ item records efficiently"
    ],
    github: "https://github.com/sumitkarki07",
    accentColor: "purple"
  }
];

export const skills = {
  languages: {
    title: "Programming Languages",
    icon: "FaCode",
    color: "cyan",
    items: [
      { name: "Java", color: "blue" },
      { name: "Python", color: "yellow" },
      { name: "JavaScript", color: "yellow" },
      { name: "C", color: "gray" },
      { name: "SQL", color: "blue" },
      { name: "HTML", color: "orange" },
      { name: "CSS", color: "blue" }
    ]
  },
  frameworks: {
    title: "Frameworks & Libraries",
    icon: "FaLayerGroup",
    color: "purple",
    items: [
      { name: "Tailwind CSS", color: "cyan" },
      { name: "Flask", color: "gray" },
      { name: "Spring Boot", color: "green" },
      { name: "JavaFX", color: "orange" },
      { name: "Hibernate", color: "indigo" },
      { name: "Leaflet.js", color: "green" },
      { name: "REST APIs", color: "blue" }
    ]
  },
  tools: {
    title: "Tools & Technologies",
    icon: "FaTools",
    color: "pink",
    items: [
      { name: "Git & GitHub", color: "gray" },
      { name: "GitHub Actions", color: "green" },
      { name: "AWS", color: "orange" },
      { name: "Maven", color: "red" },
      { name: "Docker", color: "blue" },
      { name: "IntelliJ IDEA", color: "purple" },
      { name: "Netlify", color: "cyan" }
    ]
  },
  databases: {
    title: "Databases",
    icon: "FaDatabase",
    color: "orange",
    items: [
      { name: "MySQL", color: "orange" },
      { name: "H2 Database", color: "gray" },
      { name: "Relational DB Design", color: "blue" }
    ]
  },
  competencies: {
    title: "Core CS Competencies",
    icon: "FaBrain",
    color: "green",
    items: [
      { name: "OOP", color: "indigo" },
      { name: "DS & Algorithms", color: "purple" },
      { name: "Microservices", color: "green" },
      { name: "API Design", color: "blue" },
      { name: "Agile Dev", color: "orange" },
      { name: "Problem-Solving", color: "red" },
      { name: "Communication", color: "cyan" }
    ]
  }
};

export const awards = [
  { title: "Phoenix Scholar Award", description: "University of Wisconsin – Green Bay", icon: "FaTrophy", color: "yellow" },
  { title: "Dean's List", description: "2 Semesters - UW–Green Bay", icon: "FaStar", color: "blue" },
  { title: "Galactic Problem Solver", description: "NASA International Space Apps Challenge", icon: "FaRocket", color: "purple" },
  { title: "Academic Excellence Award", description: "Ekikrit Friendship Co-op", icon: "FaMedal", color: "green" },
  { title: "Design Competition Winner", description: "Graphic Design Competition", icon: "FaPalette", color: "orange" },
  { title: "IT Leadership Recognition", description: "CCRC IT Club – Event & Infrastructure Management", icon: "FaHandshake", color: "cyan" }
];

export const education = {
  degree: "Bachelor of Science in Software Engineering",
  school: "University of Wisconsin – Green Bay",
  location: "Green Bay, WI",
  graduation: "Expected Graduation: May 2028",
  gpa: "3.80–3.95 / 4.00",
  achievements: ["Dean's List (2 Semesters)", "Phoenix Scholar Award"],
  coursework: [
    "Introduction to System Design (Java)",
    "Python Programming",
    "Computer Programming I & II (Java)",
    "Web Programming (JavaScript)",
    "Database Design & Management",
    "Discrete Mathematics"
  ]
};
