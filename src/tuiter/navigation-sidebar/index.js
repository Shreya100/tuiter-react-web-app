import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";


const NavigationSidebar = () => {
 const { currentUser } = useSelector((state) => state.user);
 const { pathname } = useLocation();
 const [ignore, tuiter, active] = pathname.split("/");
 const links = ["home",     "explore",   "notifications", "messages", "bookmarks", "lists","more"];
 return (
  <div className="list-group">
    {!currentUser && (
      <>
        <Link to="/tuiter/login" className="list-group-item">
          Login
        </Link>
        <Link to="/tuiter/register" className="list-group-item">
          Register
        </Link>
      </>
    )}
    {currentUser && (
      <Link to="/tuiter/profile" className="list-group-item">
        Profile
      </Link>
    )}
    {links.map((link) => (
      <Link
        key={link}
        to={`/tuiter/${link}`}
        className={`list-group-item text-capitalize ${active === link ? "active" : ""}`}
      >
        {link}
      </Link>
    ))}
  </div>
);
};
export default NavigationSidebar;