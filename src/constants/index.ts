import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  player,
  java,
  school,
  sms,
  flutter,
  firebase,
  javascrip,
  csharp,
  website,
  software,
  data,
  madlala,
  mbutho,
  usern,
  python,
  scebi,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Website Developer",
    icon: website,
  },
  {
    title: "Software Developer",
    icon: software,
  },
  {
    title: "Database developer",
    icon: data,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences: TExperience[] = [
  {
    title: "Flutter Developer",
    companyName: "Flutter",
    icon: flutter,
    iconBg: "#383E56",
    date: "June 2023 - Present",
    points: [
      "Expertise in Flutter for cross-platform app development.",
      "Skilled in building beautiful UIs with Flutter.",
      "Proficient in Dart programming language for Flutter development.",
      "Experienced in leveraging Flutter's rich widget library.",
    ],
  },
  {
    title: "Firebase Cloud",
    companyName: "Firebase",
    icon: firebase,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Extensive experience utilizing Firebase for backend services.",
      "Proficient in Firebase for real-time database and authentication.",
      "Skilled in Firebase Cloud Firestore for scalable data storage.",
      "Experienced in Firebase Cloud Functions for serverless computing.",
    ],
  },
  {
    title: "JavaScript Developer",
    companyName: "JavaScript",
    icon: javascrip,
    iconBg: "#383E56",
    date: "Jul 2021 - Present",
    points: [
      "Proficient in JavaScript for frontend and backend development.",
      "Skilled in modern JavaScript frameworks like React and Vue.js.",
      "Experienced in using JavaScript for interactive web applications.",
      "Familiar with Node.js for building server-side applications.",
    ],
  },
  {
    title: "C# Developer",
    companyName: "C#",
    icon: csharp,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Proficient in C# for building robust desktop and web applications.",
      "Skilled in utilizing the .NET framework for C# development.",
      "Experienced in developing backend services with ASP.NET Core.",
      "Familiar with Unity for game development using C#.",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "Your passion for crafting exceptional software that not only meet but exceed their expectations is remarkable.",
    name: "TP Mbutho",
    designation: "Data Analyst",
    company: "Suicide Squad",
    image: mbutho,
  },
  {
    testimonial:
      "Your commitment to developing stellar websites that truly resonate with our clients hasn't gone unnoticed",
    name: "ZH Madlala",
    designation: "Programmer",
    company: "Suicide Squad",
    image: madlala,
  },
  {
    testimonial:
      "Mncedisi, your client-centric mindset is a breath of fresh air, and your hard work doesn't go unnoticed, shoutout to you!",
    name: "T Zungu",
    designation: "Programmer",
    company: "Suicide Squad",
    image: scebi,
  },
];

const projects: TProject[] = [
  {
    name: "SM System",
    description:
      "A powerful School Management System designed to streamline administrative tasks and enhance communication within educational institutions.",
    tags: [
      {
        name: "Dart",
        color: "blue-text-gradient",
      },
      {
        name: "Hive",
        color: "green-text-gradient",
      },
      {
        name: "Flutter",
        color: "pink-text-gradient",
      },
    ],
    image: sms,
    sourceCodeLink: "https://mncedisihlonzi.github.io/launching-soon/",
  },
  {
    name: "Lyric Galleria",
    description:
      "A dynamic web music player that brings your favorite tunes to life with just a click. Seamlessly search, play, and organize your music library with our intuitive interface.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJS",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: player,
    sourceCodeLink: "https://mncedisihlonzi.github.io/launching-soon/",
  },
  {
    name: "SHS Website",
    description:
      "School's innovative website, meticulously crafted to serve as the digital hub for Shengeza High School community, tailored to enhance the educational journey for the learners.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: school,
    sourceCodeLink: "https://shengez.co.za/",
  },
];

export { services, technologies, experiences, testimonials, projects };
