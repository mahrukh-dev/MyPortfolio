// Import certificate images
import certIntermediatePython from '../assets/certificates/IntermediatePython_DataCamp_30Aug2025.jpg';
import certCloudComputing from '../assets/certificates/UnderstandingCloudComputing_DataCamp_23Feb2025.jpg';
import certIntroPython from '../assets/certificates/IntroductionToPython_DataCamp_29Jan2025.jpg';
import certDataScience from '../assets/certificates/WhatIsDataScience_IBM_19Jan2024.jpg';
import certIntroDart from '../assets/certificates/IntroductionToDart_GoogleCloud_11July2023.jpg';
import certFlutterMaterial from '../assets/certificates/MaterialComponentsForFlutterBasics_GoogleCloud_18April2023.jpg';
import certDatabaseDesign from '../assets/certificates/RelationalDatabaseDesign_UniversityOfColoradoBoulder_10April2023.jpg';
import certAIForEveryone from '../assets/certificates/AIForEveryone_DeepLearningAI_9April2023.jpg';
import certGettingStartedFlutter from '../assets/certificates/GettingStartedWithFlutterDevelopment_GoogleCloud_13March2023.jpg';
import certProjectManagement from '../assets/certificates/FoundationsOfProjectManagement_Google_4March2023.jpg';

// Import profile image
import profileImage from '../assets/profile/my_profile.png';

export const profile = {
  name: "Mah Rukh",
  role: "Senior Software Developer · Flutter & Full-Stack Engineer",
  location: "Rawalpindi, Pakistan",
  email: "mahrukhdev@gmail.com",
  phone: "+92 330 9890516",
  linkedin: "linkedin.com/in/mahrukh928",
  github: "github.com/mahrukh-dev",
  website: "https://mahrukh.asteriqhub.com/",
  summary:
    "Senior Software Developer with 3+ years of experience building cross-platform mobile applications with Flutter and full-stack web solutions with React, Node.js, and Express. Leads cross-functional teams, coordinates Agile delivery, mentors developers, and works directly with clients to turn requirements into reliable products.",
}

export const stats = [
  { value: "3+", label: "Years shipping production apps" },
  { value: "5", label: "Engineers led as team lead" },
  { value: "9", label: "Apps & platforms delivered" },
  { value: "3.18", label: "CGPA — B.S. Computer Science" },
]

// Small badge pills shown over the portrait — edit freely.
export const badges = [
  { label: "Rawalpindi, Pakistan" },
  { label: "3+ Yrs Experience" },
]

// Swap this for a real photo whenever you have one — square-ish crops work best.
export const portraitImage = profileImage;

export const skillGroups = [
  { title: "Programming", items: ["Dart", "Kotlin", "JavaScript", "Java", "Python", "SQL", "CSS", "HTML"] },
  { title: "Mobile Development", items: ["Flutter", "Native Android (Kotlin, Java)", "React Native", "State Management", "Riverpod", "GetX", "Provider", "Bloc"] },
  { title: "Web Development", items: ["React.js", "Next.js", "Node.js", "Express.js", "Tailwind CSS", "RESTful APIs"] },
  { title: "Database & Cloud", items: ["MongoDB", "PostgreSQL", "AWS S3", "Firestore", "Firebase Authentication", "Firebase Storage", "Realtime Database", "Supabase", "Azure", "Microsoft SQL Server (MSSQL)", "MySQL", "SQLite"] },
  { title: "Architecture & Engineering", items: ["MVP", "MVC", "MVVM", "Clean Code", "Clean Architecture", "SOLID Principles", "GitHub", "Git", "JIRA", "Agile Project Management", "Scrum Meetings & Communication", "Code Review", "CI/CD"] },
]

// Icon keys map to react-icons/si components in src/utils/icons.js —
// add a new key there whenever you add a new tool/tech here.
export const toolIcons = [
  "flutter", "dart", "react", "nodejs", "firebase", "mongodb",
  "kotlin", "androidstudio", "figma", "postman", "git", "jira",
]

