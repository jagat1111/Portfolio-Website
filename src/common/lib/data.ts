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
    title: 'Book Donation System',
    description: `A platform for users to donate and request books, promoting a culture of sharing and sustainability.`,
    tags: ['React', 'Javascript', 'HTML', 'CSS', 'Nodejs'],
    imageUrl: auditMasterImg,
    link: 'https://github.com/jagat1111/Book-Donation-System',
  },
  {
    title: 'Packet Sniffer',
    description:
      'A packet sniffer is a tool that captures and analyzes network traffic, allowing users to monitor data packets transmitted over a network.',
    tags: ['python', 'socket programming'],
    imageUrl: accountingImg,
    link: 'https://github.com/jagat1111/Packet-Sniffer',
  },
  {
    title: 'Hotel Management System',
    description:
      'A web application for managing hotel operations, including room bookings, customer management, and billing.',
    tags: ["React", "Javascript", "HTML", "CSS", "Nodejs"],
    imageUrl: filedriveImg,
    link: 'https://github.com/jagat1111/hotel-webpage',
  },
] as const;

export const skillsData = [
  ['WireShark', 'https://static-00.iconduck.com/assets.00/wireshark-alt-icon-2048x2048-4ex8a9zk.png'],
  ['BurpSuite', 'https://tryhackme-images.s3.amazonaws.com/room-icons/14daecc96c42994352f7c244b08335cf.png'],
  ['MySQL', 'svgs/MySQL.svg'],
  ['MongoDB', 'svgs/mongodb-original.svg'],
  ['HTML', 'svgs/file-type-html.svg'],
  ['CSS', 'svgs/file-type-css.svg'],
  ['JavaScript', 'svgs/javascript-js.svg'],
  ['Git', 'svgs/git.svg'],
  ['GitHub', 'svgs/github.svg'],
  ['React', 'svgs/react.svg'],
  ['Node.js', 'svgs/node-js.svg'],
  ['Express', 'svgs/express-original.svg'],
  ['Tailwind', 'svgs/tailwind-css.svg'],
  ['Framer', 'svgs/framer.svg'],
  ['Shadcn', 'svgs/shadcnui.svg'],
  ['Headless', 'svgs/brand-headlessui.svg'],
  ['Redux', 'svgs/redux-original.svg'],
  ['Prisma', 'svgs/file-type-light-prisma.svg'],
  ['PostgreSQL', 'svgs/postgresql.svg'],
  ['Tanstack Query', 'svgs/react-query-seeklogo.svg'],
  ['Tanstack Table', 'svgs/db-table-svgrepo-com.svg'],
  ['Cloudinary', 'svgs/cloudinary.svg'],
  ['Golang', 'svgs/golang.svg'],
  ['Docker', 'svgs/Docker.svg'],
  ['Clerk', 'svgs/clerk.svg'],
  ['Axios', 'svgs/axios.svg'],
  ['Sass', 'svgs/Sass.svg'],
  ['', 'svgs/etc.svg'],
] as const;
