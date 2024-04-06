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
  flutter,
  firebase,
  javascrip,
  csharp,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
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
    name: "Redux Toolkit",
    icon: redux,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
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
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Your commitment to developing stellar websites that truly resonate with our clients hasn't gone unnoticed",
    name: "ZH Madlala",
    designation: "Programmer",
    company: "Suicide Squad",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Mncedisi, your client-centric mindset is a breath of fresh air, and your hard work doesn't go unnoticed, shoutout to you!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
