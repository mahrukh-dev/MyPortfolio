export const profile = {
  name: "Mah Rukh",
  role: "Flutter Developer & Full-Stack Software Engineer (MERN)",
  location: "Islamabad, Pakistan",
  email: "mahrukhdev@gmail.com",
  phone: "+92 330 9890516",
  linkedin: "linkedin.com/in/mahrukh928",
  github: "github.com/mahrukh-dev",
  summary:
    "Software Engineer with 3+ years of experience building cross-platform mobile applications using Flutter/Dart and full-stack web solutions with the MERN stack. Currently leading a cross-functional development team, managing Agile sprint planning, code reviews, and CI/CD workflows while delivering client-facing products end-to-end.",
}

export const stats = [
  { value: "3+", label: "Years shipping production apps" },
  { value: "5", label: "Engineers led as team lead" },
  { value: "9", label: "Apps & platforms delivered" },
  { value: "3.23", label: "CGPA — B.S. Computer Science" },
]

// Small badge pills shown over the portrait — edit freely.
export const badges = [
  { label: "Islamabad, Pakistan" },
  { label: "3+ Yrs Experience" },
]

// Swap this for a real photo whenever you have one — square-ish crops work best.
export const portraitImage =
  "https://placehold.co/640x800/151a22/9099a8?text=Add+your+photo&font=raleway"

