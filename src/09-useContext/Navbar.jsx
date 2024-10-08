import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowNav((s) => !s)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link className="navbar-brand" to="/">
            Home
          </Link>

          <div
            className={`${showNav ? "show" : ""} collapse navbar-collapse`}
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                to="/"
              >
                Home
              </NavLink>

              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                to="/about"
              >
                About
              </NavLink>

              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                to="/login"
              >
                Login
              </NavLink>

              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                to="/todo"
              >
                Todos
              </NavLink>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