export const experience = [
  {
    org: "Smart Call Solutions (Pvt) Ltd",
    role: "Senior Software Developer",
    location: "Rawalpindi, Pakistan",
    period: "31 May 2026 – Present",
    stack: "MERN · Flutter · Dart · Firebase · MVVM · Agile/JIRA · GitHub · OAuth · JWT Authentication",
    points: [
      "Lead a cross-functional team of 5 developers, 2 designers, and 2 SEO specialists through sprint planning, task allocation, and QA.",
      "Supervise Flutter, React, Node.js, and Express.js development across concurrent client projects.",
      "Conduct technical interviews and mentor junior developers through code reviews, promoting clean MVVM, MVC, and Clean Architecture standards.",
      "Act as the main technical contact for clients: gather requirements, report progress, and write technical specifications."
    ],
    projects: "Zentera Tech, United Taxis, Ashford Taxis, Smart Call Solutions, TeleSolutions Call Central",
  },
  {
    org: "Smart Call Solutions (Pvt) Ltd",
    role: "Web Programmer",
    location: "Rawalpindi, Pakistan",
    period: "1 Sep 2025 – 31 May 2026",
    stack: "MERN · MVVM · GitHub",
    points: [
      "Built and maintained frontend and backend features for enterprise client applications using the MERN stack.",
      "Delivered a custom WordPress plugin automating attendance, salary, and employee management for a client, replacing a manual process."
    ],
    projects: "LeatherHood Ecommerce, Ashford Premier Taxi",
  },
  {
    org: "CareCloud",
    role: "IT Intern – Flutter Developer",
    location: "Rawalpindi, Pakistan",
    period: "1 May 2025 – 30 Jun 2025",
    stack: "Flutter · Dart · Firebase · MVVM · Provider · Hive · Riverpod",
    points: [
      "Built Flutter apps for a mobile health platform using MVVM and Provider, with secure patient data handling.",
      "Built school management features for attendance tracking and grade reporting with Hive local storage."
    ],
  },
  {
    org: "Technofies",
    role: "IT Instructor – Microsoft Azure & AI",
    location: "Islamabad, Pakistan",
    period: "1 Feb 2024 – 28 Feb 2025",
    stack: "Programming · Microsoft Azure · AI",
    points: [
      "Taught programming and Azure to student cohorts through project-based learning.",
      "Designed and maintained course content."
    ],
  },
  {
    org: "Stella Technology",
    role: "Summer Intern – Mobile Developer",
    location: "Islamabad, Pakistan",
    period: "10 Jul 2023 – 31 Aug 2023",
    stack: "Kotlin · Android · GitHub · APIs · Material Design",
    points: [
      "Developed native Android applications in Kotlin, integrating third-party APIs and Material Design guidelines.",
      "Used GitHub for version control across the development lifecycle."
    ],
  }
]

export const experienceTags = [
  "Mobile App Development",
  "Full-Stack Engineering",
  "Technical Leadership",
  "Agile Sprint Planning",
  "Code Quality & CI/CD",
  "Offline-First Design"
]

// `stack` labels are shown as text; `iconKeys` map to react-icons in
// src/utils/icons.js and render as the little tech-stack row on each card.
// `image` is a placeholder — replace with a real screenshot per project.
export const getProjectSlug = (name) =>
  name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

