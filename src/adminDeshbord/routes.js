import Dashboard from "./views/Deshboard/Dashboard";
import About from "./views/About/About";
import Projects from "./views/Projects/Projects";
import ProjectSetting from "./views/ProjectSetting/ProjectSetting";
// React icon
import { IoQrCodeSharp } from "react-icons/io5";
import { FcAbout } from "react-icons/fc";
import { AiFillProject } from "react-icons/ai";
import { GrSettingsOption } from "react-icons/gr";

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: <IoQrCodeSharp />,
    component: Dashboard,
    layout: "/admin",
  },

  {
    path: "/About",
    name: "About",
    icon: <FcAbout />,
    component: About,
    layout: "/admin",
  },

 

  {
    path: "/projects",
    name: "Projects",
    icon: <AiFillProject />,
    component: Projects,
    layout: "/admin",
  },
  {
    path: "/ProjectSetting",
    name: "Projects Setting",
    icon: <GrSettingsOption/>,
    component: ProjectSetting,
    layout: "/admin",
  },

 
 
];
export default dashRoutes;
