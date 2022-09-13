import React from "react";

function NavBar(props) {
  return (
    <div>
      <header>
        <nav className="App-header">
          <a href="/" className="navbar-brand">
            Employee Management System
          </a>
          <a href="/" className="navbar-brand">
            Home
          </a>
        </nav>
      </header>
    </div>
  );
}

export default NavBar;