export const skillGroups = [
  {
    title: "Languages",
    items: ["Dart", "JavaScript", "Kotlin", "Java", "C++", "C#", "Python", "SQL", "HTML", "CSS", "XML"],
  },
  {
    title: "Mobile Development",
    items: ["Flutter", "React Native", "Native Android (Kotlin/Java)"],
  },
  {
    title: "Frontend",
    items: ["React.js", "Next.js", "Vite", "Tailwind CSS", "Blazor"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", ".NET", "RESTful APIs", "GraphQL"],
  },
  {
    title: "Databases",
    items: ["MongoDB", "Firebase", "PostgreSQL", "Supabase", "SQLite", "AWS S3"],
  },
  {
    title: "State & Architecture",
    items: ["Provider", "Riverpod", "GetX", "MVVM", "MVC", "Bloc"],
  },
  {
    title: "DevOps & Tools",
    items: ["Git/GitHub", "JIRA", "Agile/Scrum", "CI/CD", "Azure", "AWS", "OpenCV"],
  },
  {
    title: "Leadership",
    items: ["Team Leadership", "Mentoring", "Client Communication", "Requirements Gathering"],
  },
]

// Icon keys map to react-icons/si components in src/utils/icons.js —
// add a new key there whenever you add a new tool/tech here.
export const toolIcons = [
  "flutter", "dart", "react", "nodejs", "firebase", "mongodb",
  "kotlin", "androidstudio", "figma", "postman", "git", "jira",
]

export const experience = [
  {
    role: "Senior Software Developer",
    org: "Smart Call Solutions Pvt Ltd",
    period: "05/2026 – Present",
    stack: "MERN · Flutter · Dart · Firebase · MVVM · Agile/JIRA · GitHub · OAuth · JWT",
    points: [
      "Lead a cross-functional team of 5 developers, 2 designers, and 2 SEO specialists, managing sprint planning, task allocation, and QA to consistently hit on-time delivery targets.",
      "Supervise mobile and web application development using Flutter, React, Node.js, and Express.js across multiple concurrent client projects.",
      "Conducted technical interviews and mentored junior developers through structured code reviews, raising adherence to clean MVVM/MVC/Clean architecture standards.",
      "Serve as primary technical point of contact for clients — gathering requirements and translating business needs into technical specifications.",
    ],
    projects: "Zentera Tech · United Taxis · Smart Call Solutions · TeleSolutions Call Central",
  },
  {
    role: "Web Developer",
    org: "Smart Call Solutions Pvt Ltd",
    period: "09/2025 – 04/2026",
    stack: "MERN · MVVM · GitHub",
    points: [
      "Built and maintained frontend and backend features for enterprise client applications using the MERN stack.",
      "Delivered a custom WordPress plugin automating attendance, salary, and employee management, replacing a manual process.",
    ],
    projects: "LeatherHood Ecommerce · Ashford Premier Taxi",
  },
  {
    role: "Flutter Developer (Intern)",
    org: "CareCloud · Remote",
    period: "05/2025 – 06/2025",
    stack: "Flutter · Dart · Firebase · MVVM · Provider · Hive · Riverpod",
    points: [
      "Built scalable Flutter applications using clean MVVM architecture for CareCloud's mobile health platform.",
      "Implemented secure patient data handling compliant with healthcare standards.",
      "Built school management features including attendance tracking and grade reporting with Hive local storage.",
    ],
  },
  {
    role: "IT Instructor",
    org: "Technofies · Islamabad",
    period: "04/2024 – 04/2025",
    stack: "Programming · Azure Training",
    points: [
      "Delivered hands-on programming and Azure training sessions to student cohorts using project-based learning.",
      "Designed and maintained course content aligned with current industry standards.",
    ],
  },
  {
    role: "Summer Intern",
    org: "Stella Technology · Islamabad",
    period: "07/2023 – 08/2023",
    stack: "Kotlin · Android · Material Design",
    points: [
      "Developed native Android applications in Kotlin, integrating third-party APIs and Material Design guidelines.",
      "Used GitHub for version control across the development lifecycle.",
    ],
  },
]

export const experienceTags = [
  "#TeamLeadership",
  "#Mentoring",
  "#AgileDelivery",
  "#ClientComms",
  "#CleanArchitecture",
]

// `stack` labels are shown as text; `iconKeys` map to react-icons in
// src/utils/icons.js and render as the little tech-stack row on each card.
// `image` is a placeholder — replace with a real screenshot per project.
export const projects = [
  {
    name: "Rescue App",
    tag: "Flutter · Firebase · Geolocator",
    desc: "A safety-focused navigation app for hikers: real-time location tracking, emergency SOS alerts, GPS trail routing with offline maps, weather + wildlife alerts, and step/BMI health tracking.",
    stack: ["Flutter", "Firebase", "Google Sign-In", "flutter_map", "Hive"],
    iconKeys: ["flutter", "dart", "firebase", "googlemaps"],
    image: "https://placehold.co/640x420/151a22/9099a8?text=Rescue+App&font=raleway",
    link: "https://github.com/mahrukh-dev/rescue_app_flutter.git",
  },
  {
    name: "Meet9ja",
    tag: "Flutter · Zego · AWS S3",
    desc: "A Tinder-style dating app with location-based matchmaking, in-app audio/video calling, cloud media storage, push notifications, and in-app purchases.",
    stack: ["Flutter", "Firebase", "Zego", "Geolocator", "AWS S3"],
    iconKeys: ["flutter", "dart", "firebase", "cloud"],
    image: "https://placehold.co/640x420/151a22/9099a8?text=Meet9ja&font=raleway",
  },
  {
    name: "AIRWay",
    tag: "Final Year Project · AR",
    desc: "A real-time indoor AR navigation app for Centaurus Mall, plus a Firebase-backed web companion for route and store management.",
    stack: ["Flutter", "AR", "Firebase", "Google Maps API"],
    iconKeys: ["flutter", "dart", "firebase", "googlemaps"],
    image: "https://placehold.co/640x420/151a22/9099a8?text=AIRWay&font=raleway",
    link: "https://github.com/javeeriiaaa/airway.git",
  },
  {
    name: "Glow Care",
    tag: "MERN · E-commerce",
    desc: "An e-commerce platform with a full admin panel — RESTful APIs with secure authentication and a React admin panel for product/order management.",
    stack: ["MongoDB", "Express", "React", "Node.js"],
    iconKeys: ["mongodb", "express", "react", "nodejs"],
    image: "https://placehold.co/640x420/151a22/9099a8?text=Glow+Care&font=raleway",
    link: "https://github.com/mahrukh-dev/glow-care-mern",
  },
  {
    name: "Pet Finder",
    tag: "Android · Kotlin",
    desc: "An Android app streamlining pet discovery and adoption, backed by Firebase and the PetFinder API.",
    stack: ["Kotlin", "Firebase", "PetFinder API", "MVC"],
    iconKeys: ["kotlin", "firebase", "androidstudio"],
    image: "https://placehold.co/640x420/151a22/9099a8?text=Pet+Finder&font=raleway",
    link: "https://github.com/mahrukh-dev/PetFinderApp_Kotlin.git",
  },
  {
    name: "Safety App",
    tag: "Flutter · TFLite",
    desc: "An emergency-assistance app for women with live location sharing, shake gestures, and on-device facial recognition.",
    stack: ["Flutter", "Firebase", "TFLite", "Facial Recognition"],
    iconKeys: ["flutter", "dart", "firebase", "tensorflow"],
    image: "https://placehold.co/640x420/151a22/9099a8?text=Safety+App&font=raleway",
  },
]

export const leadership = [
  {
    org: "AUCIS — Air University Computing & Innovation Society",
    role: "Vice President (2024–Present) · Lead, Women in Computing (2023–2024)",
    desc: "Led a 100-member team organizing events and coding competitions (Code Royale, Code Champs) drawing 200+ attendees.",
  },
  {
    org: "RAAS — Robotics & Automation Society",
    role: "Executive Secretary (2024–Present) · Lead, Software Team (2023–2024)",
    desc: "Directed a software team building automation solutions for robotics projects, alongside maintaining events with up to 400 attendees.",
  },
  {
    org: "GDGoC Air University",
    role: "Lead, Women in Tech (2024–Present)",
    desc: "Organized Code Air Extended, drawing 300+ female attendees.",
  },
]

export const education = {
  degree: "B.S. Computer Science",
  school: "Air University, Islamabad",
  period: "2021 – 2025",
  cgpa: "3.23",
  coursework: "Data Structures, Algorithms, Database Systems, Mobile App Development, Web Technologies, Software Engineering",
}

// Each certification can show its badge/certificate image — replace the
// placeholder `image` with the real badge or a screenshot of the certificate.
export const certifications = [
  {
    title: "What is Data Science",
    issuer: "IBM · Coursera",
    image: "https://placehold.co/300x220/151a22/9099a8?text=IBM&font=raleway",
  },
  {
    title: "Getting Started with Flutter Development",
    issuer: "Google Cloud · Coursera",
    image: "https://placehold.co/300x220/151a22/9099a8?text=Flutter&font=raleway",
  },
  {
    title: "Introduction to Dart",
    issuer: "Google Cloud · Coursera",
    image: "https://placehold.co/300x220/151a22/9099a8?text=Dart&font=raleway",
  },
  {
    title: "Material Components for Flutter Basics",
    issuer: "Google Cloud · Coursera",
    image: "https://placehold.co/300x220/151a22/9099a8?text=Material&font=raleway",
  },
  {
    title: "Relational Database Design",
    issuer: "Univ. of Colorado Boulder · Coursera",
    image: "https://placehold.co/300x220/151a22/9099a8?text=SQL&font=raleway",
  },
  {
    title: "Foundations of Project Management",
    issuer: "Google · Coursera",
    image: "https://placehold.co/300x220/151a22/9099a8?text=PM&font=raleway",
  },
  {
    title: "AI For Everyone",
    issuer: "DeepLearning.AI · Coursera",
    image: "https://placehold.co/300x220/151a22/9099a8?text=AI&font=raleway",
  },
  {
    title: "Introduction to Python",
    issuer: "DataCamp",
    image: "https://placehold.co/300x220/151a22/9099a8?text=Python&font=raleway",
  },
]
