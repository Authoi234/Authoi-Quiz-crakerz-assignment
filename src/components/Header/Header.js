import React from 'react';
import './Header.css'
import { Link, NavLink } from 'react-router-dom';
import { Container, Image, Nav, NavDropdown, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <nav>
            <Navbar collapseOnSelect expand="lg" className="bg-red-300">
                <Container>
                    <Navbar.Brand className='d-flex'>
                    <Image className='w-16' src={require('../../images/logo.png')} fluid />
                        <h1 className='ps-3 text-white'>Authoi Quiz</h1></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                            <NavLink to='/' className={({ isActive }) => isActive ? "text-zinc-200 scale-110 decoration-transparent" : "text-white decoration-transparent"}><li className='text-2xl list-none pe-4'>Home</li></NavLink>
                            <NavLink to='statistics' className={({ isActive }) => isActive ? "text-zinc-200 scale-110 decoration-transparent" : "text-white decoration-transparent"}><li className='text-2xl list-none pe-4'>Statistics</li></NavLink>
                            <NavLink to='blogs' className={({ isActive }) => isActive ? "text-zinc-200 scale-110 decoration-transparent" : "text-white decoration-transparent"}><li className='text-2xl list-none pe-4'>Blog</li></NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </nav>
    );
};

export default Header;