import {
  Code2, Smartphone, Layout, Server, Database, Boxes, Wrench, Users,
  MapPinned, Heart, Navigation, ShoppingBag, Dog, ShieldAlert,
  FileText, Braces, ScrollText, FolderGit2, GraduationCap, TerminalSquare, Award
} from "lucide-react";

export const PROFILE = {
  name: "MAH RUKH",
  title: "Flutter Developer | Full Stack Software Engineer (MERN)",
  email: "mahrukhdev@gmail.com",
  phone: "+92 330 9890516",
  linkedin: "linkedin.com/in/mahrukh928",
  github: "github.com/mahrukh-dev",
  location: "Islamabad, Pakistan",
  summary:
    "Software Engineer with 3+ years of experience building cross-platform mobile applications using Flutter/Dart and full-stack web solutions with the MERN stack. Currently leading a cross-functional development team, managing Agile sprint planning, code reviews, and CI/CD workflows while delivering client-facing products end-to-end. Expertise in MVVM architecture, RESTful API integration, Firebase services, and translating business requirements into scalable, maintainable technical solutions.",
};

export const SKILLS = [
  { key: "languages", icon: Code2, items: ["Dart", "JavaScript", "Kotlin", "Java", "C++", "C#", "Python", "SQL", "HTML", "CSS", "XML"] },
  { key: "mobile_dev", icon: Smartphone, items: ["Flutter", "React Native", "Native Android (Kotlin/Java)"] },
  { key: "frontend", icon: Layout, items: ["React.js", "Next.js", "Vite", "Tailwind CSS", "Blazor"] },
  { key: "backend", icon: Server, items: ["Node.js", "Express.js", ".NET", "RESTful APIs", "GraphQL"] },
  { key: "databases", icon: Database, items: ["MongoDB", "Firebase", "PostgreSQL", "Supabase", "SQLite", "AWS S3"] },
  { key: "state_and_arch", icon: Boxes, items: ["Provider", "Riverpod", "GetX", "MVVM", "MVC", "Bloc"] },
  { key: "devops_and_tools", icon: Wrench, items: ["Git/GitHub", "JIRA", "Agile/Scrum", "CI/CD", "Azure", "AWS", "OpenCV"] },
  { key: "leadership", icon: Users, items: ["Team Leadership", "Cross-functional Collaboration", "Mentoring", "Client Communication"] },
];

export const EXPERIENCE = [
  {
    role: "Senior Software Developer",
    company: "Smart Call Solutions Pvt Ltd",
    date: "05/2026 – Present",
    stack: ["MERN", "Flutter", "Dart", "Firebase", "MVVM", "Agile/JIRA", "GitHub", "OAuth", "JWT"],
    bullets: [
      "Lead a cross-functional team of 5 developers, 2 designers, and 2 SEO specialists, managing sprint planning, task allocation, and QA to consistently hit on-time delivery targets.",
      "Supervise mobile and web app development using Flutter, React, Node.js, and Express.js across multiple concurrent client projects.",
      "Conduct technical interviews and mentor junior developers through structured code reviews, raising adherence to clean MVVM/MVC/Clean architecture standards.",
      "Integrate REST APIs and optimize application performance, improving scalability and maintainability of production applications.",
      "Serve as primary technical point of contact for clients — gathering requirements and translating business needs into technical specs.",
    ],
    projects: "Zentera Tech, United Taxis, Smart Call Solutions, TeleSolutions Call Central",
  },
  {
    role: "Web Developer",
    company: "Smart Call Solutions Pvt Ltd",
    date: "09/2025 – 04/2026",
    stack: ["MERN", "MVVM", "GitHub"],
    bullets: [
      "Built and maintained frontend and backend features for enterprise client applications using the MERN stack.",
      "Delivered a custom WordPress plugin automating attendance, salary, and employee management, replacing a manual process.",
    ],
    projects: "LeatherHood Ecommerce, Ashford Premier Taxi",
  },
  {
    role: "Flutter Developer (Intern)",
    company: "CareCloud · Remote",
    date: "05/2025 – 06/2025",
    stack: ["Flutter", "Dart", "Firebase", "MVVM", "Provider", "Hive", "Riverpod"],
    bullets: [
      "Built scalable Flutter applications using clean MVVM architecture for CareCloud's mobile health platform.",
      "Implemented secure patient data handling compliant with healthcare standards.",
      "Built school management features including attendance tracking and grade reporting with Hive local storage.",
    ],
  },
  {
    role: "IT Instructor",
    company: "Technofies · Islamabad",
    date: "04/2024 – 04/2025",
    stack: ["Teaching", "Azure"],
    bullets: [
      "Delivered hands-on programming and Azure training sessions to student cohorts using project-based learning.",
      "Designed and maintained course content aligned with current industry standards and practical, real-world skills.",
    ],
  },
  {
    role: "Summer Intern",
    company: "Stella Technology · Islamabad",
    date: "07/2023 – 08/2023",
    stack: ["Kotlin", "Android", "GitHub"],
    bullets: [
      "Developed native Android applications in Kotlin, integrating third-party APIs and Material Design guidelines.",
      "Used GitHub for version control across the development lifecycle.",
    ],
  },
];

