import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Projects',
    path: '/projects',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Projects1',
        path: '/projects/projects1',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Projects2',
        path: '/projects/projects2',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Projects3',
        path: '/projects/projects3',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Projects4',
        path: '/projects/projects4',
        icon: <IoIcons.IoIosPaper />
      }
      ,
      {
        title: 'Projects5',
        path: '/projects/projects5',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Works',
    path: '/works',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Works1',
        path: '/works/works1',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Works2',
        path: '/works/works2',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Works3',
        path: '/works/works3',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Bio',
    path: '/bio',
    icon: <FaIcons.FaCartPlus />
  },
  {
    title: 'Contact',
    path: '/contact',
    icon: <IoIcons.IoMdPeople />
  },
  {
    title: 'Print',
    path: '/print',
    icon: <FaIcons.FaEnvelopeOpenText />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

   
  },
  
];
