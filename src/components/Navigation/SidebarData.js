import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <IoIcons.IoIosPaper />
  },
  {
    title: 'Projects',
    path: '/',
   
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'In Search of Lost Tune',
        path: '/projects/In_Search_of_Lost_Tune',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'The Name of my City',
        path: '/projects/The_Name_of_my_City',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Dhaka',
        path: '/projects/dhaka',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Joldash',
        path: '/projects/Joldash',
        icon: <IoIcons.IoIosPaper />
      }
      ,
      {
        title: 'Counting the days',
        path: '/projects/Counting_the_days',
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
        title: 'Portfolio',
        path: '/works/portfolio',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Sonali Bag',
        path: '/works/sonali_bag',
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
    path: '/reyad_abedin/contract',
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
