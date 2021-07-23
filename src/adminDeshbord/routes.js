import Dashboard from "./views/Dashboard";
import About from "./views/About/About";
import UserPage from "./views/UserPage";
import TableList from "./views/TableList";



var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "design_app",
    component: Dashboard,
    layout: "/admin",
  },


  {
    path: "/About",
    name: "About",
    icon: "ui-1_bell-53",
    component: About,
    layout: "/admin",
  },
  {
    path: "/user-page",
    name: "User Profile",
    icon: "users_single-02",
    component: UserPage,
    layout: "/admin",
  },
  {
    path: "/extended-tables",
    name: "Table List",
    icon: "files_paper",
    component: TableList,
    layout: "/admin",
  },

  
];
export default dashRoutes;
