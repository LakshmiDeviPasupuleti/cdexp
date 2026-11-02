import React from "react";

function Navbar() {
  return (
    <nav>
      {/* Navigation links */}
      <h2>Student Management System</h2>
      <a href="/">Home</a>
      <a href="/students">Students</a>
      <a href="/about">About</a>
    </nav>
  );
}

export default Navbar;