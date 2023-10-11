import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import { FaCalendar } from 'react-icons/fa'


 
export const Sidebar = [
  {
    title:"Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
  }
  ,
  {
    
    title: "Menus",
    path: "/about-us",
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Our Aim",
        path: "/about-us/aim",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Our Vision",
        path: "/about-us/vision",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "News",
    path: "/news",
    icon: <IoIcons.IoIosPaper />,
  },
  {
    title: "Contact",
    path: "/contact",
    icon: <FaIcons.FaPhone />,
  },
  
  {
    title: "Sign In",
    path: "/signin",
    icon: <FaCalendar/>,
  },
];