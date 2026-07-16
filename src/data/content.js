// Import certificate images
import certIntermediatePython from '../assets/certificates/IntermediatePython_DataCamp_30Aug2025.jpg';
import certCloudComputing from '../assets/certificates/UnderstandingCloudComputing_DataCamp_23Feb2025.jpg';
import certIntroPython from '../assets/certificates/IntroductionToPython_DataCamp_29Jan2025.jpg';
import certCommunication from '../assets/certificates/CommunicationInThe21stCenturyWorkspace_UCIDivisionOfContinuingEducation_19Jan2024.jpg';
import certDataScience from '../assets/certificates/WhatIsDataScience_IBM_19Jan2024.jpg';
import certIntroDart from '../assets/certificates/IntroductionToDart_GoogleCloud_11July2023.jpg';
import certFlutterMaterial from '../assets/certificates/MaterialComponentsForFlutterBasics_GoogleCloud_18April2023.jpg';
import certDatabaseDesign from '../assets/certificates/RelationalDatabaseDesign_UniversityOfColoradoBoulder_10April2023.jpg';
import certAIForEveryone from '../assets/certificates/AIForEveryone_DeepLearningAI_9April2023.jpg';
import certGettingStartedFlutter from '../assets/certificates/GettingStartedWithFlutterDevelopment_GoogleCloud_13March2023.jpg';
import certProjectManagement from '../assets/certificates/FoundationsOfProjectManagement_Google_4March2023.jpg';

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
    title: "Databases & Cloud",
    items: ["MongoDB", "MySQL", "PostgreSQL", "Firebase", "Supabase", "AWS S3"],
  },
  {
    title: "Tools & Architectures",
    items: ["Git/GitHub", "Docker", "CI/CD (GitHub Actions)", "REST", "Bloc", "Provider", "MVC / MVVM"],
  }
]

// Icon keys map to react-icons/si components in src/utils/icons.js —
// add a new key there whenever you add a new tool/tech here.
export const toolIcons = [
  "flutter", "dart", "react", "nodejs", "firebase", "mongodb",
  "kotlin", "androidstudio", "figma", "postman", "git", "jira",
]

export const experience = [
  {
    org: "PentaLoop",
    role: "Associate Software Engineer / Team Lead",
    period: "Oct 2024 – Present",
    stack: "Flutter, React.js, Node.js, Express.js, Firebase, AWS S3, Zego Cloud, Github Actions",
    points: [
      "Manage client communication, sprint planning, and task delegation for a cross-functional team of 5 engineers.",
      "Spearheaded standard code review practices and set up Git flow strategies, reducing production hotfixes by 40%.",
      "Delivered a Tinder-style dating app (Meet9ja) with advanced real-time audio/video calls, geolocated matching, and in-app monetization."
    ],
  },
  {
    org: "PentaLoop",
    role: "Intern Flutter Developer",
    period: "Jun 2024 – Sep 2024",
    stack: "Flutter, Dart, Provider, Hive, RESTful APIs, Git/GitHub",
    points: [
      "Built offline-first data caching capabilities using Hive DB, ensuring reliable app states under poor connectivity.",
      "Integrated complex background geolocation tracking and offline map caching for outdoor rescue/safety operations.",
      "Collaborated with UI/UX designers to translate Figma design tokens into modular, high-fidelity Flutter widgets."
    ],
  },
  {
    org: "Code & Cognition",
    role: "Mobile App Developer (Part-Time)",
    period: "Jan 2023 – Mar 2024",
    stack: "Flutter, Dart, Firebase, Android Studio, Push Notifications, TFLite",
    points: [
      "Developed and maintained mobile safety application features including background gesture detection and real-time location sharing.",
      "Integrated lightweight AI model engines (TensorFlow Lite) directly on-device for real-time facial recognition.",
      "Optimized app bundles and load performance, cutting Google Play Console crash rate reports down to under 0.8%."
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

// Each certification is sorted from latest to oldest
export const certifications = [
  {
    title: "Intermediate Python",
    issuer: "DataCamp",
    date: "Aug 2025",
    image: certIntermediatePython,
  },
  {
    title: "Understanding Cloud Computing",
    issuer: "DataCamp",
    date: "Feb 2025",
    image: certCloudComputing,
  },
  {
    title: "Introduction to Python",
    issuer: "DataCamp",
    date: "Jan 2025",
    image: certIntroPython,
  },
  {
    title: "Communication in the 21st Century Workspace",
    issuer: "UC Irvine Division of Continuing Education · Coursera",
    date: "Jan 2024",
    image: certCommunication,
  },
  {
    title: "What is Data Science",
    issuer: "IBM · Coursera",
    date: "Jan 2024",
    image: certDataScience,
  },
  {
    title: "Introduction to Dart",
    issuer: "Google Cloud · Coursera",
    date: "Jul 2023",
    image: certIntroDart,
  },
  {
    title: "Material Components for Flutter Basics",
    issuer: "Google Cloud · Coursera",
    date: "Apr 2023",
    image: certFlutterMaterial,
  },
  {
    title: "Relational Database Design",
    issuer: "University of Colorado Boulder · Coursera",
    date: "Apr 2023",
    image: certDatabaseDesign,
  },
  {
    title: "AI For Everyone",
    issuer: "DeepLearning.AI · Coursera",
    date: "Apr 2023",
    image: certAIForEveryone,
  },
  {
    title: "Getting Started with Flutter Development",
    issuer: "Google Cloud · Coursera",
    date: "Mar 2023",
    image: certGettingStartedFlutter,
  },
  {
    title: "Foundations of Project Management",
    issuer: "Google · Coursera",
    date: "Mar 2023",
    image: certProjectManagement,
  },
]
