import "./topbar.css";
import { Link, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";

function Topbar() {
  const [active, setActive] = useState(false);
  const { pathname } = useLocation();
  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", isActive);

    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  return (
    <div className={active || pathname !== "/" ? "topbar scroll" : "topbar"}>
      <div className="container">
        <div className="left">
          <Link className="Link" to={"/"}>
            <h1 className="lefth1">Admin Panel</h1>
          </Link>
        </div>
        <div className="right">
          <Link className="righth3 Link" to={"/"}>
            Create
          </Link>
          <Link className="righth3 Link" to={"/list"}>
            List
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
