import React from 'react';

import campwithusImg from '@/../public/images/camp-with-us.png';
import carcatalogImg from '@/../public/images/car-catalog.png';
import filedriveImg from '@/../public/images/file-drive.png';
import projectmanagementImg from '@/../public/images/project-management.png';
import reactfoodImg from '@/../public/images/react-food.png';
import auditMasterImg from '@/../public/images/audit-master.png';
import accountingImg from '@/../public/images/accounting.jpg';
import { BookIcon, BriefcaseBusinessIcon } from 'lucide-react';

export const links = [
  {
    name: 'Home',
    id: 'home',
  },
  {
    name: 'About',
    id: 'about',
  },
  {
    name: 'Projects',
    id: 'projects',
  },
  {
    name: 'Education',
    id: 'Education',
  },
  {
    name: 'Skills',
    id: 'skills',
  },
  {
    name: 'Certificate',
    id: 'Certificate',
  },
  {
    name: 'Contact',
    id: 'contact',
  },
] as const;

export const images = {
  campwithusImg,
  carcatalogImg,
  filedriveImg,
  projectmanagementImg,
  reactfoodImg,
};

export const projectsData = [
  {
    title: 'Food Delivery Website',
    description: `A food delivery website that allows users to order food online from various restaurants.`,
    tags: ['React', 'Javascript', 'HTML', 'CSS', 'Nodejs'],
    imageUrl: auditMasterImg,
    link: 'https://jatin-0307.github.io/food-delivery-website-reactjs/',
  },
  {
    title: 'Gemini Chatbot',
    description:
      'A chatbot that provides personalized responses to user queries using OpenAI API.',
    tags: ['TypeScript', 'React', 'AI SDK', 'Next.js', 'Shadcn/ui', 'Tailwind'],
    imageUrl: accountingImg,
    link: 'https://github.com/Jatin-0307/gemini-chatbot.git',
  },
  {
    title: 'Ecommerce Sales Dashboard',
    description:
      'A platform for decentralized file storage with robust user management.',
    tags: ["PowerBI", "Data Analysis", "Data Visualization"],
    imageUrl: filedriveImg,
    link: 'https://github.com/Jatin-0307/Ecommerce-Sales-Dashboard-using-power-BI.git',
  },
] as const;

export const skillsData = [
  ['JavaScript', '/svgs/javascript-js.svg'],
  ['TypeScript', '/svgs/typescript-icon.svg'],
  ['React', '/svgs/react.svg'],
  ['Next.js', '/svgs/nextjs.svg'],
  ['Node.js', '/svgs/node-js.svg'],
  ['Express', '/svgs/express-original.svg'],
  ['Tailwind', '/svgs/tailwind-css.svg'],
  ['Framer', '/svgs/framer.svg'],
  ['Shadcn', '/svgs/shadcnui.svg'],
  ['Headless', '/svgs/brand-headlessui.svg'],
  ['Redux', '/svgs/redux-original.svg'],
  ['Prisma', '/svgs/file-type-light-prisma.svg'],
  ['MongoDB', '/svgs/mongodb-original.svg'],
  ['PostgreSQL', '/svgs/postgresql.svg'],
  ['MySQL', '/svgs/MySQL.svg'],
  ['Tanstack Query', '/svgs/react-query-seeklogo.svg'],
  ['Tanstack Table', '/svgs/db-table-svgrepo-com.svg'],
  ['Cloudinary', '/svgs/cloudinary.svg'],
  ['Golang', '/svgs/golang.svg'],
  ['Docker', '/svgs/Docker.svg'],
  ['Clerk', '/svgs/clerk.svg'],
  ['Axios', '/svgs/axios.svg'],
  ['HTML', '/svgs/file-type-html.svg'],
  ['CSS', '/svgs/file-type-css.svg'],
  ['Sass', '/svgs/Sass.svg'],
  ['Git', '/svgs/git.svg'],
  ['GitHub', '/svgs/github.svg'],
  ['', '/svgs/etc.svg'],
] as const;
