import React from 'react';
import { Link, NavLink } from 'react-router-dom'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'


const NavBars = ({user}) => {
    return (
        <Navbar collapseOnSelect expand="lg" id="header">
            <Navbar.Brand style={{"color": "orange"}} href="/home">Educational Site</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" id="toggle" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">


                </Nav>
                <Nav>
                    <Nav.Link href="/home">HOME</Nav.Link>
                    <Nav.Link href="/courses">COURSES</Nav.Link>
                    <Nav.Link href="/login">LOGIN</Nav.Link>
                    <Nav.Link href="/register">SIGNUP</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBars;