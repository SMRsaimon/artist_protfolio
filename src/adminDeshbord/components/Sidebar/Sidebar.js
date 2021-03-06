import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import { Nav } from "reactstrap";

import PerfectScrollbar from "perfect-scrollbar";
import { FiLogOut } from "react-icons/fi";
import { signOut } from "../../LogIn/SignOut";

var ps;

function Sidebar(props) {
  const history = useHistory();
  const sidebar = React.useRef();

  const activeRoute = (routeName) => {
    return props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(sidebar.current, {
        suppressScrollX: true,
        suppressScrollY: false,
      });
    }
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
      }
    };
  });

  return (
    <div className="sidebar" data-color={props.backgroundColor}>
      <div className="logo">
        <a href="/" className="simple-text logo-normal" target="_blank">
          REYAD ABEDIN
        </a>
      </div>
      <div className="sidebar-wrapper" ref={sidebar}>
        <Nav>
          {props.routes.map((prop, key) => {
            if (prop.redirect) return null;
            return (
              <li
                className={
                  activeRoute(prop.layout + prop.path) +
                  (prop.pro ? " active active-pro" : "")
                }
                key={key}
              >
                <NavLink
                  to={prop.layout + prop.path}
                  className="nav-link"
                  activeClassName="active"
                >
                  <span>{prop.icon}</span>
                  {"  "}
                  <span>{prop.name}</span>
                </NavLink>
              </li>
            );
          })}
        </Nav>

        <div className="footer mt-5">
          <button
            onClick={() =>
             
              signOut(() => {
               
                history.push("/");

              })
            }
            className=" btn ms-3"
          >
            <FiLogOut /> Log Out
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