export const projects = [
  {
    name: "Health Drift",
    tag: "Machine Learning · FastAPI",
    categories: ["AI & Machine Learning", "Backend & APIs", "Cloud Deployment", "Automation & CI/CD"],
    desc: "Developed a machine learning application using a Random Forest classifier to predict disease categories from structured symptom data. Built a FastAPI inference service and integrated Evidently AI to monitor data drift and generate reports. A scheduled GitHub Actions workflow handles model training and drift monitoring; the API is deployed on Render.",
    stack: ["Python", "Scikit-learn", "Pandas", "FastAPI", "Evidently AI", "Joblib", "GitHub Actions", "Render"],
    iconKeys: ["python"],
    image: "https://placehold.co/640x420/151a22/9099a8?text=Health+Drift&font=raleway",
    link: "https://github.com/mahrukh-dev/health-drift-project",
  },
  {
    name: "AIRWay",
    tag: "Final Year Project · AR Navigation",
    categories: ["Mobile Development", "Augmented Reality"],
    desc: "A final-year project focused on indoor navigation within Centaurus Mall, Islamabad. The app uses an augmented-reality approach to help users navigate complex indoor spaces, alongside a web companion for route and store management.",
    stack: ["Flutter", "Dart", "Augmented Reality (AR)", "Firebase", "Google Maps API"],
    iconKeys: ["flutter", "dart", "firebase", "googlemaps"],
    image: "https://placehold.co/640x420/151a22/9099a8?text=AIRWay&font=raleway",
    supervisor: "Ms. Warda Aslam",
  },
  {
    name: "Hand Gesture Controlled Car Game",
    tag: "Python · Computer Vision",
    categories: ["AI & Machine Learning", "Computer Vision", "Game Development"],
    desc: "Developed an interactive car game controlled by hand gestures captured through a webcam. Used computer vision and hand-tracking to translate movements into game controls for a touch-free experience.",
    stack: ["Python", "OpenCV", "MediaPipe", "Pygame", "NumPy"],
    iconKeys: ["python"],
    image: "https://placehold.co/640x420/151a22/9099a8?text=Hand+Gesture+Car+Game&font=raleway",
    link: "https://github.com/mahrukh-dev/HandGestureCarGame",
  },
  {
    name: "Rescue App",
    tag: "Flutter · Outdoor Navigation & Safety",
    categories: ["Mobile Development"],
    desc: "A mobile application for hikers, climbers, and outdoor enthusiasts, with GPS-enabled navigation, offline maps, real-time location tracking, and emergency SOS functionality. Firebase provides authentication and cloud data management, while local storage supports offline access. Additional features include weather alerts, step tracking, and health metrics.",
    stack: ["Flutter", "Dart", "Firebase Authentication", "Cloud Firestore", "Hive", "GPS", "Google Maps", "Flutter Map"],
    iconKeys: ["flutter", "dart", "firebase", "googlemaps"],
    image: "https://placehold.co/640x420/151a22/9099a8?text=Rescue+App&font=raleway",
    link: "https://github.com/mahrukh-dev/rescue_app_flutter",
  },
  {
    name: "Meet9ja",
    tag: "Flutter · Communication · Payments",
    categories: ["Mobile Development"],
    desc: "Worked on a Flutter-based social and communication mobile application, integrating ZEGOCLOUD communication services and Flutterwave payment processing into the app experience.",
    stack: ["Flutter", "Dart", "Flutterwave", "ZEGOCLOUD"],
    iconKeys: ["flutter", "dart", "firebase", "cloud"],
    image: "https://placehold.co/640x420/151a22/9099a8?text=Meet9ja&font=raleway",
    link: "https://github.com/mahrukh-dev/Meet9ja",
  },
  {
    name: "Glow Care",
    tag: "MERN · E-commerce",
    categories: ["Web Development"],
    desc: "An e-commerce platform with a full admin panel — RESTful APIs with secure authentication and a React admin panel for product/order management.",
    stack: ["MongoDB", "Express", "React", "Node.js"],
    iconKeys: ["mongodb", "express", "react", "nodejs"],
    image: "https://placehold.co/640x420/151a22/9099a8?text=Glow+Care&font=raleway",
    link: "https://github.com/mahrukh-dev/glow-care-mern",
  },
  {
    name: "Pet Finder",
    tag: "Android · Kotlin",
    categories: ["Mobile Development"],
    desc: "An Android app streamlining pet discovery and adoption, backed by Firebase and the PetFinder API.",
    stack: ["Kotlin", "Firebase", "PetFinder API", "MVC"],
    iconKeys: ["kotlin", "firebase", "androidstudio"],
    image: "https://placehold.co/640x420/151a22/9099a8?text=Pet+Finder&font=raleway",
    link: "https://github.com/mahrukh-dev/PetFinderApp_Kotlin.git",
  },
  {
    name: "Safety App",
    tag: "Flutter · TFLite",
    categories: ["Mobile Development", "AI & Machine Learning"],
    desc: "An emergency-assistance app for women with live location sharing, shake gestures, and on-device facial recognition.",
    stack: ["Flutter", "Firebase", "TFLite", "Facial Recognition"],
    iconKeys: ["flutter", "dart", "firebase", "tensorflow"],
    image: "https://placehold.co/640x420/151a22/9099a8?text=Safety+App&font=raleway",
  },
]

