import React from 'react';
import './Header.css'; // Import CSS file for styling
// import  './Allstyles.css'
import SearchBar from './SearchBar';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="header-title">Stock Tracker</h1>  
      </div>

      <div className="header-container">
      <SearchBar></SearchBar>
      </div>
    </header>
  );
};

export default Header;
