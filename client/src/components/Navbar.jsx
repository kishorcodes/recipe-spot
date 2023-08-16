import React from "react";
import logo from "../assets/images/logo.png";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <div className="menu-icon">
        <span className="fas fa-bars"></span>
      </div>
      <a href="/">
        <div className="logo flex align-items-center">
          <img height="50" src={logo} alt="" />
          <span>Recipe Spot</span>
        </div>
      </a>
      <div className="nav-items">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/categories">Categories</a>
        </li>
        <li>
          <a
            href="/recipes/filter/all"
            onClick={() =>
              navigate(`/recipes/filter/all`, {
                state: {
                  apiURL: `/api/recipes/filter/latest`,
                  title: `Explore All Recipes`,
                },
              })
            }
          >
            All Recipes
          </a>
        </li>
        <li>
          <a href="/submit">Submit</a>
        </li>
        <li>
          <a href="/aboutus">About Us</a>
        </li>
      </div>
      <div className="search-icon">
        <span className="fas fa-search"></span>
      </div>
      <div className="cancel-icon">
        <span className="fas fa-times"></span>
      </div>
      <form action="/recipes/filter/search" method="POST">
        <input
          type="search"
          className="search-data"
          placeholder="Search"
          name="searchTerm"
          required
        />
        <button type="submit" className="fas fa-search"></button>
      </form>
    </nav>
  );
};

export default Navbar;
