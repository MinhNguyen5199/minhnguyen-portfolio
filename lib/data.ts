import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "../public/corpcomment.png";
import rmtdevImg from "../public/rmtdev.png";
import lms from "../public/lms.png";
import sportrent from "../public/sportrent.png";
import wordanalyticsImg from "../public/rmtdev.png";
import portfolio from "../public/portfolio.png";
import ecommerce from "../public/ecommerce.png";
import hotel from "../public/hotel.png";

export const info =[
  {
    1: "Minh Nguyen",
    2: "NAME: ",
  },
  {
    1: "05 January 1999",
    2: "DATE OF BIRTH: ",
  },
  {
    1: "VietNam",
    2: "NATIONALITY: ",
  },
  {
    1: "Calgary, AB, Canada",
    2: "ADDRESS: ",
  },
  {
    1: "587-500-4508",
    2: "PHONE: ",
  },
  {
    1: "minhincanada@gmail.com",
    2: "EMAIL: ",
  },
] as const;

export const links = [
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Full Stack Developer - Remote Internship",
    location: "Egeez | Toronto, Ontario",
    description:
      "• Analyzed requirements and translated them into technical specifications, resulting in the successful development of an application. • Integrated client-side data visualization libraries to present complex data interactively and intuitively, leading to a 25% increase in user engagement with data-driven content. • Reduced the website's loading time by 50% by optimizing image assets and implementing lazy loading techniques, leading to improved user experience and a 15% decrease in bounce rate. • Participated in customer feedback sessions, implementing key UI/UX improvements with React and Tailwind that resulted in a 20% increase in user engagement.Tech used: MongoDB, ExpressJS, React, NodeJS, TypeScript, Google Cloud, WordPress",
    icon: React.createElement(CgWorkAlt),
    date: "08/2023 - 12/2023",
  },
  {
    title: "Freelance Web Developer",
    location: "Sports Rent | Calgary, Alberta",
    description:
      "• Conducted detailed discussions with the local store owner to align project goals and create wireframes, mock-ups, and establish an optimal site structure, layout, and user flow. • Implemented SEO best practices to enhance online visibility and accessibility, leading to a 15% increase in organic traffic and improving search engine ranking positions.• Integrated Google Analytics to track user behavior, leading to data-driven design improvements that increased user retention by 25%.• Developed responsive and visually appealing pages, resulting in a 20% increase in user engagement.Tech used: React, Java Spring Boot, MySQL, Hibernate, Maven, WordPress, Heroku",
    icon: React.createElement(CgWorkAlt),
    date: "05/2023 - 06/2023",
  },
  {
    title: "Back End Developer - Remote Contract Part-time",
    location: "Crunchbase | Burnaby, British Columbia",
    description:
    "• Developed modular, reusable Django components libraries, leading to a significant 30% decrease in development time across various projects. • Wrote over 100 robust unit tests for new functionalities, ensuring code quality, early defect detection, and efficient collaboration within the development team. • Developed a RESTful API that facilitated integration with 15 third-party services, resulting in expanded business partnerships and an impressive 20% increase in revenue streams. • Optimized SQL queries to reduce data retrieval time by 30%, resulting in improved user experience and reduced CPU time.Tech used: Python, Django, Docker, Kubernetes, Redis, PostgreSQL, GraphQL, Google Cloud",
    skills: "Python, Django, Docker, Kubernetes, Redis, PostgreSQL, GraphQL, Google Cloud",
    icon: React.createElement(CgWorkAlt),
    date: "01/2023 - 4/2023",
  }
] as const;