export const PROJECTS = [
  {
    file: "rescue_app.dart",
    name: "Rescue App",
    icon: MapPinned,
    stack: ["Flutter", "Firebase", "Geolocator", "flutter_map", "Hive"],
    desc: "A safety-focused navigation app for hikers with real-time location tracking, emergency SOS alerts, and GPS-based trail routing with offline map access. Includes weather + wildlife alerts and BMI/step tracking via device sensors.",
    link: "github.com/mahrukh-dev/rescue_app_flutter",
  },
  {
    file: "meet9ja.dart",
    name: "Meet9ja",
    icon: Heart,
    stack: ["Flutter", "Zego", "Geolocator", "AWS S3"],
    desc: "A Tinder-style dating app with location-based matchmaking, in-app audio/video calling, and cloud media storage. Push notifications via Firebase Cloud Messaging and persistent sessions.",
  },
  {
    file: "airway.dart",
    name: "AIRWay",
    icon: Navigation,
    stack: ["Flutter", "AR", "Firebase", "Google Maps API"],
    desc: "Final Year Project — a real-time indoor AR navigation app for Centaurus Mall, plus a Firebase-backed web companion for route and store management.",
    link: "github.com/javeeriiaaa/airway",
  },
  {
    file: "glow_care.js",
    name: "Glow Care",
    icon: ShoppingBag,
    stack: ["MERN", "REST APIs", "Auth"],
    desc: "E-commerce platform with an admin panel. Built RESTful APIs with secure authentication and a React admin panel for product/order management.",
    link: "github.com/mahrukh-dev/glow-care-mern",
  },
  {
    file: "pet_finder.kt",
    name: "Pet Finder",
    icon: Dog,
    stack: ["Kotlin", "Firebase", "PetFinder API", "MVC"],
    desc: "Android app streamlining pet discovery and adoption, backed by Firebase.",
    link: "github.com/mahrukh-dev/PetFinderApp_Kotlin",
  },
  {
    file: "safety_app.dart",
    name: "Safety App",
    icon: ShieldAlert,
    stack: ["Flutter", "Firebase", "TFLite", "Facial Recognition"],
    desc: "Emergency-assistance app for women with live location sharing, shake gestures, and facial recognition.",
  },
];

export const EDUCATION = {
  degree: "B.S. Computer Science",
  school: "Air University, Islamabad",
  cgpa: "3.23",
  date: "2021 – 2025",
  coursework: ["Data Structures", "Algorithms", "Database Systems", "Mobile App Development", "Web Technologies", "Software Engineering"],
};

export const CERTIFICATIONS = [
  "What is Data Science — IBM (Coursera)",
  "Getting Started with Flutter Development — Google Cloud (Coursera)",
  "Introduction to Dart — Google Cloud (Coursera)",
  "Material Components for Flutter Basics — Google Cloud (Coursera)",
  "Relational Database Design — University of Colorado Boulder (Coursera)",
  "Foundations of Project Management — Google (Coursera)",
  "AI For Everyone — DeepLearning.AI (Coursera)",
  "Introduction to Python — DataCamp",
];

export const LEADERSHIP = [
  { org: "AUCIS", role: "Vice President (2024–Present) · Lead, Women in Computing (2023–2024)", detail: "Led a 100-member team organizing events and coding competitions (Code Royale, Code Champs) drawing 200+ attendees." },
  { org: "RAAS (Robotics & Automation Society)", role: "Executive Secretary (2024–Present) · Lead, Software Team (2023–2024)", detail: "Directed a software team building automation solutions for robotics projects; maintained events with up to 400 attendees." },
  { org: "GDGoC Air University", role: "Lead, Women in Tech (2024–Present)", detail: "Organized Code Air Extended, drawing 300+ female attendees." },
];

export const TABS = [
  { id: "about", label: "about.md", icon: FileText },
  { id: "skills", label: "skills.json", icon: Braces },
  { id: "experience", label: "experience.log", icon: ScrollText },
  { id: "projects", label: "projects/", icon: FolderGit2 },
  { id: "education", label: "education.yaml", icon: GraduationCap },
  { id: "certifications", label: "certifications.md", icon: Award },
  { id: "contact", label: "contact.sh", icon: TerminalSquare },
];

export const BOOT_LINES = [
  "> booting mahrukh_dev.sys ...",
  "> mounting /skills /experience /projects ...",
  "> flutter doctor --check ......... OK",
  "> node -v ......................... OK",
  "> git status ....... clean, 3+ yrs of commits",
  "> starting portfolio.exe",
];
