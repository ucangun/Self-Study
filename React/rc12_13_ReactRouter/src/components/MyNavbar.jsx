import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import logo from "../img/logo.png";

const MyNavbar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink
              style={({ isActive }) => ({
                color: isActive && "red",
              })}
              className="nav-link"
              to=""
            >
              Home
            </NavLink>
            <NavLink
              style={({ isActive }) => ({
                fontSize: isActive && "30px",
              })}
              className="nav-link"
              to="/teacher"
            >
              Teacher
            </NavLink>
            <NavLink
              style={({ isActive }) => ({
                background: isActive && "aqua",
              })}
              className="nav-link"
              to="/courses"
            >
              Courses
            </NavLink>
            <NavLink
              style={({ isActive }) => ({
                border: isActive && "1px solid blue",
              })}
              className="nav-link"
              to="/contact"
            >
              Contact
            </NavLink>
            <NavLink
              style={({ isActive }) => ({
                color: isActive && "red",
              })}
              className="nav-link"
              to="/paths"
            >
              Paths
            </NavLink>
            <Nav.Link href="https://github.com/" target="_blank">
              Github
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