export const projectsData = [
  {
    title: "E-commerce with Next.js",
    description:
    "As the sole full-stack developer, I handle all features such as CRUD operations, pagination, sorting, filtering, search, authentication, authorization, payment integration, advanced image uploading, and various other sophisticated features.",
    demoLink: "http://35.203.74.76/",
    githubCode: "https://github.com/MinhNguyen5199/ecommerce",
    tags: ["TypeScript", "Next.js", "Tailwind", "Prisma", "PostgreSQL", "GraphQL", "Apollo", "Docker", "Kubernetes", "Pothos", "Clodinary", "Stripe"],
    imageUrl: ecommerce,
  },
  {
    title: "Hotel Booking MERN Stack",
    description:
      "I've meticulously developed a comprehensive hotel booking website that fulfills every requirement of a real-world application. Offering a seamless blend of sleek design and robust functionality, I am committed to delivering excellence in every aspect of the user experience.",
    demoLink: "https://bookingapp-y5aj.onrender.com/",
    githubCode: "https://github.com/MinhNguyen5199/BookingApp",
      tags: ["MongoDB", "Node.js", "Express.js", "React", "Stripe", "Cloudinary","TypeScript"],
    imageUrl: hotel,
  },
  {
    title: "Library Management System",
    description:
      "A library management system built with Angular, MaterialUI, and .NET 8, hosted on Google App Engine with Google Cloud SQL Server. Utilizing DBContext and Migration for database management, it offers seamless library operations and user-friendly interface.",
    demoLink: "https://angular-app-orcin.vercel.app/login",
    githubCode: "https://github.com/MinhNguyen5199/AngularApp",
      tags: ["Angular", "MaterialUI", ".NET 8", "Google Cloud SQl server", "Google App Engine", "DBContext", "Migration"],
    imageUrl: lms,
  },
] as const;

export const skillsData = [
  {
    type: "Front-End",
    list: [
      {
        name: 'HTML',
        icon: require('./skills/html.svg'),
      },
      {
        name: 'CSS',
        icon: require('./skills/css.svg'),
      },
      {
        name: 'JavaScript',
        icon: require('./skills/javascript.svg'),
      },
      {
        name: 'TypeScript',
        icon: require('./skills/typescript.svg'),
      },
      {
        name: 'React',
        icon: require('./skills/react.svg'),
      },
      {
        name: 'Redux',
        icon: require('./skills/redux.svg'),
      },
      {
        name: 'Next.js',
        icon: require('./skills/nextjs.svg'),
      },
      {
        name: 'Tailwind',
        icon: require('./skills/tailwindcss.svg'),
      },
      {
        name: 'Framer Motion',
        icon: require('./skills/framer.svg'),
      },
    ],
  },
  {
    type: "Back-End",
    list: [
      {
        name: 'Node.js',
        icon: require('./skills/nodejs.svg'),
      },
      {
        name: 'Express',
        icon: require('./skills/express.svg'),
      },
      {
        name: 'Python',
        icon: require('./skills/python.svg'),
      },
      {
        name: 'java',
        icon: require('./skills/java.svg'),
      },
    ],
  },
  {
    type: "Database and HostPlatform",
    list: [
      {
        name: 'MongoDB',
        icon: require('./skills/mongodb.svg'),
      },
      {
        name: 'PostgreSQL',
        icon: require('./skills/postgresql.svg'),
      },
      {
        name: 'OracleSql',
        icon: require('./skills/oraclesql.svg'),
      },
      {
        name: 'Prisma',
        icon: require('./skills/prisma.svg'),
      },
      {
        name: 'GraphQL',
        icon: require('./skills/graphql.svg'),
      },
      {
        name: 'Apollo',
        icon: require('./skills/apollo.svg'),
      },
      {
        name: 'Firebase',
        icon: require('./skills/firebase.svg'),
      },
      {
        name: 'Heroku',
        icon: require('./skills/heroku.svg'),
      },
      {
        name: 'Github pages',
        icon: require('./skills/github.svg'),
      },
      {
        name: 'Vercel',
        icon: require('./skills/vercel.svg'),
      },
      {
        name: 'Pothos',
        icon: require('./skills/pothos.svg'),
      },
    ],
  },
  {
    type: 'Test, Project management and containerization',
    list: [
      {
        name: 'Mocha',
        icon: require('./skills/mocha.svg'),
      },
      {
        name: 'GIT',
        icon: require('./skills/git.svg'),
      },
      {
        name: 'Docker',
        icon: require('./skills/docker.svg'),
      },
      {
        name: 'Kubernetes',
        icon: require('./skills/kubernetes.svg'),
      },
    ]
  }
] as const;