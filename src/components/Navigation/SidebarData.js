import React from 'react';
import * as FaIcons from 'react-icons/fa';

import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <IoIcons.IoIosPaper />
  },
  {
    title: 'Personal Projects',
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
        title: 'Stories from the Sea',
        path: '/projects/storiesFromTheSea',
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
     
    ]
  },
  {
    title: 'About',
    path: '/reyad_abedin/about',
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
