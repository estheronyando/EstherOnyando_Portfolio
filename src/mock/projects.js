import { BACKEND_SKILLS, FRONTEND_SKILLS } from './tech-skills';

export const PROJECT_CATEGORY = {
  ALL: 'all',
  FULL_STACK: 'full-stack',
  OPEN_SOURCE: 'open-source',
};

export const TABS = [
  {
    label: 'All',
    value: PROJECT_CATEGORY.ALL,
    icon: 'fluent:tab-desktop-20-regular',
  },
  {
    label: 'Full Stack',
    value: PROJECT_CATEGORY.FULL_STACK,
    icon: 'bx:code-block',
  },
  {
    label: 'Open Source',
    value: PROJECT_CATEGORY.OPEN_SOURCE,
    icon: 'fluent-mdl2:open-source',
  },
];

const getSkillByLabel = (skills, techLabel) => skills.find(({ label }) => label === techLabel);

export const PROJECTS = [
  
  // {
  //   imgSrc: 'https://images2.imgbox.com/ad/94/w5IP0ZQz_o.png',
  //   title: 'Acteria.com - Security Compliance Tool',
  //   techIcons: [
  //     getSkillByLabel(FRONTEND_SKILLS, 'HTML'),
  //     getSkillByLabel(FRONTEND_SKILLS, 'CSS'),
  //     getSkillByLabel(FRONTEND_SKILLS, 'React.js'),
  //     getSkillByLabel(FRONTEND_SKILLS, 'Material UI (mui)'),
  //     getSkillByLabel(FRONTEND_SKILLS, 'Redux'),
  //     getSkillByLabel(BACKEND_SKILLS, 'Node.js'),
  //     getSkillByLabel(BACKEND_SKILLS, 'PostgreSQL'),
  //   ],
  //   description: `Unified Regulations Simplified Compliance tool. Acteria Strengthens the Governance Over Regulations, And Helps Organizations Achieve Compliance Easily.`,
  //   repoLink: '',
  //   sourceLink: 'https://acteria.com',
  //   category: [PROJECT_CATEGORY.FULL_STACK],
  // },
  {
    imgSrc: 'https://i.postimg.cc/NM2vgnwK/Jumia.png',
    title: 'Jumia Clone - E-Commerce Project',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'HTML'),
      getSkillByLabel(FRONTEND_SKILLS, 'CSS'),
      getSkillByLabel(FRONTEND_SKILLS, 'React.js'),
      getSkillByLabel(FRONTEND_SKILLS, 'Material UI (mui)'),
      getSkillByLabel(FRONTEND_SKILLS, 'Redux'),
      getSkillByLabel(BACKEND_SKILLS, 'Node.js'),
      getSkillByLabel(BACKEND_SKILLS, 'Mongodb'),
    ],
    description:
      'Jumia Clone is done with top-notch features for the entrepreneur startups like Jumia. It is build with React Js, Node Js.',
    repoLink: 'https://github.com/estheronyando/JumiaClone.git',
    sourceLink: 'https://jumia-eta.vercel.app/',
    category: [PROJECT_CATEGORY.FULL_STACK, PROJECT_CATEGORY.OPEN_SOURCE],
  },
  {
    imgSrc: 'https://i.postimg.cc/xdMcGZSM/My-Portfolio.png',
    title: 'Developer Portfolio',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'HTML'),
      getSkillByLabel(FRONTEND_SKILLS, 'CSS'),
      getSkillByLabel(FRONTEND_SKILLS, 'Tailwind CSS'),
      getSkillByLabel(FRONTEND_SKILLS, 'Next.js'),
    ],
    description:
      'A sleek and timeless modern portfolio designed for anyone who wishes to showcase themselves as a skilled software developer. This portfolio is crafted with utmost versatility, utilizing Tailwind CSS and Next.js, allowing for seamless customization.',
    repoLink: 'https://github.com/estheronyando/Portfolio.git',
    sourceLink: 'https://estheronyandoportfolio.onrender.com/',
    category: [PROJECT_CATEGORY.OPEN_SOURCE],
  },
  {
    imgSrc: 'https://i.postimg.cc/c4c7wXSv/Yolomy1.png',
    title: 'Yolomy Boutique  - Small Scale-ECommerce App',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'HTML'),
      getSkillByLabel(FRONTEND_SKILLS, 'CSS'),
      getSkillByLabel(FRONTEND_SKILLS, 'Javascript'),
      getSkillByLabel(FRONTEND_SKILLS, 'Bootstrap'),
      getSkillByLabel(BACKEND_SKILLS, 'Node.js'),
      getSkillByLabel(BACKEND_SKILLS, 'Mongodb'),
      getSkillByLabel(FRONTEND_SKILLS, 'React.js'),
      {
        label: 'Node.js',
        icon: 'logos:java',
      },
      getSkillByLabel(BACKEND_SKILLS, 'Mongodb'),
    ],
    description:
      'This app serves as a digital shopping destination for fashion enthusiasts, offering a wide array of trendy and stylish clothing options. Built with a user-friendly interface and powered by the latest technologies, the app provides a seamless and enjoyable shopping experience for customers. ',
    repoLink: 'https://github.com/estheronyando/ecommercefrontend.git',
    sourceLink: 'https://ecommercefrontend-eight.vercel.app/',
    category: [PROJECT_CATEGORY.FULL_STACK, PROJECT_CATEGORY.OPEN_SOURCE],
  },

  // {
  //   imgSrc: 'https://images2.imgbox.com/9d/d0/zdDVFtFN_o.png',
  //   title: 'Netflix Clone - TMDB API Project',
  //   techIcons: [
  //     getSkillByLabel(FRONTEND_SKILLS, 'HTML'),
  //     getSkillByLabel(FRONTEND_SKILLS, 'CSS'),
  //     getSkillByLabel(FRONTEND_SKILLS, 'React.js'),
  //     getSkillByLabel(BACKEND_SKILLS, 'REST Api'),
  //   ],
  //   description: 'Netflix clone using react Js. Proving movies details using TMDB API.',
  //   repoLink: 'https://github.com/dhavalcode/netflix-clone',
  //   sourceLink: 'https://netflix-clone-by-dhaval.web.app/',
  //   category: [PROJECT_CATEGORY.OPEN_SOURCE],
  // },
];
