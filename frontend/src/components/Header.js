import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

import logo from "../assets/logo.png";
import add from "../assets/add.png";

export default function Header() {
  return (
    <header id="main-header">
      <div className="header-content">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <Link to="/new">
          <img src={add} alt="add" />
        </Link>
      </div>
    </header>
  );
}
