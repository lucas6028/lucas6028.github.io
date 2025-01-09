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
  nodejs,
  mongodb,
  git,
  daily_song,
  cg,
  threejs,
  snake,
  ut,
  ttsh,
  cpp,
  java,
  nextjs,
  python,
} from "../assets";

export const navLinks = [
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

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
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

const technologies = [
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
    name: "CPP",
    icon: cpp,
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
    name: "NextJS",
    icon: nextjs,
  },
  {
    name: "Python",
    icon: python,
  },
];

const experiences = [
  // {
  //   title: "React.js Developer",
  //   company_name: "Starbucks",
  //   icon: starbucks,
  //   iconBg: "#383E56",
  //   date: "March 2020 - April 2021",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  {
    title: "High School",
    company_name: "Taipei Municipal Datong High School",
    icon: ttsh,
    iconBg: "#ffffff",
    date: "Sep 2020 - Jun 2023",
    points: [
      "Director of the school's baseball club, responsible for organizing and leading club activities.",
      "Got a good grade in the C++ programming language.",
    ],
  },
  {
    title: "Banchelor",
    company_name: "University of Taipei",
    icon: ut,
    iconBg: "#ffffff",
    date: "Sep 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "TIGHT! Tight, tight, YEAH! Oh, blue, yellow, pink. Whatever, man. Just keep bringing me that. This guy can cook!",
    name: "Tuco Salamanca",
    designation: "Owner",
    company: "Cantina",
    image:
      "https://cdnb.artstation.com/p/assets/images/images/038/225/415/large/ninyorch-tuco-tr-0021.jpg?1622525440",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Daily Song",
    description:
      "Display top tracks, recommend tracks, and daily challenge. Listen to music we recommend to you.",
    tags: [
      {
        name: "TypeScript",
        color: "blue-text-gradient",
      },
      {
        name: "SpotifyAPI",
        color: "green-text-gradient",
      },
      {
        name: "NextJS",
        color: "pink-text-gradient",
      },
    ],
    image: daily_song,
    source_code_link: "https://github.com/lucas6028/daily-song",
  },
  {
    name: "Snake Game",
    description:
      "This is a classic Snake game implemented in Java using Swing for the graphical user interface. The game supports both single-player and two-player modes.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "JFrame",
        color: "green-text-gradient",
      },
      {
        name: "Graphic2D",
        color: "pink-text-gradient",
      },
    ],
    image: snake,
    source_code_link: "https://github.com/lucas6028/snake-game",
  },
  {
    name: "Computer Graphics",
    description:
      "The project is a C++ program that uses OpenGL and the GLUI library to create a graphical user interface for rendering and manipulating 3D objects.",
    tags: [
      {
        name: "C++",
        color: "blue-text-gradient",
      },
      {
        name: "OpenGL",
        color: "green-text-gradient",
      },
      {
        name: "GLUT",
        color: "pink-text-gradient",
      },
    ],
    image: cg,
    source_code_link: "https://github.com/lucas6028/computer-graphics",
  },
];

export { services, technologies, experiences, testimonials, projects };