export const leadership = [
  {
    org: "AUCIS — Air University Computing & Innovation Society",
    role: "Vice President (2025) · Lead, Women in Computing (2023–2024)",
    desc: "Led a 100-member team organizing events and coding competitions (Code Royale, Code Champs) drawing 200+ attendees.",
  },
  {
    org: "RAAS — Robotics & Automation Society",
    role: "Executive Secretary (2025) · Lead, Software Team (2023–2024)",
    desc: "Directed a software team building automation solutions for robotics projects, alongside maintaining events with up to 400 attendees.",
  },
  {
    org: "Google Developer Groups on Campus (GDGoC), Air University",
    role: "Lead, Women in Tech (2024)",
    desc: "Organized Code Air Extended, drawing 300+ female attendees.",
  },
]

export const education = {
  degree: "Bachelor of Science in Computer Science",
  school: "Air University, Islamabad, Pakistan",
  period: "2021 – 2025",
  cgpa: "3.18",
  gradingScale: "4.00",
  language: "English",
  website: "https://www.au.edu.pk/",
  coursework: "Data Structures, Algorithms, Database Systems, Mobile App Development, Web Technologies, Software Engineering",
  finalYearProject: {
    name: "AIRWay",
    description: "A real-time indoor AR navigation app for Centaurus Mall, with a web companion for route and store management.",
    supervisor: "Ms. Warda Aslam",
    stack: ["Flutter", "Dart", "Augmented Reality (AR)", "Firebase", "Google Maps API"],
  },
  previousEducation: [
    { school: "Westminster International School", qualification: "A Levels", period: "2019 – 2021", location: "Rawalpindi, Pakistan" },
    { school: "Beaconhouse Educational Complex", qualification: "O Levels", period: "2017 – 2019", location: "Islamabad, Pakistan" },
  ],
}

// Each certification is sorted from latest to oldest
export const certifications = [
  {
    title: "Intermediate Python",
    issuer: "DataCamp",
    date: "30 Aug 2025",
    categories: ["Programming", "AI & Machine Learning"],
    image: certIntermediatePython,
  },
  {
    title: "Understanding Cloud Computing",
    issuer: "DataCamp",
    date: "23 Feb 2025",
    categories: ["Cloud Computing"],
    image: certCloudComputing,
  },
  {
    title: "Introduction to Python",
    issuer: "DataCamp",
    date: "29 Jan 2025",
    categories: ["Programming", "AI & Machine Learning"],
    image: certIntroPython,
  },
  {
    title: "What is Data Science?",
    issuer: "IBM · Coursera",
    date: "Jan 2024",
    categories: ["AI & Machine Learning"],
    image: certDataScience,
  },
  {
    title: "Introduction to Dart",
    issuer: "Google Cloud · Coursera",
    date: "Jul 2023",
    categories: ["Mobile Development"],
    image: certIntroDart,
  },
  {
    title: "Material Components for Flutter Basics",
    issuer: "Google Cloud · Coursera",
    date: "Apr 2023",
    categories: ["Mobile Development", "UI Development"],
    image: certFlutterMaterial,
  },
  {
    title: "Relational Database Design",
    issuer: "University of Colorado Boulder · Coursera",
    date: "Apr 2023",
    categories: ["Databases"],
    image: certDatabaseDesign,
  },
  {
    title: "AI For Everyone",
    issuer: "DeepLearning.AI · Coursera",
    date: "Apr 2023",
    categories: ["AI & Machine Learning"],
    image: certAIForEveryone,
  },
  {
    title: "Getting Started with Flutter Development",
    issuer: "Google Cloud · Coursera",
    date: "Mar 2023",
    categories: ["Mobile Development"],
    image: certGettingStartedFlutter,
  },
  {
    title: "Foundations of Project Management",
    issuer: "Google · Coursera",
    date: "Mar 2023",
    categories: ["Project Management"],
    image: certProjectManagement,
  },
]
