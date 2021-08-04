import "./Header.css";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { RiPoliceCarFill } from "react-icons/ri";
import { FaBuilding, FaHome } from "react-icons/fa";
import React from "react";

const Header = () => {
  return (
    <div className="header-wrapper">
      <Navbar className="navbar" expand="lg">
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link className="link" to="/mks-dashboard">
              <FaHome id="icon" size={50} />
            </Link>
            <Link className="link" to="/mks-dashboard/vehicles">
              <RiPoliceCarFill id="icon" size={50} />
            </Link>
            <Link className="link" to="/mks-dashboard/buildings">
              <FaBuilding id="icon" size={50} />
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
