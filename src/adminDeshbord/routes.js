import Dashboard from "./views/Deshboard/Dashboard";
import About from "./views/About/About";
import UserPage from "./views/UserPage";
import Projects from "./views/Projects/Projects";

// React icon 
import { IoQrCodeSharp } from 'react-icons/io5';
import { FcAbout } from 'react-icons/fc';
import { AiFillProject } from 'react-icons/ai';




var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: <IoQrCodeSharp/>,
    component: Dashboard,
    layout: "/admin",
  },


  {
    path: "/About",
    name: "About",
    icon: <FcAbout/>,
    component: About,
    layout: "/admin",
  },
 
  {
    path: "/projects",
    name: "Projects",
    icon: <AiFillProject/>,
    component: Projects,
    layout: "/admin",
  },

  
];
export default dashRoutes;
