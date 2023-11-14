import React from 'react';
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import "./Nav.css";

const Nav = ({ handleInputChange, query }) => {
  return (
    <nav className="navbar">
      <h1>ART GALLERY</h1>
      <div className="nav-container">
        <input
          className="search-input"
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="Enter your search."
        />
      </div>
      <div className="profile-container">
        
          <FiHeart className="nav-icons" />
        
       
          <AiOutlineShoppingCart className="nav-icons" />
        
        
          <AiOutlineUserAdd className="nav-icons" />
       
      </div>
    </nav>
  );
};

export default Nav;
